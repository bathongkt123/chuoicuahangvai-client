import { Box, IconButton } from "@mui/material"
import { Close } from "@mui/icons-material"
// import { memo } from "react"
function ProductImage({ image, name, deleteItem }) {
    console.log('renderImg')
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
            <Box sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
                {name}
            </Box>
            <Box />
        </Box>
    )
}
export default ProductImage