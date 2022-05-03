import React from "react";
import Box from "@material-ui/core/Box";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function ImageSection({ productImages }) {
  const renderSlides = () =>
    productImages
      .slice(1)
      .map((item) => (
        <Box
          key={item}
          component="img"
          src={`${process.env.REACT_APP_STRAPI_URL}${item}`}
        />
      ));
  return (
    <Box>
      <Box
        component="img"
        src={`${process.env.REACT_APP_STRAPI_URL}${productImages[0]}`}
        loading="lazy"
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "30rem",
          objectFit: "fill",
        }}
      />
      <Box sx={{ mt: 4 }}>
        <Slider
          dots={false}
          slidesToShow={2}
          slidesToScroll={2}
          autoplay={true}
          autoplaySpeed={4000}
        >
          {renderSlides()}
        </Slider>
      </Box>
    </Box>
  );
}
