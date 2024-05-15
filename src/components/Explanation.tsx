// Explanation.tsx

import React from "react";
import { QuestionProps } from "./Question.interface";
import { motion } from "framer-motion";

const Explanation: React.FC<QuestionProps> = ({ question, onNextQuestion }) => {
  return (
    <motion.div
      className="bg-white rounded-md shadow-md p-8"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-lg font-bold mb-4">{question.explanation}</p>
      <button
        onClick={onNextQuestion}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Siguiente Pregunta
      </button>
    </motion.div>
  );
};

export default Explanation;
