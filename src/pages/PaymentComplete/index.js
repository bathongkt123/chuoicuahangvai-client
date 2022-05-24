import { Box, Container } from "@mui/material";
import OrderInfo from "./OrderInfo";
import CompleteForm from "./CompleteForm";
import { useLocation } from "react-router-dom";
import axios from 'axios'
import { useState, useEffect } from "react";
export default function PaymentComplete() {
    const { state } = useLocation()
    const [paymentInfo, setPaymentInfo] = useState({
        paymentMethods: [],
        ...state,
    })
    const [paymentType, setPaymentType] = useState(paymentInfo.paymentType || '')
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.post(`${process.env.REACT_APP_STRAPI_URL}/api/cart/complete`, paymentInfo)
            setPaymentInfo({ ...paymentInfo, ...response.data })
        }
        fetchData()
    }, [])
    return (
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row', height: '100vh' } }}>
            <Container sx={{ flexGrow: 1, flexBasis: 0, bgcolor: '#EEEDE8' }}>
                <CompleteForm paymentInfo={paymentInfo} paymentType={paymentType} setPaymentType={setPaymentType} />
            </Container>
            <Container sx={{ flexGrow: 1, flexBasis: 0 }}>
                <OrderInfo skus={paymentInfo.skus} price={paymentInfo.price} deliveryMethod={paymentInfo.deliveryMethod} voucher={paymentInfo.voucher} />
            </Container>
        </Box>
    )
}