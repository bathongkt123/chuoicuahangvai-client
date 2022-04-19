import { Table, TableContainer, TableRow, Paper, TableBody, TableHead, TablePagination, Link } from "@mui/material"
import CustomTableCell from "components/CustomTableCell"
import React from "react";
export default function OrderDetailTable() {
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
                        <CustomTableCell align="left" >SẢN PHẨM</CustomTableCell>
                        <CustomTableCell align="right">ĐƠN GIÁ(/MÉT)</CustomTableCell>
                        <CustomTableCell align="center">SỐ LƯỢNG</CustomTableCell>
                        <CustomTableCell align="right">THÀNH TIỀN</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody >

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
                    {/* <TableRow >
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
                        <CustomTableCell colSpan={2}>TỔNG PHẢI TRẢ</CustomTableCell>
                        <CustomTableCell align="right">
                            <Typography variant="h5" color='red'>
                                {ccyFormat(total * (1 + TAX_RATE))}
                            </Typography>
                            <Typography variant='body1'>
                                (Chưa bao gồm chi phí vận chuyển)
                            </Typography>

                        </CustomTableCell>
                    </TableRow> */}
                </TableBody>
            </Table>
        </TableContainer >
    )
}
const orders = {
    2: {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        name: 'Breakfast',
        defaultNumber: 2,
        unit: 40000

    },
    10: {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        name: 'Burger',
        defaultNumber: 3,
        unit: 20000
    },
    20: {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        name: 'Coffee',
        defaultNumber: 1,
        unit: 15000
    },
    40: {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        name: 'Hats',
        defaultNumber: 2,
        unit: 15000

    },
    80: {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        name: 'Honey',
        defaultNumber: 3,
        unit: 50000
    },
    100: {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        name: 'Bicycle',
        defaultNumber: 1,
        unit: 100000
    },
    120: {
        img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
        name: "Starfish",
        defaultNumber: 2,
        unit: 1000000
    },
    140: {
        img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
        name: "Mushroom",
        defaultNumber: 4,
        unit: 100000
    },

}