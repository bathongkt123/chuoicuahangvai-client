import MoreIcon from '@mui/icons-material/MoreVert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState, Fragment } from 'react';
import { Badge, Link, MenuItem, Menu, IconButton, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const ITEM_HEIGHT = 48;

export default function MoreIconResponsive({ cartNumber }) {
    const navigate = useNavigate()
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
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

            PaperProps={{
                style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '20ch',
                },
            }}
        >
            <MenuItem key='account'>
                <Link
                    component="button"
                    underline="none"
                    sx={{
                        fontSize: '1rem',
                        fontWeight: "bold",
                        color: "inherit",
                        whiteSpace: "nowrap",
                    }}
                    onClick={() => navigate('/login')}
                >
                    Tài khoản
                </Link>
            </MenuItem>
            <MenuItem key='cart'>
                <Link
                    component="button"
                    underline="none"
                    sx={{
                        fontSize: '1rem',
                        fontWeight: "bold",
                        color: "inherit",
                        whiteSpace: "nowrap",
                    }}
                    onClick={() => navigate('/cart')}
                >
                    Giỏ hàng
                    <Badge
                        invisible={!cartNumber}
                        badgeContent={cartNumber}
                        color="secondary"
                        sx={{ p: 0.8 }}
                    >
                        <ShoppingCartIcon fontSize="small" />
                    </Badge>
                </Link>
            </MenuItem>
            <Divider flexItem />
            {items.map((item) => (
                <MenuItem sx={{ fontWeight: 'bold' }} key={item}>
                    {item}
                </MenuItem>
            ))}
        </Menu>
    );
    return (
        <Fragment>
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
        </Fragment>
    )
}
const items = ['Hàng mới về', 'Bán chạy nhất', 'Giảm giá']