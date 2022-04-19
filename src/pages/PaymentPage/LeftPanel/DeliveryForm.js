import {
  Link,
  Typography,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import React from "react";
import { Button } from "@mui/material";
export default function FormInfo() {
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", my: 2 }}>
        <Typography variant="body1">Thông tin liên hệ</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Typography variant="body1">
          Đã có tài khoản ?<Link href>Đăng nhập</Link>
        </Typography>
      </Box>
      <TextField
        label="Email"
        size="small"
        fullWidth
        sx={{ display: "inline-block" }}
      ></TextField>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ display: "flex", my: 2 }}>
          <TextField
            label="Họ và tên lót"
            size="small"
            fullWidth
            sx={{ display: "inline-block" }}
          ></TextField>
          <Box width={20}></Box>
          <TextField
            label="Tên"
            size="small"
            fullWidth
            sx={{ display: "inline-block" }}
          ></TextField>
        </Box>

        <TextField
          label="Địa chỉ"
          size="small"
          fullWidth
          sx={{ display: "inline-block" }}
        ></TextField>

        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel id="demo-simple-select-label">Chọn tỉnh/thành</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Chọn tỉnh/thành"
            size="small"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <Box sx={{ display: "flex" }}>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel id="demo-simple-select-label">
              Chọn quận/huyện
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Chọn quận/huyện"
              size="small"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <Box width={20}></Box>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel id="demo-simple-select-label">
              Chọn phường/xã
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Chọn phường/xã"
              size="small"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <TextField
          label="Số điện thoại"
          size="small"
          fullWidth
          sx={{ display: "inline-block", mt: 2 }}
        ></TextField>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Button
          href="/cart"
          variant="contained"
          sx={{ backgroundColor: "#384257" }}
        >
          {`< Trở về giỏ hàng`}
        </Button>

        <Button
          variant="contained"
          sx={{ backgroundColor: "#384257", float: "right" }}
        >
          {`Chuyển đến trang vận chuyển>`}
        </Button>
      </Box>
    </React.Fragment>
  );
}
