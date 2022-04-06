import React from 'react';
import Box from '@material-ui/core/Box'
import {useParams} from "react-router-dom"
import productData from '../../productData'

export default function ProductInfoSection() {
    const {productId} = useParams()
    const thisProduct = productData.find(prod => prod.id === productId)
    return (     
        <div>
            <h1>{thisProduct.name}</h1>
            <p>Giá: {thisProduct.price}đ</p>
            <p>{thisProduct.description}</p>
        </div>
    );
}