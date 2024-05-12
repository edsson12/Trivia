import { Question } from "../components/Question.interface";

const questions: Question[] = [
  {
    question: "¿Cuál es la capital de Francia?",
    options: ["Paris", "Bogotá", "Arabia", "Berlín"],
    correctAnswer: "Paris",
    explanation: "París es la capital de Francia.",
    difficultyScore: 1,
  },
  {
    question: "¿Cuál es el río más largo del mundo?",
    options: ["Amazonas", "Nilo", "Yangtsé", "Misisipi"],
    correctAnswer: "Amazonas",
    explanation: "El río Amazonas es el más largo del mundo.",
    difficultyScore: 40,
  },
  {
    question: "¿Cuál es el océano más grande del mundo?",
    options: ["Pacífico", "Atlántico", "Índico", "Ártico"],
    correctAnswer: "Pacífico",
    explanation: "El océano Pacífico es el más grande del mundo.",
    difficultyScore: 20,
  },
  {
    question: "¿Cuál es el país más poblado del mundo?",
    options: ["China", "India", "Estados Unidos", "Indonesia"],
    correctAnswer: "China",
    explanation: "China es el país más poblado del mundo.",
    difficultyScore: 30,
  },
];

export default questions;
