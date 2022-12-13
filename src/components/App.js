import React from "react"
import { Typography, AppBar, Card, CardActions, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@mui/material"
import { PhotoCamera } from "@mui/icons-material"

export default function App() {
    return (
       <>
        <CssBaseline />
        <AppBar position="relative">
            <Toolbar>
                <PhotoCamera/>
                <Typography variant="h6">Photo Album</Typography>
            </Toolbar>
        </AppBar>
        <main>
            <div>
                <Container maxWidth="sm">
                    <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary">
                            Hello everyone! This is a photo album Page. Checking to see how a long sentence would look like.
                    </Typography>
                </Container>
            </div>
        </main>
       </>
    )
}