import { Box, Container } from "@mui/material";
import React from "react";
import Heading from "./Heading";
import CustomerInfo from "./CustomerInfo";
import FormInfo from "./FormInfo";
import { useState } from "react";

export default function AccountAddressPage() {
  const [contacts, setContacts] = useState(addressList);
  const [edit, setEdit] = useState(null);
  const deleteContact = (key) => () => {
    console.log("Delete");
    const { [key]: _, ...newContacts } = contacts;
    setContacts(newContacts);
  };
  const addContact = (contact) => () => {
    console.log("AddAddress");
    const keys = Object.keys(contacts).length;
    const key = keys + 1;

    if (edit === null) setContacts({ ...contacts, [key]: contact });
    else {
      setContacts({ ...contacts, [edit]: contact });
      setEdit(null);
    }
  };
  return (
    <Container maxWidth="lg">
      <Heading />
      <Box sx={{ display: "flex" }}>
        <CustomerInfo
          contacts={contacts}
          deleteContact={deleteContact}
          addContact={addContact}
          setEdit={setEdit}
          edit={edit}
        />
        <Box width={120} />
        <FormInfo addContact={addContact} contacts={contacts} edit={edit} />
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
