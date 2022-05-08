import { TableContainer, TableBody, TableRow, TableHead, Paper, Table } from "@mui/material";
import CustomTableCell from "components/CustomTableCell";
export default function AddressTable({ attr }) {
    return (
        <TableContainer component={Paper} elevation={12}>
            <Table size='small'>
                <TableHead >
                    <TableRow >
                        <CustomTableCell align="left" colSpan={2} >THÔNG TIN</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow >
                        <CustomTableCell align="left">
                            Họ và tên
                        </CustomTableCell>
                        <CustomTableCell align="right" >
                            {attr.name}
                        </CustomTableCell>
                    </TableRow>
                    <TableRow >
                        <CustomTableCell align="left">
                            Địa chỉ
                        </CustomTableCell>
                        <CustomTableCell align="right" >
                            {attr.address}
                        </CustomTableCell>
                    </TableRow>
                    <TableRow >
                        <CustomTableCell align="left">
                            Phường/Xã
                        </CustomTableCell>
                        <CustomTableCell align="right" >
                            {attr.ward}
                        </CustomTableCell>
                    </TableRow>
                    <TableRow >
                        <CustomTableCell align="left">
                            Quận/Huyện
                        </CustomTableCell>
                        <CustomTableCell align="right" >
                            {attr.district}
                        </CustomTableCell>
                    </TableRow>
                    <TableRow >
                        <CustomTableCell align="left">
                            Tỉnh/Thành Phố
                        </CustomTableCell>
                        <CustomTableCell align="right" >
                            {attr.city}
                        </CustomTableCell>
                    </TableRow>
                    <TableRow >
                        <CustomTableCell align="left">
                            Số điện thoại
                        </CustomTableCell>
                        <CustomTableCell align="right" >
                            {attr.phone}
                        </CustomTableCell>
                    </TableRow>
                    <TableRow >
                        <CustomTableCell align="left">
                            Phương thức vận chuyển
                        </CustomTableCell>
                        <CustomTableCell align="right" >
                            {attr.deliveryMethod}
                        </CustomTableCell>
                    </TableRow>
                    <TableRow >
                        <CustomTableCell align="left">
                            Phương thức thanh toán
                        </CustomTableCell>
                        <CustomTableCell align="right" >
                            {attr.type}
                        </CustomTableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}