import React from 'react'
import Box, { Avatar, Button, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'

function TemplateUI() {
    return (
        <Box>

            {/*       CARD */}
            <Card>
                <CardHeader
                    avatar={
                        <Avatar alt="" src="" />
                    }
                    title=""
                />
                <CardContent>
                    <Typography variant="h3"></Typography>
                    <Typography variant="body1"></Typography>
                    <Typography variant="body2"></Typography>
                    <Typography variant="body2" color="text.secondary"></Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    height={altura}
                    image=""
                    title=""
                />
            </Card>
            

            {/* BUTTON */}
            <Button size="small">Read More</Button>

        </Box>

    )
}

export default TemplateUI