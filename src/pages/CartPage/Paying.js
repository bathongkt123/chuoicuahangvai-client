

import Box from '@mui/material/Box';

import { Button, Checkbox, FormControl, FormControlLabel, InputBase } from '@mui/material';
import { Typography } from '@mui/material';


export default function Paying() {
    return (

        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: "stretch",
            }}>
            {/* Left Card */}
            <Box sx={{
                my: 2,
                flexGrow: 1,
                flexBasis: { md: 0 },
            }}>
                <Typography variant='h5'>
                    Yêu cầu đặc biệt
                </Typography>
                <Box height={8}></Box>
                <InputBase sx={{
                    border: 1,
                    p: 1,
                }}
                    placeholder="Nhập yêu cầu về vận chuyển tại đây"
                    fullWidth
                    multiline
                    rows={6}
                />
            </Box>
            {/* <Box width={32}></Box> */}
            <Box sx={{
                my: 2,
                flexGrow: 1,
                flexBasis: { md: 0 },
            }}>
                <FormControl component="fieldset" sx={{ display: 'flex', alignItems: 'self-end' }}>

                    <FormControlLabel
                        control={<Checkbox />}
                        label="Thanh toán đơn hàng này sau (mua nợ)"
                        labelPlacement="end"
                        sx={{ alignSelf: 'flex-end' }}
                    />
                    <FormControlLabel
                        control={<Checkbox />}
                        label=" Chấp nhận Điều khoản sử dụng và Điều khoản bảo mật"
                        labelPlacement="end"
                    />

                    <Button variant="contained"

                        sx={{ my: 1, px: 4, bgcolor: '#384257', "&:hover": { bgcolor: "#242e45" } }}>
                        Thanh toán
                    </Button>
                </FormControl>
            </Box>

        </Box >


    )
}