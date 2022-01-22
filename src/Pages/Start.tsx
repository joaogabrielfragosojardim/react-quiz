import { useQuestionNumber } from "../Context/QuestionNumber";
import { Container, Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../Routes/routes";

export const Start = () => {
  const navigate = useNavigate();
  const { questionNumber } = useQuestionNumber();

  const nextStep = () => {
    navigate(ROUTES.HOME);
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
          <Typography variant="h3" component="div" gutterBottom>
            {`Do you really want to answer ${questionNumber} ${
              questionNumber > 1 ? "questions" : "question"
            }?`}
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
