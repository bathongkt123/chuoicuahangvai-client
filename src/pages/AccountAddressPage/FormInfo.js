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
          <InputLabel id="demo-simple-select-label">Chọn quận/huyện</InputLabel>
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
          <InputLabel id="demo-simple-select-label">Chọn phường/xã</InputLabel>
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
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Địa chỉ mặc định" />
      </FormGroup>
      <Button variant="contained" sx={{ backgroundColor: "#384257" }}>
        Lưu lại
      </Button>
    </Box>
  );
}
