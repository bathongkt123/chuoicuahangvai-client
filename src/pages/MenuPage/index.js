import React, { useState } from "react";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import FilterSection from "./FilterSection";
import ProductSection from "./ProductSection";
import { Breadcrumbs, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function MenuPage({ search, setSearch }) {
  const navigate = useNavigate();
  const [categoriesFilter, setCategoriesFilter] = useState([]);

  const [colorsFilter, setColorsFilter] = useState([]);
  const [originsFilter, setOriginsFilter] = useState([]);
  const [patternsFilter, setPatternsFilter] = useState([]);
  const [widthsFilter, setWidthsFilter] = useState([]);
  const [stretchesFilter, setStretchesFilter] = useState([]);
  const [sortProduct, setSortProduct] = useState("id");

  return (
    <Container
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
      maxWidth="xl"
    >
      <h1>HÀNG BÁN CHẠY NHẤT</h1>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          component="button"
          variant="body1"
          color="inherit"
          onClick={() => navigate("/")}
        >
          Trang chủ
        </Link>
        <Typography color="#0f0d0c">Sản phẩm</Typography>
      </Breadcrumbs>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <FilterSection
            categoriesFilter={categoriesFilter}
            setCategoriesFilter={setCategoriesFilter}
            colorsFilter={colorsFilter}
            setColorsFilter={setColorsFilter}
            originsFilter={originsFilter}
            setOriginsFilter={setOriginsFilter}
            patternsFilter={patternsFilter}
            setPatternsFilter={setPatternsFilter}
            widthsFilter={widthsFilter}
            setWidthsFilter={setWidthsFilter}
            stretchesFilter={stretchesFilter}
            setStretchesFilter={setStretchesFilter}
            sortProduct={sortProduct}
            setSortProduct={setSortProduct}
          />
        </Grid>

        <Grid item xs={12} sm={8} style={{ marginTop: "20px" }}>
          <ProductSection
            categoriesFilter={categoriesFilter}
            setCategoriesFilter={setCategoriesFilter}
            colorsFilter={colorsFilter}
            setColorsFilter={setColorsFilter}
            originsFilter={originsFilter}
            setOriginsFilter={setOriginsFilter}
            patternsFilter={patternsFilter}
            setPatternsFilter={setPatternsFilter}
            widthsFilter={widthsFilter}
            setWidthsFilter={setWidthsFilter}
            stretchesFilter={stretchesFilter}
            setStretchesFilter={setStretchesFilter}
            sortProduct={sortProduct}
            search={search}
            setSearch={setSearch}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
