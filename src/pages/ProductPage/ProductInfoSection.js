import { Fragment } from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AddBox, IndeterminateCheckBox } from "@mui/icons-material";
import { IconButton, InputBase, Button } from "@mui/material";
import parse from 'html-react-parser';
const PATTERN = /^(0|([1-9][0-9]*))(?:[.]([0-9]{0,2}))?$/;
const STEP = 1;
function UnitSelect({ length, setLength }) {
  return (
    <Fragment>
      <IconButton
        sx={{ color: "#4e5b73" }}
        component="span"
        onClick={() => setLength((length - STEP).toFixed(2) * 1)}
      >
        <IndeterminateCheckBox />
      </IconButton>
      <InputBase
        error
        sx={{
          border: 1,
          width: "8ch",
          px: 1,
          borderColor: "#4e5b73",
        }}
        inputProps={{ style: { textAlign: "center" } }}
        value={length}
        onChange={(e) => {
          const value = e.target.value;
          if (!value) {
            setLength(0);
            return;
          }
          if (PATTERN.test(value)) {
            setLength(value);
            return;
          }
          e.preventDefault();
        }}
      />
      <IconButton
        sx={{ color: "#4e5b73" }}
        component="span"
        onClick={() => setLength((parseFloat(length) + STEP).toFixed(2) * 1)}
      >
        <AddBox />
      </IconButton>
    </Fragment>
  );
}

export default function ProductInfoSection({
  productId,
  productName,
  productSKU,
  productPrice,
  productDescription,
  productPattern,
  productOrigin,
  productWidth,
  productStretch,
  productImages,
}) {
  const [length, setLength] = useState(0.25);
  const total = length * productPrice;
  const parse = require('html-react-parser');
  const description=productDescription
  const htmlParse=parse(description);


  const [cookies, setCookie] = useCookies(["cart"]);

  const addToCart = () => {
    toast.success("Đã thêm vào giỏ hàng");
    const { ...currentCart } = cookies["cart"] || [];
    if (currentCart[productId]) {
      currentCart[productId] = parseFloat(currentCart[productId]) + length;
    } else {
      currentCart[productId] = length;
    }
    setCookie("cart", currentCart, { path: "/" });
  };
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />

      <h1>
        {productName} - {productSKU}
      </h1>
      <h2> {productPrice}đ trên mét</h2>
      {htmlParse}
      <h4>Kiểu mẫu: {productPattern}</h4>
      <h4>Xuất xứ: {productOrigin}</h4>
      <h4>Chiều rộng: {productWidth}</h4>
      <h4>Co giãn: {productStretch}</h4>
      <UnitSelect length={length} setLength={setLength} />
      <h2 style={{ display: "inline" }}>{length} mét</h2>
      <br></br>
      <div style={{ margin: "10px" }}>
        <Button
          onClick={addToCart}
          variant="contained"
          sx={{ p: 2, backgroundColor: "#384257" }}
        >
          Thêm vào giỏ hàng
        </Button>
        <h2 style={{ display: "inline", padding: "10px" }}>{total} đồng</h2>
      </div>
    </div>
  );
}
