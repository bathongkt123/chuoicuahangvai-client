import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import qs from "qs";
import { Box } from "@mui/material";

export default function ProductSection() {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    const query = qs.stringify(
      {
        populate: ["product", "images", "color"],
      },
      { encodeValuesOnly: true }
    );
    const resultProducts = await axios.get(
      `${process.env.REACT_APP_STRAPI_URL}/api/product-skus?${query}`
    );
    console.log(resultProducts);
    setProducts(resultProducts.data.data);

  };
  useEffect(() => {
    fetchData();

  }, []);

  return (
    <Grid container spacing={10}>
      {products.map(function (item) {
        return (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <a href={`/menu/${item.id}`}>
              <Box
                component="img"
                src={`${process.env.REACT_APP_STRAPI_URL}${item.attributes.images.data[0].attributes.url}`}
                loading="lazy"
                sx={{ width: '15rem', height: '12rem', objectFit: 'fill' }}
              />
            </a>
            <p style={{ fontWeight: "bold" }}> </p>
            <p> {item.attributes.product.data.attributes.name} </p>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {item.attributes.color.data.attributes.name}:
              <Box
                sx={{
                  bgcolor: item.attributes.color.data.attributes.color,
                  width: "1.5rem",
                  height: "1.5rem",
                  borderRadius: "50%",
                  justifyContent: "center",
                  flexDirection: "row",
                  mx: 1,
                }}
              />
            </Box>
            <p> {item.attributes.price}đ trên mét</p>
          </Grid>
        );
      })}
    </Grid>
  );
}
