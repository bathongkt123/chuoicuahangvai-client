import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import ImageSection from "./ImageSection";
import ProductInfoSection from "./ProductInfoSection";
import { useParams } from "react-router-dom";
import axios from "axios";
import qs from "qs";
export default function ProductPage() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPattern, setProductPattern] = useState("");
  const [productOrigin, setProductOrigin] = useState("");
  const [productWidth, setProductWidth] = useState("");
  const [productStretch, setProductStretch] = useState("");
  const [productImages, setProductImages] = useState('');
  const { productId } = useParams();
  const fetchData = async () => {
    if (productId === null) return;
    const query = qs.stringify(
      {
        populate: [
          "product",
          "images",
          "color",
          "width",
          "pattern",
          "origin",
          "stretch",
        ],
      },
      { encodeValuesOnly: true }
    );
    const response = await axios.get(
      `${process.env.REACT_APP_STRAPI_URL}/api/product-skus/${productId}?${query}`
    );
    const data = response.data.data;
    setProductName(data.attributes.product.data.attributes.name || '');
    setProductPrice(data.attributes.price || 0);
    setProductDescription(data.attributes.product.data.attributes.description || '');
    setProductPattern(data.attributes.pattern.data.attributes.name || '');
    setProductOrigin(data.attributes.origin.data.attributes.name || '');
    setProductWidth(data.attributes.width.data.attributes.name || '');
    setProductStretch(data.attributes.stretch.data.attributes.name || '');
    setProductImages(data.attributes.images.data[0].attributes.url || '');
    console.log(`${process.env.REACT_APP_STRAPI_URL}${data.attributes.images.data[0].attributes.url}`);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        margin: "50px",
      }}
    >
      <Box>
        <Link href="/" color="inherit" style={{ paddingRight: "5px" }}>
          Trang chủ
        </Link>
        /
        <Link href="/menu" color="inherit" style={{ padding: "0px 5px" }}>
          Sản phẩm
        </Link>
        /
        <p style={{ display: "inline-block", paddingLeft: "5px" }}>
          {productName}
        </p>
        <Grid
          container
          spacing={10}
          style={{ margin: "10px", textAlign: "left" }}
        >
          <Grid item xs={12} sm={5}>
            <ImageSection productImages={productImages} />
          </Grid>
          <Grid item xs={12} sm={7}>
            <ProductInfoSection
              productId={productId}
              productName={productName}
              productPrice={productPrice}
              productDescription={productDescription}
              productPattern={productPattern}
              productOrigin={productOrigin}
              productWidth={productWidth}
              productStretch={productStretch}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
