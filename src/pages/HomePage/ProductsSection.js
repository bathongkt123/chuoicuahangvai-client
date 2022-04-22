import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box } from "@mui/material";
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ProductsSection({ products }) {
  return (
    <ImageList sx={{ width: "100%", mt: 1 }} variant="quilted" cols={4}>
      {products.map((item, i) => (
        <ImageListItem
          key={item.attributes.id}
          cols={layout[i].cols || 1}
          rows={layout[i].rows || 1}
        >
          <img
            {...srcset(`${process.env.REACT_APP_STRAPI_URL}${item.attributes.images.data[0].attributes.url}`,
              250, layout[i].rows, layout[i].cols)}
            alt={item.attributes.images.data.name}
          />
          <Box
            sx={{
              position: "absolute",
              color: "white",
              top: "45%",
              left: "50%",
              transform: "translateX(-50%)",
              fontWeight: "bold",
              fontSize: { xs: "1.5rem", md: "2.2rem" },
            }}
          >
            {item.attributes.images.data.name}
          </Box>
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const layout = [
  {
    rows: 2,
    cols: 2,
  },
  {},
  {},
  {
    cols: 2,
  },
  {
    cols: 2,
  },

  {
    rows: 2,
    cols: 2,
  },
  {
    cols: 2,
  }
];
