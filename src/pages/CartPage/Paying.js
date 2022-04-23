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
<<<<<<< HEAD
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
=======
  const navigate = useNavigate();
  const [cookie, setCookie] = useCookies(["cart"]);

  const [checkTerm, setCheckTerm] = useState(false);
  const handleCheckTerm = (e) => {
    setCheckTerm(e.target.checked);
  };
  const handlePaying = () => {
    if (checkTerm) {
      //   setCookie("cart", { ...cookie[cart] }, { path: "/" });
      navigate("/payment/delivery");
    } else {
      toast.error("Vui lòng chấp nhận Điều khoản để tiếp tục");
    }
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
        <Typography variant="h5">Yêu cầu đặc biệt</Typography>
        <Box height={8}></Box>
        <InputBase
          sx={{
            border: 1,
            p: 1,
          }}
          placeholder="Nhập yêu cầu về vận chuyển tại đây"
          fullWidth
          multiline
          rows={6}
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
            control={<Checkbox />}
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
>>>>>>> 511e154d901843ba83af40f77839e143dde839a7
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
