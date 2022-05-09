import React from "react";
import { Box } from "@mui/system";
import SlidesSection from "./SlidesSection";
import ProductsSection from "./ProductsSection";
import RegisterSection from "./RegisterSection";
import ResponsesSection from "./ResponsesSection";
import axios from "axios";
import qs from "qs";
import { useState, useEffect } from "react";
export default function HomePage() {
  const [homepage, setHomePage] = useState({
    member_responses: [],
    new_products_banners: {
      data: [],
    },
    features_sku: {
      data: [],
    },
  });
  useEffect(() => {
    const fetchData = async () => {
      const query = qs.stringify(
        {
          populate: [
            "member_responses",
            "member_responses.avatar",
            "new_products_banners",
            "features_sku",
            "features_sku.images",
          ],
        },
        { encodeValuesOnly: true }
      );
      const result = await axios.get(
        `${process.env.REACT_APP_STRAPI_URL}/api/homepage?${query}`
      );
      setHomePage(result.data.data.attributes);
    };
    fetchData();
  }, []);
  return (
    <Box
      component="div"
      sx={{
        bgcolor: "white",
        width: "100%",
        borderTop: "1px solid",
        borderColor: "#FFFFFF",
      }}
    >
      <SlidesSection slides={homepage.new_products_banners.data} />
      <ProductsSection products={homepage.features_sku.data.slice(0, 7)} />
      <ResponsesSection responses={homepage.member_responses.slice(0, 4)} />
      <RegisterSection signupContent={homepage.signup_section} />
    </Box>
  );
}
