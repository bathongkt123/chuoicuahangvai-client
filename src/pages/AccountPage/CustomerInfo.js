import { Typography, Box, Button } from "@mui/material";

export default function CustomerInfo() {
    return (
        <Box sx={{ whiteSpace: 'nowrap' }}>
            <h2>Lê Bá Thông</h2>
            <Typography variant='body1' >
                268 Lý Thường Kiệt
            </Typography>
            <Typography variant='body1' >
                Phường 14
            </Typography>
            <Typography variant='body1' >
                Quận 10
            </Typography>
            <Typography variant='body1' >
                TP Hồ Chí Minh
            </Typography>
            <Typography variant='body1'>
                (+84)911357191
            </Typography>
            <Button sx={{
                fontWeight: 'bold', p: 0, textTransform: 'none',
                '&:hover': { textDecoration: 'underline' }
            }}
                color="inherit"
            >
                Chỉnh sửa địa chỉ
            </Button>
        </Box>
    )
}