import { Fragment } from "react"
import { Typography, Stack, Box, FormControl, RadioGroup, FormControlLabel, Radio, Link, Divider } from "@mui/material"
export default function Form({ deliveryInfo, deliveryMethod, paymentType, setPaymentType }) {

    return (
        <Fragment>

            <Stack
                sx={{
                    backgroundColor: "white",
                    my: 2,
                    borderRadius: 1,
                    border: 1,
                    py: 1,
                    px: 2,
                }}
                divider={<Divider />}
                spacing={0.5}
            >
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"

                >
                    <Typography variant="body1">Thông tin liên hệ:</Typography>
                    <Typography variant="body1">{deliveryInfo.email}</Typography>
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography variant="body1">Địa chỉ:</Typography>
                    <Typography variant="body1">
                        {`${deliveryInfo.address}`}
                    </Typography>
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography variant="body1">Phường/Xã:</Typography>
                    <Typography variant="body1">
                        {`${deliveryInfo.ward}`}
                    </Typography>
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography variant="body1">Quận/Huyện:</Typography>
                    <Typography variant="body1">
                        {`${deliveryInfo.district}`}
                    </Typography>
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography variant="body1">Tỉnh/Thành Phố:</Typography>
                    <Typography variant="body1">
                        {`${deliveryInfo.city}`}
                    </Typography>
                </Stack>

                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography variant="body1">Phương thức thanh toán:</Typography>
                    <Typography variant="body1">
                        {`${deliveryMethod.name}`}
                    </Typography>
                </Stack>
            </Stack>

            <Box sx={{ width: "100%", mt: 4 }}>
                <Typography variant="h5">Phương thức thanh toán</Typography>

                <Box
                    sx={{
                        backgroundColor: "white",
                        my: 2,
                        borderRadius: 1,
                        border: 1,
                        py: 1,
                    }}
                >
                    <FormControl fullWidth>
                        <RadioGroup name="shipment" sx={{ mx: 2 }}>
                            <FormControlLabel value="COD" control={<Radio />} label="COD" />
                            <Divider />
                            <FormControlLabel
                                value="VNPay"
                                control={<Radio />}
                                label="Thanh toán trực tuyến - VNPay"
                            />
                            <Divider />
                            <FormControlLabel
                                value="Momo"
                                control={<Radio />}
                                label="Thanh toán trực tuyến - Momo"
                            />
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Box>
        </Fragment>
    )
}