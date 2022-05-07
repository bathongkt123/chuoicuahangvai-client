import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import Heading from "./Heading";
import FormInfo from "./FormInfo";
import { useState } from "react";
import axios from "axios";
import qs from "qs";

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
