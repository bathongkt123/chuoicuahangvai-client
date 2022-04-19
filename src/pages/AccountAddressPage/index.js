import { Box, Container } from "@mui/material";
import React from "react";
import Heading from "./Heading";
import CustomerInfo from "./CustomerInfo";
import FormInfo from "./FormInfo";

export default function CartPage() {
    return (
        <Container maxWidth='lg'>
            <Heading />
            <Box sx={{ display: 'flex' }}>
                <CustomerInfo />
                <Box width={120} />
                <FormInfo />

            </Box>
        </Container>
    )
}