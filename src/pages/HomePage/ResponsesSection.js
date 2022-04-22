import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
export default function ResponsesSection({ responses }) {
  return (
    <React.Fragment>
      <CssBaseline />

      <Typography variant="h4" align="center">
        <Box fontWeight="bold">PHẢN HỒI TỪ KHÁCH HÀNG</Box>
      </Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)' }, gap: 2, p: 2 }}>
        {responses.map((item) => (
          <Card align='center' sx={{
            border: "black solid 1px",
            display: "flex",
            flexDirection: "column",

          }}>
            <CardMedia
              component="img"
              image={`${process.env.REACT_APP_STRAPI_URL}${item.avatar.data.attributes.url}`}
              alt="an avatar"
              loading="lazy"
              sx={{ height: '10rem', objectFit: 'contain', pt: 2 }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <FontAwesomeIcon icon={faCoffee} />
              <FontAwesomeIcon icon={faCoffee} />
              <Typography paragraph component="div">
                {item.description}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "#807F7D" }}>
                {item.address}
              </Typography>
            </CardContent>
          </Card>


        ))}
      </Box>

    </React.Fragment >
  );
}
