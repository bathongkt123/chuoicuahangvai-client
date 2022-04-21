import { Box, Button, Divider, Stack } from "@mui/material";
import React from "react";
import SingleContact from "./SingleContact";

export default function CustomerInfo({
  contacts,
  deleteContact,
  setEdit,
  edit,
}) {
  const keys = Object.keys(contacts);
  return (
    <Box sx={{ my: 2 }}>
      <Stack divider={<Divider />} spacing={2}>
        {keys.map((key) => (
          <SingleContact
            contact={contacts[key]}
            deleteContact={deleteContact(key)}
            setEdit={() => setEdit(key)}
            id={key}
            edit={edit}
          />
        ))}
      </Stack>
    </Box>
  );
}
