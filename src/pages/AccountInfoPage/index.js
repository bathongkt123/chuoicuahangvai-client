import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import Heading from "./Heading";
import FormInfo from "./FormInfo";
import CustomerInfo from "./CustomerInfo";

export default function AccountInfoPage({
  headerLastname,
  setHeaderlastname,
  headerFirstname,
  setHeaderFirstname,
}) {
  return (
    <Container maxWidth="lg">
      <Heading />
      <Box sx={{ display: "flex" }}>
        <CustomerInfo />

        <Box width={120} />
        <FormInfo
          headerLastname={headerLastname}
          setHeaderlastname={setHeaderlastname}
          headerFirstname={headerFirstname}
          setHeaderFirstname={setHeaderFirstname}
        />
      </Box>
    </Container>
  );
}
