import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, Card, CardContent } from '@mui/material';
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
export default function RegisterSection() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl" sx={{ mt: 5 }}>
                <Typography variant="h4" align='center'>
                    <Box fontWeight='bold'>
                        ĐĂNG KÝ
                    </Box>
                </Typography>
                <Typography variant="body1" align='center' gutterBottom>
                    để sát cánh cùng vua Theoden
                </Typography>
                <Box
                    sx={{
                        display: 'flex',

                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: "stretch",
                        p: 1
                    }}>
                    <Card sx={{
                        border: "black solid 1px",
                        my: 2,
                        flexGrow: 1,
                        flexBasis: { md: 0 },
                    }}>
                        <CardContent >
                            <Typography variant='body2'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue velit ut tempor tincidunt. Mauris feugiat sagittis viverra. Mauris luctus in diam sit amet ultricies. Donec tincidunt, ligula in dignissim consectetur, nunc velit fringilla lectus, sit amet molestie risus diam non felis. Vivamus consectetur faucibus ex. Fusce lacinia massa ut ligula efficitur, at ultricies metus maximus. Fusce porta, nunc in feugiat efficitur, mauris mi tempus magna, et interdum neque odio quis est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nulla augue, finibus quis mi eget, accumsan dignissim enim. Nulla quis pulvinar turpis. Vestibulum sit amet faucibus lorem, vel vehicula sapien. Suspendisse potenti. Nam porta aliquam lorem id semper. Quisque ligula metus, rutrum eget pulvinar vel, gravida vitae sapien. Mauris ut volutpat quam, sed condimentum felis. Aenean ac finibus est.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Box width={32}></Box>
                    <Card sx={{
                        border: "black solid 1px",
                        my: 2,
                        flexGrow: 1,
                        flexBasis: { md: 0 },

                    }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                <TextField id="outlined-basic" label="Họ và tên lót" variant="outlined" size="small" sx={{ flexGrow: 1 }} />
                                <Box width={20}></Box>
                                <TextField id="outlined-basic" label="Tên" variant="outlined" size="small" sx={{ flexGrow: 1 }} />
                            </Box>
                            <TextField id="outlined-basic" label="Email" variant="outlined" size="small" sx={{ display: 'flex', my: 1, flexGrow: 1 }} />
                            <Button variant="contained" sx={{ my: 1, px: 10, bgcolor: '#384257', "&:hover": { bgcolor: "#242e45" } }}>Đăng ký nhận tin</Button>
                            <Typography variant='body2'>
                                Đăng ký nhận tin để nhận các thông tin mới nhất về email cá nhân và chấp nhận điều khoản của CỬA HÀNG VẢI.
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </React.Fragment >
    );
}
