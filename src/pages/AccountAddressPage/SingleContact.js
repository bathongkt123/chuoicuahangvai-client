import { Typography, Box, Button, ButtonGroup } from "@mui/material";
import axios from "axios";
import React from "react";

export default function SingleContact({
  setEdit,
  edit,
  id,
  item,
  setAddresses,
}) {
  const fetchAddresses = async () => {
    const resultAddresses = await axios.get(
      `${process.env.REACT_APP_STRAPI_URL}/api/receive-address`
    );
    setAddresses(resultAddresses.data);
  };
  const DeleteAddress = async () => {
    const response = await axios
      .delete(`${process.env.REACT_APP_STRAPI_URL}/api/cities/${id}`)
      .then((response) => {
        fetchAddresses();
      });
  };
  return (
    <React.Fragment>
      <h2>{`${item.name.lastname} ${item.name.firstname}`}</h2>
      <Typography variant="body1">{item.address.address}</Typography>
      <Typography variant="body1">
        {item.address.address_three_levels.ward}
      </Typography>
      <Typography variant="body1">
        {item.address.address_three_levels.district}
      </Typography>
      <Typography variant="body1">
        {item.address.address_three_levels.city}
      </Typography>
      <Typography variant="body1">{item.phone}</Typography>

      {item.is_default && (
        <Box sx={{ color: "orange" }}>
          <Typography variant="body1">Mặc định</Typography>
        </Box>
      )}
      <ButtonGroup sx={{ whiteSpace: "nowrap", my: 2 }}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#384257" }}
          onClick={setEdit}
          disabled={edit === id}
        >
          Chỉnh sửa
        </Button>
        <Box width={20}></Box>
        <Button
          variant="contained"
          // onClick={deleteContact}
          sx={{ backgroundColor: "#384257" }}
        >
          Xóa
        </Button>
      </ButtonGroup>
    </React.Fragment>
  );
}
