import {
    Link,
    Typography,
    Box,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Stack,
    Divider
} from "@mui/material";
import React from "react";
import { Button } from "@mui/material";
import Heading from "./Heading";
import { useNavigate } from "react-router-dom";
export default function DeliveryForm() {
    const navigate = useNavigate()
    return (
        <React.Fragment>
            <Heading />
            <Divider variant="middle" />
            <Box sx={{ display: "flex", my: 4, alignItems: 'center' }}>
                <Typography variant="h5">Thông tin liên hệ</Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Typography variant="body1">
                    Đã có tài khoản?
                </Typography>
                <Box width={8} />
                <Link
                    onClick={() => navigate('/login')}
                    component='button'
                    variant="h6"
                    color="inherit"
                    underline="hover"
                    sx={{ fontWeight: "bold" }}
                >
                    Đăng nhập
                </Link>
            </Box>

            <TextField
                label="Email"
                size="large"
                fullWidth
                sx={{ display: "inline-block" }}
            ></TextField>
            <Box sx={{ width: "100%", mt: 4 }}>
                <Typography variant="h5">Địa chỉ liên lạc</Typography>
                <Box sx={{ display: "flex", my: 5 }}>
                    <TextField
                        label="Họ và tên lót"
                        size="large"
                        fullWidth
                        sx={{ display: "inline-block" }}
                    ></TextField>
                    <Box width={20}></Box>
                    <TextField
                        label="Tên"
                        size="large"
                        fullWidth
                        sx={{ display: "inline-block" }}
                    ></TextField>
                </Box>

                <TextField
                    label="Địa chỉ"
                    size="large"
                    fullWidth
                    sx={{ display: "inline-block" }}
                ></TextField>

                <FormControl fullWidth sx={{ mt: 5 }}>
                    <InputLabel id="demo-simple-select-label">Chọn tỉnh/thành</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Chọn tỉnh/thành"
                        size="large"
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
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
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
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
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <TextField
                    label="Số điện thoại"
                    size="large"
                    fullWidth
                    sx={{ display: "inline-block", mt: 5 }}
                />
            </Box>
            <Box>
                <Stack
                    direction={{ xs: 'row' }}
                    justifyContent="space-between"
                    alignItems="flex-start"
                >
                    <Button
                        onClick={() => navigate('/cart')}
                        variant="contained"
                        sx={{ backgroundColor: "#384257", my: 2, fontSize: '0.8rem', "&:hover": { bgcolor: "#242e45" }, }}
                    >
                        {`< Trở về giỏ hàng`}
                    </Button>
                    <Button
                        onClick={() => navigate('/payment/shipment')}
                        variant="contained"
                        sx={{ backgroundColor: "#384257", my: 2, fontSize: '0.8rem', "&:hover": { bgcolor: "#242e45" }, }}
                    >
                        {`Đến trang vận chuyển >`}
                    </Button>
                </Stack>
            </Box>
        </React.Fragment>
    );
}
