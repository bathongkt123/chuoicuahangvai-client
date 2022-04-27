import { Box, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import CustomerInfo from "./CustomerInfo";
import OrderTable from "./OrderTabel";
import axios from "axios";
import qs from "qs";
export default function AccountPage() {
  return (
    <Container maxWidth="lg">
      <Heading />
      <Box sx={{ display: "flex" }}>
        <CustomerInfo />
        <Box width={120} />
        <OrderTable />
      </Box>
    </Container>
  );
}
