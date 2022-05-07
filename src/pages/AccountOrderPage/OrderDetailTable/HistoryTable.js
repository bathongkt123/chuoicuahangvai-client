import { TableContainer, TableBody, TableRow, TableHead, Paper, Table } from "@mui/material";
import CustomTableCell from "components/CustomTableCell";
export default function HistoryTable({ statuses }) {
    return (
        <TableContainer component={Paper} elevation={12}>
            <Table size='small'>
                <TableHead >
                    <TableRow >
                        <CustomTableCell align="left">TRẠNG THÁI</CustomTableCell>
                        <CustomTableCell align="left">NGÀY CẬP NHẬT</CustomTableCell>
                        <CustomTableCell align="left">GIỜ</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        statuses.map(status =>
                            <TableRow >
                                <CustomTableCell align="left">
                                    {status.status}
                                </CustomTableCell>
                                <CustomTableCell align="left" >
                                    {status.createdAt}
                                </CustomTableCell>
                                <CustomTableCell align="left" >
                                    {status.createdAt}
                                </CustomTableCell>
                            </TableRow>

                        )
                    }

                </TableBody>
            </Table>
        </TableContainer>
    )
}