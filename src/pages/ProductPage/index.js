import { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import ImageSection from "./ImageSection";
import ProductInfoSection from "./ProductInfoSection";
import { Breadcrumbs, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonBase } from "@mui/material";
import axios from "axios";
import qs from "qs";
export default function ProductPage() {
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [productSKU, setProductSKU] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPattern, setProductPattern] = useState("");
  const [productOrigin, setProductOrigin] = useState("");
  const [productWidth, setProductWidth] = useState("");
  const [productStretch, setProductStretch] = useState("");
  const [productImages, setProductImages] = useState([]);
  const [largeImage, setLargeImage] = useState("");

  const { productId } = useParams();
  useEffect(() => {
    let abortController = new AbortController();  
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

      let imagesURL = [];
      const temp = data.attributes.images.data;
      for (var i = 0; i < temp.length; i++) {
        imagesURL[i] = temp[i].attributes.url;
      }
      setProductImages(imagesURL);
      setLargeImage(imagesURL[0]);
    };
    fetchData();
    return () => {  
      abortController.abort();  
      }  
  }, [productId]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "50px",
      }}
    >
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          component={ButtonBase}
          underline="hover"
          color="inherit"
          sx={{ fontSize: "1rem" }}
          onClick={() => navigate("/")}
        >
          Trang chủ
        </Link>
        <Link
          component={ButtonBase}
          underline="hover"
          color="inherit"
          sx={{ fontSize: "1rem" }}
          onClick={() => navigate("/menu")}
        >
          Menu
        </Link>

        <Typography color="#0f0d0c">
          {productName} - {productSKU}
        </Typography>
      </Breadcrumbs>

      <Grid
        container
        spacing={10}
        style={{ margin: "10px", textAlign: "left" }}
      >
        <Grid item xs={12} md={5}>
          <ImageSection
            key={productId}
            productImages={productImages}
            setLargeImage={setLargeImage}
            largeImage={largeImage}
          />
        </Grid>
        <Grid item xs={12} md={7}>
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
    </div>
  );
}
