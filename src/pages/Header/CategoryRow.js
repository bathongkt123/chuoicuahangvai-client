import Box from "@mui/material/Box";
import CategoryDropdown from "./CategoryDropdown";
import React from "react";
import { Divider } from "@mui/material";
const items = ["Hàng mới về", "Bán chạy nhất", "Giảm giá"];
export default function CategoryRow({ categories }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        my: 1,
      }}
    >
      <CategoryDropdown categories={categories} />
      <Box sx={{ flexGrow: 1 }}></Box>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          fontWeight: "bold",
        }}
      >
        {items.map((item, i, { length }) => (
          <React.Fragment key={item}>
            <Box width={10} />
            {item}
            <Box width={10} />
            <Divider sx={{ bgcolor: "#dbd9ce" }} orientation="vertical" />
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
}
