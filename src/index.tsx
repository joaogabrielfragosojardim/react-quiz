import React from "react";
import ReactDOM from "react-dom";
import { RoutesIndex } from "./Routes/index";
import "./index.css";

import { QuestionNumberProvider } from "./Context/QuestionNumber";

ReactDOM.render(
  <React.StrictMode>
    <QuestionNumberProvider>
      <RoutesIndex />
    </QuestionNumberProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
