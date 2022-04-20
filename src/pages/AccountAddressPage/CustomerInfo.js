import { Typography, Box, Button, ButtonGroup, Divider } from "@mui/material";

export default function CustomerInfo() {
  return (
    <Box>
      <h2>Lê Bá Thông</h2>
      <Typography variant="body1">268 Lý Thường Kiệt</Typography>
      <Typography variant="body1">Phường 14</Typography>
      <Typography variant="body1">Quận 10</Typography>
      <Typography variant="body1">TP Hồ Chí Minh</Typography>
      <Typography variant="body1">(+84)911357191</Typography>
      <ButtonGroup sx={{ whiteSpace: "nowrap", my: 2 }}>
        <Button variant="contained" sx={{ backgroundColor: "#384257" }}>
          Chỉnh sửa
        </Button>
        <Box width={20}></Box>
        <Button variant="contained" sx={{ backgroundColor: "#384257" }}>
          Xóa
        </Button>
      </ButtonGroup>
      <Divider />
      <Button variant="contained" sx={{ backgroundColor: "#384257", my: 2 }}>
        Thêm địa chỉ mới
      </Button>
    </Box>
  );
}
