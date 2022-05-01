import Box from "@mui/material/Box";
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    InputBase,
} from "@mui/material";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Paying({ cart, validateItems }) {
    const navigate = useNavigate();
    const [checkTerm, setCheckTerm] = useState(false);
    const handleCheckTerm = (e) => {
        setCheckTerm(e.target.checked);
    };
    const [checkDebt, setCheckDebt] = useState(false);
    const handleCheckDebt = (e) => {
        setCheckDebt(e.target.checked);
    };
    const [note, setNote] = useState('');
    const handleNote = (e) => {
        setNote(e.target.value);
    };
    const handlePaying = async () => {
        if (!validateItems) {
            toast.error("Vui lòng nhập độ dài sản phẩm phù hợp");
            return
        }
        if (!checkTerm) {
            toast.error("Vui lòng chấp nhận Điều khoản sử dụng và Điều khoản bảo mật");
            return
        }
        const postCartData = [...Object.keys(cart).map((key) => ({ id: Number(key), length: cart[key] * 100 }))]

        navigate('/payment', {
            state: {
                skus: postCartData,
                note: note,
                isDebt: checkDebt,
            }
        })
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "stretch",
            }}
        >
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
            />
            {/* Left Card */}
            <Box
                sx={{
                    my: 2,
                    flexGrow: 1,
                    flexBasis: { md: 0 },
                }}
            >
                <Typography variant="h5">Ghi chú thêm</Typography>
                <Box height={8}></Box>
                <InputBase
                    sx={{
                        border: 1,
                        p: 1,
                    }}
                    placeholder="Yêu cầu về vận chuyển hàng hóa,..."
                    fullWidth
                    multiline
                    rows={6}
                    value={note}
                    onChange={handleNote}
                />
            </Box>
            {/* <Box width={32}></Box> */}
            <Box
                sx={{
                    my: 2,
                    flexGrow: 1,
                    flexBasis: { md: 0 },
                }}
            >
                <FormControl
                    component="fieldset"
                    sx={{ display: "flex", alignItems: "self-end" }}
                >
                    <FormControlLabel
                        control={<Checkbox checked={checkDebt} onChange={handleCheckDebt} />}
                        label="Thanh toán đơn hàng này sau (mua nợ)"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={checkTerm} onChange={handleCheckTerm} />
                        }
                        label=" Chấp nhận Điều khoản sử dụng và Điều khoản bảo mật"
                        labelPlacement="end"
                    />

                    <Button
                        variant="contained"
                        onClick={handlePaying}
                        sx={{
                            my: 1,
                            px: 4,
                            bgcolor: "#384257",
                            "&:hover": { bgcolor: "#242e45" },
                        }}
                    >
                        Thanh toán
                    </Button>
                </FormControl>
            </Box>
        </Box>
    );
}
