import { AddBox, IndeterminateCheckBox } from "@mui/icons-material";
import { TableCell, Paper, Table, TableRow, TableHead, TableBody, TableContainer, Typography, IconButton, InputBase } from "@mui/material";
import { styled } from "@mui/material";

import React from "react";
import { useState } from "react";
import { tableCellClasses } from '@mui/material/TableCell';
import ProductImage from "./ProductImage";
const TAX_RATE = 0.1;

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}

function unitRow(qty, unit) {
    return qty * unit;
}

function createRow(desc, qty, unit) {
    const price = unitRow(qty, unit);
    return { desc, qty, unit, price };
}

function subtotal(items) {
    return items.map(({ unit }) => unit).reduce((sum, i) => sum + i, 0);
}

const rows = [
    createRow('Paperclips (Box)', 100, 1.15),
    createRow('Paper (Case)', 10, 45.99),
    createRow('Waste Basket', 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;
const CustomTableCell = styled(TableCell)(({ theme }) => (
    {
        fontWeight: 'bold',
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: '#4E5B73',
            color: 'white',
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: '1rem',
            borderBottom: '1px solid #b8b6a9',
            backgroundColor: '#EEEDE8'
        },
    }
));


const products = {
    2: {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        name: 'Breakfast',
        defaultNumber: 2,
        unit: 40000

    },
    10: {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        name: 'Burger',
        defaultNumber: 3,
        unit: 20000
    },
    20: {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        name: 'Coffee',
        defaultNumber: 1,
        unit: 15000
    }
}


export default function ProductTable() {
    const [numbers, setNumbers] = useState(
        Object.entries(products).reduce((result, [key, value]) =>
            ({ ...result, [key]: value.defaultNumber })
            , {}),
    )
    let total = 0
    return (
        <TableContainer component={Paper} elevation={12} >
            <Table>
                <TableHead >
                    <TableRow >
                        <CustomTableCell align="left" >SẢN PHẨM</CustomTableCell>
                        <CustomTableCell align="right">ĐƠN GIÁ(/MÉT)</CustomTableCell>
                        <CustomTableCell align="center">SỐ LƯỢNG</CustomTableCell>
                        <CustomTableCell align="right">THÀNH TIỀN</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {Object.keys(numbers).map((key) => {
                        const subTotal = numbers[key] * products[key].unit
                        total += subTotal
                        return <ProductRow
                            row={products[key]}
                            number={numbers[key]}
                            subTotal={subTotal}
                            setNumber={(newNumber) =>
                                setNumbers((prevNumbers) => ({ ...prevNumbers, [key]: newNumber })
                                )
                            }
                            deleteRow={() => setNumbers((prevNumbers) => {
                                const { [key]: _, ...newNumbers } = prevNumbers

                                return newNumbers
                            }
                            )}
                        />
                    }
                    )
                    }

                    <TableRow >
                        <CustomTableCell rowSpan={3} ></CustomTableCell>
                        <CustomTableCell colSpan={2} >TỔNG TRƯỚC THUẾ</CustomTableCell>
                        <CustomTableCell align="right" >
                            {ccyFormat(total)}
                        </CustomTableCell>
                    </TableRow>
                    <TableRow>
                        <CustomTableCell>VAT</CustomTableCell>
                        <CustomTableCell align="center">{`${(TAX_RATE * 100).toFixed(0)} %`}</CustomTableCell>
                        <CustomTableCell align="right">{ccyFormat(total * TAX_RATE)}</CustomTableCell>
                    </TableRow>
                    <TableRow>
                        <CustomTableCell colSpan={2}>TỔNG PHẢI TRẢ</CustomTableCell>
                        <CustomTableCell align="right"><Typography variant="h5" color='red'>{ccyFormat(total * (1 + TAX_RATE))}</Typography></CustomTableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer >
    )
}

function ProductRow({ row, number, setNumber, deleteRow, subTotal }) {
    return (
        <TableRow  >
            <CustomTableCell align="left">
                <ProductImage name={row.name} img={row.img} deleteRow={deleteRow} />
            </CustomTableCell>
            <CustomTableCell align="right">{row.unit}</CustomTableCell>
            <CustomTableCell align='center' sx={{ whiteSpace: 'nowrap' }}>
                <UnitSelect number={number} setNumber={setNumber} />
            </CustomTableCell>
            <CustomTableCell align="right">{subTotal}</CustomTableCell>
        </TableRow>
    )

}
function UnitSelect({ number, setNumber }) {
    return (
        <React.Fragment>
            <IconButton sx={{ color: '#4e5b73' }} component="span" onClick={() => number && setNumber(number - 1)}>
                <IndeterminateCheckBox />
            </IconButton>
            <InputBase sx={{ border: 1, borderColor: '#4e5b73', width: '6ch', px: 1 }}
                inputProps={{ style: { textAlign: 'center' } }}
                value={number}
                onChange={(e) => {
                    const tmp = parseInt(e.target.value)
                    setNumber(tmp ? (tmp < 999 ? tmp : 999) : 0)
                }}
            >
            </InputBase>
            <IconButton sx={{ color: '#4e5b73' }} component="span" onClick={() => number < 999 && setNumber(number + 1)}>
                < AddBox />
            </IconButton>
        </React.Fragment >
    )
}