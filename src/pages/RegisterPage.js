import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Breadcrumbs,
  Button,
  TextField,
  Typography,
  Box,
  Link,
  Backdrop,
  CircularProgress,
  Alert,
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
  const [rePassword, setRePassword] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [message, setMessage] = useState("Đăng ký thất bại");
  const [isLoading, setIsLoading] = useState(false);
  const resetForm = async () => {
    setUsername("");
    setPassword("");
    setFirstname("");
    setLastname("");
    setPhone("");
    setRePassword("");
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleRepasswordChange = (e) => {
    setRePassword(e.target.value);
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
    setInvalid(false);
    setIsLoading(true);
    if (password !== rePassword) {
      setMessage("Nhập lại mật khẩu không đúng");
      setInvalid(true);
      setIsLoading(false);
      return;
    }
    axios
      .post(
        `${process.env.REACT_APP_STRAPI_URL}/api/auth/register
      `,
        {
          username: username,
          email: username,
          password: password,
          phone: phone,
          firstname: firstname,
          lastname: lastname,
        }
      )
      .then((response) => {
        setIsLoading(false);
        if (response.status === 200)
          toast.success("Chúng tôi sẽ gửi email đến bạn sau giây lát");
        resetForm();
      })
      .catch((error) => {
        try {
          setMessage(error.response.data.error.message);
        } catch (e) {
          setMessage("Đăng ký thất bại");
        } finally {
          setInvalid(true);
          setIsLoading(false);
        }
      });
  };
  return (
    <Box>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
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
        <Alert
          severity="error"
          sx={{ visibility: invalid ? "visible" : "hidden" }}
        >
          {message}
        </Alert>

        <TextField
          required
          label="Họ và tên lót"
          size="small"
          sx={{ minWidth: "55ch" }}
          value={lastname}
          onChange={handleLastnameChange}
        ></TextField>
        <Box sx={{ my: 1 }}></Box>
        <TextField
          required
          label="Tên"
          size="small"
          sx={{ minWidth: "55ch" }}
          value={firstname}
          onChange={handleFirstnameChange}
        ></TextField>
        <Box sx={{ my: 1 }}></Box>
        <TextField
          required
          label="Số điện thoại"
          size="small"
          value={phone}
          onChange={handlePhoneChange}
          sx={{ minWidth: "55ch" }}
        ></TextField>
        <Box sx={{ my: 1 }}></Box>
        <TextField
          required
          label="Email"
          size="small"
          sx={{ minWidth: "55ch" }}
          value={username}
          onChange={handleUsernameChange}
        ></TextField>
        <Box sx={{ my: 1 }}></Box>
        <TextField
          required
          label="Mật khẩu"
          type="password"
          size="small"
          sx={{ minWidth: "55ch" }}
          value={password}
          onChange={handlePasswordChange}
        ></TextField>
        <Box sx={{ my: 1 }}></Box>
        <TextField
          required
          label="Nhập lại mật khẩu"
          type="password"
          size="small"
          value={rePassword}
          onChange={handleRepasswordChange}
          sx={{ minWidth: "55ch" }}
        ></TextField>
        <Box sx={{ my: 1 }}></Box>

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
