import { React, useState } from "react";
import Quiz from "./Quiz";
import "./App.css";

function App() {
  const [start, setStart] = useState(false);

  function handleClick() {
    setStart(true);
  }
  return (
    <>
      {!start ? (
        <div className="flex flex-col w-3/4 h-screen justify-center items-center mr-auto ml-auto bg-purple-100">
          <h1 className="text-purple-800 text-5xl font-bold mb-4">Quizzical</h1>
          <h2 className="text-purple-800 text-2xl mb-4">
            Welcome to the Quiz Trivia
          </h2>
          <button
            className="bg-purple-500 text-lg py-4 px-12 text-gray-100 rounded-xl"
            onClick={handleClick}
          >
            Start Quiz
          </button>
        </div>
      ) : (
        <Quiz />
      )}
    </>
  );
}

export default App;
