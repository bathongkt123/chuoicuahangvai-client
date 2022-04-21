import { Box, Container } from "@mui/material";
import React from "react";
import OrderInfo from "./OrderInfo";
import LeftPanel from "./LeftPanel";
import { useLocation } from 'react-router-dom';
export default function PaymentPage() {
    return (
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
            <Container sx={{ flexGrow: 1, flexBasis: 0, bgcolor: '#EEEDE8' }}>
                <LeftPanel />
            </Container>
            <Container sx={{ flexGrow: 1, flexBasis: 0 }}>
                <OrderInfo />
            </Container>
        </Box>
    )
}