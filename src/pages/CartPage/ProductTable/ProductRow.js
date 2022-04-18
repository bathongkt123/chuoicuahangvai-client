import React from "react";
import ProductImage from "./ProductImage";
import UnitSelect from "./UnitSelect";
import CustomTableCell from "components/CustomTableCell"
import { TableRow } from "@mui/material";
// import { memo } from 'react'
export default function ProductRow({ row, number, setNumber, deleteRow, subTotal }) {
    return (
        <TableRow>
            <CustomTableCell align="left">
                <ProductImage name={row.name} img={row.img} deleteRow={deleteRow} />
            </CustomTableCell>
            <CustomTableCell align="right">{row.unit}</CustomTableCell>
            <CustomTableCell align='center' sx={{ whiteSpace: 'nowrap' }}>
                <UnitSelect number={number} setNumber={setNumber} />
            </CustomTableCell>
            <CustomTableCell align="right">{subTotal}</CustomTableCell>
        </TableRow >
    )

}
