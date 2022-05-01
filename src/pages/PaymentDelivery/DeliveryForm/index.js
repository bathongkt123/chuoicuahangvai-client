
import { Fragment } from "react";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";
export default function DeliveryForm({ paymentInfo, method, setMethod }) {
  //change deliveryMethods to object for easy use
  const deliveryMethods = {}
  paymentInfo.deliveryMethods.forEach((method) => deliveryMethods[method.id] = method)
  return (
    <Fragment>
      <Header paymentInfo={{ ...paymentInfo, deliveryMethod: method }} />
      <Form
        deliveryInfo={paymentInfo.deliveryInfo}
        deliveryMethods={deliveryMethods}
        method={method}
        setMethod={setMethod}
      />
      <Footer paymentInfo={{ ...paymentInfo, deliveryMethod: method }} />
    </Fragment>
  );
}
