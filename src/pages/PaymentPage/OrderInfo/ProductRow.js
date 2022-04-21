import { Box, Divider, Typography, Badge } from "@mui/material";
import { Fragment } from "react";

export default function ProductRow({ row, subTotal, rendered }) {
    return (
        <Fragment>
            <Box sx={{ display: rendered ? 'flex' : 'none', alignItems: 'center', my: 2 }}>
                <Badge badgeContent={row.defaultNumber} color="secondary">
                    <Box
                        component='img'
                        sx={{
                            width: 210,
                            height: 145
                        }}
                        src={row.img}
                    />
                </Badge>

                <Box width={20} />
                <Typography variant='h6'>
                    {row.name}
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Typography variant='h6'>
                    {subTotal}
                </Typography>
            </Box >
            <Divider sx={{ display: !rendered && 'none' }} />
        </Fragment>

    )

}