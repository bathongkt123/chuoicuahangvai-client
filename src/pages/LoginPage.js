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

export default function LoginPage() {
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
                    <Link underline="hover" color="inherit" href="/">
                        Trang chủ
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        sx={{ pointerEvents: "none" }}
                    >
                        Tài khoản
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
                        href="/register"
                        variant="contained"
                        sx={{ backgroundColor: "#384257" }}
                    >
                        Đăng nhập
                    </Button>
                    <Link
                        href="/forgotpassword"
                        color="inherit"
                        underline="hover"
                        sx={{ fontWeight: "bold", px: 1 }}
                    >
                        Quên mật khẩu ?
                    </Link>
                </Box>
                <h1 style={{ textAlign: "left" }}>KHÁCH HÀNG MỚI ?</h1>
                <Button
                    href="/register"
                    variant="contained"
                    sx={{ backgroundColor: "#384257" }}
                >
                    Đăng ký
                </Button>
            </Container>
        </Box>
    );
}
