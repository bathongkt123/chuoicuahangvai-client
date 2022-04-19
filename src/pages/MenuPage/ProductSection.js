import React from "react";
import Grid from "@material-ui/core/Grid";
import { Data } from "../../productData";

var rows = Data.map(function (row) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <a href={`/menu/${row.id}`}>
        <div className="rectangle" />
      </a>
      <p style={{ fontWeight: "bold" }}>
        {" "}
        {row.name} - {row.color}
      </p>
      <p> {row.price}đ trên mét</p>
    </Grid>
  );
});
export default function ProductSection() {
  return (
    <Grid container spacing={10}>
      {rows}
    </Grid>
  );
}
