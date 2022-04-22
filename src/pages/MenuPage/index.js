import React from "react";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import FilterSection from "./FilterSection";
import ProductSection from "./ProductSection";
import { Breadcrumbs, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function MenuPage() {
  const navigate = useNavigate()
  return (
    <Container
      sx={{
        alignItems: "center",
        display: 'flex',
        flexDirection: 'column',
      }}
      maxWidth='xl'
    >

      <h1>HÀNG BÁN CHẠY NHẤT</h1>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" component="button" variant='body1' color="inherit" onClick={() => navigate('/')} >
          Trang chủ
        </Link>
        <Typography color="#0f0d0c">Sản phẩm</Typography>
      </Breadcrumbs>
      <Grid container spacing={10}>
        <Grid item xs={12} sm={3}>
          <FilterSection />
        </Grid>
        <Grid item xs={12} sm={8} style={{ marginTop: "20px" }}>
          <ProductSection />
        </Grid>
      </Grid>

    </Container>
  );
}
