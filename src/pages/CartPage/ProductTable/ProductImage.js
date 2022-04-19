import { Box, Typography, IconButton } from "@mui/material"
import { Close } from "@mui/icons-material"

export default function ProductImage({ img, name, deleteRow }) {

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton sx={{ color: '#4e5b73' }} component="span" onClick={() => deleteRow()} >
                <Close />
            </IconButton>

            <Box
                component='img'
                sx={{
                    width: 'auto',
                    height: 145
                }}
                src={img}

            />

            <Box width={20}></Box>
            <Typography variant='h6'>
                {name}
            </Typography>
            <Box />
        </Box>
    )
}
