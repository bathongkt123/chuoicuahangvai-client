import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Card, CardContent, CardMedia } from '@mui/material';
import { Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
export default function ResponsesSection() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
                <Typography variant="h4" align='center'>
                    <Box fontWeight='bold'>
                        PHẢN HỒI TỪ KHÁCH HÀNG
                    </Box>
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'nowrap',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'space-between',
                        alignItems: 'stretch',
                        p: 1
                    }}>
                    {items.map((item) =>
                    (
                        <Card align="center" sx={{
                            border: "black solid 1px",
                            m: 1,
                            display: "flex",
                            flexDirection: "column",
                        }}  >
                            <CardMedia
                                component="img"
                                image={item.image}
                                alt="an avatar"
                                loading="lazy"
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <FontAwesomeIcon icon={faCoffee} />
                                <FontAwesomeIcon icon={faCoffee} />
                                <Typography variant="body2" color="text.secondary">
                                    {item.review}
                                </Typography>
                            </CardContent>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#807F7D' }}>
                                    {item.address}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Container>
        </React.Fragment >
    );
}
const items = [
    {
        name: 'Aragorn',
        review: 'asdfadsfdadfssdfdfsadfdsfadfsaafdsdfLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue velit ut tempor tincidunt. Mauris feugiat sagittis viverra. Mauris luctus in diam sit amet ultricies.',
        address: 'Middle Earth, Gondor',
        image: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1"
    },
    {
        name: 'Boromir',
        review: 'Lorem ipsum dolor sit amet, us in diam sit amet ultricies.',
        address: 'Middle Earth, Gondor',
        image: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1"
    },
    {
        name: 'Faramir',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue velit ut tempor tincidunt. Mauris feugiat sagittis viverra. Mauris luctus in diam sit amet ultricies.',
        address: 'Middle Earth, Gondor',
        image: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1"
    },
    {
        name: 'Gandalf',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue velit ut tempor tincidunt. Mauris feugiat sagittis viverra. Mauris luctus in diam sit amet ultricies.',
        address: 'Middle Earth, Homeless',
        image: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1"
    },

];