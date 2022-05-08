import { Backdrop, CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import qs from "qs";

export default function FormInfo() {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    const query = qs.stringify({}, { encodeValuesOnly: true });
    const result = await axios.get(
      `${process.env.REACT_APP_STRAPI_URL}/api/customer-info?${query}`
    );
    setLastname(result.data.lastname);
    setFirstname(result.data.firstname);
    setEmail(result.data.email);
    setPhone(result.data.phone);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    axios
      .put(`${process.env.REACT_APP_STRAPI_URL}/api/customer-info`, {
        lastname: lastname,
        firstname: firstname,
        phone: phone,
      })
      .then((response) => {
        setIsLoading(false);
        if (response.status === 200)
          toast.success("Cập nhật thông tin thành công");
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box sx={{ display: "flex", my: 2 }}>
        <TextField
          required
          label="Họ và tên lót"
          size="large"
          fullWidth
          sx={{ display: "inline-block" }}
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        ></TextField>
        <Box width={20}></Box>
        <TextField
          required
          label="Tên"
          size="large"
          fullWidth
          sx={{ display: "inline-block" }}
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        ></TextField>
      </Box>
      <TextField
        required
        label="Email"
        size="large"
        fullWidth
        sx={{ display: "inline-block", my: 2 }}
        value={email}
        disabled={true}
        onChange={(e) => setEmail(e.target.value)}
      ></TextField>

      <TextField
        required
        label="Số điện thoại"
        size="large"
        fullWidth
        sx={{ display: "inline-block", mt: 2 }}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
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
          Cập nhật
        </Button>
      </Box>
    </Box>
  );
}
