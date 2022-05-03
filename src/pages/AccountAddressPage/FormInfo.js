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

  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
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
          resetForm();
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
  const handleClose = async (e) => {
    e.preventDefault();
    setEdit(null);
    resetForm();
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

  const handleChangeCity = (e) => {
    e.preventDefault();
    setCity(e.target.value);
    setDistrict("");
    setWard("");
  };
  const handleChangeDistrict = (e) => {
    e.preventDefault();

    setDistrict(e.target.value);
    setWard("");
  };
  const handleChangeWard = (e) => {
    e.preventDefault();
    setWard(e.target.value);
  };
  //get the city, district and ward from api
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  //fetch cities
  useEffect(() => {
    const fetchCities = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_STRAPI_URL}/api/cities`
      );
      setCities(response.data.data);
    };
    fetchCities();
  }, []);
  //fetch districts
  useEffect(() => {
    if (!city) return;
    const fetchDistricts = async () => {
      const query = qs.stringify({ city: city }, { encodeValuesOnly: true });
      const response = await axios.get(
        `${process.env.REACT_APP_STRAPI_URL}/api/districts?${query}`
      );
      setDistricts(response.data.data);
      setWards([]);
    };
    fetchDistricts();
  }, [city]);
  // fetch wards
  useEffect(() => {
    if (!district) return;
    const fetchWards = async () => {
      const query = qs.stringify(
        { city: city, district: district },
        { encodeValuesOnly: true }
      );
      const response = await axios.get(
        `${process.env.REACT_APP_STRAPI_URL}/api/wards?${query}`
      );

      setWards(response.data.data);
    };
    fetchWards();
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
        <InputLabel>Chọn tỉnh/thành</InputLabel>
        <Select
          label="Chọn tỉnh/thành"
          size="large"
          value={city}
          onChange={handleChangeCity}
        >
          {cities.map((city) => (
            <MenuItem key={city} value={city}>
              {city}
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
            value={district}
            onChange={handleChangeDistrict}
          >
            {districts.map((district) => (
              <MenuItem key={district} value={district}>
                {district}
              </MenuItem>
            ))}
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
            value={ward}
            onChange={handleChangeWard}
          >
            {wards.map((ward) => (
              <MenuItem key={ward.value} value={ward.value}>
                {ward.label}
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
      {edit ? (
        <Box
          textAlign="center"
          sx={{ justifyContent: "space-around", display: "flex" }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{ backgroundColor: "#384257", my: 4 }}
            onClick={handleSubmit}
          >
            Lưu lại
          </Button>
          <Box width={50}></Box>
          <Button
            variant="contained"
            size="large"
            sx={{ backgroundColor: "#384257", my: 4 }}
            onClick={handleClose}
          >
            Hủy bỏ
          </Button>
        </Box>
      ) : (
        <Box textAlign="center">
          <Button
            variant="contained"
            size="large"
            sx={{ backgroundColor: "#384257", my: 4 }}
            onClick={handleSubmit}
          >
            Thêm vào
          </Button>
        </Box>
      )}
    </Box>
  );
}
