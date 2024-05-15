// QuestionCard.tsx

import React, { useState } from "react";
import { QuestionProps } from "./Question.interface";
import { motion } from "framer-motion";

const QuestionCard: React.FC<QuestionProps> = ({
  question,
  onNextQuestion,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleAnswer = (answer: string) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(answer);
    setIsCorrect(answer === question.correctAnswer);
    setTimeout(() => {
      setIsCorrect(null);
      onNextQuestion();
    }, 3000);
  };

  // const onNextQuestion = () => {
  //   // Restablece la respuesta seleccionada a null aquí
  //   setSelectedAnswer(null);
  //   // Resto del código para manejar la siguiente pregunta...
  // };
  return (
    <motion.div
      className="bg-white rounded-md shadow-md p-8"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-lg font-bold mb-4">{question.question}</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options.map((option, index) => (
          <motion.li
            key={index}
            onClick={() => handleAnswer(option)}
            className={`cursor-pointer py-2 px-4 rounded-md ${
              selectedAnswer === option
                ? isCorrect
                  ? "bg-green-500"
                  : "bg-red-500"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            whileHover={{ scale: 1.05 }}
          >
            {option}
          </motion.li>
        ))}
      </ul>
      {isCorrect !== null && (
        <p className={`mt-4 ${isCorrect ? "text-green-500" : "text-red-500"}`}>
          {isCorrect ? "¡Correcto!" : "Incorrecto :("}
        </p>
      )}
    </motion.div>
  );
};
export default QuestionCard;
