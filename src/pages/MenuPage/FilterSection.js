import React, { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import qs from "qs";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
} from "@mui/material";
export default function FilterSection({
  categoriesFilter,
  setCategoriesFilter,
  colorsFilter,
  setColorsFilter,
  originsFilter,
  setOriginsFilter,
  patternsFilter,
  setPatternsFilter,
  widthsFilter,
  setWidthsFilter,
  stretchesFilter,
  setStretchesFilter,
  sortProduct,
  setSortProduct,
}) {
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);
  const [origins, setOrigins] = useState([]);
  const [patterns, setPatterns] = useState([]);
  const [widths, setWidths] = useState([]);
  const [stretches, setStretches] = useState([]);
  const [checkBoxs, setCheckBoxs] = useState([]);
  const handleCategoryChange = (event) => {
    setCheckBoxs({
      ...checkBoxs,
      [event.target.name]: event.target.checked,
    });

    if (event.target.checked)
      setCategoriesFilter({
        ...categoriesFilter,
        [event.target.value]: event.target.checked,
      });
    else {
      setCategoriesFilter((prevData) => {
        const newData = { ...prevData };
        delete newData[event.target.value];
        return newData;
      });
    }
  };

  const handleColorChange = (event) => {
    if (event.target.checked)
      setColorsFilter({
        ...colorsFilter,
        [event.target.value]: event.target.checked,
      });
    else {
      setColorsFilter((prevData) => {
        const newData = { ...prevData };
        delete newData[event.target.value];
        return newData;
      });
    }
  };

  const handleOriginChange = (event) => {
    if (event.target.checked)
      setOriginsFilter({
        ...originsFilter,
        [event.target.value]: event.target.checked,
      });
    else {
      setOriginsFilter((prevData) => {
        const newData = { ...prevData };
        delete newData[event.target.value];
        return newData;
      });
    }
  };

  const handlePatternChange = (event) => {
    if (event.target.checked)
      setPatternsFilter({
        ...patternsFilter,
        [event.target.value]: event.target.checked,
      });
    else {
      setPatternsFilter((prevData) => {
        const newData = { ...prevData };
        delete newData[event.target.value];
        return newData;
      });
    }
  };
  const handleWidthChange = (event) => {
    if (event.target.checked)
      setWidthsFilter({
        ...widthsFilter,
        [event.target.value]: event.target.checked,
      });
    else {
      setWidthsFilter((prevData) => {
        const newData = { ...prevData };
        delete newData[event.target.value];
        return newData;
      });
    }
  };
  const handleStretchChange = (event) => {
    if (event.target.checked)
      setStretchesFilter({
        ...stretchesFilter,
        [event.target.value]: event.target.checked,
      });
    else {
      setStretchesFilter((prevData) => {
        const newData = { ...prevData };
        delete newData[event.target.value];
        return newData;
      });
    }
  };
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
  }, [checkBoxs]);

  return (
    <FormControl
      variant="standard"
      sx={{ mt: 5, minWidth: 220, textAlign: "left" }}
    >
      <InputLabel id="sort">Sắp xếp theo</InputLabel>
      <Select
        name="sort"
        value={sortProduct}
        onChange={(e) => setSortProduct(e.target.value)}
      >
        <MenuItem value={"id"}></MenuItem>
        <MenuItem value={"createdAt:desc"}>Hàng mới</MenuItem>
        <MenuItem value={"price:desc"}>Giá giảm dần</MenuItem>
        <MenuItem value={"price:asc"}>Giá tăng dần</MenuItem>
      </Select>
      <h3>DANH MỤC</h3>

      {categories.map((item) => (
        <FormGroup key={item.id}>
          <FormControlLabel
            control={
              <Checkbox
                value={item.id}
                name={item.attributes.name}
                onChange={handleCategoryChange}
                checked={checkBoxs.name}
              />
            }
            label={item.attributes.name}
          />
        </FormGroup>
      ))}

      <h3>MÀU CHỦ ĐẠO</h3>

      {colors.map((item) => (
        <FormGroup key={item.id}>
          <FormControlLabel
            control={<Checkbox value={item.id} onChange={handleColorChange} />}
            label={
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
                    ml: 1,
                  }}
                />
              </Box>
            }
          ></FormControlLabel>
        </FormGroup>
      ))}
      <h3>XUẤT XỨ</h3>

      {origins.map((item) => (
        <FormGroup key={item.id}>
          <FormControlLabel
            control={
              <Checkbox
                value={item.id}
                name={item.attributes.name}
                onChange={handleOriginChange}
              />
            }
            label={item.attributes.name}
          />
        </FormGroup>
      ))}
      <h3>KIỂU MẪU</h3>

      {patterns.map((item) => (
        <FormGroup key={item.id}>
          <FormControlLabel
            control={
              <Checkbox
                value={item.id}
                name={item.attributes.name}
                onChange={handlePatternChange}
              />
            }
            label={item.attributes.name}
          />
        </FormGroup>
      ))}
      <h3>CHIỀU RỘNG</h3>

      {widths.map((item) => (
        <FormGroup key={item.id}>
          <FormControlLabel
            control={
              <Checkbox
                value={item.id}
                name={item.attributes.name}
                onChange={handleWidthChange}
              />
            }
            label={item.attributes.name}
          />
        </FormGroup>
      ))}
      <h3>ĐỘ CO GIÃN</h3>

      {stretches.map((item) => (
        <FormGroup key={item.id}>
          <FormControlLabel
            control={
              <Checkbox
                value={item.id}
                name={item.attributes.name}
                onChange={handleStretchChange}
              />
            }
            label={item.attributes.name}
          />
        </FormGroup>
      ))}
    </FormControl>
  );
}
