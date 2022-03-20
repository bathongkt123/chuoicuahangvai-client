import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Slide from '@mui/material/Slide';
import PropTypes from 'prop-types';

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
  marginLeft: 0,
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
    },
  },
}));

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

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
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <React.Fragment sx={{ flexGrow: 1, bgcolor: '#EEEDE8' }}>
        
      <AppBar position="sticky" sx={{ bgcolor: "#EEEDE8",
                                     color: "#000000",
                                     fontWeight: 500 }}>
        <Toolbar sx={{
          display: 'flex',
          flexDirection: 'column',
          fontWeight: 'bold'
         }} >
             <div style={{ width: '100%' }}>
             <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                mt: 1
         }}>
              <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block' }, fontWeight: 'bold'}}
                >
                    <Box sx={{fontWeight: 'bold'}}>
                        TROTK
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

                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                
                <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                mx: 3
         }}>
                <Typography>
                <Box sx={{fontWeight: 'bold', mx: 2}}>
                Tài Khoản
                        </Box>
                    
                </Typography>

                <Typography sx={{fontWeight: 'bold',}}>
                <Box sx={{fontWeight: 'bold',  ml: 2}}>
                Giỏ Hàng
                        </Box>
                   
                </Typography>
                <ShoppingCartIcon />
                
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
            </Box>
            <Box sx = {{ display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            pt: 1
                            }}>
                    <Typography >
                        <Box sx={{fontWeight: 'bold'}}>
                        Danh mục sản phẩm
                        </Box>
                    </Typography>
                    <Box sx = {{ display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            fontWeight: 'bold'
                            }}>
                                 <Box sx={{fontWeight: 'bold', mx: 2}}>
                                 Hàng mới về
                    </Box>
                    <Box sx={{fontWeight: 'bold', mx: 2}}>
                    Bán chạy nhất
                    </Box>
                    <Box sx={{fontWeight: 'bold', mx: 2}}>
                    Giảm giá
                    </Box>
                    <Box sx={{fontWeight: 'bold', mx: 2}}>
                    Về chúng tôi
                    </Box>
                        
                    </Box>
                   
            </Box>
             </div>

          
        </Toolbar>
      </AppBar>
      
      {renderMobileMenu}
      {renderMenu}
    </React.Fragment>
  );
}