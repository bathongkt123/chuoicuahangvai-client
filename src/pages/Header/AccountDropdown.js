import { useState, Fragment } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { ButtonBase, Divider, Link, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import useAuth from "auth/useAuth";
import { GiRolledCloth } from 'react-icons/gi';
export default function AccountDropdown() {
    const navigate = useNavigate()
    const { removeUserSession } = useAuth()
    const [dropdownAnchor, setDropdownAnchor] = useState(null);
    const isDropdown = Boolean(dropdownAnchor);
    const handleMenuClose = () => {
        setDropdownAnchor(null);
    };
    const handleMenuOpen = (event) => {
        setDropdownAnchor(event.currentTarget);
    };
    const accountMenuId = "account-menu";

    const renderAccountMenu = (
        <Menu
            anchorEl={dropdownAnchor}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
            }}
            id={accountMenuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={isDropdown}
            onClose={handleMenuClose}
        >
            <MenuItem sx={{ fontWeight: "bold" }} >
                <Link onClick={() => {
                    navigate('/account')
                    handleMenuClose()
                }}
                    component='button'
                    underline="none"
                    sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'inherit', display: 'flex', alignItems: 'center' }}>
                    Đơn hàng
                    <Box sx={{ width: 4 }} />
                    <GiRolledCloth />
                </Link>

            </MenuItem>
            <Divider />
            <MenuItem sx={{ fontWeight: "bold" }}>
                <Link onClick={() => {
                    removeUserSession()
                    handleMenuClose()
                }}
                    component='button'
                    underline="none"
                    sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'inherit', display: 'flex', alignItems: 'center' }}>
                    Đăng xuất
                    <Box sx={{ width: 4 }} />
                    <LogoutIcon />
                </Link>
            </MenuItem>

        </Menu>
    );

    return (
        <Fragment>
            <ButtonBase
                sx={{
                    fontSize: '1rem',
                    fontWeight: "bold",
                    color: "inherit",
                    border: "none",
                }}
                aria-controls={accountMenuId}
                aria-haspopup="true"
                onClick={handleMenuOpen}

            >
                Tài khoản
                <AccountCircleIcon sx={{ pl: 0.5 }} />
            </ButtonBase>
            {renderAccountMenu}
        </Fragment>
    );
}