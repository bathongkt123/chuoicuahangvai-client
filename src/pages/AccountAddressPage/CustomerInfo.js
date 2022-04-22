import { Box, Divider, Pagination, Stack } from "@mui/material";
import React, { useState } from "react";
import SingleContact from "./SingleContact";

export default function CustomerInfo({
  contacts,
  deleteContact,
  setEdit,
  edit,
}) {
  const keys = Object.keys(contacts);
  const rowsPerPage = 2;
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <Box sx={{ my: 2 }}>
      <Stack divider={<Divider />} spacing={2}>
        {keys.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((key) => {
          return (
            <SingleContact
              contact={contacts[key]}
              deleteContact={deleteContact(key)}
              setEdit={() => setEdit(key)}
              id={key}
              edit={edit}
            />
          );
        })}
        <Pagination
          count={Math.ceil(keys.length / rowsPerPage)}
          page={page}
          variant="outlined"
          shape="rounded"
          size="large"
          onChange={handleChange}
          sx={{ mx: "auto", mt: 2 }}
        />
      </Stack>
    </Box>
  );
}
