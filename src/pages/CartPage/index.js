import { Container } from "@mui/material";
import ProductTable from "./ProductTable";
import Heading from "./Heading";

export default function CartPage() {

    return (
        <Container maxWidth='lg'>
            <Heading />
            <ProductTable />
        </Container>
    )
}