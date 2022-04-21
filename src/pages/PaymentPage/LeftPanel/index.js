import Footer from "./Footer";
import DeliveryForm from "./DeliveryForm";
import ShipmentForm from "./ShipmentForm";
import PaymentForm from "./PaymentForm";
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
export { DeliveryForm, ShipmentForm, PaymentForm };
