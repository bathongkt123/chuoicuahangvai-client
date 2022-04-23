import { Container } from "@mui/material";
import React from "react";
import Paying from "./Paying";
import ProductTable from "./ProductTable";
import Heading from "./Heading";
import { useCookies } from "react-cookie";
export default function CartPage() {
    const [cookie, setCookie] = useCookies(["cart"]);
    const cart = cookie['cart'] || {}
    const setCart = (cart) => setCookie("cart", cart, { path: "/" })
    return (
        <Container maxWidth='lg'>
            <Heading />
            <ProductTable cart={cart} setCart={setCart} />
            <Paying />
        </Container>
    )
}