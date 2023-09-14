import React from "react";
import {AppBar, Box, Toolbar, Typography} from "@mui/material";

export const Navigation = () => {
    
    return (
        <Toolbar sx={{ position: "absolute", top: 0, left: 0, right: 0, maxWidth: "90vw", width: "100%", mx: "auto", my: 2, bgcolor: "#FFF", borderRadius: 3, color: "#252525 !important"}}>
            <Typography>Navigation</Typography>
        </Toolbar>
    )
}