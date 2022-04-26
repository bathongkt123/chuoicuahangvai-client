import React, { useState } from "react";
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
import axios from "axios";
export default function RegisterPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleFirstnameChange = (e) => {
    setFirstname(e.target.value);
  };

  const handleLastnameChange = (e) => {
    setLastname(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios.post(
        `${process.env.REACT_APP_STRAPI_URL}/api/auth/register
      `,
        {
          username: username,
          email: username,
          password: password,
          phone: phone,
          name: {
            firstname: firstname,
            lastname: lastname,
          },
        }
      );
      navigate("/login", { replace: true });
      console.log("ok");
    } catch (response) {
      console.log(response.response.data);
    }
  };
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
          <Link
            underline="hover"
            component="button"
            variant="body1"
            color="inherit"
            onClick={() => navigate("/")}
          >
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
          value={lastname}
          onChange={handleLastnameChange}
        ></TextField>
        <Box sx={{ my: 1 }}></Box>
        <TextField
          label="Tên"
          size="small"
          sx={{ minWidth: "55ch" }}
          value={firstname}
          onChange={handleFirstnameChange}
        ></TextField>
        <Box sx={{ my: 1 }}></Box>
        <TextField
          label="Số điện thoại"
          size="small"
          value={phone}
          onChange={handlePhoneChange}
          sx={{ minWidth: "55ch" }}
        ></TextField>
        <Box sx={{ my: 1 }}></Box>
        <TextField
          label="Email"
          size="small"
          sx={{ minWidth: "55ch" }}
          value={username}
          onChange={handleUsernameChange}
        ></TextField>
        <Box sx={{ my: 1 }}></Box>
        <TextField
          label="Mật khẩu"
          type="password"
          size="small"
          sx={{ minWidth: "55ch" }}
          value={password}
          onChange={handlePasswordChange}
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
          onClick={handleSubmit}
          variant="contained"
          sx={{ backgroundColor: "#384257" }}
        >
          Đăng ký
        </Button>
      </Box>
    </Box>
  );
}
