import { Box, Container } from "@mui/material";
import Heading from "./Heading";
import OrderTable from "./OrderTable";

export default function AccountPage() {
  return (
    <Container maxWidth="lg">
      <Heading />
      <Box sx={{ display: "flex", alignItems: "flex-start" }}>
        <OrderTable />
      </Box>
    </Container>
  );
}
