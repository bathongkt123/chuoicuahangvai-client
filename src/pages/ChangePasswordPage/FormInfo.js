import { Alert, Backdrop, CircularProgress } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import axios from "axios";

export default function FormInfo() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [message, setMessage] = useState("Đổi mật khẩu thất bại");
  const resetForm = async () => {
    setCurrentPassword("");
    setNewPassword("");
    setRePassword("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    axios
      .post(
        `${process.env.REACT_APP_STRAPI_URL}/api/customer-reset-password
        `,
        {
          currentPassword: currentPassword,
          newPassword: newPassword,
          rePassword: rePassword,
        }
      )
      .then((response) => {
        setIsLoading(false);
        if (response.status === 200) toast.success("Đổi mật khẩu thành công");
        resetForm();
      })
      .catch((error) => {
        try {
          setMessage(error.response.data.error.message);
        } catch (e) {
          setMessage("Đổi mật khẩu thất bại");
        } finally {
          setInvalid(true);
          setIsLoading(false);
        }
      });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
      <Alert
        severity="error"
        sx={{ visibility: invalid ? "visible" : "hidden" }}
      >
        {message}
      </Alert>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <TextField
        required
        autoComplete="new-password"
        label="Mật khẩu hiện tại"
        size="large"
        type="password"
        fullWidth
        sx={{ display: "inline-block", my: 2 }}
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
      ></TextField>

      <TextField
        required
        label="Mật khẩu mới"
        size="large"
        type="password"
        fullWidth
        sx={{ display: "inline-block", my: 2 }}
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      ></TextField>

      <TextField
        required
        label="Nhập lại mật khẩu mới"
        size="large"
        type="password"
        fullWidth
        sx={{ display: "inline-block", mt: 2 }}
        value={rePassword}
        onChange={(e) => setRePassword(e.target.value)}
      ></TextField>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          mr: 10,
        }}
      >
        <Button
          variant="contained"
          size="large"
          sx={{ backgroundColor: "#384257", my: 4 }}
          onClick={handleSubmit}
        >
          Đổi mật khẩu
        </Button>
      </Box>
    </Box>
  );
}
