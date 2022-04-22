import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {
  Breadcrumbs,
  Button,
  TextField,
  Typography,
  Box,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function RegisterPage() {
  const navigate = useNavigate()
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
        <h2>ĐĂNG KÝ</h2>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" component="button" variant='body1' color="inherit" onClick={() => navigate('/')} >
            Trang chủ
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
          sx={{ minWidth: "55ch" }}
        ></TextField>
        <Box sx={{ my: 1 }}></Box>
        <TextField
          label="Tên"
          size="small"
          sx={{ minWidth: "55ch" }}
        ></TextField>
        <Box sx={{ my: 1 }}></Box>
        <TextField
          label="Số điện thoại"
          size="small"
          sx={{ minWidth: "55ch" }}
        ></TextField>
        <Box sx={{ my: 1 }}></Box>
        <TextField
          label="Mật khẩu"
          type="password"
          size="small"
          sx={{ minWidth: "55ch" }}
        ></TextField>
        <Box sx={{ my: 1 }}></Box>
        <TextField
          label="Nhập lại mật khẩu"
          type="password"
          size="small"
          sx={{ minWidth: "55ch" }}
        ></TextField>
        <Box sx={{ my: 1 }}></Box>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="Chấp nhận Điều khoản sử dụng và Điều khoản bảo mật"
          />
        </FormGroup>

        <Button
          onClick={() => navigate('/register')}
          variant="contained"
          sx={{ backgroundColor: "#384257" }}
        >
          Đăng ký
        </Button>
      </Box>
    </Box>
  );
}
