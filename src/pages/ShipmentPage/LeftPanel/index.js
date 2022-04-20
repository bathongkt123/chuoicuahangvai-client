import Heading from "./Heading";
import Footer from "./Footer";
import ShipmentForm from "./ShipmentForm";
import { Divider } from "@material-ui/core";
import { Fragment } from "react";
export default function LeftPanel() {
  return (
    <Fragment>
      <Heading />
      <Divider variant="middle" />
      <ShipmentForm />

      <Divider variant="middle" sx={{ my: 2 }} />
      <Footer />
    </Fragment>
  );
}
