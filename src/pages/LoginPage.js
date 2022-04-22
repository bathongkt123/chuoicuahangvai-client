import React from "react";
import {
    Box,
    Breadcrumbs,
    Button,
    Container,
    Link,
    TextField,
    Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate()

    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    my: 2,
                }}
            >
                <h2>ĐĂNG NHẬP</h2>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" component="button" variant='body1' color="inherit" onClick={() => navigate('/')} >
                        Trang chủ
                    </Link>

                    <Typography color="#0f0d0c">Đăng nhập</Typography>
                </Breadcrumbs>
            </Box>
            <Container maxWidth="sm" sx={{ my: 2 }}>
                <TextField
                    label="Email"
                    size="small"
                    sx={{ minWidth: "60ch" }}
                ></TextField>
                <Box sx={{ my: 2 }}></Box>
                <TextField
                    label="Mật khẩu"
                    type="password"
                    size="small"
                    sx={{ minWidth: "60ch" }}
                ></TextField>
                <Box sx={{ my: 1 }}></Box>
                <Box sx={{ mt: 2 }}>
                    <Button
                        onClick={() => navigate('/login')}
                        variant="contained"
                        sx={{ backgroundColor: "#384257" }}
                    >
                        Đăng nhập
                    </Button>
                    <Link underline="hover" component="button" color="inherit"
                        onClick={() => navigate('/forgotpassword')} sx={{ mx: 2, fontWeight: 'bold', fontSize: '1rem' }} >
                        Quên mật khẩu ?
                    </Link>
                </Box>
                <h1 style={{ textAlign: "left" }}>KHÁCH HÀNG MỚI ?</h1>
                <Button
                    onClick={() => navigate('/register')}
                    variant="contained"
                    sx={{ backgroundColor: "#384257" }}
                >
                    Đăng ký
                </Button>
            </Container>
        </Box>
    );
}
