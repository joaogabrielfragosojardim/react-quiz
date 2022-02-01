import React, { createContext, useState, useContext, Dispatch } from "react";

interface States {
  questionNumber: number;
  setQuestionNumber: Dispatch<React.SetStateAction<number>>;
}

interface ContextProps {
  children: React.ReactNode;
}

const QuestionNumberContext = createContext({} as States);

export function QuestionNumberProvider({ children }: ContextProps) {
  const [questionNumber, setQuestionNumber] = useState(0);
  return (
    <QuestionNumberContext.Provider
      value={{ questionNumber, setQuestionNumber }}
    >
      {children}
    </QuestionNumberContext.Provider>
  );
}

export function useQuestionNumber() {
  const context = useContext(QuestionNumberContext);
  const { questionNumber, setQuestionNumber } = context;
  return { questionNumber, setQuestionNumber };
}
