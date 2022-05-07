import { Box, Container } from "@mui/material";
import React from "react";
import FormInfo from "./FormInfo";

export default function AccountInfoPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ display: "flex" }}>
        <Box width={120} />
        <FormInfo />
      </Box>
    </Container>
  );
}
