

import Box from '@mui/material/Box';

import { Button, Checkbox, FormControl, FormControlLabel, InputBase, Link } from '@mui/material';
import { Typography } from '@mui/material';
import { createSlice, configureStore } from '@reduxjs/toolkit'

export default function Paying() {
    store.subscribe(() => console.log(store.getState()))

    // Still pass action objects to `dispatch`, but they're created for us
    store.dispatch(incremented())
    // {value: 1}
    store.dispatch(incremented())
    // {value: 2}
    store.dispatch(decremented())
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
                    />
                    <FormControlLabel
                        control={<Checkbox />}
                        label=" Chấp nhận Điều khoản sử dụng và Điều khoản bảo mật"
                        labelPlacement="end"
                    />

                    <Button
                        variant="contained"
                        href='/payment/delivery'
                        to={{
                            pathname: "/payment/delivery",
                            data: 'abc'
                        }}
                        sx={{ my: 1, px: 4, bgcolor: '#384257', "&:hover": { bgcolor: "#242e45" } }}>

                        Thanh toán
                    </Button>

                </FormControl>
            </Box>

        </Box >


    )
}
const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        incremented: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decremented: state => {
            state.value -= 1
        }
    }
})
export const { incremented, decremented } = counterSlice.actions

const store = configureStore({
    reducer: counterSlice.reducer
})