import { Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from 'react';

const items = [
    {
        path: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
        text: "Hàng mới về"
    },
    {
        path: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
        text: "Bán chạy"
    },
    {
        path: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
        text: "Hàng thương hiệu"
    }
]
export default function SlidesSection() {
    return (
        <Carousel
            indicatorIconButtonProps={{
                sx: {
                    color: 'grey'
                }
            }}
            activeIndicatorIconButtonProps={{
                sx: {
                    color: "black"
                }
            }}
            NextIcon={<ArrowForwardIcon sx={{ color: 'white', fontSize: "30px", }} />}
            PrevIcon={<ArrowBackIcon sx={{ color: 'white', fontSize: "30px" }} />}
            indicatorContainerProps={{ sx: { zIndex: 1, position: 'absolute', top: '90%' } }}
            sx={{ height: "64vh", }}
        >
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel >
    )
}

function Item({ item }) {
    return (
        <React.Fragment>
            <Box
                component="img"
                sx={{
                    width: '100%',
                    height: "64vh",
                }}
                alt="Missing image"
                src={item.path}
            />
            <Box
                sx={{
                    position: 'absolute',
                    color: 'white',
                    top: "45%",
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontWeight: 'bold',
                    fontSize: { xs: '2rem', md: "2.5rem" }
                }}
            >
                {item.text}
            </Box>
        </React.Fragment >
    )
}