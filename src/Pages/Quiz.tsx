import React from "react";
import { useEffect, useState } from "react";
import { useQuestionNumber } from "../Context/QuestionNumber";
import { api } from "../Services/api";
import { useShuffle } from "../Hooks/useShuffle";
import { QuestionForm } from "../Components/QuestionForm";
import { ErrorCard } from "../Components/ErrorCard";
import { LoadingCard } from "../Components/LoadingCard";

interface iApi {
  correct_answer: string;
  incorrect_answers: string[];
  answers: string[];
}

interface iForm {
  question: string;
  answers: string[];
}

export const Quiz = () => {
  const { questionNumber } = useQuestionNumber();
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const shuffle = useShuffle;

  useEffect(() => {
    api
      .get(`api.php?amount=${questionNumber}&category=31&difficulty=easy`)
      .then((response) => {
        response.data.results.map((item: iApi) => {
          item.answers = shuffle([
            ...item.incorrect_answers,
            item.correct_answer,
          ]);
          return null;
        });
        setData(response.data.results);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, [questionNumber, shuffle]);

  if (data.length) {
    return (
      <>
        <QuestionForm data={data} />
      </>
    );
  } else if (error) {
    return <ErrorCard />;
  } else {
    return <LoadingCard />;
  }
};
