import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";

import { QuestionNumberProvider } from "../Context/QuestionNumber";

import { Home } from "../Pages/Home";
import { Start } from "../Pages/Start";
import { Quiz } from "../Pages/Quiz";
import { SeeAnswers } from "../Pages/SeeAnswers";
import { Relatory } from "../Pages/Relatory";
import { PastQuizzes } from "../Pages/PastQuizzes";

export const RoutesIndex = () => {
  return (
    <QuestionNumberProvider>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.START} element={<Start />} />
          <Route path={ROUTES.QUIZ} element={<Quiz />} />
          <Route path={ROUTES.SEE_ANSWER} element={<SeeAnswers />} />
          <Route path={ROUTES.RELATORY} element={<Relatory />} />
          <Route path={`${ROUTES.RELATORY}/:id`} element={<Relatory />} />
          <Route path={ROUTES.PAST_QUIZZES} element={<PastQuizzes />} />
        </Routes>
      </BrowserRouter>
    </QuestionNumberProvider>
  );
};
