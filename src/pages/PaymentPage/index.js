import { Box, Container } from "@mui/material";
import React from "react";
import OrderInfo from "./OrderInfo";
import LeftPanel from "./LeftPanel";

export default function PaymentPage() {
    return (
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
            <Container sx={{ flexGrow: 1, flexBasis: 0 }}>
                <LeftPanel />
            </Container>
            <Container sx={{ flexGrow: 1, flexBasis: 0 }}>
                <OrderInfo />
            </Container>
        </Box>
    )
}