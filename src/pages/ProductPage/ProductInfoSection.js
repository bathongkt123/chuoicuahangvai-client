import React from 'react';
import {useParams} from "react-router-dom"
import productData from '../../productData'
import Button from '@mui/material/Button';
import { useState } from "react";
import { AddBox, IndeterminateCheckBox, Close } from "@mui/icons-material";
import { TableCell, Paper, Table, TableRow, TableHead, TableBody, TableContainer, Typography, IconButton, InputBase } from "@mui/material";
import { styled } from "@mui/material";
function UnitSelect({ number, setNumber}) {

    return (
        <React.Fragment>
            <IconButton sx={{ color: '#4e5b73' }} component="span" onClick={() => number > 0.25 && setNumber(number - 0.25)}>
                <IndeterminateCheckBox />
            </IconButton>
            <InputBase sx={{ border: 1, borderColor: '#4e5b73', width: '6ch', px: 1 }}
                inputProps={{ style: { textAlign: 'center' } }}
                value={number}
                onChange={(e) => {
                    const tmp = parseInt(e.target.value)
                    setNumber(tmp ? (tmp < 999 ? tmp : 999) : 0.25)
                    
                }}
            >
            </InputBase>
            <IconButton sx={{ color: '#4e5b73' }} component="span" onClick={() => number < 999 && setNumber(number + 0.25)}>
                < AddBox />
            </IconButton>
        </React.Fragment >
    )
}

export default function ProductInfoSection() {
    const [number, setNumber] = useState(0.25)
    
    const {productId} = useParams()
    const thisProduct = productData.find(prod => prod.id === productId)
    const total = number*thisProduct.price
    return (     
        <div>
            <h1>{thisProduct.name}</h1>
            <h2>{thisProduct.price}đ trên mét</h2>
            <p>{thisProduct.description}</p>
            <h4>Chất liệu: {thisProduct.material}</h4> 
            <h4>Xuất xứ: {thisProduct.origin}</h4>
            <h4>Chiều rộng: {thisProduct.width}cm</h4>
            <h4>Cân nặng: {thisProduct.weight}gsm</h4>
            <UnitSelect number={number} setNumber={setNumber} />
            <h2 style={{display: 'inline'}}>{number} mét</h2>
            <br></br>
            <div style={{margin:'10px'}}>
            <Button variant="contained" sx={{p:2,backgroundColor:"#384257"}}>
                Thêm vào giỏ hàng
            </Button>
            
            <h2 style={{display: 'inline', padding: '10px'}}>{total} đồng</h2>
            </div>
        </div>
    );
}