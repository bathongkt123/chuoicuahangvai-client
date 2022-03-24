import { Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from 'react';

const items = [
    {
        path: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
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
                    color: 'grey'       // 3
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
            sx={{ height: "70vh", }}
        >
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel >
    )
}

function Item(props) {
    return (
        <React.Fragment>
            <Box
                component="img"
                sx={{
                    width: '100%',
                    height: "70vh",
                }}
                alt="Missing image"
                src={props.item.path}
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
                {props.item.text}
            </Box>
        </React.Fragment >
    )
}