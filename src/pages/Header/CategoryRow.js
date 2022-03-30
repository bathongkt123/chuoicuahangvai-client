import Box from '@mui/material/Box';
import CategoryDropdown from './CategoryDropdown';
import React from 'react';
import { Divider } from '@mui/material';
const items = ['Hàng mới về', 'Bán chạy nhất', 'Giảm giá', 'Về chúng tôi']
export default function CategoryRow() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            my: 1
        }}>
            <CategoryDropdown />
            <Box sx={{ flexGrow: 1 }}></Box>
            <Box sx={{
                display: { xs: 'none', md: 'flex' },
                fontWeight: 'bold'
            }}>
                {items.map((item, i, { length }) => (
                    <React.Fragment>
                        {item}
                        {i + 1 === length ? null :
                            (
                                <React.Fragment>
                                    <Box width={10} />
                                    <Divider sx={{ bgcolor: '#dbd9ce' }} orientation="vertical" flexItem></Divider>
                                    <Box width={10} />
                                </React.Fragment>
                            )}
                    </React.Fragment>

                ))}
            </Box>
        </Box>
    );
}