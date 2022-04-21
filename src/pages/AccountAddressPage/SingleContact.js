import { Typography, Box, Button, ButtonGroup, Divider } from "@mui/material";
import React from "react";

export default function SingleContact({
  contact,
  deleteContact,
  addContact,
  setEdit,
  edit,
  id,
}) {
  return (
    <React.Fragment>
      <h2>{`${contact.Lname} ${contact.Fname}`}</h2>
      <Typography variant="body1">{contact.address}</Typography>
      <Typography variant="body1">{contact.ward}</Typography>
      <Typography variant="body1">{contact.district}</Typography>
      <Typography variant="body1">{contact.city}</Typography>
      <Typography variant="body1">{contact.phoneNum}</Typography>
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
          onClick={deleteContact}
          sx={{ backgroundColor: "#384257" }}
        >
          Xóa
        </Button>
      </ButtonGroup>
    </React.Fragment>
  );
}
