import { Box, Divider, Pagination, Stack } from "@mui/material";
import React, { useState } from "react";
import SingleContact from "./SingleContact";

export default function CustomerInfo({
  contacts,
  deleteContact,
  setEdit,
  edit,
  addresses,
  setAddresses,
}) {
  const rowsPerPage = 2;
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <Box sx={{ my: 2 }}>
      <Stack divider={<Divider />} spacing={2}>
        {/* {addresses.map(function (item) { */}
        {addresses
          .slice((page - 1) * rowsPerPage, page * rowsPerPage)
          .map((item) => {
            return (
              <SingleContact
                // deleteContact={deleteContact(key)}
                id={item.id}
                item={item}
                setEdit={() => setEdit(item.id)}
                edit={edit}
                key={item.id}
                setAddresses={setAddresses}
              />
            );
          })}
        <Pagination
          count={Math.ceil(addresses.length / rowsPerPage)}
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
