import Heading from "./Heading";
import DeliveryForm from "./DeliveryForm";
import { Container, Divider } from "@material-ui/core";


export default function LeftPanel() {
    return (
        <Container maxWidth='lg'>
            <Heading />
            <Divider variant="middle" />
            <DeliveryForm />
            <Divider variant="middle" />
        </Container>
    )
}