
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";
import { Fragment, useState } from "react";
function validateEmail(elementValue) {
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(elementValue);
}
export default function InfoForm({ paymentInfo, contact, setContact }) {

  const [showError, setShowError] = useState(false)
  const errors = {
    email: {
      error: !(Boolean(contact.email) && validateEmail(contact.email)),
      message: () => {
        if (!showError) return ''
        if (!Boolean(contact.email))
          return 'Bắt buộc'
        if (!validateEmail(contact.email))
          return 'Email không hợp lệ'
        return ''
      }
    },
    firstname: {
      error: !Boolean(contact.firstname),
      message: () => {
        if (!showError) return ''
        if (!Boolean(contact.firstname))
          return 'Bắt buộc'
        return ''
      }
    },
    lastname: {
      error: !Boolean(contact.lastname),
      message: () => {
        if (!showError) return ''
        if (!Boolean(contact.lastname))
          return 'Bắt buộc'
        return ''
      }
    },
    address: {
      error: !Boolean(contact.address),
      message: () => {
        if (!showError) return ''
        if (!Boolean(contact.address))
          return 'Bắt buộc'
        return ''
      }
    },
    city: {
      error: !Boolean(contact.city),
      message: () => {
        if (!showError) return ''
        if (!Boolean(contact.city))
          return 'Bắt buộc'
        return ''
      }
    },
    district: {
      error: !Boolean(contact.district),
      message: () => {
        if (!showError) return ''
        if (!Boolean(contact.district))
          return 'Bắt buộc'
        return ''
      }
    },
    ward: {
      error: !Boolean(contact.ward),
      message: () => {
        if (!showError) return ''
        if (!Boolean(contact.ward))
          return 'Bắt buộc'
        return ''
      }
    },
    phone: {
      error: !Boolean(contact.phone),
      message: () => {
        if (!showError) return ''
        if (!Boolean(contact.phone))
          return 'Bắt buộc'
        return ''
      }
    },
  }
  const validate = Object.keys(errors).every(key => !errors[key].error)

  return (
    <Fragment>
      <Header paymentInfo={{ ...paymentInfo, deliveryInfo: contact }} />
      <Form contact={contact} setContact={setContact} receiveAddress={paymentInfo.receiveAddress} errors={errors} />
      <Footer paymentInfo={{ ...paymentInfo, deliveryInfo: contact }} setShowError={setShowError} validate={validate} />
    </Fragment>
  );
}
