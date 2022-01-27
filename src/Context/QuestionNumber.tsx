import React, {
  createContext,
  useState,
  useContext,
  Dispatch,
} from "react";

interface States {
  questionNumber: number;
  setQuestionNumber: Dispatch<React.SetStateAction<number>>;
}

const QuestionNumberContext = createContext({} as States);

export function QuestionNumberProvider({ children }: any) {
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
