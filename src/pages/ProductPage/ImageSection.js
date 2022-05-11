import React, { useRef } from "react";
import Box from "@material-ui/core/Box";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Button } from "@mui/material";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import Stack from "@mui/material/Stack";

export default function ImageSection({
  productImages,
  largeImage,
  setLargeImage,
}) {
  const slider = useRef();
  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
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

  const renderArrows = () => {
    return (
      <Box className="slider-arrow">
        <Button className="arrow-btn " onClick={previous} sx={{ flexGrow: 1 }}>
          <FaArrowCircleLeft color="white" size="5vh" opacity="0.4" />
        </Button>
        <Button className="arrow-btn next" onClick={next}>
          <FaArrowCircleRight color="white" size="5vh" opacity="0.4" />
        </Button>
      </Box>
    );
  };
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
  };

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
        <Box sx={{ mt: 4, position: "relative" }}>
          {renderArrows()}
          <Slider ref={(c) => (slider.current = c)} {...settings}>
            {renderSlides()}
          </Slider>
        </Box>
      )}
    </Box>
  );
}
