import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreIconResponsive from './MoreIconResponsive';
import { useCookies } from 'react-cookie';
import * as React from 'react';
import { Badge } from '@mui/material';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    flexGrow: 0.5,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    border: '1.5px solid',
    borderColor: '#000000',
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(1),


    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',

    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
    },
}));
export default function MainRow() {
    const [cookies] = useCookies(['cart']);
    const products = cookies.cart
    const cartNumber = products ? Object.keys(products).length : 0
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 1
        }}>
            <Button sx={{
                fontWeight: 700,
                color: 'inherit',
                border: 'none',
                fontSize: '1rem',

                p: 0
            }}
                href='/'
            >
                ROYAL FABRIC
            </Button >
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Tìm kiếm..."
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>

            <Box sx={{
                display: { xs: 'none', md: 'flex' },
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <Button
                    sx={{
                        fontWeight: 'bold',
                        border: 'none',
                        p: 0,
                        color: 'inherit',
                        whiteSpace: 'nowrap',
                    }}
                    href='/login'
                >

                    Tài khoản
                </Button>
                <Box width={24}></Box>

                <Button sx={{ fontWeight: 'bold', border: 'none', p: 0, color: 'inherit', whiteSpace: 'nowrap' }} href='/cart'>
                    Giỏ Hàng
                    <Badge invisible={!cartNumber} badgeContent={cartNumber} color="secondary" sx={{ p: 0.8 }}>
                        <ShoppingCartIcon fontSize='small' />
                    </Badge>

                </Button>


            </Box>

            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <MoreIconResponsive />
            </Box>

        </Box >

    );
}