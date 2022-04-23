import { Fragment } from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AddBox, IndeterminateCheckBox } from "@mui/icons-material";
import { IconButton, InputBase, Button } from "@mui/material";
const MAX_LENGTH = 500
function UnitSelect({ length, setLength }) {
  return (
    <Fragment>
      <IconButton
        sx={{ color: "#4e5b73" }}
        component="span"
        onClick={() => length > 0.25 && setLength(length - 0.25)}
      >
        <IndeterminateCheckBox />
      </IconButton>
      <InputBase
        sx={{ border: 1, borderColor: "#4e5b73", width: "6ch", px: 1 }}
        inputProps={{ style: { textAlign: "center" } }}
        value={length}
        onChange={(e) => {
          const tmp = parseInt(e.target.value);
          setLength(tmp ? (tmp < MAX_LENGTH ? tmp : MAX_LENGTH) : 0.25);
        }}
      ></InputBase>
      <IconButton
        sx={{ color: "#4e5b73" }}
        component="span"
        onClick={() => length < MAX_LENGTH && setLength(length + 0.25)}
      >
        <AddBox />
      </IconButton>
    </Fragment>
  );
}

export default function ProductInfoSection({
  productId,
  productName,
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

  const [cookies, setCookie] = useCookies(["cart"]);

  const addToCart = () => {
    toast.success("Đã thêm vào giỏ hàng");
    const { ...currentCart } = cookies['cart'] || {};
    if (currentCart[productId]) {
      currentCart[productId].length = parseFloat(currentCart[productId].length) + length
      currentCart[productId].length > MAX_LENGTH && (currentCart[productId].length = MAX_LENGTH)
    }
    else {
      currentCart[productId] = {
        name: productName,
        price: productPrice,
        length: length,
        image: productImages
      }
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
      <h1> {productName}</h1>
      <h2> {productPrice}đ trên mét</h2>
      <p> {productDescription}</p>
      <h4>Kiểu mẫu: {productPattern}</h4>
      <h4>Xuất xứ: {productOrigin}</h4>
      <h4>Chiều rộng: {productWidth}cm</h4>
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
