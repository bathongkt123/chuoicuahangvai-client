import React from "react";
import Box from "@material-ui/core/Box";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function ImageSection({
  productImages,
  largeImage,
  setLargeImage,
}) {
  const renderSlides = () =>
    productImages.map((item) => (
      <Box
        onClick={() => setLargeImage(item)}
        key={item}
        component="img"
        src={`${process.env.REACT_APP_STRAPI_URL}${item}`}
        sx={{ height: "30vh" }}
      />
    ));
  return (
    <Box>
      <Box
        component="img"
        src={`${process.env.REACT_APP_STRAPI_URL}${largeImage}`}
        loading="lazy"
        sx={{
          display: "flex",
          justifyContent: "center",
          objectFit: "fill",
          height: "40vh",
          width: "100%",
        }}
      />
      {productImages.length > 1 && (
        <Box sx={{ mt: 4 }}>
          <Slider dots={false} slidesToShow={2} slidesToScroll={2}>
            {renderSlides()}
          </Slider>
        </Box>
      )}
    </Box>
  );
}
