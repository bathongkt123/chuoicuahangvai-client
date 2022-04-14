import React from 'react';
import Box from '@material-ui/core/Box'
import {useParams} from "react-router-dom"
import productData from '../../productData'

export default function ImageSection() {
    const {productId} = useParams()
    const thisProduct = productData.find(prod => prod.id === productId)
    return (     
        <Box>
            Image Here
        </Box>
    );
}