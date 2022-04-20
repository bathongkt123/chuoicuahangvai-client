import {
  Table,
  TableContainer,
  TableRow,
  Paper,
  TableBody,
  TableHead,
  TablePagination,
  Link,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import CustomTableCell from "components/CustomTableCell";
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
export default function FormInfo() {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ display: "flex", my: 5 }}>
        <TextField
          label="Họ và tên lót"
          size="large"
          fullWidth
          sx={{ display: "inline-block" }}
        ></TextField>
        <Box width={20}></Box>
        <TextField
          label="Tên"
          size="large"
          fullWidth
          sx={{ display: "inline-block" }}
        ></TextField>
      </Box>

      <TextField
        label="Địa chỉ"
        size="large"
        fullWidth
        sx={{ display: "inline-block" }}
      ></TextField>

      <FormControl fullWidth sx={{ mt: 5 }}>
        <InputLabel id="demo-simple-select-label">Chọn tỉnh/thành</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Chọn tỉnh/thành"
          size="large"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <Box sx={{ display: "flex" }}>
        <FormControl fullWidth sx={{ mt: 5 }}>
          <InputLabel id="demo-simple-select-label">Chọn quận/huyện</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Chọn quận/huyện"
            size="large"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <Box width={20}></Box>
        <FormControl fullWidth sx={{ mt: 5 }}>
          <InputLabel id="demo-simple-select-label">Chọn phường/xã</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Chọn phường/xã"
            size="large"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <TextField
        label="Số điện thoại"
        size="large"
        fullWidth
        sx={{ display: "inline-block", mt: 5 }}
      ></TextField>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Địa chỉ mặc định" />
      </FormGroup>
      <Box textAlign="center">
        <Button
          variant="contained"
          size="large"
          sx={{ backgroundColor: "#384257", my: 4 }}
        >
          Lưu lại
        </Button>
      </Box>
    </Box>
  );
}
