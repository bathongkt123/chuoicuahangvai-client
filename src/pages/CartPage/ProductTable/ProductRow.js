import React from "react";
import ProductImage from "./ProductImage";
import UnitSelect from "./UnitSelect";
import CustomTableCell from "components/CustomTableCell"

export default function ProductRow({ row, number, setNumber, deleteRow, subTotal }) {
    return (
        <React.Fragment  >
            <CustomTableCell align="left">
                <ProductImage name={row.name} img={row.img} deleteRow={deleteRow} />
            </CustomTableCell>
            <CustomTableCell align="right">{row.unit}</CustomTableCell>
            <CustomTableCell align='center' sx={{ whiteSpace: 'nowrap' }}>
                <UnitSelect number={number} setNumber={setNumber} />
            </CustomTableCell>
            <CustomTableCell align="right">{subTotal}</CustomTableCell>
        </React.Fragment >
    )

}