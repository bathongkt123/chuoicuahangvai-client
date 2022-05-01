import { Typography, Box } from "@mui/material";
export default function NotAllowedPage() {
    return (
        <Box sx={{ display: 'flex', height: '100vh' }}>
            <Typography variant='h2' sx={{ m: 'auto' }}>
                Bạn chưa có quyền truy cập vào đây
            </Typography>
        </Box>
    )
}