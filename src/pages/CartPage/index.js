import { Container } from "@mui/material";
import React from "react";
import Paying from "./Paying";
import ProductTable from "./ProductTable";
import Heading from "./Heading";

export default function CartPage() {
    return (
        <Container maxWidth='xl'>
            <Heading />
            <ProductTable />
            <Paying />
        </Container>
    )
}