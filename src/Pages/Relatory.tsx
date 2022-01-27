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

export const Relatory = () => {
  const [index, setIndex] = useState(0);

  const navigate = useNavigate();

  const relatoryData = JSON.parse(localStorage.getItem("quiz") || "");
  const thisRelatory = relatoryData[relatoryData.length - 1];

  const handleSubmit = () => {
    navigate(ROUTES.HOME);
  };

  const nextStep = () => {
    index + 1 === thisRelatory.data.length
      ? handleSubmit()
      : setIndex(index + 1);
  };

  const lastStep = () => {
    setIndex(index - 1);
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
              >{`${index + 1}/${thisRelatory.data.length}`}</Typography>
            </Box>

            <Typography
              variant="h3"
              fontSize={"20px"}
              fontWeight={"400"}
              component="div"
            >
              <Box marginBottom={"20px"}>
                <RadioGroup value={thisRelatory.data[index].userAnswer}>
                  {thisRelatory.data[index].answers.map((answer: string) => (
                    <FormControlLabel
                      value={answer}
                      control={
                        <Radio
                          sx={{
                            cursor: "default",
                          }}
                        />
                      }
                      label={answer}
                      key={answer}
                      sx={{
                        cursor: "default",
                        backgroundColor:
                          answer === thisRelatory.data[index].correct_answer
                            ? "green"
                            : "white",
                      }}
                    />
                  ))}
                </RadioGroup>
              </Box>
            </Typography>
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
                {index + 1 === thisRelatory.data.length ? "Finish" : "Next"}
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
