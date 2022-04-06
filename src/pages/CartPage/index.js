import { Breadcrumbs, Container } from "@mui/material";
import Paying from "./Paying";
import ProductTable from "./ProductTable";
import Title from "./Title";
export default function CartPage() {
    return (
        <Container madwidth="xl" >
            <Title />
            <ProductTable />
            <Paying />
        </Container>
    )
}