import { Breadcrumbs, Typography, Link, Box } from "@mui/material";
import React from "react";

export default function Heading() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        my: 2,
      }}
    >
      <h2>Royal Fabric</h2>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/cart">
          Giỏ hàng
        </Link>
        <Link underline="hover" color="inherit" href="/payment">
          Thông tin
        </Link>
        <Box sx={{ fontWeight: 700, color: "#0f0d0c" }}>Vận chuyển</Box>
        <Typography color="#0f0d0c">Thanh toán</Typography>
      </Breadcrumbs>
    </Box>
  );
}
