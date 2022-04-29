import { Box, Divider, Pagination, Stack } from "@mui/material";
import React, { useState } from "react";
import SingleContact from "./SingleContact";

export default function CustomerInfo({
  contacts,
  deleteContact,
  setEdit,
  edit,
  addresses,
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
        {addresses.map(function (item) {
          return (
            <SingleContact
              // contact={contacts[key]}
              // deleteContact={deleteContact(key)}
              // setEdit={() => setEdit(key)}
              // id={key}
              // edit={edit}
              id={item.id}
              item={item}
              setEdit={() => setEdit(item.id)}
              edit={edit}
            />
          );
        })}
        {/* <Pagination
          count={Math.ceil(keys.length / rowsPerPage)}
          page={page}
          variant="outlined"
          shape="rounded"
          size="large"
          onChange={handleChange}
          sx={{ mx: "auto", mt: 2 }}
        /> */}
      </Stack>
    </Box>
  );
}
