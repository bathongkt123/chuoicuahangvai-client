import { Box, Container } from "@mui/material";
import OrderInfo from "./OrderInfo";
import DeliveryForm from "./DeliveryForm";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios'
export default function PaymentShipment() {
    const { state } = useLocation()
    const [paymentInfo, setPaymentInfo] = useState({
        skus: [],
        price: 0,
        deliveryInfo:
        {
            email: '',
            firstname: '',
            lastname: '',
            address: '',
            city: '',
            district: '',
            ward: '',
            wardId: '',
            phone: '',
        },
        deliveryMethods: []
    })
    //set method 
    const [method, setMethod] = useState(state.deliveryMethod || { id: '', cost: 0 })
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.post(`${process.env.REACT_APP_STRAPI_URL}/api/cart/delivery`, state)
            setPaymentInfo({ ...state, ...response.data })
        }
        fetchData()
    }, [state])
    return (
        <Box sx={{ display: 'flex', height: '100vh', flexDirection: { xs: 'column', md: 'row' } }}>
            <Container sx={{ flexGrow: 1, flexBasis: 0, bgcolor: '#EEEDE8' }}>
                <DeliveryForm paymentInfo={paymentInfo} method={method} setMethod={setMethod} />
            </Container>
            <Container sx={{ flexGrow: 1, flexBasis: 0 }}>
                <OrderInfo skus={paymentInfo.skus} price={paymentInfo.price} deliveryMethod={method} />
            </Container>
        </Box>
    )
}