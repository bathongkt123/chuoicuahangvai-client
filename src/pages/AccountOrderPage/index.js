
import Heading from "./Heading";
import OrderDetailTable from "./OrderDetailTable";
import { Container } from "@material-ui/core";
import { useParams } from "react-router-dom";

export default function AccountOrderPage() {
    const { orderId } = useParams()
    return (
        <Container maxWidth='lg' >
            <Heading orderId={orderId} />
            <OrderDetailTable />

        </Container>
    )
}