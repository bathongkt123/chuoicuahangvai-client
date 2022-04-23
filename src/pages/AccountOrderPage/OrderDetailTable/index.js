import { Table, TableContainer, TableRow, Paper, TableBody, TableHead, TablePagination, Typography, InputBase, Box } from "@mui/material"
import { useState } from "react";
import CustomTableCell from "components/CustomTableCell"
import ProductRow from "./ProductRow";
const TAX_RATE = 0.1;

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}
export default function OrderDetailTable() {
    const keys = Object.keys(products)
    const subTotal = key => products[key].defaultNumber * products[key].unit
    const total = keys.reduce((init, current) => init + subTotal(current), 0)
    const [page, setPage] = useState(0);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const rowsPerPage = 4
    const shipFee = 100000
    return (
        <TableContainer component={Paper} elevation={12} sx={{ my: 2 }} >
            <Table>
                <TableHead >
                    <TableRow >
                        <CustomTableCell align="left" >SẢN PHẨM</CustomTableCell>
                        <CustomTableCell align="right">ĐƠN GIÁ(/MÉT)</CustomTableCell>
                        <CustomTableCell align="right">ĐỘ DÀI</CustomTableCell>
                        <CustomTableCell align="right">THÀNH TIỀN</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {keys.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((key) => {
                        return (
                            <ProductRow row={products[key]} subTotal={subTotal(key)} key={key} />
                        )
                    }
                    )
                    }
                    <TableRow>
                        <CustomTableCell>
                            Thông tin đơn hàng
                        </CustomTableCell>
                        <TablePagination
                            rowsPerPage={rowsPerPage}
                            count={keys.length}
                            page={page}
                            onPageChange={handleChangePage}
                            rowsPerPageOptions={[]}
                            sx={{ backgroundColor: '#EEEDE8' }}
                        />
                    </TableRow>
                    <TableRow >
                        <CustomTableCell>
                            Họ và tên: Lê Bá Thông
                        </CustomTableCell>
                        <CustomTableCell colSpan={2}>TỔNG TRƯỚC THUẾ</CustomTableCell>
                        <CustomTableCell align="right" >
                            {ccyFormat(total)}
                        </CustomTableCell>
                    </TableRow>
                    <TableRow>
                        <CustomTableCell>
                            <Box sx={{ maxWidth: '45ch' }}>
                                Địa chỉ: 268 Lý Thường Kiệt Phường 14 Quận 10 TP Hồ Chí Minh
                            </Box>

                        </CustomTableCell>
                        <CustomTableCell>VAT</CustomTableCell>
                        <CustomTableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</CustomTableCell>
                        <CustomTableCell align="right">{ccyFormat(total * TAX_RATE)}</CustomTableCell>
                    </TableRow>
                    <TableRow>
                        <CustomTableCell>
                            Số điện thoại: (+84)911357191
                        </CustomTableCell>
                        <CustomTableCell colSpan={2}>TỔNG SAU THUẾ</CustomTableCell>
                        <CustomTableCell align="right">

                            {ccyFormat(total * (1 + TAX_RATE))}
                        </CustomTableCell>
                    </TableRow>
                    <TableRow>
                        <CustomTableCell>
                            Phương thức thanh toán: COD
                        </CustomTableCell>
                        <CustomTableCell colSpan={2}>PHÍ VẬN CHUYỂN</CustomTableCell>
                        <CustomTableCell align="right">
                            {ccyFormat(shipFee)}
                        </CustomTableCell>
                    </TableRow>
                    <TableRow>
                        <CustomTableCell>

                            Phương thức vận chuyển: Giao hàng miễn phí
                        </CustomTableCell>
                        <CustomTableCell colSpan={2}>TỔNG PHẢI TRẢ</CustomTableCell>
                        <CustomTableCell align="right">
                            <Typography variant="h5" color='red'>
                                {ccyFormat(shipFee + total * (1 + TAX_RATE))}
                            </Typography>
                        </CustomTableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer >
    )
}
const products = {
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