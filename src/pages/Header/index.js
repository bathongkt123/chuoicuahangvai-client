import * as React from "react";
import MainRow from "./MainRow";
import CategoryRow from "./CategoryRow";
import AdsRow from "./AdsRow";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useCookies } from "react-cookie";
import PropTypes from "prop-types";
import axios from "axios";
import { Slide } from "@mui/material";
import { useState, useEffect } from "react";

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function Header({
  headerLastname,
  setHeaderlastname,
  headerFirstname,
  setHeaderFirstname,
}) {
  const [cookies] = useCookies(["cart"]);
  const products = cookies.cart;
  const cartNumber = products ? Object.keys(products).length : 0;
  const [ads, setAds] = useState("");
  const [search, setSearch] = useState("");
  const [mainFilter, setMainFilter] = useState("");
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    let result = await axios.get(
      `${process.env.REACT_APP_STRAPI_URL}/api/product-categories`
    );
    setCategories(result.data.data);

    result = await axios.get(
      `${process.env.REACT_APP_STRAPI_URL}/api/homepage`
    );
    setAds(result.data.data.attributes.header_banner);

    result = await axios.get(
      `${process.env.REACT_APP_STRAPI_URL}/api/customer-info`
    );
    // console.log(result);
    setHeaderlastname(result.data.lastname);
    setHeaderFirstname(result.data.firstname);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar
          position="sticky"
          sx={{
            bgcolor: "#EEEDE8",
            color: "#000000",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <MainRow
                cartNumber={cartNumber}
                search={search}
                setSearch={setSearch}
                headerLastname={headerLastname}
                headerFirstname={headerFirstname}
              />
              <CategoryRow
                categories={categories}
                mainFilter={mainFilter}
                setMainFilter={setMainFilter}
              />
            </Box>
          </Toolbar>
          <AdsRow ads={ads} />
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
}
