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
import { useDecode } from "../Hooks/useDecode";

interface iEvent {
  target: {
    value: string;
  };
}

export const QuestionForm = (data: any) => {
  const decode = useDecode;
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState("");
  const [localStorageQuiz, setLocalStorageQuiz] = useState<Object[]>([]);

  const handleSubmit = () => {
    setLocalStorageQuiz((prev) => [...prev, data]);
    localStorage.setItem("quiz", JSON.stringify(localStorageQuiz));
  };

  const nextStep = () => {
    setValue("");
    index + 1 === data.data.length ? handleSubmit() : setIndex(index + 1);
  };

  const lastStep = () => {
    setIndex(index - 1);
  };

  const handleChange = (event: iEvent) => {
    setValue(event?.target?.value);
  };

  const userAnswer = (answer: string, index: number) => {
    data.data[index].userAnswer = answer;
  };

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
            >
              <Typography
                variant="h3"
                fontSize={"20px"}
                fontWeight={"400"}
                component="div"
              >{`${index + 1}/${data.data.length}`}</Typography>
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
              <RadioGroup
                value={data.data[index].userAnswer || value}
                onChange={handleChange}
              >
                {data.data[index].answers.map((answer: string) => (
                  <FormControlLabel
                    value={answer}
                    onClick={() => {
                      userAnswer(answer, index);
                    }}
                    control={<Radio />}
                    label={decode(answer, "div")}
                    key={answer}
                  />
                ))}
              </RadioGroup>
            </Box>
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
              <Button
                variant="contained"
                disabled={data.data[index].userAnswer === undefined}
                onClick={nextStep}
              >
                {index + 1 === data.data.length ? "Submit" : "Next"}
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
