import React from "react";
import { Avatar, Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import ScamstopperWidget from "../components/ScamstopperWidget";

// make own card component for pretty cards

export default function ScamstopperLandingPage()
{
    return (
    <div>
    <Grid item xs={12} sm={4}>
      
            <Card variant = "outlined">
            <CardHeader
               avatar={<Avatar src="https://storage.cloud.google.com/dialogflow-fyp-resources/scamstopper-widget-2.png"/>}
               title= <Typography variant = "h2"> Welcome to Scamstopper! </Typography>
               />
               <CardContent>
                <Typography variant="body2" component="p">
                Scamstopper is a friendly chatbot here to help you fight scams! 
            Click the button in the bottom-right corner to get started.
                </Typography>
               </CardContent>
        </Card>
        <Card variant = "outlined">
            <CardHeader
                title= <Typography variant = "h2"> Easy to Talk To </Typography>
                />
                <CardContent>
                    <Typography variant="body2" component="p">
                        Powered by Google's Dialogflow technology, Scamstopper is easy to talk to and fun to use!
                 </Typography>

                </CardContent>
        </Card>
        <Card variant = "outlined">
            <CardHeader
                title= <Typography variant = "h2"> Knowledgeable and Ready to Help </Typography>
                />
                <CardContent>
                    <Typography variant="body2" component="p">
                        Scamstopper knows the scammers' tricks, and how to stop them!
                 </Typography>

                </CardContent>
        </Card>
        <Card variant = "outlined">
            <CardHeader
                title= <Typography variant = "h2"> Available from anywhere on the web!</Typography>
                />
                <CardContent>
                    <Typography variant="body2" component="p">
                        Just visit Scamstopper and get asking questions!
                 </Typography>

                </CardContent>
        </Card>
    
    </Grid>
    <ScamstopperWidget/>
    </div>
    )

}