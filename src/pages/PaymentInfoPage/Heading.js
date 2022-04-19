import { Breadcrumbs, Typography, Link, Box } from "@mui/material";
import React from "react";

export default function Heading() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 2 }}>
            <h2>Royal Fabric</h2>
            <Breadcrumbs aria-label="breadcrumb">
                <Link
                    underline="hover"
                    color="inherit"
                    href="/cart"
                >
                    Giỏ hàng
                </Link>
                <Typography color="#0f0d0c">
                    <Box sx={{fontWeight:700}}>
                    Thông tin
                    </Box>
                </Typography>
                <Typography color="#0f0d0c">
                    Vận chuyển
                </Typography>
                <Typography color="#0f0d0c">
                    Thanh toán
                </Typography>
            </Breadcrumbs>
        </Box>

    )
}