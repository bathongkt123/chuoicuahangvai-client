import Footer from "./Footer";
import DeliveryForm from "./DeliveryForm";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
export default function LeftPanel() {
  return (
    <Fragment>
      <Outlet />
      <Footer />
    </Fragment>
  );
}
export { DeliveryForm }