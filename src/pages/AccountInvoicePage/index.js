import Heading from "./Heading";
import ProductTable from "./ProductTable";
import HistoryTable from "./HistoryTable";
import { Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function AccountInvoicePage() {
  const { invoiceId } = useParams();
  const [invoice, setInvoice] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `${process.env.REACT_APP_STRAPI_URL}/api/customer-invoices/${invoiceId}`
      );
      // console.log(result)
      setInvoice(result.data);
    };
    fetchData();
  }, [invoiceId]);
  if (!invoice) return null;
  return (
    <Container maxWidth="lg">
      <Heading invoiceCode={invoice.code} />
      <ProductTable invoice={invoice} sx={{ my: 2 }} />
      <HistoryTable invoice={invoice} sx={{ my: 4 }} />
    </Container>
  );
}
