import React from "react";
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import ScamstopperFullScreen from "../components/ScamstopperFullScreen";


export default function Information()
{
    return (
    <div>
      <Grid>
        <Card>
          <CardHeader 
            title= <Typography variant = "h4"> What would you like to know? </Typography>
          />
          <CardContent>
              <Typography variant="body2" component="p">
                    Ask Scamstopper - just type into the chat box to your right!
                 </Typography>
          </CardContent>
        </Card>
        <ScamstopperFullScreen/>
    </Grid>
    </div>
    )

}