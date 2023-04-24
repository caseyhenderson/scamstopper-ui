import React from "react";
import { Card, CardContent, CardHeader, Typography, Link, Grid } from '@mui/material';
import ScamstopperWidget from "../components/ScamstopperWidget";

export default function Feedback()
{
    return (
    <div>
      <Grid>
            <ScamstopperWidget/>
            <Card variant = "outlined">
            <CardHeader
                title= <Typography variant = "h2" data-test-id="feedback-title"> Want to tell us how we can improve? Click the link below.</Typography>
                />
                <CardContent>
                <Link data-test-id="feedback-link" href="https://shusls.eu.qualtrics.com/jfe/form/SV_25JQkC6rsfLnQHQ" target="_blank" rel="noreferrer" underline="hover">
                        {'Give your feedback here!'}
                </Link>

                </CardContent>
        </Card>
    </Grid>
    </div>
    )

}