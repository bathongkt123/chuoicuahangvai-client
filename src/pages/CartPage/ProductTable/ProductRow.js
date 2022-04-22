import React from "react";
import ProductImage from "./ProductImage";
import UnitSelect from "./UnitSelect";
import CustomTableCell from "components/CustomTableCell"
import { TableRow } from "@mui/material";
// import { memo } from 'react'
export default function ProductRow({ row, subTotal, deleteItem, setItemLength }) {
    return (
        <TableRow>
            <CustomTableCell align="left">
                <ProductImage name={row.name} image={row.image} deleteItem={deleteItem} />
            </CustomTableCell>
            <CustomTableCell align="right">{row.price}</CustomTableCell>
            <CustomTableCell align='center' sx={{ whiteSpace: 'nowrap' }}>
                <UnitSelect length={row.length} setItemLength={setItemLength} />
            </CustomTableCell>
            <CustomTableCell align="right">{subTotal}</CustomTableCell>
        </TableRow >
    )

}
