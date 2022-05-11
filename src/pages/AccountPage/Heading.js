import { Breadcrumbs, Typography, Link, Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
export default function Heading() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        my: 2,
      }}
    >
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          component="button"
          variant="body1"
          color="inherit"
          onClick={() => navigate("/")}
        >
          Trang chủ
        </Link>
        <Typography color="#0f0d0c">Đơn hàng</Typography>
      </Breadcrumbs>
    </Box>
  );
}
