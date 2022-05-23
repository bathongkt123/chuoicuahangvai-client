
import { Button, Divider, TextField, Box, Typography, Stack, Pagination } from "@mui/material";
import ProductRow from "./ProductRow";
import { useState } from "react";
import { useCookies } from 'react-cookie';
import formatPrice from 'helper/formatPrice'
export default function OrderInfo({ skus, price, deliveryMethod }) {
    const [cookies] = useCookies(['cart']);
    const products = cookies.cart || {}
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    const rowsPerPage = 3
    const keys = Object.keys(products)
    const subTotal = item => item.price / 100 * item.length
    return (
        <Stack
            divider={<Divider />}
            spacing={2}
            my={2}
        >
            <Stack
            >
                {skus.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((item, i) => {
                    return (<ProductRow
                        attr={{
                            name: item.product.name + '-' + item.sku,
                            image: item.images[0].url,
                            length: item.length,
                            subTotal: formatPrice(subTotal(item))
                        }}
                        key={i}
                    />
                    )
                }
                )}
                <Pagination count={Math.ceil(keys.length / rowsPerPage)}
                    page={page}
                    variant="outlined"
                    shape="rounded"
                    size="large"
                    onChange={handleChange}
                    sx={{ mx: 'auto', mt: 2 }} />
            </Stack>
            <Stack spacing={2}>
                <Box sx={{ display: 'flex' }}>
                    <Typography variant='h6'>
                        Giảm giá từ Voucher
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                        0
                    </Box>
                </Box>
            </Stack>
            <Stack spacing={2}>

                <Box sx={{ display: 'flex' }}>
                    <Typography variant='h6'>
                        Phí vận chuyển
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                        {formatPrice(deliveryMethod.cost)}
                    </Box>
                </Box>
            </Stack>


            <Box sx={{ display: 'flex', my: 2 }}>
                <Typography variant='h6'>
                    Tổng
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                    {formatPrice(price + deliveryMethod.cost)}
                </Box>
            </Box>
        </Stack>
    )
}

