import React from "react";
import ProductImage from "./ProductImage";
import UnitSelect from "./UnitSelect";
import CustomTableCell from "components/CustomTableCell"
import { TableRow, IconButton, Box } from "@mui/material";
import { Close } from "@mui/icons-material"
// import { memo } from 'react'
export default function ProductRow({ attr, length, deleteItem, setItemLength }) {
    return (
        <TableRow>
            <CustomTableCell align="left">
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton sx={{ color: '#4e5b73' }} component="span" onClick={deleteItem} >
                        <Close />
                    </IconButton>
                    <ProductImage name={attr.name} image={attr.image} />
                </Box>
            </CustomTableCell>
            <CustomTableCell align="right">{attr.price}</CustomTableCell>
            <CustomTableCell align='center' sx={{ whiteSpace: 'nowrap' }}>
                <UnitSelect length={length} setItemLength={setItemLength} />
            </CustomTableCell>
            <CustomTableCell align="right">{attr.subTotal}</CustomTableCell>
        </TableRow >
    )

}
