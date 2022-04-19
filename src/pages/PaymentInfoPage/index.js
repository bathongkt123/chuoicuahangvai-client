import { Container, Grid, Divider } from "@mui/material";
import React from "react";
import Heading from "./Heading";
import FormInfo from "./FormInfo";

export default function PaymentInfoPage() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Heading />
          <Divider variant="middle" />
          <FormInfo />
          <br></br>
          <Divider variant="middle" />
        </Grid>
      </Grid>
    </Container>
  );
}
