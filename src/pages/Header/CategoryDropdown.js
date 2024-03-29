import { useState, Fragment } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ITEM_HEIGHT = 48;
export default function CategoryDropdown({
  categories,
  setMainFilter,
  mainFilter,
}) {
  const [dropdownAnchor, setDropdownAnchor] = useState(null);
  const isDropdown = Boolean(dropdownAnchor);

  const handleMenuClose = () => {
    setDropdownAnchor(null);
  };
  const handleMenuOpen = (event) => {
    setDropdownAnchor(event.currentTarget);
  };
  const categoryMenuId = "category-menu";
  const navigate = useNavigate();

  const handleClick = (e) => {
    const filter = e.target.value;
    handleMenuClose();
    navigate("/menu", { state: { filter } });
  };
  // useEffect(() => {
  //   if (location.pathname !== "/menu") setMainFilter("");
  // }, [location]);

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
        <MenuItem
          sx={{ fontWeight: "bold" }}
          key={item.id}
          value={item.id}
          onClick={handleClick}
        >
          {item.attributes.name}
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <Fragment>
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
    </Fragment>
  );
}
