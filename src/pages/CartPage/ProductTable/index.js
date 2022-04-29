
import { Paper, Table, TableRow, TableHead, TableBody, TableContainer, Typography, TablePagination } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import ProductRow from "./ProductRow";
import CustomTableCell from "components/CustomTableCell"
import { useCookies } from "react-cookie";
import Paying from './Paying'
import axios from "axios";

const MIN_LENGTH = 0.5;
function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}

export default function ProductTable() {
    //cart: id and number of products from cookies
    const [cookie, setCookie] = useCookies(["cart"]);
    const cart = cookie['cart'] || {}
    const keys = Object.keys(cart)
    const setCart = (cart) => setCookie("cart", cart, { path: "/" })
    const deleteItem = (key) => () => {
        const { [key]: _, ...newCart } = cart
        setCart(newCart)
    }
    const setItemLength = (key) => (length) => {
        setCart({ ...cart, [key]: length })
    }

    //pagination
    const [page, setPage] = useState(0);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const rowsPerPage = 4
    //set protducts to save cart attribute

    const [products, setProducts] = useState(() => {
        const initialState = {}
        keys.forEach((key) => initialState[key] = {
            name: '',
            image: '',
            price: 0,
            maxLength: 0,
            minLength: 0,
        })
        return initialState
    })
    //subtotal and total

    const subTotal = key => cart[key] * products[key].price
    const total = keys.reduce((init, current) => init + subTotal(current), 0)
    //validate 
    const validateItems = keys.every(key =>
        products[key].maxLength >= cart[key] && products[key].minLength <= cart[key])


    useEffect(() => {
        //format cart to post to server
        const postCartData = [...keys.map((key) => ({ id: Number(key), length: cart[key] * 100 }))]
        const fetchData = async () => {
            const cartDetail = await axios.post(`${process.env.REACT_APP_STRAPI_URL}/api/cart`, { skus: postCartData })
            console.log(cartDetail)
            const cartProducts = {}
            cartDetail.data.skus.map(item =>
                cartProducts[item.id] = {
                    name: item.product.name + ' - ' + item.sku,
                    image: item.images[0].url,
                    price: item.price,
                    maxLength: item.inventoryLength / 100,
                    minLength: MIN_LENGTH
                }
            )
            //pretend that all products have some in inventory
            setProducts(cartProducts)

        }
        fetchData()
    }, []);

    return (
        <Fragment>
            <TableContainer component={Paper} elevation={12} sx={{ my: 2 }} >
                <Table>
                    <TableHead >
                        <TableRow >

                            <CustomTableCell align="left" >SẢN PHẨM</CustomTableCell>
                            <CustomTableCell align="right">ĐƠN GIÁ(VNĐ/M)</CustomTableCell>
                            <CustomTableCell align="center">ĐỘ DÀI(M)</CustomTableCell>
                            <CustomTableCell align="right">THÀNH TIỀN</CustomTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {keys.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((key) => {
                            return (
                                <ProductRow
                                    key={key}
                                    attr={{
                                        ...products[key],
                                        subTotal: subTotal(key)
                                    }}
                                    length={cart[key]}
                                    setItemLength={setItemLength(key)}
                                    deleteItem={deleteItem(key)}
                                />
                            )
                        }
                        )
                        }
                        <TableRow>
                            <TablePagination
                                size="medium"
                                rowsPerPage={rowsPerPage}
                                count={keys.length}
                                page={page}
                                onPageChange={handleChangePage}
                                rowsPerPageOptions={[]}
                                sx={{ backgroundColor: '#EEEDE8' }}
                            />
                        </TableRow>

                        <TableRow >

                            <CustomTableCell colSpan={2} align="right">TỔNG GIÁ TRỊ</CustomTableCell>
                            <CustomTableCell colSpan={2} align="right" >
                                <Typography variant="h5" color='red'>
                                    {ccyFormat(total)}
                                </Typography>
                                <Typography variant="body2">
                                    Chưa tính phí vận chuyển
                                </Typography>

                            </CustomTableCell>
                        </TableRow>

                    </TableBody>

                </Table>
            </TableContainer >
            {/* Paying section */}
            <Paying cart={cart} validateItems={validateItems} />
        </Fragment>
    )
}

