import { Box, Divider, Typography, Badge } from "@mui/material";
import { Fragment } from "react";

export default function ProductRow({ attr }) {
    return (
        <Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
                <Badge badgeContent={attr.length / 100} max={attr.length / 100} color="secondary">
                    <Box
                        component='img'
                        sx={{
                            width: 210,
                            height: 145,
                            objectFit: 'fill'
                        }}
                        src={`${process.env.REACT_APP_STRAPI_URL}${attr.image}`}
                    />
                </Badge>
                <Box width={20} />
                <Typography variant='h6'>
                    {attr.name}
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Typography variant='h6'>
                    {attr.subTotal}
                </Typography>
            </Box >
            <Divider />
        </Fragment>

    )

}