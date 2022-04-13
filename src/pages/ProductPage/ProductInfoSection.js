import React from 'react';
import {useParams} from "react-router-dom"
import productData from '../../productData'
import Button from '@mui/material/Button';
export default function ProductInfoSection() {
    const {productId} = useParams()
    const thisProduct = productData.find(prod => prod.id === productId)

    return (     
        <div>
            <h1>{thisProduct.name}</h1>
            <h2>{thisProduct.price}đ trên mét</h2>
            <p>{thisProduct.description}</p>
            <h4>Chất liệu: {thisProduct.material}</h4> 
            <h4>Xuất xứ: {thisProduct.origin}</h4>
            <h4>Chiều rộng: {thisProduct.width}cm</h4>
            <h4>Cân nặng: {thisProduct.weight}gsm</h4>
            <Button variant="contained" sx={{p:2, backgroundColor:"#384257"}}>
                Thêm vào giỏ hàng
            </Button>
            
        </div>
    );
}