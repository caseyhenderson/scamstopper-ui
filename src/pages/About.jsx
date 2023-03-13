import React from "react";
import { Grid } from '@mui/material';
import ScamstopperWidget from "../components/ScamstopperWidget";

export default function About()
{
    return (
    <div>
      <Grid>
        <h1> Scamstopper! is a helpful conversational AI web application developed by Casey Henderson. 
            If you're interested in learning more, why not ask Scamstopper yourself? Just click the icon in the bottom right corner.</h1>
            <ScamstopperWidget/>
    </Grid>
    </div>
    )

}