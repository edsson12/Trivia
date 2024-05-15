import React from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const buttonVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-white min-h-screen flex flex-col relative overflow-hidden">
      {/* Encabezado */}
      <motion.header
        className="bg-blue-900 text-white py-12 md:py-24 text-center relative z-10"
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { delay: 0.2, duration: 1, ease: "easeOut" },
        }}
      >
        <div className="container mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            ¡Bienvenido a Glucocare!
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Tu compañero en el camino hacia una vida saludable y equilibrada.
          </p>
          <motion.button
            onClick={() => {
              navigate("quiz");
            }}
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            className="bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full shadow-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Empezar Juego
          </motion.button>
          {/* Curvas decorativas */}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-blue-900 h-16 md:h-32 overflow-hidden z-0 pointer-events-none">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M-4.27,135.67 C150.00,150.00 349.05,-49.95 504.27,135.67 L500.00,150.00 L0.00,150.00 Z"
              style={{ stroke: "none", fill: "white" }}
            ></path>
          </svg>
        </div>
      </motion.header>

      {/* Información adicional sobre la diabetes */}
      <div className="container mx-auto py-8 px-4 md:px-8 w-full bg-white">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Información sobre la diabetes
          </h2>
          <p className="text-lg md:text-xl text-justify mb-8">
            La diabetes es una enfermedad crónica que afecta la forma en que el
            cuerpo utiliza la glucosa (azúcar) en la sangre. Existen dos tipos
            principales de diabetes: tipo 1, donde el cuerpo no produce
            insulina, y tipo 2, donde el cuerpo no puede usar la insulina de
            manera eficaz. Ambos tipos pueden llevar a complicaciones graves,
            como enfermedades cardíacas, daño renal, problemas oculares y
            neuropatía. La prevención de la diabetes implica mantener un peso
            saludable, hacer ejercicio regularmente, seguir una dieta balanceada
            y evitar el consumo excesivo de azúcar y grasas.
          </p>
          <p className="text-lg md:text-xl mb-8">
            <strong>¿Cómo prevenirla?</strong>
            <br />
            - Mantén un peso saludable.
            <br />
            - Realiza ejercicio regularmente.
            <br />
            - Sigue una dieta balanceada.
            <br />
            - Limita el consumo de azúcar y grasas.
            <br />
            - Controla tu presión arterial y colesterol.
            <br />- Evita el tabaquismo y el consumo excesivo de alcohol.
          </p>
          <p className="text-lg md:text-xl mb-8">
            <strong>¿Cómo cuidarme?</strong>
            <br />
            - Prioriza alimentos frescos y naturales.
            <br />
            - Limita el consumo de alimentos procesados y ricos en azúcares
            añadidos.
            <br />
            - Reduce la ingesta de grasas saturadas y trans.
            <br />
            - Evita el exceso de alimentos fritos y comida rápida.
            <br />
            - Consume moderadamente alimentos con alto contenido de sodio.
            <br />- Aumenta la ingesta de frutas, verduras y alimentos ricos en
            fibra.
          </p>
        </div>
      </div>

      {/* Contenido */}
      <motion.div
        className="flex-1 relative overflow-hidden z-10 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.4, duration: 1 } }}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Qué es Glucocare */}
            <motion.div
              className="rounded-lg shadow-lg p-6 md:p-8 bg-gray-200"
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Qué es Glucocare?
              </h2>
              <p className="text-lg md:text-xl text-justify mb-8">
                Glucocare es tu guía en el viaje hacia una vida más saludable.
                Ofrecemos información precisa y consejos prácticos sobre la
                diabetes y cómo manejarla en tu vida diaria.
              </p>
            </motion.div>
            {/* Por qué es importante */}
            <motion.div
              className="rounded-lg shadow-lg p-6 md:p-8 bg-gray-200"
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Por qué es importante?
              </h2>
              <p className="text-lg md:text-xl text-justify mb-8">
                La diabetes requiere atención constante, pero con Glucocare,
                puedes aprender a manejarla de manera efectiva y mejorar tu
                calidad de vida.
              </p>
            </motion.div>
          </div>
          {/* Consejos para una vida saludable */}
          <motion.div
            className="bg-gray-200 rounded-lg shadow-lg p-6 md:p-8 mt-8"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Consejos para una vida saludable
            </h2>
            <ul className="text-lg md:text-xl list-inside list-disc">
              <li className="mb-4 ">
                Mantén un peso saludable a través de una dieta equilibrada y
                ejercicio regular.
              </li>
              <li className="mb-4">
                Controla tus niveles de azúcar en sangre siguiendo las
                recomendaciones de tu médico.
              </li>
              <li className="mb-4">
                Reduce el estrés con técnicas de relajación como la meditación y
                el yoga.
              </li>
              <li className="mb-4">
                Mantén una rutina de sueño regular para promover la salud
                general.
              </li>
              <li className="mb-4">
                Limita el consumo de alcohol y evita el tabaco para reducir los
                riesgos para la salud.
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Pie de página */}
      <footer className="bg-blue-900 text-white py-4 text-center z-10">
        <div className="container mx-auto">
          <p className="text-sm">
            © {new Date().getFullYear()} Zandra P. Gomez. Todos los derechos
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
