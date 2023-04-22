import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import {Grid, Typography }from '@mui/material';
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
  // if we want to keep confidence, make it human readable (i.e. i'm x percent sure this is a scam)
  return (
    <div>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h2" data-test-id="email-analysis-title">
            Email Analysis
          </Typography>
          <Typography variant="subtitle1" component="p">
            Please copy-and-paste the text of the email or message you're worried about here.
          </Typography>
        </Grid>
        <Grid item xs={12}>
            <Formik initialValues={{ text: '' }} onSubmit={handleSubmit}>
                {({ handleChange }) => (
            <Form>
                <Field name="text" as={TextareaAutosize} type="text" id="text" onChange={handleChange} data-test-id="email-analysis-form"/>
                <ErrorMessage name="text" />
                <button type="submit" data-test-id="get-prediction">Get Prediction</button>
          </Form>
           )}
          </Formik>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" data-test-id="prediction-result">Prediction: {prediction.message} </Typography>
            <Typography variant="body1" data-test-id="confidence-result">Confidence: {prediction.confidence} % </Typography> 
          </Grid>
      </Grid>
      <ScamstopperWidget/>
    </div>
  );
};

export default TextAnalysis;