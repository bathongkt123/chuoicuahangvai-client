import MoreIcon from "@mui/icons-material/MoreVert";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState, Fragment } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { GiRolledCloth } from "react-icons/gi";
import { MdVpnKey, MdAccountCircle } from "react-icons/md";
import {
  Badge,
  Link,
  MenuItem,
  Menu,
  IconButton,
  Divider,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import useAuth from "auth/useAuth";
const ITEM_HEIGHT = 48;

export default function MoreIconResponsive({ cartNumber }) {
  const navigate = useNavigate();
  const { removeUserSession } = useAuth();
  const { token } = useAuth();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      PaperProps={{
        style: {
          maxHeight: ITEM_HEIGHT * 6,
          width: "25ch",
        },
      }}
    >
      {token ? (
        <MenuItem>
          <Link
            component="button"
            underline="none"
            sx={{
              fontSize: "1rem",
              fontWeight: "bold",
              color: "inherit",
              whiteSpace: "nowrap",
              display: "flex",
            }}
            onClick={() => {
              navigate("/accountinfo");
              handleMobileMenuClose();
            }}
          >
            <MdAccountCircle />
            <Box sx={{ width: 4 }} />
            Thông tin cá nhân
          </Link>
        </MenuItem>
      ) : (
        <Box />
      )}
      {token ? (
        <MenuItem>
          <Link
            component="button"
            underline="none"
            sx={{
              fontSize: "1rem",
              fontWeight: "bold",
              color: "inherit",
              whiteSpace: "nowrap",
              display: "flex",
            }}
            onClick={() => {
              navigate("/passwordchange");
              handleMobileMenuClose();
            }}
          >
            <MdVpnKey />
            <Box sx={{ width: 4 }} />
            Đổi mật khẩu
          </Link>
        </MenuItem>
      ) : (
        <Box />
      )}

      {token ? (
        <MenuItem>
          <Link
            component="button"
            underline="none"
            sx={{
              fontSize: "1rem",
              fontWeight: "bold",
              color: "inherit",
              whiteSpace: "nowrap",
              display: "flex",
            }}
            onClick={() => {
              navigate("/account");
              handleMobileMenuClose();
            }}
          >
            <GiRolledCloth />
            <Box sx={{ width: 4 }} />
            Đơn hàng
          </Link>
        </MenuItem>
      ) : (
        <MenuItem key="account">
          <Link
            component="button"
            underline="none"
            sx={{
              fontSize: "1rem",
              fontWeight: "bold",
              color: "inherit",
              whiteSpace: "nowrap",
            }}
            onClick={() => {
              navigate("/login");
              handleMobileMenuClose();
            }}
          >
            Đăng nhập
          </Link>
        </MenuItem>
      )}
      <MenuItem key="cart">
        <Link
          component="button"
          underline="none"
          sx={{
            fontSize: "1rem",
            fontWeight: "bold",
            color: "inherit",
            whiteSpace: "nowrap",
          }}
          onClick={() => {
            handleMobileMenuClose();

            navigate("/cart");
          }}
        >
          <Badge
            invisible={!cartNumber}
            badgeContent={cartNumber}
            color="secondary"
          >
            <ShoppingCartIcon fontSize="small" />
          </Badge>
          Giỏ hàng
        </Link>
      </MenuItem>
      <Divider flexItem />
      {token ? (
        <MenuItem>
          <Link
            component="button"
            underline="none"
            sx={{
              fontSize: "1rem",
              fontWeight: "bold",
              color: "inherit",
              whiteSpace: "nowrap",
              display: "flex",
            }}
            onClick={() => {
              removeUserSession();
              handleMobileMenuClose();
            }}
          >
            <Box sx={{ width: 4 }} />
            <LogoutIcon />
            Đăng xuất
          </Link>
        </MenuItem>
      ) : (
        <Box />
      )}
      <Divider flexItem />
      {/* {items.map((item) => (
        <MenuItem sx={{ fontWeight: "bold" }} key={item}>
          {item}
        </MenuItem>
      ))} */}
    </Menu>
  );
  return (
    <Fragment>
      <IconButton
        size="large"
        aria-label="show more"
        aria-controls={isMobileMenuOpen ? mobileMenuId : undefined}
        aria-haspopup="true"
        aria-expanded={isMobileMenuOpen ? "true" : undefined}
        onClick={handleMobileMenuOpen}
        color="inherit"
      >
        <MoreIcon />
      </IconButton>
      {renderMobileMenu}
    </Fragment>
  );
}
const items = ["Hàng mới về", "Bán chạy nhất"];
