
// import Heading from "./Heading";
// import OrderDetailTable from "./OrderDetailTable";
import { Container } from "@mui/material"
import { useParams } from "react-router-dom";

export default function AccountInvoicePage() {
    const { invoiceId } = useParams()
    return (
        // <Container maxWidth='lg' >
        //     <Heading invoiceId={invoiceId} />
        //     <OrderDetailTable invoiceId={invoiceId} />
        // </Container>
        <h1>1234</h1>
    )
}