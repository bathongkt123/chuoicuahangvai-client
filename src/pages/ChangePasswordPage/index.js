import { Box, Container } from "@mui/material";
import React from "react";
import Heading from "./Heading";
import FormInfo from "./FormInfo";

export default function AccountInfoPage() {
  return (
    <Container maxWidth="lg">
      <Heading />
      <Box sx={{ display: "flex" }}>
        <Box width={120} />
        <FormInfo />
      </Box>
    </Container>
  );
}
