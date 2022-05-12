import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import qs from "qs";
import { Box, Link, Stack } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import formatPrice from "helper/formatPrice";

export default function ProductSection({
  categoriesFilter,
  colorsFilter,
  originsFilter,
  patternsFilter,
  widthsFilter,
  stretchesFilter,
  sortProduct,
}) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const { state } = useLocation();
  function getKeySort(filter) {
    const temp = Object.assign({}, filter);
    Object.keys(temp).forEach(function (k) {
      if (temp[k] === false) {
        delete temp[k];
      }
    });
    return Object.keys(temp);
  }

  function sortColor(filter) {
    let data = [];
    let temp = filter;
    temp.forEach((item) => {
      data.push(item.id);
    });

    return data;
  }
  const fetchData = async () => {
    const query = qs.stringify(
      {
        populate: [
          "product",
          "images",
          "color",
          "origin",
          "width",
          "pattern",
          "stretch",
          "product.category",
        ],
        sort: [sortProduct],
        filters: {
          product: {
            name: {
              $containsi: state ? state.search : "",
            },
            category: {
              id: {
                $in: getKeySort(categoriesFilter),
              },
            },
          },

          color: {
            id: {
              $in: sortColor(colorsFilter),
            },
          },
          origin: {
            id: {
              $in: getKeySort(originsFilter),
            },
          },
          pattern: {
            id: {
              $in: getKeySort(patternsFilter),
            },
          },
          width: {
            id: {
              $in: getKeySort(widthsFilter),
            },
          },
          stretch: {
            id: {
              $in: getKeySort(stretchesFilter),
            },
          },
        },
      },
      { encodeValuesOnly: true }
    );
    const resultProducts = await axios.get(
      `${process.env.REACT_APP_STRAPI_URL}/api/product-skus?${query}`
    );
    setProducts(resultProducts.data.data);
  };

  useEffect(() => {
    let abortController = new AbortController();
    fetchData();
    return () => {
      abortController.abort();
    };
  }, [
    categoriesFilter,
    colorsFilter,
    originsFilter,
    patternsFilter,
    widthsFilter,
    stretchesFilter,
    sortProduct,
    state,
  ]);

  return (
    <Grid container spacing={10}>
      {products.map(function (item) {
        return (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Stack alignItems="center">
              <Link onClick={() => navigate(`/menu/${item.id}`)}>
                <Box
                  component="img"
                  src={`${process.env.REACT_APP_STRAPI_URL}${item.attributes.images.data[0].attributes.url}`}
                  loading="lazy"
                  sx={{ width: "15rem", height: "12rem", objectFit: "fill" }}
                />
              </Link>
              <Stack>
                <Box
                  sx={{
                    display: "flex",
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  {item.attributes.product.data.attributes.name} -{" "}
                  {item.attributes.sku}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                    {item.attributes.color.data
                      ? item.attributes.color.data.attributes.name
                      : ""}
                    :
                  </Box>
                  <Box
                    sx={{
                      bgcolor: item.attributes.color.data
                        ? item.attributes.color.data.attributes.color
                        : "",
                      width: "1.5rem",
                      height: "1.5rem",
                      borderRadius: "50%",
                      mx: 1,
                    }}
                  />
                </Box>
                <Box sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                  Giá(vnđ/mét): {formatPrice(Number(item.attributes.price))}
                </Box>
              </Stack>
            </Stack>
          </Grid>
        );
      })}
    </Grid>
  );
}
