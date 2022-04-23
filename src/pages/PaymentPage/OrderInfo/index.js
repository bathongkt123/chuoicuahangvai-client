
import { Button, Divider, TextField, Box, Typography, Stack, Pagination } from "@mui/material";
import ProductRow from "./ProductRow";
import { useState } from "react";
import { useCookies } from 'react-cookie';
export default function OrderInfo() {
    const [cookies] = useCookies(['cart']);
    const products = cookies.cart || {}
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    const rowsPerPage = 3
    const keys = Object.keys(products)
    const subTotal = key => products[key].price * products[key].length
    const total = keys.reduce((init, current) => init + subTotal(current), 0)
    return (
        <Stack
            divider={<Divider />}
            spacing={2}
            my={2}
        >
            <Stack
            >
                {keys.map((key, i) => {
                    const rendered = i >= (page - 1) * rowsPerPage && i < page * rowsPerPage
                    return (<ProductRow row={products[key]} subTotal={subTotal(key)} rendered={rendered} key={key} />
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
            <Box sx={{ display: 'flex' }}>
                <TextField label='Mã giảm giá' fullWidth />
                <Box width={20} />
                <Button
                    variant="contained"
                    size='large'
                    sx={{
                        px: 4,
                        whiteSpace: 'nowrap',
                        textDecoration: 'none',
                        bgcolor: "#384257",
                        "&:hover": { bgcolor: "#242e45" },
                    }}
                >
                    Áp dụng
                </Button>
            </Box>

            <Stack spacing={2}>
                <Box sx={{ display: 'flex' }}>
                    <Typography variant='h6'>
                        Tổng sau thuế
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                        {total}
                    </Box>
                </Box>
                <Box sx={{ display: 'flex' }}>
                    <Typography variant='h6'>
                        Mã giảm giá
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                        -10000
                    </Box>
                </Box>
                <Box sx={{ display: 'flex' }}>
                    <Typography variant='h6'>
                        Phí vận chuyển
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                        Miễn phí
                    </Box>
                </Box>
            </Stack>


            <Box sx={{ display: 'flex', my: 2 }}>
                <Typography variant='h6'>
                    Tổng phải trả
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                    {total - 10000}
                </Box>
            </Box>
        </Stack>




    )
}

