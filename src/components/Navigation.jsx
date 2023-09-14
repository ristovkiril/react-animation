import React from "react";
import {AppBar, Box, Toolbar, Typography} from "@mui/material";

export const Navigation = () => {
    
    return (
        <Toolbar sx={{maxWidth: "90vw", mx: "auto", my: 2, bgcolor: "#FFF", borderRadius: 3, color: "#252525 !important"}}>
            <Typography>Navigation</Typography>
        </Toolbar>
    )
}