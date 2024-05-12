import { BrowserRouter, Route, Routes } from "react-router-dom";

import Quiz from "../pages/Quiz";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
