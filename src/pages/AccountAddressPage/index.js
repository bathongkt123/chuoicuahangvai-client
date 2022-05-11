import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import Heading from "./Heading";
import CustomerInfo from "./CustomerInfo";
import FormInfo from "./FormInfo";
import { useState } from "react";
import axios from "axios";
import qs from "qs";

export default function AccountAddressPage() {
  const [edit, setEdit] = useState(null);

  const [addresses, setAddresses] = useState([]);

  const fetchData = async () => {
    const query = qs.stringify({}, { encodeValuesOnly: true });
    const resultAddresses = await axios.get(
      `${process.env.REACT_APP_STRAPI_URL}/api/receive-address?${query}`
    );

    setAddresses(resultAddresses.data);
    // console.log(resultAddresses);
    // console.log(addresses);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container maxWidth="lg">
      <Heading />
      <Box sx={{ display: "flex" }}>
        <CustomerInfo
          setEdit={setEdit}
          edit={edit}
          addresses={addresses}
          setAddresses={setAddresses}
        />
        <Box width={120} />
        <FormInfo
          addresses={addresses}
          edit={edit}
          setAddresses={setAddresses}
          setEdit={setEdit}
        />
      </Box>
    </Container>
  );
}
