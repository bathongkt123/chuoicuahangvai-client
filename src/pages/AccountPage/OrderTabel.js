import { Table, TableContainer, TableRow, Paper, TableBody, TableHead, TablePagination, Link, TableFooter } from "@mui/material"
import CustomTableCell from "components/CustomTableCell"
import { useState, useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";
export default function OrderTable() {
    const navigate = useNavigate()
    const [page, setPage] = useState(0);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const rowsPerPage = 5

    const [orders, setOrders] = useState({})
    const keys = Object.keys(orders)
    useEffect(() => {
        const fetchData = async () => {
            const query = qs.stringify(
                {
                    populate: [
                        'customer',
                        'order_statuses',
                        'order_invoice'],
                },
                { encodeValuesOnly: true }
            );
            const result = await axios.get(
                `${process.env.REACT_APP_STRAPI_URL}/api/customer-orders?${query}`
            )
            console.log(result)
            const newOrders = {}
            result.data.forEach(
                (order) => {
                    const createdAt = new Date(order.createdAt)
                    newOrders[order.id] = {
                        code: order.code,
                        status: order.order_statuses.pop().status,
                        createdAt: createdAt.toLocaleDateString(),
                        invoice: order.order_invoice && order.order_invoice.id,
                        total: order.orderAmount,
                    }
                }
            )
            console.log()

            setOrders(newOrders)
        };
        fetchData();
    }, []);
    return (
        <TableContainer component={Paper} elevation={12} sx={{ my: 2 }} >
            <Table>
                <TableHead >
                    <TableRow >
                        <CustomTableCell align="left" >ĐƠN HÀNG</CustomTableCell>
                        <CustomTableCell align="right">TRẠNG THÁI</CustomTableCell>
                        <CustomTableCell align="right">HÓA ĐƠN</CustomTableCell>
                        <CustomTableCell align="right">NGÀY ĐẶT</CustomTableCell>
                        <CustomTableCell align="right">TỔNG GIÁ TRỊ</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {keys.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((key) => {
                        return (
                            <TableRow key={key}>
                                <CustomTableCell align="left" >
                                    <Link color='inherit' underline="hover"
                                        sx={{ cursor: 'pointer' }}
                                        onClick={() => navigate('/account/order/' + key)}>
                                        {orders[key].code}
                                    </Link>
                                </CustomTableCell>
                                <CustomTableCell align="right">{orders[key].status}</CustomTableCell>
                                <CustomTableCell align="right">
                                    {orders[key].invoice ?
                                        <Link color='inherit' underline="hover"
                                            sx={{ cursor: 'pointer' }}
                                            onClick={() => navigate('/account/invoice/' + orders[key].invoice)}>
                                            Chi tiết
                                        </Link>
                                        : 'Chưa có'}
                                </CustomTableCell>
                                <CustomTableCell align="right">{orders[key].createdAt}</CustomTableCell>
                                <CustomTableCell align="right">{orders[key].total}</CustomTableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPage={rowsPerPage}
                            count={keys.length}
                            page={page}
                            onPageChange={handleChangePage}
                            rowsPerPageOptions={[]}
                            sx={{ backgroundColor: '#EEEDE8' }}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer >
    )
}
