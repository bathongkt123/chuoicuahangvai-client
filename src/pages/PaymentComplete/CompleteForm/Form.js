import { Fragment } from "react"
import { Typography, Stack, Box, FormControl, RadioGroup, FormControlLabel, Radio, Divider } from "@mui/material"
export default function Form({ deliveryInfo, deliveryMethod, paymentType, setPaymentType, paymentMethods }) {

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
                    <Typography variant="body1">Số điện thoại:</Typography>
                    <Typography variant="body1">
                        {`${deliveryInfo.phone}`}
                    </Typography>
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography variant="body1">Phương thức vận chuyển:</Typography>
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
                        <RadioGroup sx={{ mx: 2 }}
                            value={paymentType}
                            onChange={(e) => setPaymentType(e.target.value)}
                        >
                            {
                                paymentMethods.map((method) =>

                                    <FormControlLabel
                                        key={method.type}
                                        value={method.type} control={<Radio />}
                                        label={`${method.name}(${method.type})`} />
                                )
                            }
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Box>
        </Fragment>
    )
}