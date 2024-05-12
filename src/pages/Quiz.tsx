// Game.tsx

import React, { useState } from "react";
import questions from "../utils/questions";
import QuestionCard from "../components/QuestionCard";
import Explanation from "../components/Explanation";

const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  const currentQuestion = questions[currentQuestionIndex];

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowExplanation(false);
    } else {
      // Calcula el puntaje total
      const totalScore = userAnswers.reduce(
        (acc, userAnswer, index) =>
          acc +
          (questions[index].difficultyScore / 5) *
            (userAnswer === questions[index].correctAnswer ? 1 : 0),
        0
      );
      setScore(totalScore);
    }
  };

  const handleAnswer = (answer: string) => {
    setUserAnswers([...userAnswers, answer]);
    setShowExplanation(true);

  };

  return (
    <div>
      {!showExplanation && (
        <QuestionCard
          question={currentQuestion}
          onNextQuestion={() => handleAnswer(currentQuestion.correctAnswer)} 
        />
      )}
      {showExplanation && (
        <Explanation
          question={currentQuestion}
          onNextQuestion={handleNextQuestion}
        />
      )}
      {score > 0 && (
        <div>
          <h2>Puntaje total: {score}</h2>
        </div>
      )}
    </div>
  );
};

export default Quiz;
