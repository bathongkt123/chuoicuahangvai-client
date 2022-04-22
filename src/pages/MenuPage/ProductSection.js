import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import qs from "qs";

export default function ProductSection() {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    const query = qs.stringify(
      {
        populate: ["product"],
      },
      { encodeValuesOnly: true }
    );
    const resultProducts = await axios.get(
      `${process.env.REACT_APP_STRAPI_URL}/api/product-skus?${query}`
    );
    setProducts(resultProducts.data.data);
    console.log(resultProducts);
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
              <div className="rectangle" />
            </a>
            <p style={{ fontWeight: "bold" }}> </p>
            <p> {item.attributes.product.data.attributes.name} </p>
            <p> {item.attributes.price}đ trên mét</p>
          </Grid>
        );
      })}
    </Grid>
  );
}
