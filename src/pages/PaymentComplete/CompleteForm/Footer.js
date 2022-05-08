import { Stack, Button, Backdrop, CircularProgress, Alert, Snackbar } from "@mui/material"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
export default function Footer({ paymentInfo }) {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    const [openFailMessage, setOpenFailMessage] = useState(false)
    const handleCloseAlert = (event, reason) => {
        // if (reason === 'clickaway') {
        //     return;
        // }
        setOpenAlert(false);
    };
    const handleCloseFailMessage = (event, reason) => {
        // if (reason === 'clickaway') {
        //     return;
        // }
        setOpenFailMessage(false);
    };
    const handleOrder = async () => {
        if (!paymentInfo.paymentType) {
            setOpenAlert(true)
            return
        }
        setLoading(true)
        await axios.post(`${process.env.REACT_APP_STRAPI_URL}/api/cart/save`, paymentInfo)
            .then((response) => {
                setLoading(false)
                const url = response.data.url
                url && window.open(url, '_blank')?.focus()
                navigate('/payment/success', { state: paymentInfo })
            })
            .catch((error) => {
                setLoading(false)
                setOpenFailMessage(true)
            });
    }

    const renderAlert = (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={openAlert}
            autoHideDuration={2500}
            onClose={handleCloseAlert}>
            <Alert
                elevation={6}
                variant="filled"
                onClose={handleCloseAlert}
                severity="error"
                sx={{ width: '100%' }}>
                Vui lòng chọn một phương thức thanh toán
            </Alert>
        </Snackbar>
    )
    const renderFailMessage = (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={openFailMessage}
            autoHideDuration={2500}
            onClose={handleCloseFailMessage}>
            <Alert
                elevation={6}
                variant="filled"
                onClose={handleCloseFailMessage}
                severity="error"
                sx={{ width: '100%' }}>
                Đã xảy ra lỗi từ hệ thống, vui lòng thử lại lúc khác
            </Alert>
        </Snackbar>
    )
    const renderLoading = (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
        >
            <Button
                onClick={() => navigate('/payment/delivery', { state: paymentInfo })}
                variant="contained"
                sx={{ backgroundColor: "#384257", my: 2, fontSize: '0.8rem', "&:hover": { bgcolor: "#242e45" }, }}
            >
                {`< Trở về trang vận chuyển`}
            </Button>

            <Button
                variant="contained"
                sx={{ backgroundColor: "#384257", p: 2, "&:hover": { bgcolor: "#242e45" }, }}
                size="large"
                onClick={handleOrder}
            >
                Đặt hàng
            </Button>
            {renderAlert}
            {renderFailMessage}
            {renderLoading}
        </Stack>

    )
}