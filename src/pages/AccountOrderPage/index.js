
import Heading from "./Heading";
import CustomerInfo from "./CustomerInfo";
import TransactionInfo from "./TransactionInfo";
import OrderDetailTable from "./OrderDetailTable";
import { Container } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

export default function AccountOrderPage() {
    const { orderId } = useParams()
    return (
        <Container maxWidth='lg'>
            <Heading orderId={orderId} />
            <OrderDetailTable />
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                <Box sx={{ flexGrow: 1 }} />

                <TransactionInfo />
            </Box>
        </Container>
    )
}