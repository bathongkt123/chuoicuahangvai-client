import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
export default function FilterSection() {
  const [sort, setSort] = React.useState("");

  const handleChange = (event) => {
    setSort(event.target.value);
  };
  return (
    <FormControl
      variant="standard"
      sx={{ mt: 5, minWidth: 150, textAlign: "left" }}
    >
      <InputLabel id="sort">Sắp xếp theo</InputLabel>
      <Select
        labelId="sort"
        id="sort"
        value={sort}
        onChange={handleChange}
        label="sort"
      >
        <MenuItem value={"bestsell"}>Bán chạy nhất</MenuItem>
        <MenuItem value={"newestarrival"}>Hàng mới</MenuItem>
        <MenuItem value={"hightolow"}>Giá giảm dần</MenuItem>
        <MenuItem value={"lowtohigh"}>Giá tăng dần</MenuItem>
      </Select>
      <h3>DANH MỤC</h3>
      <h3>MÀU CHỦ ĐẠO</h3>
      <h3>KIỂU MẪU</h3>
      <h3>CHIỀU RỘNG</h3>
    </FormControl>
  );
}
