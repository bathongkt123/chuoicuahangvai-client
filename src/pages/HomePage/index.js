import React from 'react';
import { Box } from '@mui/system';
import SlidesSection from './SlidesSection';
import ProductsSection from './ProductsSection';
import RegisterSection from './RegisterSection';
import ResponsesSection from './ResponsesSection';
export default function HomePage() {

    return (
        <Box component="div" sx={{ bgcolor: 'white', width: '100%', borderTop: '1px solid', borderColor: '#FFFFFF' }}>
            <SlidesSection />
            <ProductsSection />
            <ResponsesSection />
            <RegisterSection />
        </Box>
    );

}

