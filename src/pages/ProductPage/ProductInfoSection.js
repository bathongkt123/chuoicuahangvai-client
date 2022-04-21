import React from "react";
import { useParams } from "react-router-dom";
import { Data } from "../../productData";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AddBox, IndeterminateCheckBox } from "@mui/icons-material";
import { IconButton, InputBase } from "@mui/material";
function UnitSelect({ number, setNumber }) {
  return (
    <React.Fragment>
      <IconButton
        sx={{ color: "#4e5b73" }}
        component="span"
        onClick={() => number > 0.25 && setNumber(number - 0.25)}
      >
        <IndeterminateCheckBox />
      </IconButton>
      <InputBase
        sx={{ border: 1, borderColor: "#4e5b73", width: "6ch", px: 1 }}
        inputProps={{ style: { textAlign: "center" } }}
        value={number}
        onChange={(e) => {
          const tmp = parseInt(e.target.value);
          setNumber(tmp ? (tmp < 999 ? tmp : 999) : 0.25);
        }}
      ></InputBase>
      <IconButton
        sx={{ color: "#4e5b73" }}
        component="span"
        onClick={() => number < 999 && setNumber(number + 0.25)}
      >
        <AddBox />
      </IconButton>
    </React.Fragment>
  );
}

export default function ProductInfoSection() {
  console.log("abc");
  const [cookies, setCookie] = useCookies();
  // removeCookie('cart', { path: '/' })
  const addToCart = () => {
    toast.success("Đã thêm vào giỏ hàng");
    const currentCart = cookies.cart || {};
    const newCart = {
      ...currentCart,
      [productId]: (currentCart[productId] || 0) + number,
    };
    setCookie("cart", newCart, { path: "/" });
  };

  const [number, setNumber] = useState(0.25);
  const { productId } = useParams();
  const thisProduct = Data.find((prod) => prod.id === productId);
  const total = number * thisProduct.price;
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
      <h1>{thisProduct.name}</h1>
      <h2>{thisProduct.price}đ trên mét</h2>
      <p>{thisProduct.description}</p>
      <h4>Chất liệu: {thisProduct.material}</h4>
      <h4>Xuất xứ: {thisProduct.origin}</h4>
      <h4>Chiều rộng: {thisProduct.width}cm</h4>
      <h4>Cân nặng: {thisProduct.weight}gsm</h4>
      <UnitSelect number={number} setNumber={setNumber} />
      <h2 style={{ display: "inline" }}>{number} mét</h2>
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
