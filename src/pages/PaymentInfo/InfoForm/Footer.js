import { useNavigate } from "react-router-dom"
import { Stack, Button } from '@mui/material'
export default function Footer({ paymentInfo }) {
    const navigate = useNavigate()
    return (
        <Stack
            direction={{ xs: "row" }}
            justifyContent="space-between"
        >
            <Button
                onClick={() => navigate("/cart")}
                variant="contained"
                sx={{
                    backgroundColor: "#384257",
                    my: 2,
                    fontSize: "0.8rem",
                    "&:hover": { bgcolor: "#242e45" },
                }}
            >
                {`< Trở về giỏ hàng`}
            </Button>
            <Button
                onClick={() => navigate("/payment/delivery", { state: paymentInfo })}
                variant="contained"
                sx={{
                    backgroundColor: "#384257",
                    my: 2,
                    fontSize: "0.8rem",
                    "&:hover": { bgcolor: "#242e45" },
                }}
            >
                {`Đến trang vận chuyển >`}
            </Button>
        </Stack>
    )

}