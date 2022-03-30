import React from 'react';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
export default function Footer() {


    return (
        <React.Fragment
        >
            <Box bgcolor="#2C3444" color='white' marginTop={2}>
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={3}>
                            <Box borderBottom={1}><h3>THÔNG TIN LIÊN HỆ</h3></Box>
                            <Box >
                                <p style={{ fontWeight: "bold" }}>CÔNG TY TNHH CHV </p>
                                <p> Địa chỉ: 273 Nguyễn Văn Đậu - Bình Thạnh - TP.HCM </p>
                                <p> SĐT: 0907865755 </p>
                                <p> Email: cuahangvai@gmail.com </p>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box borderBottom={1}><h3>HỖ TRỢ KHÁCH HÀNG</h3></Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Các câu hỏi thường gặp
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Hướng dẫn đặt hàng
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Phương thức vận chuyển
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Chính sách đổi trả
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Hướng dẫn trả góp
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box borderBottom={1}><h3>VỀ CỬA HÀNG VẢI</h3></Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Giới thiệu về cửa hàng vải
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Chính sách bảo mật thanh toán
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Chính sách bảo mật thông tin cá nhân
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Điều khoản sử dụng
                                </Link>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={3}>
                            <Box borderBottom={1}><h3>KẾT NỐI VỚI CHÚNG TÔI</h3></Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    <FontAwesomeIcon icon={faFacebook} style={{ paddingRight: 5 }}>
                                    </FontAwesomeIcon>
                                    Facebook
                                </Link>
                                <Box>
                                    <Link href="/" color="inherit">

                                        <FontAwesomeIcon icon={faTwitter} style={{ paddingRight: 5 }} >
                                        </FontAwesomeIcon>
                                        Twitter

                                    </Link>
                                </Box>
                            </Box>

                        </Grid>

                    </Grid>
                </Container>
            </Box>
            <Box bgcolor="#212631" color='white'>
                <Container >
                    Copyright © 2021 CỬA HÀNG VẢI
                </Container>
            </Box>
        </React.Fragment >
    );
}

