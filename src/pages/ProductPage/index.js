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
  const [productInventory, setProductInventory] = useState(0);
  const [largeImage, setLargeImage] = useState("");

  const { productId } = useParams();
  useEffect(() => {
    let abortController = new AbortController();
    const fetchData = async () => {
      let signal = abortController.signal;
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
        `${process.env.REACT_APP_STRAPI_URL}/api/product-sku-inventory/${productId}?${query}`,
        { signal: signal }
      );
      const data = response.data;
      console.log(response);
      data.product && setProductName(data.product.name);

      setProductSKU(data.sku);

      setProductPrice(data.price);
      setProductInventory(data.inventoryLength);
      data.product && setProductDescription(data.product.description);

      data.pattern && setProductPattern(data.pattern.name);

      data.origin && setProductOrigin(data.origin.name);

      data.width && setProductWidth(data.width.name);

      data.stretch && setProductStretch(data.stretch.name);
      let imagesURL = [];
      const temp = data.images;
      for (var i = 0; i < temp.length; i++) {
        imagesURL[i] = temp[i].url;
      }
      setProductImages(imagesURL);
      setLargeImage(imagesURL[0]);
    };
    fetchData();
    return () => {
      setTimeout(() => {
        abortController.abort();
      }, 1000);
    };
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
        style={{
          marginLeft: "10px",
          textAlign: "left",
          marginTop: "10px",
          marginBottom: "10px",
        }}
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
            productInventory={productInventory}
          />
        </Grid>
      </Grid>
    </div>
  );
}
