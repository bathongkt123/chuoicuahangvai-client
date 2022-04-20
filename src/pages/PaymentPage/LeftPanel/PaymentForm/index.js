import {
  Link,
  Typography,
  Box,
  FormControl,
  Stack,
  Divider,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import React from "react";
import Checkbox from "@mui/material/Checkbox";

import { Button } from "@mui/material";
import Heading from "./Heading";
export default function PaymentForm({ setPage }) {
  return (
    <React.Fragment>
      <Heading />
      <Divider variant="middle" />
      <Box
        sx={{
          backgroundColor: "white",
          my: 2,
          borderRadius: 1,
          border: 1,
          py: 1,
          px: 2,
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={4}
        >
          <Box sx={{ mx: 1 }}>
            <Typography variant="body1">Thông tin liên hệ</Typography>
          </Box>
          <Typography variant="subtitle1">nguyenvana@gmail.com</Typography>
          <Link
            href="/payment/delivery"
            variant="body1"
            color="inherit"
            underline="hover"
          >
            Thay đổi
          </Link>
        </Stack>
        <Divider />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={4}
        >
          <Box sx={{ mx: 1 }}>
            <Typography variant="body1">Vận chuyển đến</Typography>
          </Box>
          <Typography variant="subtitle1">
            268 Lý Thường Kiệt, P14, Q10, TP.HCM
          </Typography>
          <Link
            href="/payment/delivery"
            variant="body1"
            color="inherit"
            underline="hover"
          >
            Thay đổi
          </Link>
        </Stack>
        <Divider />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={4}
        >
          <Box sx={{ mx: 1 }}>
            <Typography variant="body1">Phương thức vận chuyển</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography variant="subtitle1">Vận chuyển miễn phí-</Typography>
            <Typography variant="subtitle1">Miễn phí</Typography>
          </Box>
          <Link
            href="/payment/shipment"
            variant="body1"
            color="inherit"
            underline="hover"
          >
            Thay đổi
          </Link>
        </Stack>
      </Box>

      <Box sx={{ width: "100%", mt: 4 }}>
        <Typography variant="h5">Phương thức giao hàng</Typography>

        <Box
          sx={{
            backgroundColor: "white",
            my: 2,
            borderRadius: 1,
            border: 1,
            py: 1,
          }}
        >
          <FormControl fullWidth>
            <RadioGroup defaultValue="COD" name="shipment" sx={{ mx: 2 }}>
              <FormControlLabel value="COD" control={<Radio />} label="COD" />
              <Divider />
              <FormControlLabel
                value="VNPay"
                control={<Radio />}
                label="Thanh toán trực tuyến - VNPay"
              />
              <Divider />
              <FormControlLabel
                value="Momo"
                control={<Radio />}
                label="Thanh toán trực tuyến - Momo"
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
      <Box sx={{ width: "100%", mt: 4 }}>
        <Typography variant="h5">Nhớ thông tin đặt hàng</Typography>

        <Box
          sx={{
            backgroundColor: "white",
            my: 2,
            borderRadius: 1,
            border: 1,
            py: 1,
          }}
        >
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Ghi nhớ thông tin để thanh toán nhanh hơn"
            sx={{ mx: 1 }}
          />
        </Box>
      </Box>
      <Box sx={{ my: 4 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Button
            href="/payment/shipment"
            variant="contained"
            sx={{ backgroundColor: "#384257" }}
          >
            {`< Trở về trang vận chuyển`}
          </Button>

          <Button
            variant="contained"
            sx={{ backgroundColor: "#384257", px: 4, py: 2 }}
            size="large"
          >
            Đặt hàng
          </Button>
        </Stack>
      </Box>
    </React.Fragment>
  );
}
