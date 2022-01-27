import { Container, Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../Routes/routes";

export const SeeAnswers = () => {
  const navigate = useNavigate();

  const nextStep = () => {
    navigate(ROUTES.RELATORY);
  };

  const lastStep = () => {
    navigate(ROUTES.HOME);
  };
  return (
    <>
      <Box
        height={"100vh"}
        display={"flex"}
        alignItems={"center"}
        textAlign={"center"}
      >
        <Container maxWidth="md">
          <Typography variant="h3" component="div">
            {`Do you want to see your answers?`}
          </Typography>
          <Box marginTop={"20px"}>
            <Button
              variant="contained"
              size="large"
              type="submit"
              fullWidth
              onClick={nextStep}
            >
              Yes
            </Button>
          </Box>
          <Box marginTop={"20px"}>
            <Button
              variant="outlined"
              size="large"
              type="submit"
              fullWidth
              onClick={lastStep}
            >
              No
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};
