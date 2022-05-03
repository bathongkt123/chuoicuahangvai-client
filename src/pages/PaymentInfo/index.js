import { Box, Container } from "@mui/material";
import OrderInfo from "./OrderInfo";
import InfoForm from "./InfoForm";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function PaymentInfo() {
    const { state } = useLocation()
    //fetch data from api and insert to current state
    const [paymentInfo, setPaymentInfo] = useState(state)
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.post(`${process.env.REACT_APP_STRAPI_URL}/api/cart/information`, paymentInfo)
            setPaymentInfo({ ...paymentInfo, ...response.data })
        }
        fetchData()
    }, [])
    //set state to form contact info
    const [contact, setContact] = useState(
        paymentInfo.deliveryInfo ||
        {
            email: '',
            firstname: '',
            lastname: '',
            address: '',
            city: '',
            district: '',
            wardId: '',
            ward: '',
            phone: '',
        }
    )
    return (
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
            <Container sx={{ flexGrow: 1, flexBasis: 0, bgcolor: '#EEEDE8' }}>
                <InfoForm paymentInfo={paymentInfo} contact={contact} setContact={setContact} />
            </Container>
            <Container sx={{ flexGrow: 1, flexBasis: 0 }}>
                <OrderInfo skus={paymentInfo.skus} price={paymentInfo.price} deliveryMethod={paymentInfo.deliveryMethod} />
            </Container>
        </Box>
    )
}