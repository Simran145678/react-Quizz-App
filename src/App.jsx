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
        <div>
          <h1>Welcome to the quiz trivia</h1>
          <button onClick={handleClick}>Start Quiz</button>
        </div>
      ) : (
        <Quiz />
      )}
    </>
  );
}

export default App;
