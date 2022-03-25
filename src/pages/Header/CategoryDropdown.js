import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Button } from "@mui/material";
const items = [
    "Vải lụa hà đông",
    "Vải ba tư",
    "Vải trung đông",
    "Vải hiếm",
    "Vải hiếm",
    "Vải hiếm",
    "Vải hiếm",
    "Vải hiếm",
]
const ITEM_HEIGHT = 48;

export default function CategoryDropdown() {
    const [dropdownAnchor, setDropdownAnchor] = React.useState(null);
    const isDropdown = Boolean(dropdownAnchor);
    const handleMenuClose = () => {
        setDropdownAnchor(null);
    };
    const handleMenuOpen = (event) => {
        setDropdownAnchor(event.currentTarget);
    };
    const categoryMenuId = 'category-menu';
    const renderCategoryMenu = (
        <Menu
            anchorEl={dropdownAnchor}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            id={categoryMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isDropdown}
            onClose={handleMenuClose}
            PaperProps={{
                style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '20ch',
                },
            }}
        >
            {items.map((item) => (
                <MenuItem sx={{ fontWeight: 'bold' }}>
                    {item}
                </MenuItem>
            ))}
        </Menu>
    );
    return (
        <React.Fragment>
            <Button sx={{
                fontWeight: 'bold',
                color: 'inherit',
                border: 'none',
                p: 0
            }}
                aria-controls={categoryMenuId}
                aria-haspopup="true"
                onClick={handleMenuOpen}
                endIcon={<KeyboardArrowDownIcon />}
            >
                Danh mục sản phẩm
            </Button>
            {renderCategoryMenu}
        </React.Fragment>

    )
}