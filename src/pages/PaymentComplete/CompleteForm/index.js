
import { Fragment } from "react";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";
export default function CompleteForm({ paymentInfo, paymentType, setPaymentType }) {
  return (
    <Fragment>
      <Header paymentInfo={{ ...paymentInfo, paymentType: paymentType }} />
      <Form
        deliveryInfo={paymentInfo.deliveryInfo}
        deliveryMethod={paymentInfo.deliveryMethod}
        paymentType={paymentType}
        setPaymentType={setPaymentType}
      />
      <Footer paymentInfo={{ ...paymentInfo, paymentType: paymentType }} />
    </Fragment>
  );
}
