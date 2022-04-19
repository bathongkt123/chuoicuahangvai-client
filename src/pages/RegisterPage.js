import React from "react";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Breadcrumbs, Button, TextField, Typography } from "@mui/material";
export default function RegisterPage() {
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
        <h2>Đăng ký</h2>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Trang chủ
          </Link>
          <Link underline="hover" color="inherit" href="/">
            Tài khoản
          </Link>
          <Typography color="#0f0d0c">Đăng ký</Typography>
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
          label="Họ và tên lót"
          size="small"
          sx={{ minWidth: "50ch" }}
        ></TextField>
        <Box sx={{ my: 1 }}></Box>
        <TextField
          label="Tên"
          size="small"
          sx={{ minWidth: "50ch" }}
        ></TextField>
        <Box sx={{ my: 1 }}></Box>
        <TextField
          label="Số điện thoại"
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
        <Box sx={{ my: 1 }}></Box>
        <TextField
          label="Nhập lại mật khẩu"
          type="password"
          size="small"
          sx={{ minWidth: "50ch" }}
        ></TextField>
        <Box sx={{ my: 1 }}></Box>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="Chấp nhận Điều khoản sử dụng và Điều khoản bảo mật"
          />
        </FormGroup>

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
