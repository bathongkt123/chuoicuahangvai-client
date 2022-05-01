
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";
import { Fragment } from "react";
export default function InfoForm({ paymentInfo, contact, setContact }) {

  return (
    <Fragment>
      <Header />
      <Form contact={contact} setContact={setContact} />
      <Footer paymentInfo={{ ...paymentInfo, deliveryInfo: contact }} />
    </Fragment>
  );
}
