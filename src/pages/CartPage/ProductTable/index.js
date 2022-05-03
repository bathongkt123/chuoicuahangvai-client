import {
  Box,
  Paper,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableContainer,
  Typography,
  TablePagination,
  Tooltip,
  IconButton,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import ProductRow from "./ProductRow";
import CustomTableCell from "components/CustomTableCell";
import { useCookies } from "react-cookie";
import Paying from "./Paying";
import axios from "axios";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
const MIN_LENGTH = 0.5;
function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

export default function ProductTable() {
  //cart: id and number of products from cookies
  const [cookie, setCookie] = useCookies(["cart"]);
  const cart = cookie["cart"] || {};

  const setCart = (cart) => setCookie("cart", cart, { path: "/" });
  const deleteItem = (key) => () => {
    const { [key]: _, ...newCart } = cart;
    setCart(newCart);
  };
  const setItemLength = (key) => (length) => {
    setCart({ ...cart, [key]: length });
  };

  //pagination
  const [page, setPage] = useState(0);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const rowsPerPage = 4;
  //set protducts to save cart attribute

  const [products, setProducts] = useState({});
  //subtotal and total
  const keys = Object.keys(products);
  const subTotal = (key) => cart[key] * products[key].price;
  const total = keys.reduce((init, current) => init + subTotal(current), 0);
  //validate
  const validateItems = keys.every(
    (key) =>
      products[key].inventoryLength / 100 >= cart[key] &&
      MIN_LENGTH <= cart[key]
  );
  //message of lost items
  const [message, setMessage] = useState([]);
  useEffect(() => {
    //format cart to post to server
    const postCartData = [
      ...Object.keys(cart).map((key) => ({
        id: Number(key),
        length: cart[key] * 100,
      })),
    ];
    const fetchData = async () => {
      const cartDetail = await axios.post(
        `${process.env.REACT_APP_STRAPI_URL}/api/cart`,
        { skus: postCartData }
      );
      console.log(cartDetail);
      const cartProducts = {};
      cartDetail.data.skus.map((item) => (cartProducts[item.id] = item));
      console.log(cartProducts);
      //pretend that all products have some in inventory
      //remove bad products out of cart
      const newCart = { ...cart };
      Object.keys(cart).forEach((key) => {
        if (!cartProducts[key]) delete newCart[key];
      });
      setMessage(cartDetail.data.message);
      setCart(newCart);
      setProducts(cartProducts);
    };
    fetchData();
  }, []);

  return (
    <Fragment>
      <TableContainer component={Paper} elevation={12} sx={{ my: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <CustomTableCell align="left">
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  SẢN PHẨM
                  {message.length !== 0 && (
                    <Tooltip
                      placement="right-start"
                      title={message.map((item) => (
                        <Typography variant="body2" fontWeight={450} key={item}>
                          {item}
                        </Typography>
                      ))}
                    >
                      <PriorityHighIcon sx={{ color: "red" }} />
                    </Tooltip>
                  )}
                </Box>
              </CustomTableCell>
              <CustomTableCell align="right">ĐƠN GIÁ(VNĐ/M)</CustomTableCell>
              <CustomTableCell align="center">ĐỘ DÀI(M)</CustomTableCell>
              <CustomTableCell align="right">THÀNH TIỀN</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {keys
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((key) => {
                return (
                  <ProductRow
                    key={key}
                    attr={{
                      name:
                        products[key].product.name + " - " + products[key].sku,
                      image: products[key].images[0].url,
                      price: products[key].price,
                      maxLength: products[key].inventoryLength / 100,
                      minLength: MIN_LENGTH,
                      subTotal: subTotal(key),
                    }}
                    length={cart[key]}
                    setItemLength={setItemLength(key)}
                    deleteItem={deleteItem(key)}
                  />
                );
              })}
            <TableRow>
              <TablePagination
                size="medium"
                rowsPerPage={rowsPerPage}
                count={keys.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPageOptions={[]}
                sx={{ backgroundColor: "#EEEDE8" }}
              />
            </TableRow>

            <TableRow>
              <CustomTableCell colSpan={2} align="right">
                TỔNG GIÁ TRỊ
              </CustomTableCell>
              <CustomTableCell colSpan={2} align="right">
                <Typography variant="h5" color="red">
                  {ccyFormat(total)}
                </Typography>
                <Typography variant="body2">
                  Chưa tính phí vận chuyển
                </Typography>
              </CustomTableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {/* Paying section */}
      <Paying cart={cart} validateItems={validateItems} products={products} />
    </Fragment>
  );
}
