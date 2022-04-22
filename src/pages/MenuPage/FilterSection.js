import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import qs from "qs";
import { Box, Stack } from "@mui/material";
export default function FilterSection() {
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);
  const [origins, setOrigins] = useState([]);
  const [patterns, setPatterns] = useState([]);
  const [widths, setWidths] = useState([]);
  const [stretches, setStretches] = useState([]);
  const fetchData = async () => {
    const query = qs.stringify({}, { encodeValuesOnly: true });
    const resultCategories = await axios.get(
      `${process.env.REACT_APP_STRAPI_URL}/api/product-categories?${query}`
    );
    const resultColors = await axios.get(
      `${process.env.REACT_APP_STRAPI_URL}/api/product-colors?${query}`
    );
    const resultOrigins = await axios.get(
      `${process.env.REACT_APP_STRAPI_URL}/api/product-origins?${query}`
    );
    const resultPatterns = await axios.get(
      `${process.env.REACT_APP_STRAPI_URL}/api/product-patterns?${query}`
    );
    const resultWidths = await axios.get(
      `${process.env.REACT_APP_STRAPI_URL}/api/product-widths?${query}`
    );
    const resultStretches = await axios.get(
      `${process.env.REACT_APP_STRAPI_URL}/api/product-stretches?${query}`
    );
    setCategories(resultCategories.data.data);
    setColors(resultColors.data.data);
    setOrigins(resultOrigins.data.data);
    setPatterns(resultPatterns.data.data);
    setWidths(resultWidths.data.data);
    setStretches(resultStretches.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <FormControl
      variant="standard"
      sx={{ mt: 5, minWidth: 150, textAlign: "left" }}
    >
      <InputLabel id="sort">Sắp xếp theo</InputLabel>
      <Select labelId="sort" id="sort" label="sort">
        <MenuItem value={"bestsell"}>Bán chạy nhất</MenuItem>
        <MenuItem value={"newestarrival"}>Hàng mới</MenuItem>
        <MenuItem value={"hightolow"}>Giá giảm dần</MenuItem>
        <MenuItem value={"lowtohigh"}>Giá tăng dần</MenuItem>
      </Select>
      <h3>DANH MỤC</h3>
      {categories.map((item) => (
        <MenuItem sx={{ fontWeight: "bold" }} key={item.id}>
          {item.attributes.name}
        </MenuItem>
      ))}
      <h3>MÀU CHỦ ĐẠO</h3>
      {colors.map((item) => (
        <Box
          sx={{
            display: "flex",
          }}
          key={item.id}
        >
          {item.attributes.name}:
          <Box
            sx={{
              bgcolor: item.attributes.color,
              width: "1.5rem",
              height: "1.5rem",
              borderRadius: "50%",
              m: 1,
            }}
          />
        </Box>
      ))}
      <h3>XUẤT XỨ</h3>
      {origins.map((item) => (
        <MenuItem sx={{ fontWeight: "bold" }} key={item.id}>
          {item.attributes.name}
        </MenuItem>
      ))}
      <h3>KIỂU MẪU</h3>
      {patterns.map((item) => (
        <MenuItem sx={{ fontWeight: "bold" }} key={item.id}>
          {item.attributes.name}
        </MenuItem>
      ))}
      <h3>CHIỀU RỘNG</h3>
      {widths.map((item) => (
        <MenuItem sx={{ fontWeight: "bold" }} key={item.id}>
          {item.attributes.name}
        </MenuItem>
      ))}
      <h3>ĐỘ CO GIÃN</h3>
      {stretches.map((item) => (
        <MenuItem sx={{ fontWeight: "bold" }} key={item.id}>
          {item.attributes.name}
        </MenuItem>
      ))}
    </FormControl>
  );
}
