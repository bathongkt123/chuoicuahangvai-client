
import { Paper, Table, TableRow, TableHead, TableBody, TableContainer, Typography, TablePagination } from "@mui/material";
import React from "react";
import ProductRow from "./ProductRow";
import CustomTableCell from "components/CustomTableCell"

const TAX_RATE = 0.1;

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}

export default function ProductTable({ cart, setCart }) {
    const keys = Object.keys(cart)

    const deleteItem = (key) => () => {
        const { [key]: _, ...newCart } = cart
        setCart(newCart)
    }
    const setItemLength = (key) => (length) => {
        const { ...newCart } = cart
        newCart[key].length = length
        setCart(newCart)
    }
    const subTotal = key => cart[key].length * cart[key].price
    const total = keys.reduce((init, current) => init + subTotal(current), 0)
    const [page, setPage] = React.useState(0);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const rowsPerPage = 4

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
                                row={cart[key]}
                                subTotal={subTotal(key)}
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

