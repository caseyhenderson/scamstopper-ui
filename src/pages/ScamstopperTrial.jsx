import React from "react";
import { Grid } from '@mui/material';
import ScamstopperWidget from "../components/ScamstopperWidget";

export default function ScamstopperTrial()
{
    return (
    <div>
      <Grid>
        <h1> Welcome to Scamstopper! </h1>
        <h2> Scamstopper is a friendly chatbot here to help you fight scams! 
            Click the button in the bottom-right corner to get started.
        </h2>
        <ScamstopperWidget/>

    </Grid>
    </div>
    )

}