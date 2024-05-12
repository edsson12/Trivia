// Explanation.tsx

import React from "react";
import { QuestionProps } from "./Question.interface";

const Explanation: React.FC<QuestionProps> = ({ question, onNextQuestion }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md w-96">
      <p className="text-lg font-bold mb-4">{question.explanation}</p>
      <button
        onClick={onNextQuestion}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Siguiente Pregunta
      </button>
    </div>
  );
};

export default Explanation;
