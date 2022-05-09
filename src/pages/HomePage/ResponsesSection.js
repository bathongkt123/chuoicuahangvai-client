import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
export default function ResponsesSection({ responses }) {
  return (
    <Container maxWidth="xl" sx={{ my: 2 }}>
      <Typography variant="h4" align="center" my={2}>
        <Box fontWeight="bold">PHẢN HỒI TỪ KHÁCH HÀNG</Box>
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(1, 1fr)", md: "repeat(4, 1fr)" },
          gap: 2,
        }}
      >
        {responses.map((item) => (
          <Card
            key={item.id}
            align="center"
            sx={{
              border: "black solid 1px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardMedia
              component="img"
              image={`${process.env.REACT_APP_STRAPI_URL}${item.avatar.data.attributes.url}`}
              alt="an avatar"
              loading="lazy"
              sx={{ height: "15rem", objectFit: "fill" }}
            />
            <CardContent>
              <FontAwesomeIcon icon={faCoffee} />
              <FontAwesomeIcon icon={faCoffee} />

              <Typography paragraph component="div">
                {item.description}
              </Typography>
            </CardContent>
            <Box sx={{ flexGrow: 1 }} />
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
    </Container>
  );
}
