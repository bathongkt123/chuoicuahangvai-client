import React from "react";
import Box from "@material-ui/core/Box";
import { Card, CardMedia } from "@mui/material";

export default function ImageSection(productImages) {
  return (
    <Box>
      <CardMedia component="img" image={productImages} loading="lazy" />
    </Box>
  );
}
