import { FormControl, Select, InputLabel, MenuItem } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import Address from "./Address";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import qs from "qs";

export default function FormInfo({ addContact, edit, contacts }) {
  const [contact, setContact] = useState({
    lastname: "",
    firstname: "",
    address: "",
    address_three_levels: "",
    phone: "",
    is_default: false,
  });
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
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
    // let city = document.getElementsByName("city")[0];

    // city = city.options[city.selectedIndex].value;
    // setCity(city);
    // fetchDistrictsData(city);
    setCity(e.target.value);
    fetchDistrictsData(e.target.value);
  };

  const handleChangeDistrict = (e) => {
    e.preventDefault();
    // let city = document.getElementsByName("city")[0];
    // city = city.options[city.selectedIndex].value;
    // let district = document.getElementsByName("district")[0];
    // district = district.options[district.selectedIndex].value;
    setDistrict(e.target.value);
    fetchWardsData(e.target.value, city);
  };

  const handleChangeWard = (e) => {
    e.preventDefault();
    // let ward = document.getElementsByName("ward")[0];
    // ward = ward.options[ward.selectedIndex].value;
    setWard(e.target.value);
    setContact({ ...contact, address_three_levels: e.target.value });
  };
  useEffect(() => {
    async function fetchData() {
      await fetchCitiesData();
      await fetchDistrictsData(city);
      await fetchWardsData(district, city);
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios.post(
        `${process.env.REACT_APP_STRAPI_URL}/api/auth/receive-address
      `,
        {
          lastname: contact.lastname,
          firstname: contact.firstname,
          address: contact.address,
          address_three_levels: "1",
          phone: contact.phone,
          is_default: contact.is_default,
        }
      );
      // console.log("ok");
    } catch (response) {
      console.log(response.response.data);
    }
  };

  // console.log(contact.is_default);
  // useEffect(() => {
  //   if (edit) {
  //     setContact(contacts[edit]);
  //   }
  // }, [edit, contacts]);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ display: "flex", my: 5 }}>
        <TextField
          label="Họ và tên lót"
          size="large"
          fullWidth
          sx={{ display: "inline-block" }}
          value={contact.lastname}
          onChange={(e) => setContact({ ...contact, lastname: e.target.value })}
        ></TextField>
        <Box width={20}></Box>
        <TextField
          label="Tên"
          size="large"
          fullWidth
          sx={{ display: "inline-block" }}
          value={contact.firstname}
          onChange={(e) =>
            setContact({ ...contact, firstname: e.target.value })
          }
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
        label="Số điện thoại"
        size="large"
        fullWidth
        sx={{ display: "inline-block", mt: 5 }}
        value={contact.phone}
        onChange={(e) => setContact({ ...contact, phone: e.target.value })}
      ></TextField>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={contact.is_default} />}
          onChange={(e) =>
            setContact({ ...contact, is_default: e.target.checked })
          }
          label="Địa chỉ mặc định"
        />
      </FormGroup>
      <Box textAlign="center">
        <Button
          variant="contained"
          size="large"
          sx={{ backgroundColor: "#384257", my: 4 }}
          // onClick={addContact(contact)}
          onClick={handleSubmit}
        >
          {edit ? "Lưu lại" : "Thêm vào"}
        </Button>
      </Box>
    </Box>
  );
}
