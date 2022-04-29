import { Typography, Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import qs from "qs";
export default function CustomerInfo() {
  const navigate = useNavigate();
  const handleChange = () => {
    navigate("/account/address");
  };
  const [addresses, setAddresses] = useState([]);

  const fetchData = async () => {
    const query = qs.stringify({}, { encodeValuesOnly: true });
    const resultAddresses = await axios.get(
      `${process.env.REACT_APP_STRAPI_URL}/api/receive-address?${query}`
    );

    setAddresses(resultAddresses.data);
    console.log(resultAddresses);
    // console.log(addresses);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box sx={{ whiteSpace: "nowrap" }}>
      {addresses.map(
        (item) =>
          item.is_default && (
            <Box>
              <h2>{`${item.name.lastname} ${item.name.firstname}`}</h2>
              <Typography variant="body1">{item.address.address}</Typography>
              <Typography variant="body1">
                {item.address.address_three_levels.ward}
              </Typography>
              <Typography variant="body1">
                {item.address.address_three_levels.district}
              </Typography>
              <Typography variant="body1">
                {item.address.address_three_levels.city}
              </Typography>
              <Typography variant="body1">{item.phone}</Typography>

              <Box sx={{ color: "orange" }}>
                <Typography variant="body1">Mặc định</Typography>
              </Box>


            </Box>
          )
      )}
      <Button
        sx={{
          fontWeight: "bold",
          p: 0,
          textTransform: "none",
          "&:hover": { textDecoration: "underline" },
        }}
        color="inherit"
        onClick={handleChange}
      >
        Chỉnh sửa địa chỉ
      </Button>
    </Box>
  );
}
