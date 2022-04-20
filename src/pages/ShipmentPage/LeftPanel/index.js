import Heading from "./Heading";
import Footer from "./Footer";
import DeliveryForm from "./DeliveryForm";
import { Divider } from "@material-ui/core";
import { Fragment } from "react";
export default function LeftPanel() {
  return (
    <Fragment>
      <Heading />
      <Divider variant="middle" />
      <DeliveryForm />

      <Divider variant="middle" sx={{ my: 2 }} />
      <Footer />
    </Fragment>
  );
}
