import { Breadcrumbs, Typography, Link, Box } from "@mui/material";
import React from "react";

export default function Heading() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 2 }}>
            <h2>Xin chào, Lê Bá Thông</h2>
            <Breadcrumbs aria-label="breadcrumb">
                <Link
                    underline="hover"
                    color="inherit"
                    href="/"
                >
                    Trang chủ
                </Link>
                <Typography color="#0f0d0c">
                    Tài khoản
                </Typography>
            </Breadcrumbs>
        </Box>

    )
}