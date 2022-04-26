import React from "react";
import ProductImage from "./ProductImage";
import UnitSelect from "./UnitSelect";
import CustomTableCell from "components/CustomTableCell"
import { TableRow } from "@mui/material";
// import { memo } from 'react'
export default function ProductRow({ attr, length, deleteItem, setItemLength }) {
    return (
        <TableRow>
            <CustomTableCell align="left">
                <ProductImage name={attr.name} image={attr.image} deleteItem={deleteItem} />
            </CustomTableCell>
            <CustomTableCell align="right">{attr.price}</CustomTableCell>
            <CustomTableCell align='center' sx={{ whiteSpace: 'nowrap' }}>
                <UnitSelect length={length} setItemLength={setItemLength} />
            </CustomTableCell>
            <CustomTableCell align="right">{attr.subTotal}</CustomTableCell>
        </TableRow >
    )

}
