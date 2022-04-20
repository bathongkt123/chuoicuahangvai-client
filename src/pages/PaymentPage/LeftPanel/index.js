import Heading from "./Heading";
import DeliveryForm from "./DeliveryForm";
import { Divider } from "@material-ui/core";
import { Fragment } from "react";
import { Link, Box, Stack } from "@mui/material";

export default function LeftPanel() {
  return (
    <Fragment>
      <Heading />
      <Divider variant="middle" />
      <DeliveryForm />
      <br />
      <Divider variant="middle" />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Link variant="body1" href="/" color="inherit" underline="hover">
          Chính sách bảo mật
        </Link>
        <Link variant="body1" href="/" color="inherit" underline="hover">
          Chính sách đổi trả
        </Link>
        <Link variant="body1" href="/" color="inherit" underline="hover">
          Phương thức vận chuyển
        </Link>
      </Stack>
    </Fragment>
  );
}
