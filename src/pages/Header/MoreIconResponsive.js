import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import * as React from 'react';
import { Button, Divider } from '@mui/material';
const ITEM_HEIGHT = 48;
const items = ['Hàng mới về', 'Bán chạy nhất', 'Giảm giá', 'Về chúng tôi']
export default function MoreIconResponsive() {
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
            sx={{ display: { md: 'none', xs: 'block' } }}
            PaperProps={{
                style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '20ch',
                },
            }}
        >
            <MenuItem>
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
            </MenuItem>
            <MenuItem>
                <Button sx={{ fontWeight: 'bold', border: 'none', p: 0, color: 'inherit', whiteSpace: 'nowrap' }}>
                    <ShoppingCartIcon fontSize='small' sx={{ mr: 0.5 }} />
                    Giỏ Hàng
                </Button>
            </MenuItem>
            <Divider flexItem />
            {items.map((item) => (
                <MenuItem sx={{ fontWeight: 'bold' }}>
                    {item}
                </MenuItem>
            ))}
        </Menu>
    );
    return (
        <React.Fragment>
            <IconButton
                size="large"
                aria-label="show more"
                aria-controls={isMobileMenuOpen ? mobileMenuId : undefined}
                aria-haspopup="true"
                aria-expanded={isMobileMenuOpen ? 'true' : undefined}
                onClick={handleMobileMenuOpen}
                color="inherit"
            >
                <MoreIcon />
            </IconButton>
            {renderMobileMenu}
        </React.Fragment>
    )
}