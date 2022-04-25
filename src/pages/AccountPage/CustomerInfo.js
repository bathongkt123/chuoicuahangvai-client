import { Typography, Box, Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

export default function CustomerInfo() {
  const navigate = useNavigate();
  const handleChange = () => {
    navigate("/account/address");
  };

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
    </Box>
  );
}
