import { Box, Typography } from "@mui/material";

export default function ProductRow({ row, subTotal }) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
            <Box
                component='img'
                sx={{
                    width: 210,
                    height: 145
                }}
                src={row.img}
            />
            <Box width={20} />
            <Typography variant='h6'>
                {row.name}
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Typography variant='h6'>
                {subTotal}
            </Typography>
        </Box >
    )

}