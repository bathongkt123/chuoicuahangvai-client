import { Container } from "@mui/material";
import React from "react";
import Paying from "./Paying";
import ProductTable from "./ProductTable";
import Title from "./Title";
export default function CartPage() {
    return (
        <Container maxWidth='lg'>
            <Title />
            <ProductTable />
            <Paying />
        </Container>
    )
}