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
      <h2>Địa chỉ</h2>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" onClick={() => navigate("/")}>
          Trang chủ
        </Link>
        <Link
          underline="hover"
          color="inherit"
          onClick={() => navigate("/accountinfo")}
        >
          Thông tin cá nhân
        </Link>
        <Typography color="#0f0d0c">Địa chỉ</Typography>
      </Breadcrumbs>
    </Box>
  );
}
