import Box from '@mui/material/Box';
import { Theme } from '@mui/material';
export default function Row2() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            my: 1
        }}>

            <Box sx={{ fontWeight: 'bold', whiteSpace: "nowrap" }}>
                Danh mục sản phẩm
            </Box>

            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                fontWeight: 'bold'
            }}>
                <Box sx={{ fontWeight: 'bold', mx: 2, }}>
                    Hàng mới về
                </Box>
                <Box sx={{ fontWeight: 'bold', mx: 2, }}>
                    Bán chạy nhất
                </Box>
                <Box sx={{ fontWeight: 'bold', mx: 2, }}>
                    Giảm giá
                </Box>
                <Box sx={{ fontWeight: 'bold', mx: 2, }}>
                    Về chúng tôi
                </Box>

            </Box>
        </Box>
    );
}