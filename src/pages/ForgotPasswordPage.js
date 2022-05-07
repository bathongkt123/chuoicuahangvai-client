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
import { useNavigate } from "react-router-dom";
export default function ForgotPasswordPage() {
  const navigate = useNavigate();
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
          Nhập email đã đăng ký của bạn vào đây, chúng tôi sẽ gửi lại mật khẩu
          qua email này.
        </Typography>
        <TextField label="Email" size="small" my={2} fullWidth />
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
              onClick={() => navigate("/login")}
              variant="contained"
              sx={{ backgroundColor: "#C8C8C8" }}
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
