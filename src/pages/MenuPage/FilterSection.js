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
import { useLocation } from "react-router-dom";
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

  const { state } = useLocation();

  const handleCategoryChange = (event) => {
    setCategoriesFilter({
      ...categoriesFilter,
      [event.target.value]: event.target.checked,
    });
  };

  const handleColorChange = (event) => {
    setColorsFilter({
      ...colorsFilter,
      [event.target.value]: event.target.checked,
    });
  };

  const handleOriginChange = (event) => {
    setOriginsFilter({
      ...originsFilter,
      [event.target.value]: event.target.checked,
    });
  };

  const handlePatternChange = (event) => {
    setPatternsFilter({
      ...patternsFilter,
      [event.target.value]: event.target.checked,
    });
  };
  const handleWidthChange = (event) => {
    setWidthsFilter({
      ...widthsFilter,
      [event.target.value]: event.target.checked,
    });
  };
  const handleStretchChange = (event) => {
    setStretchesFilter({
      ...stretchesFilter,
      [event.target.value]: event.target.checked,
    });
  };
  const fetchData = async () => {
    const query = qs.stringify({}, { encodeValuesOnly: true });
    const resultCategories = await axios.get(
      `${process.env.REACT_APP_STRAPI_URL}/api/product-categories?${query}`
    );
    let temp = {};
    if (state !== null)
      resultCategories.data.data.map((item) =>
        state.filter === item.id
          ? (temp[item.id] = true)
          : (temp[item.id] = false)
      );
    else resultCategories.data.data.map((item) => (temp[item.id] = false));
    setCategoriesFilter(temp);

    const resultColors = await axios.get(
      `${process.env.REACT_APP_STRAPI_URL}/api/product-colors?${query}`
    );
    temp = {};
    resultColors.data.data.map((item) => (temp[item.id] = false));
    setColorsFilter(temp);

    const resultOrigins = await axios.get(
      `${process.env.REACT_APP_STRAPI_URL}/api/product-origins?${query}`
    );
    temp = {};
    resultOrigins.data.data.map((item) => (temp[item.id] = false));
    setOriginsFilter(temp);

    const resultPatterns = await axios.get(
      `${process.env.REACT_APP_STRAPI_URL}/api/product-patterns?${query}`
    );
    temp = {};
    resultPatterns.data.data.map((item) => (temp[item.id] = false));
    setPatternsFilter(temp);

    const resultWidths = await axios.get(
      `${process.env.REACT_APP_STRAPI_URL}/api/product-widths?${query}`
    );
    temp = {};
    resultWidths.data.data.map((item) => (temp[item.id] = false));
    setWidthsFilter(temp);

    const resultStretches = await axios.get(
      `${process.env.REACT_APP_STRAPI_URL}/api/product-stretches?${query}`
    );
    temp = {};
    resultStretches.data.data.map((item) => (temp[item.id] = false));
    setStretchesFilter(temp);

    setCategories(resultCategories.data.data);
    setColors(resultColors.data.data);
    setOrigins(resultOrigins.data.data);
    setPatterns(resultPatterns.data.data);
    setWidths(resultWidths.data.data);
    setStretches(resultStretches.data.data);
  };

  useEffect(() => {
    let abortController = new AbortController();  
    fetchData();
    return () => {  
      abortController.abort();  
      }  
  }, [state]);

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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h3>DANH MỤC</h3>
        <Button
          onClick={() => {
            const temp = Object.assign({}, categoriesFilter);
            Object.keys(temp).forEach(function (k) {
              temp[k] = false;
            });
            setCategoriesFilter(temp);
          }}
        >
          Clear
        </Button>
      </Box>

      {categories.map((item) => (
        <FormGroup key={item.id}>
          <FormControlLabel
            control={
              <Checkbox
                value={item.id}
                name={item.attributes.name}
                onChange={handleCategoryChange}
                checked={categoriesFilter[item.id]}
              />
            }
            label={item.attributes.name}
          />
        </FormGroup>
      ))}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h3>MÀU CHỦ ĐẠO</h3>
        <Button
          onClick={() => {
            const temp = Object.assign({}, colorsFilter);
            Object.keys(temp).forEach(function (k) {
              temp[k] = false;
            });
            setColorsFilter(temp);
          }}
        >
          Clear
        </Button>
      </Box>

      {colors.map((item) => (
        <FormGroup key={item.id}>
          <FormControlLabel
            control={
              <Checkbox
                value={item.id}
                onChange={handleColorChange}
                checked={colorsFilter[item.id]}
              />
            }
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h3>XUẤT XỨ</h3>
        <Button
          onClick={() => {
            const temp = Object.assign({}, originsFilter);
            Object.keys(temp).forEach(function (k) {
              temp[k] = false;
            });
            setOriginsFilter(temp);
          }}
        >
          Clear
        </Button>
      </Box>

      {origins.map((item) => (
        <FormGroup key={item.id}>
          <FormControlLabel
            control={
              <Checkbox
                value={item.id}
                name={item.attributes.name}
                onChange={handleOriginChange}
                checked={originsFilter[item.id]}
              />
            }
            label={item.attributes.name}
          />
        </FormGroup>
      ))}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h3>KIỂU MẪU</h3>
        <Button
          onClick={() => {
            const temp = Object.assign({}, patternsFilter);
            Object.keys(temp).forEach(function (k) {
              temp[k] = false;
            });
            setPatternsFilter(temp);
          }}
        >
          Clear
        </Button>
      </Box>

      {patterns.map((item) => (
        <FormGroup key={item.id}>
          <FormControlLabel
            control={
              <Checkbox
                value={item.id}
                name={item.attributes.name}
                onChange={handlePatternChange}
                checked={patternsFilter[item.id]}
              />
            }
            label={item.attributes.name}
          />
        </FormGroup>
      ))}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h3>CHIỀU RỘNG</h3>
        <Button
          onClick={() => {
            const temp = Object.assign({}, widthsFilter);
            Object.keys(temp).forEach(function (k) {
              temp[k] = false;
            });
            setWidthsFilter(temp);
          }}
        >
          Clear
        </Button>
      </Box>
      {widths.map((item) => (
        <FormGroup key={item.id}>
          <FormControlLabel
            control={
              <Checkbox
                value={item.id}
                name={item.attributes.name}
                onChange={handleWidthChange}
                checked={widthsFilter[item.id]}
              />
            }
            label={item.attributes.name}
          />
        </FormGroup>
      ))}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h3>ĐỘ CO GIÃN</h3>
        <Button
          onClick={() => {
            const temp = Object.assign({}, stretchesFilter);
            Object.keys(temp).forEach(function (k) {
              temp[k] = false;
            });
            setStretchesFilter(temp);
          }}
        >
          Clear
        </Button>
      </Box>

      {stretches.map((item) => (
        <FormGroup key={item.id}>
          <FormControlLabel
            control={
              <Checkbox
                value={item.id}
                name={item.attributes.name}
                onChange={handleStretchChange}
                checked={stretchesFilter[item.id]}
              />
            }
            label={item.attributes.name}
          />
        </FormGroup>
      ))}
    </FormControl>
  );
}
