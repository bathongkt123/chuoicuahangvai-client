
import { Button, Divider, TextField, Box, Typography, Stack, Pagination } from "@mui/material";
import ProductRow from "./ProductRow";
import { useState } from "react";
export default function OrderInfo() {
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    const rowsPerPage = 3
    const keys = Object.keys(products)
    const subTotal = key => products[key].defaultNumber * products[key].unit
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
                    sx={{
                        size: 'small',
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
    },
    40: {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        name: 'Hats',
        defaultNumber: 2,
        unit: 15000

    },
    80: {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        name: 'Honey',
        defaultNumber: 3,
        unit: 50000
    },
    100: {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        name: 'Bicycle',
        defaultNumber: 1,
        unit: 100000
    },
    120: {
        img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
        name: "Starfish",
        defaultNumber: 2,
        unit: 1000000
    },
    140: {
        img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
        name: "Mushroom",
        defaultNumber: 4,
        unit: 100000
    },

}