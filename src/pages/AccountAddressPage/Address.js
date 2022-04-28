import React, { useState, useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { FormControl, Select, InputLabel, MenuItem, Box } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import PropTypes from "prop-types";

const Address = (props) => {
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState(0);
  const fetchCitiesData = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_STRAPI_URL}/api/cities`
    );
    let data = [];
    response.data.data.forEach((item) => {
      data.push({ label: item, value: item });
    });
    setCities(data);
    setDistricts([]);
    setWards([]);
  };
  const fetchDistrictsData = async (city) => {
    if (city === "") return;
    let data = [];
    const query = qs.stringify({ city: city }, { encodeValuesOnly: true });
    const response = await axios.get(
      `${process.env.REACT_APP_STRAPI_URL}/api/districts?${query}`
    );
    response.data.data.forEach((item) => {
      data.push({ label: item, value: item });
    });
    setDistricts(data);
    setWards([]);
  };
  const fetchWardsData = async (district, city) => {
    if (district === "" || city === "") return;
    let data = [];
    const query = qs.stringify(
      { city: city, district: district },
      { encodeValuesOnly: true }
    );
    const response = await axios.get(
      `${process.env.REACT_APP_STRAPI_URL}/api/wards?${query}`
    );
    response.data.data.forEach((item) => {
      data.push({ label: item.label, value: item.value });
    });
    setWards(data);
  };

  const handleChangeCity = (e) => {
    e.preventDefault();
    let city = document.getElementsByName("city")[0];
    city = city.options[city.selectedIndex].value;
    setCity(city);
    fetchDistrictsData(city);
  };

  const handleChangeDistrict = (e) => {
    e.preventDefault();
    let city = document.getElementsByName("city")[0];
    city = city.options[city.selectedIndex].value;
    let district = document.getElementsByName("district")[0];
    district = district.options[district.selectedIndex].value;
    setDistrict(district);
    fetchWardsData(district, city);
  };

  const handleChangeWard = (e) => {
    e.preventDefault();
    let ward = document.getElementsByName("ward")[0];
    ward = ward.options[ward.selectedIndex].value;
    setWard(ward);
  };

  useEffect(() => {
    async function fetchData() {
      setCity(props.city);
      setDistrict(props.district);
      setWard(props.ward);
      await fetchCitiesData();
      await fetchDistrictsData(props.city);
      await fetchWardsData(props.district, props.city);
    }
    fetchData();
  }, [props.address]);

  return (
    <Box>
      <FormControl fullWidth sx={{ mt: 5 }}>
        <InputLabel id="demo-simple-select-label">Chọn tỉnh/thành</InputLabel>

        <Select
          name="city"
          onChange={handleChangeCity}
          value={city}
          label="Chọn tỉnh thành"
          size="large"
        >
          {cities.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
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
            name="district"
            onChange={handleChangeDistrict}
            required
            value={district}
          >
            {districts.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Box width={20}></Box>

        <FormControl fullWidth sx={{ mt: 5 }}>
          <InputLabel id="demo-simple-select-label">Chọn phường/xã</InputLabel>
          <Select
            name="ward"
            required
            onChange={handleChangeWard}
            value={ward}
            label="Chọn phường/xã"
            size="large"
          >
            {wards.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

Address.propTypes = {
  city: PropTypes.string,
  district: PropTypes.string,
  ward: PropTypes.number,
  address: PropTypes.string,
};

export default Address;
