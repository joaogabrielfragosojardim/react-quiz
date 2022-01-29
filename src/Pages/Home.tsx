import { Container, TextField, Box, Button } from "@mui/material";
import { ROUTES } from "../Routes/routes";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useQuestionNumber } from "../Context/QuestionNumber";

const validationSchema = yup.object({
  questionNumber: yup
    .number()
    .required("Number of questions is required")
    .min(1, "Min value is 1")
    .max(50, "Max value is 50"),
});

export const Home = () => {
  const { setQuestionNumber } = useQuestionNumber();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      questionNumber: "",
    },
    onSubmit: (values) => {
      setQuestionNumber(parseInt(values.questionNumber));
      navigate(ROUTES.START);
    },
    validationSchema: validationSchema,
  });

  const lastQuiz = () => {
    navigate(ROUTES.PAST_QUIZZES);
  };

  return (
    <>
      <Box height={"100vh"} display={"flex"} alignItems={"center"}>
        <Container maxWidth="md">
          <form onSubmit={formik.handleSubmit as any}>
            <Box>
              <TextField
                fullWidth
                name="questionNumber"
                type="number"
                id="questionNumber"
                label="How many questions do you want?"
                value={formik.values.questionNumber}
                onChange={formik.handleChange}
                error={
                  formik.touched.questionNumber &&
                  Boolean(formik.errors.questionNumber)
                }
                helperText={
                  formik.touched.questionNumber && formik.errors.questionNumber
                }
              />
            </Box>
            <Box mt={"20px"} textAlign={"right"}>
              {localStorage.getItem("quiz") && (
                <Button
                  variant="outlined"
                  size="large"
                  type="submit"
                  onClick={lastQuiz}
                  sx={{ marginRight: "10px" }}
                >
                  See your past quizzes
                </Button>
              )}
              <Button variant="contained" size="large" type="submit">
                Answer now
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </>
  );
};
