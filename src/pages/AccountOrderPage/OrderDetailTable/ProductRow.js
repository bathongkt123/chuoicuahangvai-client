import { TableRow, InputBase, Typography, Box } from "@mui/material"
import CustomTableCell from "components/CustomTableCell"
export default function ProductRow({ row, subTotal }) {
    return (
        <TableRow>
            <CustomTableCell align="left">
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box
                        component='img'
                        sx={{
                            width: 210,
                            height: 145,
                            objectFit: 'fill'
                        }}
                        src={row.img}
                    />
                    <Box width={20}></Box>
                    <Typography variant='h6'>
                        {row.name}
                    </Typography>
                    <Box />
                </Box>
            </CustomTableCell>
            <CustomTableCell align="right">{row.unit}</CustomTableCell>
            <CustomTableCell align='right' sx={{ whiteSpace: 'nowrap' }}>
                <InputBase sx={{ border: 1, borderColor: '#4e5b73', width: '6ch', px: 1 }}
                    inputProps={{ style: { textAlign: 'center' } }}
                    value={row.defaultNumber} readOnly />
            </CustomTableCell>
            <CustomTableCell align="right">{subTotal}</CustomTableCell>
        </TableRow >
    )

}