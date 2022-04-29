import { FormControl, Select, InputLabel, MenuItem } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import qs from "qs";

export default function FormInfo({ edit, addresses, setAddresses, setEdit }) {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [is_default, setIs_default] = useState(false);
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const resetForm = async () => {
    setLastname("");
    setFirstname("");
    setAddress("");
    setPhone("");
    setIs_default(false);
    setCity("");
    setDistrict("");
    setWard("");
  };
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
    setCity(e.target.value);
    fetchDistrictsData(e.target.value);
  };

  const handleChangeDistrict = (e) => {
    e.preventDefault();
    setDistrict(e.target.value);
    fetchWardsData(e.target.value, city);
  };

  const handleChangeWard = (e) => {
    e.preventDefault();
    setWard(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (edit === null)
      axios
        .post(
          `${process.env.REACT_APP_STRAPI_URL}/api/receive-address
      `,
          {
            data: {
              lastname: lastname,
              firstname: firstname,
              address: address,
              ward_id: ward,
              phone: phone,
              is_default: is_default,
            },
          }
        )
        .then((response) => {
          fetchAddresses();
        });
    else {
      axios
        .put(
          `${process.env.REACT_APP_STRAPI_URL}/api/receive-address/${edit}
        `,
          {
            data: {
              lastname: lastname,
              firstname: firstname,
              address: address,
              ward_id: ward,
              phone: phone,
              is_default: is_default,
            },
          }
        )
        .then((response) => {
          fetchAddresses();
        });
    }
  };

  const fetchEditAddress = async () => {
    if (edit === null) return;
    const query = qs.stringify({}, { encodeValuesOnly: true });

    const resultAddresses = await axios.get(
      `${process.env.REACT_APP_STRAPI_URL}/api/receive-address/${edit}?${query}`
    );

    setLastname(resultAddresses.data[0].name.lastname);
    setFirstname(resultAddresses.data[0].name.firstname);
    setAddress(resultAddresses.data[0].address.address);
    setCity(resultAddresses.data[0].address.address_three_levels.city);
    setDistrict(resultAddresses.data[0].address.address_three_levels.district);
    setWard(resultAddresses.data[0].address.address_three_levels.id);
    setPhone(resultAddresses.data[0].phone);
    setIs_default(resultAddresses.data[0].is_default);
  };
  const fetchAddresses = async () => {
    const query = qs.stringify({}, { encodeValuesOnly: true });

    const resultAddresses = await axios.get(
      `${process.env.REACT_APP_STRAPI_URL}/api/receive-address?${query}`
    );
    setAddresses(resultAddresses.data);
    if (edit) {
      setEdit(null);
      resetForm();
    }
  };

  useEffect(() => {
    async function fetchData() {
      await fetchCitiesData();
      await fetchDistrictsData(city);
      await fetchWardsData(district, city);
    }
    fetchData();
  }, [district]);

  useEffect(() => {
    fetchEditAddress();
  }, [edit]);
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ display: "flex", my: 5 }}>
        <TextField
          required
          label="Họ và tên lót"
          size="large"
          fullWidth
          sx={{ display: "inline-block" }}
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        ></TextField>
        <Box width={20}></Box>
        <TextField
          required
          label="Tên"
          size="large"
          fullWidth
          sx={{ display: "inline-block" }}
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        ></TextField>
      </Box>

      <TextField
        required
        label="Địa chỉ"
        size="large"
        fullWidth
        sx={{ display: "inline-block" }}
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      ></TextField>

      <FormControl fullWidth sx={{ mt: 5 }}>
        <InputLabel id="demo-simple-select-label">Chọn tỉnh/thành</InputLabel>

        <Select
          required
          name="city"
          value={city}
          label="Chọn tỉnh thành"
          size="large"
          onChange={handleChangeCity}
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
      <TextField
        required
        label="Số điện thoại"
        size="large"
        fullWidth
        sx={{ display: "inline-block", mt: 5 }}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      ></TextField>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={is_default} />}
          onChange={(e) => setIs_default(e.target.checked)}
          label="Địa chỉ mặc định"
        />
      </FormGroup>
      <Box textAlign="center">
        <Button
          variant="contained"
          size="large"
          sx={{ backgroundColor: "#384257", my: 4 }}
          onClick={handleSubmit}
        >
          {edit ? "Lưu lại" : "Thêm vào"}
        </Button>
      </Box>
    </Box>
  );
}
