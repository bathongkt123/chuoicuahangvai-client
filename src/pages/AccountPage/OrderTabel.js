import { Table, TableContainer, TableRow, Paper, TableBody, TableHead, TablePagination, Link } from "@mui/material"
import CustomTableCell from "components/CustomTableCell"
import React from "react";
export default function OrderTable() {
    const [page, setPage] = React.useState(0);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const rowsPerPage = 5
    const keys = Object.keys(orders)
    return (
        <TableContainer component={Paper} elevation={12} sx={{ my: 2 }} >
            <Table>
                <TableHead >
                    <TableRow >
                        <CustomTableCell align="left" >ĐƠN HÀNG</CustomTableCell>
                        <CustomTableCell align="right">TRẠNG THÁI</CustomTableCell>
                        <CustomTableCell align="right">NGÀY ĐẶT</CustomTableCell>
                        <CustomTableCell align="right">TỔNG GIÁ TRỊ</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {keys.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((key) => {
                        return (
                            <TableRow>
                                <CustomTableCell align="left" >
                                    <Link color='inherit' underline="hover" href={'/account/order/' + key}>
                                        {key}
                                    </Link>

                                </CustomTableCell>
                                <CustomTableCell align="right">{orders[key].state}</CustomTableCell>
                                <CustomTableCell align="right">{orders[key].dateOrder}</CustomTableCell>
                                <CustomTableCell align="right">{orders[key].total}</CustomTableCell>
                            </TableRow>
                        )
                    }
                    )
                    }
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
                </TableBody>
            </Table>
        </TableContainer >
    )
}
const orders = {
    ORDER210910001: {
        state: "Đã hoàn tất",
        dateOrder: "01/01/2022",
        total: 1000000
    },
    ORDER210910002: {
        state: "Đã hoàn tất",
        dateOrder: "01/01/2022",
        total: 1000000
    },
    ORDER210910003: {
        state: "Đã hoàn tất",
        dateOrder: "01/01/2022",
        total: 1000000
    },
    ORDER210910004: {
        state: "Đã hoàn tất",
        dateOrder: "01/01/2022",
        total: 1000000
    },
    ORDER210910005: {
        state: "Đã hoàn tất",
        dateOrder: "01/01/2022",
        total: 1000000
    },
    ORDER210910006: {
        state: "Đã hoàn tất",
        dateOrder: "01/01/2022",
        total: 1000000
    }
    , ORDER210910007: {
        state: "Đã hoàn tất",
        dateOrder: "01/01/2022",
        total: 1000000
    }
    , ORDER210910008: {
        state: "Đã hoàn tất",
        dateOrder: "01/01/2022",
        total: 1000000
    }
    , ORDER210910009: {
        state: "Đã hoàn tất",
        dateOrder: "01/01/2022",
        total: 1000000
    }
}