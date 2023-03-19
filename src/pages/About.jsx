import React from "react";
import { Card, CardContent, CardHeader, Typography, Grid } from '@mui/material';
import ScamstopperWidget from "../components/ScamstopperWidget";

export default function About()
{
    return (
    <div>
      <Grid>
            <ScamstopperWidget/>
            <Card variant = "outlined">
            <CardHeader
                title= <Typography variant = "h2"> What is Scamstopper?</Typography>
                />
                <CardContent>
                    <Typography variant="body2" component="p">
                    Scamstopper! is a helpful conversational AI web application developed by Casey Henderson. 
                 </Typography>

                </CardContent>
        </Card>
        <Card variant = "outlined">
            <CardHeader
                title= <Typography variant = "h2"> Want to Learn More? </Typography>
                />
                <CardContent>
                    <Typography variant="body2" component="p">
                    If you're interested in learning more, why not ask Scamstopper yourself? Just click the icon in the bottom right corner.
                 </Typography>

                </CardContent>
        </Card>
    </Grid>
    </div>
    )

}