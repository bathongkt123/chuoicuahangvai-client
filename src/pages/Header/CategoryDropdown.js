import React, { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Button } from "@mui/material";
import axios from "axios";
import qs from "qs";
const items = ["Vải lụa hà đông", "Vải ba tư", "Vải trung đông", "Vải hiếm"];
const ITEM_HEIGHT = 48;

export default function CategoryDropdown() {
  const [categories, setCategories] = useState([]);
  const fetchData = async () => {
    const query = qs.stringify({}, { encodeValuesOnly: true });
    const result = await axios.get(
      `${process.env.REACT_APP_STRAPI_URL}/api/product-categories?${query}`
    );
    setCategories(result.data.data);
    console.log(result);
  };
  useEffect(() => {
    fetchData();
  }, []);
  ////
  const [dropdownAnchor, setDropdownAnchor] = React.useState(null);
  const isDropdown = Boolean(dropdownAnchor);
  const handleMenuClose = () => {
    setDropdownAnchor(null);
  };
  const handleMenuOpen = (event) => {
    setDropdownAnchor(event.currentTarget);
  };
  const categoryMenuId = "category-menu";
  const renderCategoryMenu = (
    <Menu
      anchorEl={dropdownAnchor}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={categoryMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isDropdown}
      onClose={handleMenuClose}
      PaperProps={{
        style: {
          maxHeight: ITEM_HEIGHT * 4.5,
          width: "20ch",
        },
      }}
    >
      {categories.map((item) => (
        <MenuItem sx={{ fontWeight: "bold" }} key={item.id}>
          {item.attributes.name}
        </MenuItem>
      ))}
    </Menu>
  );
  return (
    <React.Fragment>
      <Button
        sx={{
          fontWeight: "bold",
          color: "inherit",
          border: "none",
          p: 0,
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
  );
}
