import Box from '@mui/material/Box';
export default function Row3() {
    return (
        <Box sx={{ bgcolor: '#4E5B73', height: 45, display: 'flex' }}>
            <Box sx={{ display: { xs: 'none', md: 'inline' } }}>
                <svg height="45">
                    <polygon points="170 0,200 25,170 50,0 50,0 0" fill="#2c3444">
                    </polygon>
                </svg>
            </Box>
            <Box sx={{ display: 'inline', alignSelf: "center", color: 'white', ml: 1 }}>
                MIỄN PHÍ giao hàng cho các em gái miền Tây
            </Box>
        </Box>
    )
}