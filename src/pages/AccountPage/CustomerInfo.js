import { Typography, Box, Button } from "@mui/material";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function CustomerInfo() {
  const [cookie, setCookie, removeCookie] = useCookies([process.env.REACT_APP_COOKIE_NAME])
  const navigate = useNavigate();
  const handleChange = () => {
    navigate("/account/address");
  };
  const handleLogout = () => {
    removeCookie(process.env.REACT_APP_COOKIE_NAME)
    navigate('/')
  }
  return (
    <Box sx={{ whiteSpace: "nowrap" }}>
      <h2>Lê Bá Thông</h2>
      <Typography variant="body1">268 Lý Thường Kiệt</Typography>
      <Typography variant="body1">Phường 14</Typography>
      <Typography variant="body1">Quận 10</Typography>
      <Typography variant="body1">TP Hồ Chí Minh</Typography>
      <Typography variant="body1">(+84)911357191</Typography>
      <Button
        sx={{
          fontWeight: "bold",
          p: 0,
          textTransform: "none",
          "&:hover": { textDecoration: "underline" },
        }}
        color="inherit"
        onClick={handleChange}
      >
        Chỉnh sửa địa chỉ
      </Button>
      <Button
        variant="outlined"
        sx={{
          display: 'block',
          fontWeight: "bold",
          fontSize: '1rem',
          p: 0,
        }}
        color="inherit"
        onClick={handleLogout}
      >
        Đăng xuất
      </Button>
    </Box>
  );
}
