import React from "react";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import { Breadcrumbs, Button, TextField, Typography } from "@mui/material";

export default function LoginPage() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          my: 2,
        }}
      >
        <h2>Đăng nhập</h2>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Trang chủ
          </Link>
          <Link underline="hover" color="inherit" href="/">
            Tài khoản
          </Link>
          <Typography color="#0f0d0c">Đăng nhập</Typography>
        </Breadcrumbs>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          my: 2,
        }}
      >
        <TextField
          label="Email"
          size="small"
          sx={{ minWidth: "50ch" }}
        ></TextField>
        <Box sx={{ my: 1 }}></Box>
        <TextField
          label="Mật khẩu"
          type="password"
          size="small"
          sx={{ minWidth: "50ch" }}
        ></TextField>
        <Button
          href="/register"
          variant="contained"
          sx={{ backgroundColor: "#384257", mt: 1 }}
        >
          Đăng nhập
        </Button>
        <h1 style={{ textAlign: "left" }}>KHÁCH HÀNG MỚI ?</h1>
        <Button
          href="/register"
          variant="contained"
          sx={{ backgroundColor: "#384257" }}
        >
          Đăng ký
        </Button>
      </Box>
    </Box>
  );
}
