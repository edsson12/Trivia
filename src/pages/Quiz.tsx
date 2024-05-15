// Quiz.tsx

import React, { useEffect, useState } from "react";
import questions from "../utils/questions";
import QuestionCard from "../components/QuestionCard";
import Explanation from "../components/Explanation";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const Quiz: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState(questions);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const [hasAnswered, setHasAnswered] = useState(false);

  useEffect(() => {
    function shuffle(array: typeof questions) {
      let currentIndex = array.length,
        temporaryValue,
        randomIndex;

      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

    setShuffledQuestions(shuffle(questions));
  }, []);

  useEffect(() => {
    setSelectedAnswer(null);
  }, [currentQuestionIndex]);

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowExplanation(false);
      setHasAnswered(false);
    } else {
      const totalScore = userAnswers.reduce(
        (acc, userAnswer, index) =>
          acc +
          (questions[index].difficultyScore / 5) *
            (userAnswer === questions[index].correctAnswer ? 1 : 0),
        0
      );
      setScore(totalScore);
      setIsQuizFinished(true);
    }
  };

    const handleAnswer = (answer: string) => {
    if (!hasAnswered) {
      setSelectedAnswer(answer); // Actualiza la respuesta seleccionada
      setUserAnswers([...userAnswers, answer]);
      setShowExplanation(true);
      setHasAnswered(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setShowExplanation(false);
    setScore(0);
    setUserAnswers([]);
    setIsQuizFinished(false);
    navigate("/");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl">
        {!isQuizFinished && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <QuestionCard
              question={currentQuestion}
              selectedAnswer={selectedAnswer} 
              onNextQuestion={() => handleAnswer(currentQuestion.correctAnswer)}
            />
          </motion.div>
        )}
        {showExplanation && !isQuizFinished && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <Explanation
              question={currentQuestion}
              onNextQuestion={handleNextQuestion}
            />
          </motion.div>
        )}
        {isQuizFinished && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-md shadow-md p-8">
              <h2 className="text-center text-lg font-bold mb-4">
                ¡Has completado el Gluco Quiz!
              </h2>
              <h2 className="text-center text-lg font-bold mb-4">
                Puntaje total: {score}
              </h2>
              <button
                onClick={handleRestart}
                className="block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Regresar
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
