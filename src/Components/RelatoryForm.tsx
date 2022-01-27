import {
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  Container,
  Button,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../Routes/routes";
import { useDecode } from "../Hooks/useDecode";

interface iData {
  data: [
    {
      question: string;
      correct_answer: string;
      user_answer: string;
      answers: string[];
    }
  ];
}
interface iDataMap {
  correct_answer: string;
  user_answer: string;
}

export const RelatoryForm = (data: iData, indexData: string) => {
  const [index, setIndex] = useState(0);
  let correctAnswer = 0;
  let incorrectAnswer = 0;

  const navigate = useNavigate();
  const decode = useDecode;

  const handleSubmit = () => {
    navigate(ROUTES.HOME);
  };

  const nextStep = () => {
    index + 1 === data.data.length ? handleSubmit() : setIndex(index + 1);
  };

  const lastStep = () => {
    setIndex(index - 1);
  };

  data.data.forEach((data: iDataMap) => {
    data.correct_answer === data.user_answer
      ? (correctAnswer += 1)
      : (incorrectAnswer += 1);
  });

  return (
    <>
      <Box height={"100vh"} display={"flex"} alignItems={"center"}>
        <Container maxWidth="md">
          <Box
            display={"flex"}
            alignItems={"flex-start"}
            flexDirection={"column"}
          >
            <Box
              bgcolor={"#1976d2"}
              width={"100%"}
              color={"white"}
              padding={"10px"}
              borderRadius={"15px"}
              marginBottom={"20px"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Typography
                variant="h3"
                fontSize={"20px"}
                fontWeight={"400"}
                component="div"
              >{`${index + 1}/${data.data.length} `}</Typography>
              <Typography
                variant="h3"
                fontSize={"20px"}
                fontWeight={"400"}
                component="div"
              >{`
             ${correctAnswer} correct answers and ${incorrectAnswer} incorrects`}</Typography>
            </Box>

            <Typography
              variant="h3"
              fontSize={"20px"}
              fontWeight={"400"}
              component="div"
            >
              {decode(data.data[index].question, "div")}
            </Typography>
            <Box marginBottom={"20px"}>
              <RadioGroup value={data.data[index].user_answer}>
                {data.data[index].answers.map((answer: string) => {
                  let color = "black";

                  if (answer === data.data[index].user_answer) {
                    color = "red";
                  }
                  if (answer === data.data[index].correct_answer) {
                    color = "green";
                  }

                  return (
                    <FormControlLabel
                      key={answer}
                      value={answer}
                      control={
                        <Radio
                          sx={{
                            cursor: "default",
                          }}
                        />
                      }
                      label={decode(answer, "div")}
                      sx={{
                        cursor: "default",
                        color: color,
                      }}
                    />
                  );
                })}
              </RadioGroup>
            </Box>

            <Box marginBottom={"20px"}></Box>
            <Box
              width={"100%"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Button
                variant="outlined"
                disabled={index === 0}
                onClick={lastStep}
              >
                Last
              </Button>
              <Button variant="contained" onClick={nextStep}>
                {index + 1 === data.data.length ? "Finish" : "Next"}
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
