import { TableRow, InputBase, Typography, Box } from "@mui/material"
import CustomTableCell from "components/CustomTableCell"
export default function ProductRow({ attr }) {
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
                        src={`${process.env.REACT_APP_STRAPI_URL}${attr.image}`}
                    />
                    <Box width={20}></Box>
                    <Typography variant='body1' fontWeight='bold'>
                        {attr.name}
                    </Typography>
                    <Box />
                </Box>
            </CustomTableCell>
            <CustomTableCell align="right">{attr.price}</CustomTableCell>
            <CustomTableCell align='center' sx={{ whiteSpace: 'nowrap' }}>
                <InputBase sx={{ border: 1, borderColor: '#4e5b73', width: '6ch', px: 1 }}
                    inputProps={{ style: { textAlign: 'center' } }}
                    value={attr.length} readOnly />
            </CustomTableCell>
            <CustomTableCell align="right">{attr.subTotal}</CustomTableCell>
        </TableRow >
    )

}