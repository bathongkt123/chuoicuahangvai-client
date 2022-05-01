import { Fragment, useEffect, useState } from "react";
import { MenuItem, TextField, Box, Select, FormControl, InputLabel, Typography } from "@mui/material";
import axios from 'axios'
import qs from 'qs'
export default function Form({ contact, setContact }) {
    const handleEmail = (e) => {
        setContact({ ...contact, email: e.target.value })
    }
    const handlLastname = (e) => {
        setContact({ ...contact, lastname: e.target.value })
    }
    const handleFirstname = (e) => {
        setContact({ ...contact, firstname: e.target.value })
    }
    const handlePhone = (e) => {
        setContact({ ...contact, phone: e.target.value })
    }
    const handleAddress = (e) => {
        setContact({ ...contact, address: e.target.value })
    }
    //handle three level address
    const handleCity = (e) => {
        e.preventDefault();
        setContact({ ...contact, city: e.target.value, district: '', wardId: '', ward: '' })
    }
    const handleDistrict = (e) => {
        e.preventDefault();
        setContact({ ...contact, district: e.target.value, wardId: '', ward: '' })
    }
    const handleWard = (e, child) => {
        e.preventDefault();
        setContact({ ...contact, wardId: e.target.value, ward: child.props.children })

    }
    //get the city, district and ward from api
    const [cities, setCities] = useState([])
    const [districts, setDistricts] = useState([])
    const [wards, setWards] = useState([])

    //fetch cities
    useEffect(() => {
        const fetchCities = async () => {
            const response = await axios.get(
                `${process.env.REACT_APP_STRAPI_URL}/api/cities`
            );
            setCities(response.data.data)
        };
        fetchCities()
    }, [])
    //fetch districts
    useEffect(() => {
        if (!contact.city) return
        const fetchDistricts = async () => {
            const query = qs.stringify(
                { city: contact.city },
                { encodeValuesOnly: true });
            const response = await axios.get(
                `${process.env.REACT_APP_STRAPI_URL}/api/districts?${query}`
            );
            setDistricts(response.data.data)
            setWards([])
        };
        fetchDistricts()
    }, [contact.city]
    )
    // fetch wards
    useEffect(() => {
        if (!contact.district) return
        const fetchWards = async () => {
            const query = qs.stringify(
                { city: contact.city, district: contact.district },
                { encodeValuesOnly: true }
            );
            const response = await axios.get(
                `${process.env.REACT_APP_STRAPI_URL}/api/wards?${query}`
            );

            setWards(response.data.data)
        };
        fetchWards()
    }, [contact.district]
    )
    return (
        <Fragment>
            <Typography variant="h5" my={4}>Thông tin liên hệ</Typography>
            <TextField
                label="Email"
                size="large"
                fullWidth
                sx={{ display: "inline-block" }}
                value={contact.email}
                onChange={handleEmail}
            ></TextField>
            <Box sx={{ width: "100%", mt: 4 }}>
                <Typography variant="h5">Địa chỉ liên lạc</Typography>
                <Box sx={{ display: "flex", my: 5 }}>
                    <TextField
                        label="Họ và tên lót"
                        size="large"
                        fullWidth
                        sx={{ display: "inline-block" }}
                        value={contact.lastname}
                        onChange={handlLastname}
                    ></TextField>
                    <Box width={20}></Box>
                    <TextField
                        label="Tên"
                        size="large"
                        fullWidth
                        sx={{ display: "inline-block" }}
                        value={contact.firstname}
                        onChange={handleFirstname}
                    ></TextField>
                </Box>

                <TextField
                    label="Địa chỉ"
                    size="large"
                    fullWidth
                    sx={{ display: "inline-block" }}
                    value={contact.address}
                    onChange={handleAddress}
                ></TextField>

                <FormControl fullWidth sx={{ mt: 5 }}>
                    <InputLabel>Chọn tỉnh/thành</InputLabel>
                    <Select
                        label="Chọn tỉnh/thành"
                        size="large"
                        value={contact.city}
                        onChange={handleCity}
                    >
                        {
                            cities.map((city) =>
                                <MenuItem key={city} value={city}>{city}</MenuItem>
                            )
                        }
                    </Select>
                </FormControl>

                <Box sx={{ display: "flex" }}>
                    <FormControl fullWidth sx={{ mt: 5 }}>
                        <InputLabel id="demo-simple-select-label">
                            Chọn quận/huyện
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Chọn quận/huyện"
                            size="large"
                            value={contact.district}
                            onChange={handleDistrict}
                        >
                            {
                                districts.map((district) =>
                                    <MenuItem key={district} value={district}>{district}</MenuItem>
                                )
                            }
                        </Select>
                    </FormControl>
                    <Box width={20}></Box>
                    <FormControl fullWidth sx={{ mt: 5 }}>
                        <InputLabel id="demo-simple-select-label">
                            Chọn phường/xã
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Chọn phường/xã"
                            size="large"
                            value={contact.wardId}
                            onChange={handleWard}
                        >
                            {
                                wards.map((ward) =>
                                    <MenuItem key={ward.value} value={ward.value}>{ward.label}</MenuItem>
                                )
                            }
                        </Select>
                    </FormControl>
                </Box>

                <TextField
                    label="Số điện thoại"
                    size="large"
                    fullWidth
                    sx={{ display: "inline-block", mt: 5 }}
                    value={contact.phone}
                    onChange={handlePhone}
                />
            </Box>
            <Box></Box>
        </Fragment>
    )
}