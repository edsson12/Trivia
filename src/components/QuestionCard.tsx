// QuestionCard.tsx

import React, { useState } from "react";
import { QuestionProps } from "./Question.interface";

const QuestionCard: React.FC<QuestionProps> = ({
  question,
  onNextQuestion,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setIsCorrect(answer === question.correctAnswer);
    setTimeout(() => {
      setIsCorrect(null);
      setSelectedAnswer(null);
      onNextQuestion();
    }, 1000);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md w-96">
    <h2 className="text-lg font-bold mb-4">{question.question}</h2>
    <ul>
      {question.options.map((option, index) => (
        <li
          key={index}
          onClick={() => handleAnswer(option)}
          className={`cursor-pointer py-2 px-4 rounded-md ${
            selectedAnswer === option
              ? isCorrect
                ? "bg-green-500"
                : "bg-red-500"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {option}
        </li>
      ))}
    </ul>
    {isCorrect !== null && (
      <p className={`mt-4 ${isCorrect ? "text-green-500" : "text-red-500"}`}>
        {isCorrect ? "¡Correcto!" : "Incorrecto :("}
      </p>
    )}
  </div>
  );
};
export default QuestionCard;
