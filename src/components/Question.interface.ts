export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  difficultyScore: number;
}

export interface QuestionProps {
  question: Question;
  onNextQuestion: () => void;
}
