import React from 'react';
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import ImageSection from './ImageSection'
import ProductInfoSection from './ProductInfoSection'
import {Data} from '../../productData'
import {useParams} from "react-router-dom"

export default function ProductPage() {
    const {productId} = useParams()
    const thisProduct = Data.find(prod => prod.id === productId)
        return (
            <div style={{textAlign: 'center',  justifyContent:'center', alignItems:'center', margin: '50px'}}
            >
                <Box>
                
                <Link href="/" color="inherit" style={{paddingRight:'5px'}}>
                    Trang chủ
                </Link>
                 /
                <Link href="/menu" color="inherit" style={{padding:'0px 5px'}}>
                    Sản phẩm
                </Link>
                /
                <p style={{display : 'inline-block', paddingLeft:'5px'}}>
                    {thisProduct.name}
                    </p>
                    
                    
                    <Grid container spacing={10} style={{margin: '10px',textAlign: 'left'}}>
                        <Grid item xs={12} sm={5} >
                        <ImageSection/>
                            </Grid>
                            <Grid item xs={12} sm={7}>
                            <ProductInfoSection/>
                            </Grid>
                    </Grid>
                    
                </Box>



            </div>
        );
    }
