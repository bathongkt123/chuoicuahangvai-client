import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, Card, CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
export default function RegisterSection({ signupContent }) {

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ mt: 5 }}>
        <Typography variant="h4" align="center">
          <Box fontWeight="bold">ĐĂNG KÝ</Box>
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          để nhận được thông tin mới nhất
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "stretch",
            p: 1,
          }}
        >
          {/* Left Card */}
          <Card
            sx={{
              border: 1,
              my: 2,
              flexGrow: 1,
              flexBasis: { md: 0 },
            }}
          >
            <CardContent>
              <Typography variant="body2">
                {signupContent}
              </Typography>
            </CardContent>
          </Card>
          <Box width={32}></Box>
          {/* Right Card */}
          <Card
            sx={{
              border: "black solid 1px",
              my: 2,
              flexGrow: 1,
              flexBasis: { md: 0 },
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <TextField
                  id="outlined-basic"
                  label="Họ và tên lót"
                  variant="outlined"
                  size="small"
                  sx={{ flexGrow: 1 }}
                />
                <Box width={20}></Box>
                <TextField
                  id="outlined-basic"
                  label="Tên"
                  variant="outlined"
                  size="small"
                  sx={{ flexGrow: 1 }}
                />
              </Box>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                size="small"
                sx={{ display: "flex", my: 1, flexGrow: 1 }}
              />
              <Button
                variant="contained"
                sx={{
                  my: 1,
                  px: 10,
                  bgcolor: "#384257",
                  "&:hover": { bgcolor: "#242e45" },
                }}
              >
                Đăng ký nhận tin
              </Button>
              <Typography variant="body2">
                Đăng ký nhận tin để nhận các thông tin mới nhất về email cá nhân
                và chấp nhận điều khoản của CỬA HÀNG VẢI.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </React.Fragment>
  );
}
