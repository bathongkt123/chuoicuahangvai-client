import { TableContainer, TableBody, TableRow, TableHead, Paper, Table, Typography, TablePagination } from "@mui/material";
import CustomTableCell from "components/CustomTableCell";
import formatPrice from "helper/formatPrice";
import { Fragment, useState } from "react";
export default function HistoryTable({ invoice }) {
    const [page, setPage] = useState(0);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const rowsPerPage = 5
    return (
        <Fragment>
            <Typography variant="h6" fontWeight='bold' textAlign="center" my={4}> LỊCH SỬ GIAO DỊCH</Typography>
            <TableContainer component={Paper} elevation={12} sx={{ my: 2 }}>
                <Table size='small'>
                    <TableHead >
                        <TableRow >
                            <CustomTableCell align="left">NGÀY THANH TOÁN</CustomTableCell>
                            <CustomTableCell align="left">GIỜ</CustomTableCell>
                            <CustomTableCell align="right">GIÁ TRỊ(VNĐ)</CustomTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            invoice.order_payment_invoices.map(paymentInvoice =>
                                <TableRow key={paymentInvoice.id}>
                                    <CustomTableCell align="left" >
                                        {(new Date(paymentInvoice.createdAt)).toLocaleDateString()}
                                    </CustomTableCell>
                                    <CustomTableCell align="left" >
                                        {(new Date(paymentInvoice.createdAt)).toLocaleTimeString()}
                                    </CustomTableCell>
                                    <CustomTableCell align="right">
                                        {formatPrice(Number(paymentInvoice.amount))}
                                    </CustomTableCell>
                                </TableRow>
                            )
                        }
                        <TableRow>
                            <TablePagination
                                rowsPerPage={rowsPerPage}
                                count={invoice.order_payment_invoices.length}
                                page={page}
                                onPageChange={handleChangePage}
                                rowsPerPageOptions={[]}
                                sx={{ backgroundColor: '#EEEDE8' }}
                            />
                        </TableRow>
                        <TableRow >
                            <CustomTableCell></CustomTableCell>
                            <CustomTableCell align="left"> TỔNG ĐÃ THANH TOÁN</CustomTableCell>
                            <CustomTableCell align="right" colSpan={2}>
                                <Typography variant="body1" fontWeight='bold' color='red'>
                                    {formatPrice(invoice.paidAmount)}
                                </Typography>
                            </CustomTableCell>
                        </TableRow>
                        <TableRow >
                            <CustomTableCell></CustomTableCell>
                            <CustomTableCell align="left"> CÒN LẠI</CustomTableCell>
                            <CustomTableCell align="right" colSpan={2}>
                                <Typography variant="body1" color='red' fontWeight='bold'>
                                    {formatPrice(invoice.price - invoice.paidAmount)}
                                </Typography>
                            </CustomTableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Fragment>
    )
}