import React, { useState } from "react";
import {
  Alert,
  Box,
  Breadcrumbs,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";


import { useCookies } from "react-cookie";
import axios from "axios";

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalidLogin, setInvalidLogin] = useState(false);
  const [loginMessage, setLoginMessage] = useState("Đăng nhập thất bại");
  const [isLoading, setIsLoading] = useState(false);
  const [cookies, setCookie] = useCookies([process.env.REACT_APP_COOKIE_NAME]);
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setInvalidLogin(false);
    setIsLoading(true);
    axios
      .post(`${process.env.REACT_APP_STRAPI_URL}/api/auth/local`, {
        identifier: username,
        password: password,
      })
      .then((response) => {
        setIsLoading(false);
        setCookie(process.env.REACT_APP_COOKIE_NAME, response.data.jwt, {
          path: "/",
          expires: new Date(Date.now() + 16 * 60 * 60 * 1000),
          secure: true,
          sameSite: "strict",
        });
        navigate("/", { replace: true });
      })
      .catch((error) => {
        try {
          setLoginMessage(error.response.data.error.message);
        } catch (e) {
          setLoginMessage("Đăng nhập thất bại");
        } finally {
          setInvalidLogin(true);
          setIsLoading(false);
        }
      });
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
        <h2>ĐĂNG NHẬP</h2>
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

          <Typography color="#0f0d0c">Đăng nhập</Typography>
        </Breadcrumbs>
      </Box>

      <Container maxWidth="sm" sx={{ my: 2 }}>
        <Alert
          severity="error"
          sx={{ visibility: invalidLogin ? "visible" : "hidden" }}
        >
          {loginMessage}
        </Alert>
        <TextField
          value={username}
          label="Email"
          size="small"
          sx={{ minWidth: "60ch" }}
          onChange={handleUsernameChange}
        ></TextField>
        <Box sx={{ my: 2 }}></Box>
        <TextField
          value={password}
          onChange={handlePasswordChange}
          label="Mật khẩu"
          type="password"
          size="small"
          sx={{ minWidth: "60ch" }}
        ></TextField>
        <Box sx={{ my: 1 }}></Box>
        <Box sx={{ mt: 2 }}>
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{ backgroundColor: "#384257" }}
          >
            Đăng nhập
          </Button>
          <Link
            underline="hover"
            component="button"
            color="inherit"
            onClick={() => navigate("/forgotpassword")}
            sx={{ mx: 2, fontWeight: "bold", fontSize: "1rem" }}
          >
            Quên mật khẩu ?
          </Link>
        </Box>
        <h1 style={{ textAlign: "left" }}>KHÁCH HÀNG MỚI ?</h1>
        <Button
          onClick={() => navigate("/register")}
          variant="contained"
          sx={{ backgroundColor: "#384257" }}
        >
          Đăng ký
        </Button>
      </Container>
    </Box>
  );
}
