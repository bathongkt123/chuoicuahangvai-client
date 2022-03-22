import { Box } from '@material-ui/core'
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export default function SlidesSection() {
    const items = [
        {
            path: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/12/Aragorn-the-ranger.jpg",
            text: "Hàng mới"
        },
        {
            path: "https://i2.wp.com/www.eargasmweb.com/wp-content/uploads/2015/02/ff.png?fit=917%2C527",
            text: "Bán chạy"
        },
        {
            path: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/10/Gandalf-Name-Feature-Image.jpg",
            text: "Hàng thương hiệu"
        }
    ]

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
        >
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel >
    )
}

function Item(props) {
    return (
        <Box>
            <Box
                component="img"
                sx={{
                    width: '100%',
                    height: 520,
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
                    fontSize: 50
                }}
            >
                {props.item.text}
            </Box>
        </Box>
    )
}