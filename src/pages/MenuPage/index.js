import React from "react";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import FilterSection from "./FilterSection";
import ProductSection from "./ProductSection";


export default function MenuPage() {
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
        <h1>HÀNG BÁN CHẠY NHẤT</h1>
        <Link href="/" color="inherit" style={{ paddingRight: "5px" }}>
          Trang chủ
        </Link>
        /
        <Link href="/menu" color="inherit" style={{ padding: "0px 5px" }}>
          Sản phẩm
        </Link>
        /
        <p style={{ display: "inline-block", paddingLeft: "5px" }}>
          Bán chạy nhất
        </p>
        <Grid container spacing={10}>
          <Grid item xs={12} sm={3}>
            <FilterSection />
          </Grid>
          <Grid item xs={12} sm={8} style={{ marginTop: "20px" }}>
            <ProductSection />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
