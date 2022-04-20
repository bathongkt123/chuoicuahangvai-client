import Heading from "./Heading";
import Footer from "./Footer";
import DeliveryForm from "./DeliveryForm";
import { Divider } from "@material-ui/core";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
export default function LeftPanel() {
  return (
    <Fragment>
      <Heading />
      <Divider variant="middle" />
      <Outlet />
      <Divider variant="middle" />
      <Footer />
    </Fragment>
  );
}
export { DeliveryForm }