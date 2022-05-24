import { Fragment, useEffect, useState } from "react";
import { MenuItem, TextField, Box, Select, FormControl, InputLabel, Typography, Link, FormHelperText } from "@mui/material";
import AdressesDiaglog from './AdressesDiaglog'
import axios from 'axios'
import qs from 'qs'
import useAuth from "auth/useAuth";

export default function Form({ contact, setContact, receiveAddress, errors }) {
    const { token } = useAuth()
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
        };
        fetchDistricts()
    }, [contact.city]
    )
    // fetch wards
    useEffect(() => {

        const fetchWards = async () => {
            if (!contact.district) {
                setWards([])
                return
            }
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
    }, [contact.district, contact.city]
    )
    //Addresses Dialog
    const [openDialog, setOpenDialog] = useState(false);
    const handleOpenDialog = () => {
        setOpenDialog(true)
    }
    const handleCloseDialog = () => {
        setOpenDialog(false)
    }
    const handleClickAddress = (address) => () => {
        setContact({ ...contact, ...address })
        setOpenDialog(false)
    }
    //validate form 

    return (
        <Fragment>
            <Typography variant="h5" my={3}>Thông tin liên hệ</Typography>
            <TextField
                label="Email"
                size="large"
                fullWidth
                sx={{ display: "inline-block" }}
                value={contact.email}
                onChange={handleEmail}
                placeholder='abc@xyz.com'
                required
                error={Boolean(errors.email.message())}
                helperText={errors.email.message()}
                // inputProps={
                //     { readOnly: Boolean(token), }
                // }
                disabled={Boolean(token)}
            ></TextField>
            <Box sx={{ display: 'flex', alignItems: 'center', my: 3 }}>
                <Typography variant="h5">Địa chỉ liên lạc</Typography>
                <Box sx={{ flexGrow: 1 }} />
                {Boolean(receiveAddress) &&
                    <Fragment>
                        <Link color='inherit'
                            fontWeight='bold'
                            variant='body1'
                            underline='hover'
                            component='button'
                            onClick={handleOpenDialog}
                        >
                            Chọn từ danh sách địa chỉ
                        </Link>
                        <AdressesDiaglog
                            open={openDialog}
                            onClickAddress={handleClickAddress}
                            onClose={handleCloseDialog}
                            receiveAddress={receiveAddress} />
                    </Fragment>
                }
            </Box>
            <Box sx={{ display: "flex", mb: 5 }}>
                <TextField
                    label="Họ và tên lót"
                    size="large"
                    fullWidth
                    sx={{ display: "inline-block" }}
                    required
                    value={contact.lastname}
                    onChange={handlLastname}
                    error={Boolean(errors.lastname.message())}
                    helperText={errors.lastname.message()}
                ></TextField>
                <Box width={20}></Box>
                <TextField
                    label="Tên"
                    size="large"
                    fullWidth
                    required
                    sx={{ display: "inline-block" }}
                    value={contact.firstname}
                    onChange={handleFirstname}
                    error={Boolean(errors.firstname.message())}
                    helperText={errors.firstname.message()}
                ></TextField>
            </Box>

            <TextField
                label="Địa chỉ"
                size="large"
                fullWidth
                required
                sx={{ display: "inline-block" }}
                value={contact.address}
                onChange={handleAddress}
                error={Boolean(errors.address.message())}
                helperText={errors.address.message()}
            ></TextField>

            <FormControl fullWidth sx={{ mt: 5 }}>
                <InputLabel id="demo-simple-select-label0" required>Chọn tỉnh/thành</InputLabel>
                <Select
                    labelId="demo-simple-select-label0"
                    label="Chọn tỉnh/thành"
                    size="large"
                    required
                    value={cities.length ? contact.city : ''}
                    onChange={handleCity}
                    error={Boolean(errors.city.message())}
                >
                    {
                        cities.map((city) =>
                            <MenuItem key={city} value={city}>{city}</MenuItem>
                        )
                    }
                </Select>
                <FormHelperText sx={{ color: 'red' }}>{errors.city.message()}</FormHelperText>
            </FormControl>

            <Box sx={{ display: "flex" }}>
                <FormControl fullWidth sx={{ mt: 5 }}>
                    <InputLabel id="demo-simple-select-label2" required>
                        Chọn quận/huyện
                    </InputLabel>
                    <Select

                        labelId="demo-simple-select-label2"
                        id="demo-simple-select"
                        label="Chọn quận/huyện"
                        required
                        size="large"
                        value={districts.length ? contact.district : ''}
                        onChange={handleDistrict}
                        error={Boolean(errors.district.message())}

                    >
                        {
                            districts.map((district) =>
                                <MenuItem key={district} value={district}>{district}</MenuItem>
                            )
                        }
                    </Select>
                    <FormHelperText sx={{ color: 'red' }}>{errors.district.message()}</FormHelperText>
                </FormControl>
                <Box width={20}></Box>
                <FormControl fullWidth sx={{ mt: 5 }}>
                    <InputLabel id="demo-simple-select-label3" required>
                        Chọn phường/xã
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label3"
                        id="demo-simple-select"
                        label="Chọn phường/xã"
                        required
                        size="large"
                        value={wards.length ? contact.wardId : ''}
                        onChange={handleWard}
                        error={Boolean(errors.ward.message())}
                    >

                        {

                            wards.map((ward) =>
                                <MenuItem key={ward.value} value={ward.value}>{ward.label}</MenuItem>
                            )

                        }
                    </Select>
                    <FormHelperText sx={{ color: 'red' }}>{errors.ward.message()}</FormHelperText>
                </FormControl>
            </Box>

            <TextField
                label="Số điện thoại"
                size="large"
                placeholder='(+84)91 1357 191'
                required
                fullWidth
                sx={{ display: "inline-block", mt: 5 }}
                value={contact.phone}
                onChange={handlePhone}
                error={Boolean(errors.phone.message())}
                helperText={errors.phone.message()}
            />
        </Fragment>
    )
}