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
    resultCategories.data.data.map((item) => (temp[item.id] = false));
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
    fetchData();
  }, []);

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
            setCategoriesFilter((prevState) => ({
              ...prevState,
              14: false,
            }));
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
                checked={categoriesFilter.value}
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
        <Button>Clear</Button>
      </Box>

      {colors.map((item) => (
        <FormGroup key={item.id}>
          <FormControlLabel
            control={
              <Checkbox
                value={item.id}
                onChange={handleColorChange}
                checked={colorsFilter.value}
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
        <Button>Clear</Button>
      </Box>

      {origins.map((item) => (
        <FormGroup key={item.id}>
          <FormControlLabel
            control={
              <Checkbox
                value={item.id}
                name={item.attributes.name}
                onChange={handleOriginChange}
                checked={originsFilter.value}
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
        <Button>Clear</Button>
      </Box>

      {patterns.map((item) => (
        <FormGroup key={item.id}>
          <FormControlLabel
            control={
              <Checkbox
                value={item.id}
                name={item.attributes.name}
                onChange={handlePatternChange}
                checked={patternsFilter.value}
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
        <Button>Clear</Button>
      </Box>
      {widths.map((item) => (
        <FormGroup key={item.id}>
          <FormControlLabel
            control={
              <Checkbox
                value={item.id}
                name={item.attributes.name}
                onChange={handleWidthChange}
                checked={widthsFilter.value}
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
        <Button>Clear</Button>
      </Box>

      {stretches.map((item) => (
        <FormGroup key={item.id}>
          <FormControlLabel
            control={
              <Checkbox
                value={item.id}
                name={item.attributes.name}
                onChange={handleStretchChange}
                checked={stretchesFilter.value}
              />
            }
            label={item.attributes.name}
          />
        </FormGroup>
      ))}
    </FormControl>
  );
}
