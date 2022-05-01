import { Stack, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
export default function Footer({ paymentInfo }) {
    const navigate = useNavigate()
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
        >
            <Button
                onClick={() => navigate('/payment/info', { state: paymentInfo })}
                variant="contained"
                sx={{ backgroundColor: "#384257", my: 2, fontSize: '0.8rem', "&:hover": { bgcolor: "#242e45" }, }}
            >
                {`< Thay đổi thông tin`}
            </Button>

            <Button
                onClick={() => navigate('/payment/complete', { state: paymentInfo })}
                variant="contained"
                sx={{ backgroundColor: "#384257", my: 2, fontSize: '0.8rem', "&:hover": { bgcolor: "#242e45" }, }}
            >
                {`Đến trang thanh toán >`}
            </Button>
        </Stack>
    )
}