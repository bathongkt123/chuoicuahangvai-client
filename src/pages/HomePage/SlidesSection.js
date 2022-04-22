import { Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";

export default function SlidesSection({ slides }) {
  return (
    <Carousel
      indicatorIconButtonProps={{
        sx: {
          color: "grey",
        },
      }}
      activeIndicatorIconButtonProps={{
        sx: {
          color: "black",
        },
      }}
      NextIcon={<ArrowForwardIcon sx={{ color: "white", fontSize: "30px" }} />}
      PrevIcon={<ArrowBackIcon sx={{ color: "white", fontSize: "30px" }} />}
      indicatorContainerProps={{
        sx: { zIndex: 1, position: "absolute", top: "90%" },
      }}
      sx={{ height: "75vh" }}
    >
      {slides.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item({ item }) {
  return (
    <Box>
      <Box
        component="img"
        sx={{
          width: "100%",
          height: "75vh",
        }}
        alt="Missing image"
        src={`${process.env.REACT_APP_STRAPI_URL}${item.attributes.url}`}
      />
      <Box
        sx={{
          position: "absolute",
          color: "white",
          top: "33.75vh",
          left: "50%",
          transform: "translateX(-50%)",
          fontWeight: "bold",
          fontSize: { xs: "1.5rem", md: "2.2rem" },
        }}
      >
        SẢN PHẨM MỚI
      </Box>
    </Box>


  );
}
