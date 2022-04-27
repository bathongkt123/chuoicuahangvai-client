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
  const [productSKU, setProductSKU] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPattern, setProductPattern] = useState("");
  const [productOrigin, setProductOrigin] = useState("");
  const [productWidth, setProductWidth] = useState("");
  const [productStretch, setProductStretch] = useState("");
  const [productImages, setProductImages] = useState("");
  const { productId } = useParams();

  useEffect(() => {
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
      data.attributes.product.data &&
        setProductName(data.attributes.product.data.attributes.name);

      setProductSKU(data.attributes.sku);

      setProductPrice(data.attributes.price);

      data.attributes.product.data &&
        setProductDescription(
          data.attributes.product.data.attributes.description
        );

      data.attributes.pattern.data &&
        setProductPattern(data.attributes.pattern.data.attributes.name);

      data.attributes.origin.data &&
        setProductOrigin(data.attributes.origin.data.attributes.name);

      data.attributes.width.data &&
        setProductWidth(data.attributes.width.data.attributes.name);

      data.attributes.stretch.data &&
        setProductStretch(data.attributes.stretch.data.attributes.name);

      data.attributes.images.data[0] &&
        setProductImages(data.attributes.images.data[0].attributes.url);
      // console.log(
      //   `${process.env.REACT_APP_STRAPI_URL}${data.attributes.images.data[0].attributes.url}`
      // );
      console.log(data);
    };
    fetchData();
  }, [productId]);

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
          {productName} - {productSKU}
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
              productSKU={productSKU}
              productImages={productImages}
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
