import React from "react";
import {Box, Typography, Stack} from "@mui/material"

export const Gun = () => {

  return (
    <Stack alignItems={"center"} id={"gun-page"} sx={{width: "100vw", height: "100vh", mb: 0, bgcolor: "rgba(255,255,255,0)"}}>
      <Box sx={{width: {xs: "95vw", md: "45vw"}, py: 5, mx: "auto", textAlign: "center !important" }}>
        <Typography variant={"h1"} color={"#FFF"} fontWeight={700}>
          The Gun
        </Typography>
      </Box>
    </Stack>
  )
}