import { Typography, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import React from "react";
import { useDecode } from "../Hooks/useDecode";

interface iForm {
  question: string;
  answers: string[];
}

export const QuestionForm = (data: any) => {
  const decode = useDecode;

  return (
    <>
      {data.data.map((question: iForm) => (
        <React.Fragment key={question.question}>
          <Typography
            variant="h3"
            fontSize={"20px"}
            fontWeight={"400"}
            gutterBottom
            component="div"
          >
            {decode(question.question, "div")}
          </Typography>
          <RadioGroup>
            {question.answers.map((answer) => (
              <FormControlLabel
                value={answer}
                control={<Radio />}
                label={decode(answer, "div")}
                key={answer}
              />
            ))}
          </RadioGroup>
        </React.Fragment>
      ))}
    </>
  );
};
