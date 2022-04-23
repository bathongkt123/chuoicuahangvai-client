import Box from "@mui/material/Box";
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    InputBase,
} from "@mui/material";
import { Typography } from "@mui/material";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Paying() {
    const navigate = useNavigate();
    const [cookie, setCookie] = useCookies(["cart"]);
    const [checkTerm, setCheckTerm] = useState(false);
    const handleCheckTerm = (e) => {
        setCheckTerm(e.target.checked);
    };
    const handlePaying = () => {
        if (checkTerm) {
            setCookie("cart", { ...cookie['cart'] }, { path: "/" });
            navigate("/payment/delivery");
        } else {
            toast.error("Vui lòng chấp nhận Điều khoản để tiếp tục");
        }
    };

    return (
        <Box
            sx={{
                my: 1,
                px: 4,
                bgcolor: "#384257",
                "&:hover": { bgcolor: "#242e45" },
            }}
        >
            Thanh toán
        </Button>
        </FormControl >
      </Box >
    </Box >
  );
}
