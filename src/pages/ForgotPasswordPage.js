import React from "react";
import {
  Box,
  Breadcrumbs,
  Button,
  ButtonGroup,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";

export default function ForgotPasswordPage() {
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
        <h2>QUÊN MẬT KHẨU</h2>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Trang chủ
          </Link>
          <Link
            underline="hover"
            color="inherit"
            sx={{ pointerEvents: "none" }}
          >
            Tài khoản
          </Link>
          <Typography color="#0f0d0c"> Quên mật khẩu</Typography>
        </Breadcrumbs>
      </Box>
      <Container maxWidth="sm" sx={{ my: 2 }}>
        <Typography variant="body1">
          Nhập email đã đăng ký của bạn vào đây, chúng tôi sẽ gửi lại mật khẩu
          qua email này.
        </Typography>
        <Box sx={{ mt: 2 }}></Box>
        <TextField
          label="Email"
          size="small"
          sx={{ minWidth: "60ch" }}
        ></TextField>
        <Box sx={{ mt: 2 }}>
          <ButtonGroup sx={{ whiteSpace: "nowrap", my: 2 }}>
            <Button
              href="/register"
              variant="contained"
              sx={{ backgroundColor: "#384257" }}
            >
              Khôi phục
            </Button>
            <Box width={20}></Box>
            <Button
              href="/login"
              variant="contained"
              sx={{ backgroundColor: "#C8C8C8" }}
            >
              Hủy bỏ
            </Button>
          </ButtonGroup>
        </Box>
        <h1 style={{ textAlign: "left" }}>KHÁCH HÀNG MỚI ?</h1>
        <Button
          href="/register"
          variant="contained"
          sx={{ backgroundColor: "#384257" }}
        >
          Đăng ký
        </Button>
      </Container>
    </Box>
  );
}
