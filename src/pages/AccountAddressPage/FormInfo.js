import { FormControl, Select, InputLabel, MenuItem } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import { useState, useEffect, useRef } from "react";

export default function FormInfo({ addContact, edit, contacts }) {
  const [contact, setContact] = useState({
    Lname: "",
    Fname: "",
    address: "",
    district: "",
    ward: "",
    city: "",
    phoneNum: "",
    defaultAdd: false,
  });

  useEffect(() => {
    if (edit) {
      setContact(contacts[edit]);
    }
  }, [edit, contacts]);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ display: "flex", my: 5 }}>
        <TextField
          label="Họ và tên lót"
          size="large"
          fullWidth
          sx={{ display: "inline-block" }}
          value={contact.Lname}
          onChange={(e) => setContact({ ...contact, Lname: e.target.value })}
        ></TextField>
        <Box width={20}></Box>
        <TextField
          label="Tên"
          size="large"
          fullWidth
          sx={{ display: "inline-block" }}
          value={contact.Fname}
          onChange={(e) => setContact({ ...contact, Fname: e.target.value })}
        ></TextField>
      </Box>

      <TextField
        label="Địa chỉ"
        size="large"
        fullWidth
        sx={{ display: "inline-block" }}
        value={contact.address}
        onChange={(e) => setContact({ ...contact, address: e.target.value })}
      ></TextField>

      <FormControl fullWidth sx={{ mt: 5 }}>
        <InputLabel id="demo-simple-select-label">Chọn tỉnh/thành</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Chọn tỉnh/thành"
          value={contact.city}
          onChange={(e) => setContact({ ...contact, city: e.target.value })}
          size="large"
        >
          <MenuItem value={"TP.HCM"}>TP.HCM</MenuItem>
          <MenuItem value={"Đà Nẵng"}>Đà Nẵng</MenuItem>
          <MenuItem value={"Huế"}>Huế</MenuItem>
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
            value={contact.district}
            onChange={(e) =>
              setContact({ ...contact, district: e.target.value })
            }
          >
            <MenuItem value={"Quận 1"}>Quận 1</MenuItem>
            <MenuItem value={"Quận 2"}>Quận 2</MenuItem>
            <MenuItem value={"Quận 10"}>Quận 10</MenuItem>
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
            value={contact.ward}
            onChange={(e) => setContact({ ...contact, ward: e.target.value })}
          >
            <MenuItem value={"phường 1"}>phường 1</MenuItem>
            <MenuItem value={"phường 2"}>phường 2</MenuItem>
            <MenuItem value={"phường 14"}>phường 14</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <TextField
        label="Số điện thoại"
        size="large"
        fullWidth
        sx={{ display: "inline-block", mt: 5 }}
        value={contact.phoneNum}
        onChange={(e) => setContact({ ...contact, phoneNum: e.target.value })}
      ></TextField>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Địa chỉ mặc định" />
      </FormGroup>
      <Box textAlign="center">
        <Button
          variant="contained"
          size="large"
          sx={{ backgroundColor: "#384257", my: 4 }}
          onClick={addContact(contact)}
        >
          {edit ? "Lưu lại" : "Thêm vào"}
        </Button>
      </Box>
    </Box>
  );
}
