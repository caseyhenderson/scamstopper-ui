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
            title= <Typography variant = "h4" data-test-id="information-title"> What would you like to know? </Typography>
          />
          <CardContent>
              <Typography variant="body2" component="p" data-test-id="information-para">
                    Ask Scamstopper - just type into the chat box to your right!
                 </Typography>
          </CardContent>
        </Card>
        <ScamstopperFullScreen/>
    </Grid>
    </div>
    )

}