import { Box, Container } from "@mui/material";
import OrderInfo from "./OrderInfo";
import InfoForm from "./InfoForm";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function PaymentInfo() {
  const { state } = useLocation();
  //fetch data from api and insert to current state
  const [paymentInfo, setPaymentInfo] = useState(state);
  //set state to form contact info'
  const [contact, setContact] = useState(
    paymentInfo.deliveryInfo || {
      email: "",
      firstname: "",
      lastname: "",
      address: "",
      city: "",
      district: "",
      wardId: "",
      ward: "",
      phone: "",
    }
  );
  const [voucher, setVoucher] = useState(paymentInfo.voucher || null)
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post(
        `${process.env.REACT_APP_STRAPI_URL}/api/cart/information`,
        paymentInfo
      );

      if (!paymentInfo.deliveryInfo) setContact({ ...contact, email: response.data.email })
      setPaymentInfo({ ...paymentInfo, ...response.data });
    };
    fetchData();
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
      <Container sx={{ flexGrow: 1, flexBasis: 0, bgcolor: "#EEEDE8" }}>
        <InfoForm
          paymentInfo={paymentInfo}
          contact={contact}
          setContact={setContact}
          voucher={voucher}
        />
      </Container>
      <Container sx={{ flexGrow: 1, flexBasis: 0 }}>
        <OrderInfo
          skus={paymentInfo.skus}
          price={paymentInfo.price}
          deliveryMethod={paymentInfo.deliveryMethod}
          voucher={voucher}
          setVoucher={setVoucher}
        />
      </Container>
    </Box>
  );
}
