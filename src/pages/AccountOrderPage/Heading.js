import { Breadcrumbs, Typography, Link, Box } from "@mui/material";
import React from "react";

export default function Heading({ orderId }) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 2 }}>
            <h2>Chi tiết đơn hàng {orderId}</h2>
            <Breadcrumbs aria-label="breadcrumb">
                <Link
                    underline="hover"
                    color="inherit"
                    href="/"
                >
                    Trang chủ
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/account"
                >
                    Tài khoản
                </Link>
                <Typography color="#0f0d0c">
                    Đơn hàng
                </Typography>
            </Breadcrumbs>
        </Box>

    )
}