import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import ScamstopperWidget from "../components/ScamstopperWidget";


const TextAnalysis = () => {
  const [prediction, setPrediction] = useState('');
  
  const handleSubmit = async (values) => {
    try {
      const response = await fetch(
        'https://us-central1-river-cocoa-377215.cloudfunctions.net/app/predict',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text: values.text }),
        }
      );
      if (response.ok) {
        const predictionVal = await response.json();
        console.log(predictionVal);
        setPrediction(predictionVal);
      } else {
        console.error(`Failed to get prediction: ${response.status}`);
        setPrediction('Failed to get prediction');
      }
    } catch (err) {
      console.error(`Failed to get prediction: ${err}`);
      setPrediction('Failed to get prediction');
    }
    console.log(prediction);
  };
  // get isSubmitting and pretty Formik working soon
  // if we want to keep confidence, make it human readable (i.e. i'm x percent sure this is a scam)
  return (
    <div>
      <h1>Email Analysis</h1>
      <p>Please copy-and-paste the text of the email or message you're worried about here.</p>
      <Formik initialValues={{ text: '' }} onSubmit={handleSubmit}>
        {({ handleChange }) => (
          <Form>
            <label htmlFor="text">Analysis</label>
            <Field type="text" id="text" name="text" onChange={handleChange} />
            <ErrorMessage name="text" />
            <button type="submit">Get Prediction</button>
          </Form>
        )}
      </Formik>
      <p>Prediction: {prediction.message} </p>
      <p>Confidence: {prediction.confidence}</p>
      <ScamstopperWidget/>
    </div>
  );
};

export default TextAnalysis;