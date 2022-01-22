import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";

import { QuestionNumberProvider } from "../Context/QuestionNumber";

import { Home } from "../Pages/Home";
import { Start } from "../Pages/Start";

export const RoutesIndex = () => {
  return (
    <QuestionNumberProvider>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.START} element={<Start />} />
        </Routes>
      </BrowserRouter>
    </QuestionNumberProvider>
  );
};
