import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreIconResponsive from './MoreIconResponsive';
import * as React from 'react';
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    border: '1.5px solid',
    borderColor: '#000000',
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(1),
    width: '100%',

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
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            minWidth: '40ch',
        },
        [theme.breakpoints.up('md')]: {
            minWidth: '50ch',
        },
        [theme.breakpoints.up('lg')]: {
            minWidth: '60ch',
        },
    },
}));
export default function MainRow() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 1
        }}>
            <Typography
                variant="h6"
                component="div"
                sx={{ display: 'block' }}
            >
                <Box sx={{ fontWeight: 'bold' }}>
                    TROLLER
                </Box>
            </Typography>

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
                >
                    <AccountCircleIcon fontSize='small' sx={{ mr: 0.5 }} />
                    Tài khoản
                </Button>
                <Box width={24}></Box>
                <Button sx={{ fontWeight: 'bold', border: 'none', p: 0, color: 'inherit', whiteSpace: 'nowrap' }}>
                    <ShoppingCartIcon fontSize='small' sx={{ mr: 0.5 }} />
                    Giỏ Hàng
                </Button>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <MoreIconResponsive />
            </Box>


        </Box >

    );
}