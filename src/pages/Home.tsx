// HomePage.tsx

import React from "react";
import { useNavigate } from "react-router";

const Home: React.FC = () => {
    const navigate= useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md p-8 bg-white shadow-md rounded-md">
        <h1 className="text-3xl font-bold text-center mb-8">Bienvenido al Juego de Trivia</h1>
        <p className="text-lg text-center mb-8">
          ¡Demuestra tus conocimientos respondiendo preguntas de trivia!
        </p>
        <button onClick={()=>{navigate("quiz")}} className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Empezar Juego
        </button>
      </div>
    </div>
  );
};

export default Home;
