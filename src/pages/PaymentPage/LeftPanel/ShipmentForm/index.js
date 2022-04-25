import {
  Typography,
  Box,
  FormControl,
  Stack,
  RadioGroup,
  FormControlLabel,
  Radio,
  Link,
} from "@mui/material";
import React from "react";
import { Button, Divider } from "@mui/material";
import Heading from "./Heading";
import { useNavigate } from "react-router-dom";
export default function ShipmentForm() {
  const navigate = useNavigate()
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
            <RadioGroup defaultValue="freeship" name="shipment" sx={{ mx: 2 }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <FormControlLabel
                  value="freeship"
                  control={<Radio />}
                  label="Vận chuyển miễn phí - Thời gian 5-10 ngày"
                />

                <Typography variant="subtitle1">
                  <Box sx={{ fontWeight: "bold" }}>Miễn phí</Box>
                </Typography>
              </Stack>

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <FormControlLabel
                  value="paidship"
                  control={<Radio />}
                  label="Vận chuyển nhanh - Thời gian 1-2 ngày"
                />
                <Typography variant="subtitle1">
                  <Box sx={{ fontWeight: "bold" }}>40000đ</Box>
                </Typography>
              </Stack>
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
      <Box sx={{ my: 4 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Button
            onClick={() => navigate('/payment/delivery')}
            variant="contained"
            sx={{ backgroundColor: "#384257", my: 2, fontSize: '0.8rem', "&:hover": { bgcolor: "#242e45" }, }}
          >
            {`< Trở về thông tin`}
          </Button>

          <Button
            onClick={() => navigate('/payment/complete')}
            variant="contained"
            sx={{ backgroundColor: "#384257", my: 2, fontSize: '0.8rem', "&:hover": { bgcolor: "#242e45" }, }}
          >
            {`Đến trang thanh toán >`}
          </Button>
        </Stack>
      </Box>
    </React.Fragment>
  );
}
