import Box from '@mui/material/Box';
import { Typography } from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import { styled, alpha } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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
        minWidth: '500px',
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
        [theme.breakpoints.up('md')]: {
            width: '20ch',
            minWidth: '500px',
        },
    },
}));
export default function Row1() {



    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);


    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);



    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };



    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };



    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >


            <MenuItem>
                <Box sx={{ fontWeight: 'bold', mx: 2, display: 'flex', alignItems: 'center' }}>
                    <AccountCircleIcon sx={{ mr: 0.5 }} />
                    Tài khoản
                </Box>
            </MenuItem>
            <MenuItem>
                <Box sx={{ fontWeight: 'bold', mx: 2, display: 'flex', alignItems: 'center' }}>
                    <ShoppingCartIcon sx={{ mr: 0.5 }} />
                    Giỏ Hàng
                </Box>
            </MenuItem>
        </Menu>
    );
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
                display: { xs: 'none', md: 'flex' }, flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',

            }}>
                <Box sx={{ fontWeight: 'bold', mx: 2, display: 'flex', alignItems: 'center' }}>
                    <AccountCircleIcon sx={{ mr: 0.5 }} />
                    Tài khoản
                </Box>
                <Box sx={{ fontWeight: 'bold', mx: 2, display: 'flex', alignItems: 'center' }}>
                    <ShoppingCartIcon sx={{ mr: 0.5 }} />
                    Giỏ Hàng
                </Box>
            </Box>

            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                >
                    <MoreIcon />
                </IconButton>
            </Box>
            {renderMobileMenu}

        </Box >

    );
}