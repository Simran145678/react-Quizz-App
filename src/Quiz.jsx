import React from "react";

export default function Quiz() {
  const [questions, setQuestions] = React.useState([]);
  const [answers, setAnswers] = React.useState({});
  const [score, setScore] = React.useState(0);

  React.useEffect(() => fetchQuestions, []);

  const fetchQuestions = () => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((response) => response.json())
      .then((data) => {
        const formattedQuestions = data.results.map((question, index) => ({
          ...question,
          id: index,
          options: shuffleArray([
            ...question.incorrect_answers,
            question.correct_answer,
          ]),
        }));
        setQuestions(formattedQuestions);
      });
  };

  const handleRetakeQuiz = () => {
    setAnswers({});
    setScore(null);
    fetchQuestions();
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleChange = (questionId, answer) => {
    setAnswers({
      ...answers,
      [questionId]: answer,
    });
  };

  const handleCheckAnswers = () => {
    let newScore = 0;
    questions.forEach((question) => {
      if (answers[question.id] === question.correct_answer) {
        newScore += 1;
      }
    });
    setScore(newScore);
  };

  return (
    <div className="quiz">
      {questions.map((question) => (
        <div key={question.id} className="question">
          <h3 dangerouslySetInnerHTML={{ __html: question.question }} />
          {question.options.map((option) => (
            <div key={option} className="option">
              <label>
                <input
                  type="radio"
                  name={question.id}
                  value={option}
                  checked={answers[question.id] === option}
                  onChange={() => handleChange(question.id, option)}
                />
                <span dangerouslySetInnerHTML={{ __html: option }} />
              </label>
            </div>
          ))}
        </div>
      ))}

      <button onClick={handleCheckAnswers}>Check Answers</button>

      <div>
        <h3>Your Score: {score} / 5</h3>
        <button onClick={handleRetakeQuiz}>Retake Quiz</button>
      </div>
    </div>
  );
}
