import { Stack, Button, Backdrop, CircularProgress } from "@mui/material"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { Fragment } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
export default function Footer({ paymentInfo }) {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const handleOrder = async () => {
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
                toast.error("Đặt hàng thất bại, vui lòng kiểm tra lại thông tin")
            });
    }
    return (
        <Fragment>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
            />
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
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
            </Stack>
        </Fragment>

    )
}