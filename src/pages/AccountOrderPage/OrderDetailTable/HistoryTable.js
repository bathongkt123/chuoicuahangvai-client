import { TableContainer, TableBody, TableRow, TableHead, Paper, Table, TableFooter } from "@mui/material";
import CustomTableCell from "components/CustomTableCell";
import statusTranslate from "helper/statusTranslate";
export default function HistoryTable({ statuses }) {
    // const [page, setPage] = useState(0);
    // const handleChangePage = (event, newPage) => {
    //     setPage(newPage);
    // };
    // const rowsPerPage = 4
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
                            <TableRow key={status.id}>
                                <CustomTableCell align="left">
                                    {statusTranslate(status.status)}
                                </CustomTableCell>
                                <CustomTableCell align="left" >
                                    {(new Date(status.createdAt)).toLocaleDateString()}
                                </CustomTableCell>
                                <CustomTableCell align="left" >
                                    {(new Date(status.createdAt)).toLocaleTimeString()}
                                </CustomTableCell>
                            </TableRow>

                        )
                    }

                </TableBody>
                {/* <TableFooter>
                            <TablePagination
                                rowsPerPage={rowsPerPage}
                                count={order.products.length}
                                page={page}
                                onPageChange={handleChangePage}
                                rowsPerPageOptions={[]}
                                sx={{ backgroundColor: '#EEEDE8' }}
                            />
                        </TableFooter> */}
            </Table>
        </TableContainer>
    )
}