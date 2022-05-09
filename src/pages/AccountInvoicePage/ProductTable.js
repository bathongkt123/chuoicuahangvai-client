import { Table, TableContainer, TableRow, Paper, TableBody, TableHead, TablePagination, Typography } from "@mui/material"
import { useState } from "react";
import CustomTableCell from "components/CustomTableCell"
import ProductRow from "./ProductRow";
import formatPrice from "helper/formatPrice";

export default function ProductTable({ invoice, sx }) {
    const [page, setPage] = useState(0);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const rowsPerPage = 4
    let total = 0
    return (
        <TableContainer component={Paper} elevation={12} sx={sx} >
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
                    {invoice.products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((product) => {
                        const name = product.inventory_item.sku_quantity.sku.product.name + ' - '
                            + product.inventory_item.sku_quantity.sku.sku
                        const price = product.inventory_item.sku_quantity.sku.price
                        const image = product.inventory_item.sku_quantity.sku.images[0].url
                        const length = product.length / 100
                        const subTotal = price * length
                        total += subTotal
                        return (
                            <ProductRow attr={
                                {
                                    name,
                                    price: formatPrice(Number(price)),
                                    image,
                                    subTotal: formatPrice(subTotal),
                                    length
                                }
                            }
                                key={product.inventory_item.sku_quantity.sku.id} />
                        )
                    }
                    )
                    }
                    <TableRow>
                        <TablePagination
                            rowsPerPage={rowsPerPage}
                            count={invoice.products.length}
                            page={page}
                            onPageChange={handleChangePage}
                            rowsPerPageOptions={[]}
                            sx={{ backgroundColor: '#EEEDE8' }}
                        />
                    </TableRow>
                    <TableRow >
                        <CustomTableCell colSpan={2} align="right"> TỔNG CHI PHÍ</CustomTableCell>
                        <CustomTableCell align="right" colSpan={2}>
                            {formatPrice(total)}
                        </CustomTableCell>
                    </TableRow>
                    <TableRow>
                        <CustomTableCell colSpan={2} align="right">PHÍ VẬN CHUYỂN</CustomTableCell>
                        <CustomTableCell align="right" colSpan={2}>
                            {formatPrice(Number(invoice.delivery_method.amount))}
                        </CustomTableCell>
                    </TableRow>
                    <TableRow>
                        <CustomTableCell colSpan={2} align="right">TỔNG PHẢI TRẢ</CustomTableCell>
                        <CustomTableCell align="right" colSpan={2}>
                            <Typography variant="body1" fontWeight='bold' color='red'>
                                {formatPrice(Number(invoice.price))}
                            </Typography>
                        </CustomTableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </TableContainer >
    )
}