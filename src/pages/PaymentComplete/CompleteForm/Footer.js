import { Stack, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
export default function Footer({ paymentInfo }) {
    const navigate = useNavigate()
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
            >
                Đặt hàng
            </Button>
        </Stack>
    )
}