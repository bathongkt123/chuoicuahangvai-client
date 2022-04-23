import { Box, Typography, IconButton } from "@mui/material"
import { Close } from "@mui/icons-material"

export default function ProductImage({ image, name, deleteItem }) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton sx={{ color: '#4e5b73' }} component="span" onClick={deleteItem} >
                <Close />
            </IconButton>
            <Box
                component='img'
                sx={{
                    width: 210,
                    height: 145,
                    objectFit: 'fill'
                }}
                src={`${process.env.REACT_APP_STRAPI_URL}${image}`}
            />
            <Box width={20}></Box>
            <Typography variant='h6'>
                {name}
            </Typography>
            <Box />
        </Box>
    )
}
