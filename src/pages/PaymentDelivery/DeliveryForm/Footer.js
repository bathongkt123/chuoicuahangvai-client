import { Stack, Button, Snackbar, Alert } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
export default function Footer({ paymentInfo }) {
    const navigate = useNavigate()
    const [openAlert, setOpenAlert] = useState(false);
    const handleCloseAlert = (event, reason) => {
        // if (reason === 'clickaway') {
        //     return;
        // }
        setOpenAlert(false);
    };
    const handleToComplete = () => {
        if (!paymentInfo.deliveryMethod.id) {
            setOpenAlert(true)
            return
        }
        navigate('/payment/complete', { state: paymentInfo })
    }
    const renderSnackBar = (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={openAlert}
            autoHideDuration={2500}
            onClose={handleCloseAlert}>
            <Alert
                variant="filled"
                onClose={handleCloseAlert}
                severity="error"
                sx={{ width: '100%' }}>
                Vui lòng chọn một phương thức vận chuyển
            </Alert>
        </Snackbar>
    )

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
                onClick={handleToComplete}
                variant="contained"
                sx={{ backgroundColor: "#384257", my: 2, fontSize: '0.8rem', "&:hover": { bgcolor: "#242e45" }, }}
            >
                {`Đến trang thanh toán >`}
            </Button>
            {renderSnackBar}
        </Stack>
    )
}