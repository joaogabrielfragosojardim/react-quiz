import { Box, Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../Routes/routes";

export const ErrorCard = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <>
      <Box height={"100vh"} display={"flex"} alignItems={"center"}>
        <Container maxWidth="md">
          <Box
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            padding={"25px"}
          >
            <Typography
              variant="h5"
              component="div"
              gutterBottom
              marginTop={"20px"}
            >
              An error has ocurred
            </Typography>
            <Button
              variant="outlined"
              size="large"
              type="submit"
              onClick={goToHome}
            >
              Go to Home
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};
