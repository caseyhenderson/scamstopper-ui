const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const apiKey = process.env.API_KEY;
const projectId = process.env.PROJECT_ID;
const endpointId = process.env.ENDPOINT_ID;
const location = "us-central1";
const aiplatform = require("@google-cloud/aiplatform");
const {instance, prediction} =
  aiplatform.protos.google.cloud.aiplatform.v1.schema.predict;

require("dotenv").config();

const app = express();
app.use(cors());

const {PredictionServiceClient} = aiplatform.v1;
const clientOptions = {
  apiEndpoint: "us-central1-aiplatform.googleapis.com",
};
const client = new PredictionServiceClient(clientOptions);


app.options("/predict", cors()); // Add this to handle preflight OPTIONS request

app.post("/predict", async (req, res) => {
  const {text} = req.body;
  res.set("Access-Control-Allow-Origin", "*");

  // do we need to sub this out for aiplatform?
  // yes we do, ffs
  // eslint-disable-next-line max-len
  const endpoint = `projects/${projectId}/locations/${location}/endpoints/${endpointId}`;

  const predictionInstance =
    new instance.TextClassificationPredictionInstance({
      content: text,
    });
  const instanceValue = predictionInstance.toValue();

  const instances = [instanceValue];
  const request = {
    endpoint,
    instances,
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
  };
  const [response] = await client.predict(request);

  console.log(`\tDeployed model id : ${response.deployedModelId}\n\n`);

  let confidenceNotScam;
  let confidenceScam;
  const confidences = [];
  for (const predictionResultValue of response.predictions) {
    const predictionResult =
        prediction.ClassificationPredictionResult.fromValue(
            predictionResultValue,
        );

    for (const [i, label] of predictionResult.displayNames.entries()) {
      console.log(`\tDisplay name: ${label}`);
      // compare the two? Or send both
      // labels are scam and not scam
      // I think we want both there and compare in the frontend,
      // but can also do it here
      // as long as the frontend gets that data
      // then we can do conditional scamstopper response
      // we know that noScam and scam will be 0 and 1 respectively
      // (or should be)
      // and then we can compare them
      console.log(`\tConfidences: ${predictionResult.confidences[i]}`);
      confidences[i] = predictionResult.confidences[i];
      confidenceScam = predictionResult.confidences[0];
      confidenceNotScam = predictionResult.confidences[1];

      console.log(`\tIDs: ${predictionResult.ids[i]}\n\n`);
    }
  }
  console.log("SCAM INDICATION CONFIDENCE: " + confidenceScam +
  "NOT_SCAM CONFIDENCE: "+confidenceNotScam);
  confidenceScam = (confidenceScam*100).toFixed(2);
  confidenceNotScam = (confidenceNotScam*100).toFixed(2);
  if (req.method === "OPTIONS") {
    // Send response to OPTIONS requests
    res.set("Access-Control-Allow-Methods", "GET");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.set("Access-Control-Max-Age", "3600");
    console.log("Options weirdness");
    res.status(204).send("");
  } else {
    console.log("made it to sending stage");
    if (confidenceNotScam > confidenceScam) {
      res.send({confidence: confidenceNotScam,
        // eslint-disable-next-line max-len
        message: "Good news! Scamstopper thinks this isn't a scam. If you have any more questions, please ask"});
    }
    res.send({confidence: confidenceScam,
      // eslint-disable-next-line max-len
      message: "Hold up! Scamstopper thinks this could be a scam. Return to the chat window for more advice."});
  }
});

exports.app = functions.https.onRequest(app);
