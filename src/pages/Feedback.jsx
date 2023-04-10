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
                title= <Typography variant = "h2"> Want to tell us how we can improve? Click the link below.</Typography>
                />
                <CardContent>
                <Link href="https://forms.gle/q1v7N7Fs5M5qE6Bu7" target="_blank" rel="noreferrer" underline="hover">
                        {'Give your feedback here!'}
                </Link>

                </CardContent>
        </Card>
    </Grid>
    </div>
    )

}