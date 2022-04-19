
import Heading from "./Heading";
import OrderDetailTable from "./OrderDetailTable";
import { Container } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

export default function AccountOrderPage() {
    const { orderId } = useParams()
    return (
        <Container maxWidth='lg'>
            <Box>{orderId}</Box>
            <Heading orderId={orderId} />
            <OrderDetailTable />
        </Container>
    )
}