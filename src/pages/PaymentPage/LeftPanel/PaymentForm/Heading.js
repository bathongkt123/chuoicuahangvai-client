import { Breadcrumbs, Link, Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Heading() {
  const navigate = useNavigate()
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
        <Link underline="hover" color="inherit" component="button" variant="body1" onClick={() => {
          navigate('/cart');
        }}>
          Giỏ hàng
        </Link>
        <Link underline="hover" color="inherit" component="button" variant="body1" onClick={() => {
          navigate('/payment/delivery');
        }}>
          Thông tin
        </Link>
        <Link underline="hover" color="inherit" component="button" variant="body1" onClick={() => {
          navigate('/payment/shipment');
        }}>
          Thông tin
        </Link>
        <Box sx={{ fontWeight: 700, color: "#0f0d0c" }}>Thanh toán</Box>
      </Breadcrumbs>
    </Box>
  );
}
