
import { Button, Divider, TextField, Box, Typography, Stack, Pagination, Autocomplete } from "@mui/material";
import ProductRow from "./ProductRow";
import { Fragment, useEffect, useState } from "react";
import formatPrice from "helper/formatPrice";
import axios from "axios";
import useAuth from "auth/useAuth";
export default function OrderInfo({ skus, price, deliveryMethod, voucher, setVoucher }) {
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    const rowsPerPage = 3
    const subTotal = item => item.price / 100 * item.length
    const { token } = useAuth()
    const [vouchers, setVouchers] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            if (!price) return
            const response = await axios.post(
                `${process.env.REACT_APP_STRAPI_URL}/api/vouchers-available`, { orderAmount: price });
            setVouchers(response.data)
        };
        fetchData()
    }, [])
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
                <Pagination count={Math.ceil(skus.length / rowsPerPage)}
                    page={page}
                    variant="outlined"
                    shape="rounded"
                    size="large"
                    onChange={handleChange}
                    sx={{ mx: 'auto', mt: 2 }} />
            </Stack>
            {Boolean(token) &&
                <Fragment>
                    <Box sx={{ display: 'flex' }}>
                        <Autocomplete
                            disablePortal
                            id="voucher"
                            value={voucher}
                            onChange={(event, newValue) => {
                                setVoucher(newValue);
                            }}
                            getOptionLabel={(voucher) => voucher.description}
                            isOptionEqualToValue={(option, value) => option.code === value.code}
                            options={vouchers}
                            fullWidth
                            renderInput={(params) => <TextField {...params} label="Chọn một Voucher" />}
                        />
                        {/* <Box width={20} />
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
                        </Button> */}
                    </Box>


                    <Stack spacing={2}>
                        <Box sx={{ display: 'flex' }}>
                            <Typography variant='h6'>
                                Giảm giá từ Voucher
                            </Typography>
                            <Box sx={{ flexGrow: 1 }} />
                            <Box sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                                {formatPrice(voucher ? -voucher.amount : 0)}
                            </Box>
                        </Box>
                    </Stack>
                </Fragment>

            }

            <Stack spacing={2}>
                <Box sx={{ display: 'flex' }}>
                    <Typography variant='h6'>
                        Phí vận chuyển
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                        {deliveryMethod && deliveryMethod.id ? formatPrice(deliveryMethod.cost) : `Tính ở bước tiếp theo`}
                    </Box>
                </Box>
            </Stack>


            <Box sx={{ display: 'flex', my: 2 }}>
                <Typography variant='h6'>
                    Tổng
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                    {formatPrice(Number(deliveryMethod && deliveryMethod.id ? price + deliveryMethod.cost + (voucher ? -voucher.amount : 0) : price + (voucher ? -voucher.amount : 0)))}
                </Box>
            </Box>
        </Stack>
    )
}

