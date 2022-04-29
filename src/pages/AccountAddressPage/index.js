import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import Heading from "./Heading";
import CustomerInfo from "./CustomerInfo";
import FormInfo from "./FormInfo";
import { useState } from "react";
import axios from "axios";
import qs from "qs";

export default function AccountAddressPage() {
  const [contacts, setContacts] = useState(addressList);
  const [edit, setEdit] = useState(null);
  const deleteContact = (key) => () => {
    console.log("Delete");
    const { [key]: _, ...newContacts } = contacts;
    setContacts(newContacts);
  };

  const [addresses, setAddresses] = useState([]);

  const fetchData = async () => {
    const query = qs.stringify({}, { encodeValuesOnly: true });
    const resultAddresses = await axios.get(
      `${process.env.REACT_APP_STRAPI_URL}/api/receive-address?${query}`
    );

    setAddresses(resultAddresses.data);
    console.log(resultAddresses);
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
          contacts={contacts}
          deleteContact={deleteContact}
          setEdit={setEdit}
          edit={edit}
          addresses={addresses}
        />
        <Box width={120} />
        <FormInfo
          addresses={addresses}
          edit={edit}
          setAddresses={setAddresses}
        />
      </Box>
    </Container>
  );
}
const addressList = {
  1: {
    Lname: "Nguyen Van",
    Fname: "A",
    address: "247 LTK",
    district: "Quận 10",
    ward: "phường 14",
    city: "TP.HCM",
    phoneNum: "0123456789",
    defaultAdd: false,
  },
  2: {
    Lname: "Nguyen Van",
    Fname: "B",
    address: "247s LTK",
    district: "Quận 1",
    ward: "phường 1",
    city: "TP.HCM",
    phoneNum: "01234512126789",
    defaultAdd: false,
  },
  3: {
    Lname: "Nguyen Van",
    Fname: "Asad",
    address: "27 LTK",
    district: "Quận 1",
    ward: "phường 2",
    city: "TP.HCM",
    phoneNum: "0123456789",
    defaultAdd: false,
  },
};
