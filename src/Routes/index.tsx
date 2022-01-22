import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";


import { Home } from "../Pages/Home";

export const RoutesIndex = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
        </Routes>
      </BrowserRouter>
  );
};
