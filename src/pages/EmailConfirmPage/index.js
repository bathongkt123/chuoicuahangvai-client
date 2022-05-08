import * as React from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { Box, Link, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function EmailConfirmPage() {
  let [searchParam, setSearchParam] = useSearchParams();
  const code = searchParam.get("code");
  const navigate = useNavigate();
  axios.post(
    `${process.env.REACT_APP_STRAPI_URL}/api/auth/register-confirmation
  `,
    {
      code: code,
    }
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        my: 2,
      }}
    >
      <Typography variant="body1">
        Bạn đã xác nhận tài khoản thành công, nhấn vào
      </Typography>
      <Box width={5} />
      <Link
        onClick={() => navigate("/login")}
        component="button"
        variant="h6"
        color="inherit"
        underline="hover"
        sx={{ fontWeight: "bold" }}
      >
        đây
      </Link>
      <Box width={5} />

      <Typography variant="body1"> để đăng nhập</Typography>
    </Box>
  );
}
