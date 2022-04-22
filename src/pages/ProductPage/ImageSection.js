import React from "react";
import Box from "@material-ui/core/Box";

export default function ImageSection({ productImages }) {
  return (
    <Box component="img" src={`${process.env.REACT_APP_STRAPI_URL}${productImages}`} loading="lazy" />
  );
}
