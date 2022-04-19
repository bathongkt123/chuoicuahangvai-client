import { Typography, Box, Button } from "@mui/material";

export default function CustomerInfo() {
    return (
        <Box sx={{ whiteSpace: 'nowrap' }}>
            <h2>Thông tin</h2>
            <Typography variant='body1' >
                <Box sx={{ fontWeight: 'bold', display: 'inline', mr: 1 }}>
                    Họ và tên:
                </Box>
                Lê Bá Thông
            </Typography>
            <Typography variant='body1' >
                <Box sx={{ fontWeight: 'bold', display: 'inline', mr: 1 }}>
                    Địa chỉ:
                </Box>
                268 Lý Thường Kiệt Phường 14 Quận 10 TP Hồ Chí Minh
            </Typography>
            <Typography variant='body1' >
                <Box sx={{ fontWeight: 'bold', display: 'inline', mr: 1 }}>
                    Số điện thoại:
                </Box>
                (+84)911357191
            </Typography>
            <Typography variant='body1' >
                <Box sx={{ fontWeight: 'bold', display: 'inline', mr: 1 }}>
                    Phương thức thanh toán:
                </Box>
                COD
            </Typography>
            <Typography variant='body1' >
                <Box sx={{ fontWeight: 'bold', display: 'inline', mr: 1 }}>
                    Phương thức vận chuyển:
                </Box>
                Giao hàng miễn phí
            </Typography>

        </Box>
    )
}