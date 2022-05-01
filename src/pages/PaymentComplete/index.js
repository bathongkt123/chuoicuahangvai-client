import { Box, Container } from "@mui/material";
import OrderInfo from "./OrderInfo";
import CompleteForm from "./CompleteForm";
import { useLocation } from "react-router-dom";
import axios from 'axios'
import { useState, useEffect } from "react";
export default function PaymentComplete() {
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
        deliveryMethod: { name: '', cost: 0 }
    })
    const [paymentType, setPaymentType] = useState(state.paymentType || '')
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.post(`${process.env.REACT_APP_STRAPI_URL}/api/cart/complete`, state)
            setPaymentInfo({ ...state, ...response.data })
            console.log({ ...state, ...response.data })
        }
        fetchData()
    }, [state])
    return (
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row', height: '100vh' } }}>
            <Container sx={{ flexGrow: 1, flexBasis: 0, bgcolor: '#EEEDE8' }}>
                <CompleteForm paymentInfo={paymentInfo} paymentType={paymentType} setPaymentType={setPaymentType} />
            </Container>
            <Container sx={{ flexGrow: 1, flexBasis: 0 }}>
                <OrderInfo skus={paymentInfo.skus} price={paymentInfo.price} deliveryMethod={paymentInfo.deliveryMethod} />
            </Container>
        </Box>
    )
}