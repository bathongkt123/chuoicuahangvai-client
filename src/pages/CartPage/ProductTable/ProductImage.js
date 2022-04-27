import { Box } from "@mui/material"
import { Fragment, memo } from "react"
function ProductImage({ image, name }) {
    console.log('renderImg')
    return (
        <Fragment>
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
        </Fragment>
    )

}
export default ProductImage