import {
  Alert,
  Box,
  Breadcrumbs,
  Button,
  ButtonGroup,
  Container,
  Link,
  TextField,
  Backdrop,
  CircularProgress,
  Typography,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [message, setMessage] = useState("Đổi mật khẩu thất bại");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    axios
      .post(
        `${process.env.REACT_APP_STRAPI_URL}/api/auth/forgotpassword
        `,
        {
          email: email,
        }
      )
      .then((response) => {
        setIsLoading(false);
        if (response.status === 200)
          toast.success("Chúng tôi sẽ gửi email đến bạn sau giây lát");
      })
      .catch((error) => {
        try {
          setMessage(error.response.data.error.message);
        } catch (e) {
          setMessage("Đổi mật khẩu thất bại");
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
      <Alert
        severity="error"
        sx={{ visibility: invalid ? "visible" : "hidden" }}
      >
        {message}
      </Alert>
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
        <h2>QUÊN MẬT KHẨU</h2>
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
          <Typography color="#0f0d0c"> Quên mật khẩu</Typography>
        </Breadcrumbs>
      </Box>
      <Container maxWidth="sm" sx={{ my: 2 }}>
        <Typography variant="body1">
          Nhập email đã đăng ký của bạn vào đây, chúng tôi sẽ gửi email đổi mật
          khẩu cho bạn.
        </Typography>

        <TextField
          label="Email"
          size="small"
          sx={{ display: "inline-block", my: 2 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <Box sx={{ my: 2 }}>
          <ButtonGroup sx={{ whiteSpace: "nowrap" }}>
            <Button
              href="/register"
              variant="contained"
              sx={{ backgroundColor: "#384257" }}
              onClick={handleSubmit}
            >
              Khôi phục
            </Button>
            <Box width={20}></Box>
            <Button
              onClick={() => navigate("/login")}
              variant="contained"
              sx={{ backgroundColor: "#384257" }}
            >
              Hủy bỏ
            </Button>
          </ButtonGroup>
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
