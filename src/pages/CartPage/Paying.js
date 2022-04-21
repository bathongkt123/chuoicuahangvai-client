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
  const [setCookie] = useCookies(["cart"]);
  const [checkTerm, setCheckTerm] = useState(false);

  const handlePaying = () => {
    if (checkTerm) {
      setCookie("cart", products, { path: "/" });
      navigate("/payment/delivery");
    } else {
      toast.error("Vui lòng chấp nhận Điều khoản để tiếp tục");
    }
  };
  const handleCheckTerm = (e) => {
    setCheckTerm(e.target.checked);
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
const products = {
  2: {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    name: "Breakfast",
    defaultNumber: 2,
    unit: 40000,
  },
  10: {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    name: "Burger",
    defaultNumber: 3,
    unit: 20000,
  },
  20: {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    name: "Coffee",
    defaultNumber: 1,
    unit: 15000,
  },
  40: {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    name: "Hats",
    defaultNumber: 2,
    unit: 15000,
  },
  80: {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    name: "Honey",
    defaultNumber: 3,
    unit: 50000,
  },
  100: {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    name: "Bicycle",
    defaultNumber: 1,
    unit: 100000,
  },
  120: {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    name: "Starfish",
    defaultNumber: 2,
    unit: 1000000,
  },
  140: {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    name: "Mushroom",
    defaultNumber: 4,
    unit: 100000,
  },
};
