import { Fragment } from "react"
import { Typography, Stack, Box, FormControl, RadioGroup, FormControlLabel, Radio } from "@mui/material"
export default function Form({ deliveryInfo, deliveryMethods, method, setMethod }) {

    return (
        <Fragment>

            <Box
                sx={{
                    backgroundColor: "white",
                    my: 2,
                    borderRadius: 1,
                    border: 1,
                    py: 1,
                    px: 2,
                }}
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
            </Box>

            <Box sx={{ width: "100%", mt: 4 }}>
                <Typography variant="h5">Phương thức giao hàng</Typography>
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
                        <RadioGroup name="shipment" sx={{ mx: 2 }}
                            value={method.id}
                            onChange={(e) => setMethod(deliveryMethods[e.target.value])}
                        >
                            {
                                Object.keys(deliveryMethods).map((key) =>
                                    <Stack
                                        key={key}
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                        <FormControlLabel
                                            value={key}
                                            control={<Radio />}
                                            label={`${deliveryMethods[key].name} - Thời gian: ${deliveryMethods[key].estimate_time}`}
                                        />
                                        <Typography variant="subtitle1">
                                            <Box sx={{ fontWeight: "bold" }}>{deliveryMethods[key].cost}</Box>
                                        </Typography>
                                    </Stack>
                                )
                            }
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Box>
        </Fragment>
    )
}