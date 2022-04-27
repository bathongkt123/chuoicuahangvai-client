
import { Paper, Table, TableRow, TableHead, TableBody, TableContainer, Typography, TablePagination } from "@mui/material";
import { useEffect, useState } from "react";
import ProductRow from "./ProductRow";
import CustomTableCell from "components/CustomTableCell"
import { useCookies } from "react-cookie";
import axios from "axios";
import qs from "qs";
const TAX_RATE = 0.1;
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
            price: 0
        })
        return initialState
    })
    //subtotal and total

    const subTotal = key => cart[key] * products[key].price
    const total = keys.reduce((init, current) => init + subTotal(current), 0)
    useEffect(() => {
        const query = qs.stringify(
            {
                populate: [
                    "product",
                    "images",
                ],
            },
            { encodeValuesOnly: true }
        );

        const fetchEachProduct = async (key) => {
            const response = await axios.get(`${process.env.REACT_APP_STRAPI_URL}/api/product-skus/${key}?${query}`)
            return {
                name: response.data.data.attributes.product.data.attributes.name + '-' + response.data.data.attributes.sku,
                image: response.data.data.attributes.images.data[0].attributes.url,
                price: response.data.data.attributes.price,
            }
        }

        const fetchData = async () => {
            const cartProducts = {}
            for (const key of keys)
                cartProducts[key] = await fetchEachProduct(key)
            setProducts(cartProducts)
        }
        fetchData()
    }, []);

    return (
        <TableContainer component={Paper} elevation={12} sx={{ my: 2 }} >
            <Table>
                <TableHead >
                    <TableRow >

                        <CustomTableCell align="left" >SẢN PHẨM</CustomTableCell>
                        <CustomTableCell align="right">ĐƠN GIÁ(/MÉT)</CustomTableCell>
                        <CustomTableCell align="center">ĐỘ DÀI</CustomTableCell>
                        <CustomTableCell align="right">THÀNH TIỀN</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {keys.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((key) => {
                        return (
                            <ProductRow
                                key={key}
                                attr={{
                                    name: products[key].name,
                                    image: products[key].image,
                                    price: products[key].price,
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
                        <CustomTableCell rowSpan={3} ></CustomTableCell>
                        <CustomTableCell colSpan={2} >TỔNG TRƯỚC THUẾ</CustomTableCell>
                        <CustomTableCell align="right" >
                            {ccyFormat(total)}
                        </CustomTableCell>
                    </TableRow>
                    <TableRow>
                        <CustomTableCell>VAT</CustomTableCell>
                        <CustomTableCell align="center">{`${(TAX_RATE * 100).toFixed(0)} %`}</CustomTableCell>
                        <CustomTableCell align="right">{ccyFormat(total * TAX_RATE)}</CustomTableCell>
                    </TableRow>
                    <TableRow>
                        <CustomTableCell colSpan={2}>TỔNG SAU THUẾ</CustomTableCell>
                        <CustomTableCell align="right">
                            <Typography variant="h5" color='red'>
                                {ccyFormat(total * (1 + TAX_RATE))}
                            </Typography>
                            <Typography variant='body1'>
                                (Chưa bao gồm chi phí vận chuyển)
                            </Typography>

                        </CustomTableCell>
                    </TableRow>
                </TableBody>

            </Table>
        </TableContainer >
    )
}

