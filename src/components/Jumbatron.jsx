import React from "react";
import {Box, Typography, Stack} from "@mui/material"

export const Jumbatron = () => {

  return (
    <Stack alignItems={"center"} id={"jumbatron-page"} sx={{width: "100vw", height: "100vh", mb: 0, bgcolor: "rgba(255,255,255,0)"}}>
      <Box sx={{width: {xs: "95vw", md: "45vw"}, zIndex: 1, px: 5, mr: "auto", my: "auto", textAlign: "center !important" }}>
        <Typography variant={"h1"} color={"#FFF"} fontWeight={700}>
          Glock 21
        </Typography>
        <Typography variant={"h5"} color={"#FFF"} fontWeight={400}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </Typography>
      </Box>
    </Stack>
  )
}