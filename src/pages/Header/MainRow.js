import Box from "@mui/material/Box";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountDropdown from "./AccountDropdown";
import MoreIconResponsive from "./MoreIconResponsive";
import { Autocomplete, Badge, Button, Link, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useAuth from "auth/useAuth";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";
import InputAdornment from "@material-ui/core/InputAdornment";

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   display: "flex",
//   flexGrow: 0.5,
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   border: "1.5px solid",
//   borderColor: "#000000",
//   marginRight: theme.spacing(2),
//   marginLeft: theme.spacing(1),

//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(3),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   width: "100%",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//   },
// }));
export default function MainRow({
  cartNumber,
  search,
  setSearch,
  headerLastname,
  headerFirstname,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState("");
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const closePopper = () => setOpen(false);
  const openPopper = () => setOpen(true);

  const { token } = useAuth();
  useEffect(() => {
    const fetchData = async () => {
      const query = qs.stringify({}, { encodeValuesOnly: true });
      const resultProducts = await axios.get(
        `${process.env.REACT_APP_STRAPI_URL}/api/products?${query}`
      );
      setProducts(resultProducts.data.data);
      // console.log(resultProducts);
    };
    fetchData();
    if (location.pathname !== "/menu") {
      setSearch("");
      setValue("");
    }
  }, [location]);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mt: 1,
      }}
    >
      <Link
        component="button"
        underline="none"
        sx={{
          fontWeight: 700,
          color: "inherit",
          fontSize: "1rem",
        }}
        onClick={() => navigate("/")}
      >
        ROYAL FABRIC
      </Link>
      <Box sx={{ display: "flex", flexGrow: 0.5 }}>
        <Autocomplete
          size="small"
          open={open}
          onOpen={openPopper}
          onClose={closePopper}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          search={search}
          freeSolo
          isOptionEqualToValue={(option, value) => option.id === value.id}
          onInputChange={(event, newInputValue) => {
            setSearch(newInputValue);
          }}
          options={products.map((option) => option.attributes.name)}
          sx={{ width: "100%" }}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Search"
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <>
                    <InputAdornment position="start">
                      <Button sx={{ color: "inherit" }}>
                        <SearchIcon
                          onClick={() => {
                            navigate("/menu", { state: { search } });
                            setOpen(false);
                          }}
                        />
                      </Button>
                    </InputAdornment>
                    {params.InputProps.startAdornment}
                  </>
                ),
              }}
            />
          )}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              navigate("/menu", { state: { search } });
            }
          }}
        />
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
        }}
      >
        <Link
          component="button"
          underline="none"
          sx={{
            fontSize: "1rem",
            fontWeight: "bold",
            color: "inherit",
            whiteSpace: "nowrap",
          }}
          onClick={() => navigate("/cart")}
        >
          Giỏ hàng
          <Badge
            invisible={!cartNumber}
            badgeContent={cartNumber}
            color="secondary"
            sx={{ p: 0.5 }}
          >
            <ShoppingCartIcon fontSize="small" />
          </Badge>
        </Link>
        <Box width={30} />
        {token ? (
          <AccountDropdown
            headerLastname={headerLastname}
            headerFirstname={headerFirstname}
          />
        ) : (
          <Link
            component="button"
            underline="none"
            sx={{
              fontSize: "1rem",
              fontWeight: "bold",
              color: "inherit",
              whiteSpace: "nowrap",
            }}
            onClick={() => navigate("/login")}
          >
            Đăng nhập
          </Link>
        )}
      </Box>

      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <MoreIconResponsive cartNumber={cartNumber} navigate={navigate} />
      </Box>
    </Box>
  );
}
