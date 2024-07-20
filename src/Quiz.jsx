import React from "react";

export default function Quiz() {
  const [questions, setQuestions] = React.useState([]);
  const [checked, setChecked] = React.useState(false);
  const [answers, setAnswers] = React.useState({});
  const [score, setScore] = React.useState(null);

  React.useEffect(() => fetchQuestions, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch("https://opentdb.com/api.php?amount=5");
      if (response.status === 429) {
        throw new Error("Too Many Requests. Please try again later.");
      }
      const data = await response.json();
      const formattedQuestions = data.results.map((question, index) => ({
        ...question,
        id: index,
        options: shuffleArray([
          ...question.incorrect_answers,
          question.correct_answer,
        ]),
      }));
      setQuestions(formattedQuestions);
    } catch (error) {
      alert(error.message);
    }
  };

  console.log(checked);

  const handleRetakeQuiz = () => {
    setAnswers({});
    setScore(null);
    setChecked(false);
    fetchQuestions();
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleAnswerClick = (questionId, answer) => {
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
        setChecked(true);
      }
    });

    setScore(newScore);
  };

  return (
    <div className="w-full flex justify-center h-full bg-gray-100 p-20">
      <div className=" flex flex-col justify-evenly ">
        {questions.map((question) => (
          <div key={question.id} className="text-purple-800 my-3 ">
            <h3
              dangerouslySetInnerHTML={{ __html: question.question }}
              className="font-bold"
            />
            <div className="flex  my-2">
              {question.options.map((option) =>
                !checked ? (
                  <button
                    key={option}
                    className={`${
                      answers[question.id] === option
                        ? "bg-purple-800 text-purple-100 border border-purple-800 py-1 px-6 mx-2 rounded-xl"
                        : "text-purple-800 border border-purple-800 py-1 px-6 mx-2 rounded-xl"
                    }`}
                    disabled={checked}
                    onClick={() => handleAnswerClick(question.id, option)}
                    dangerouslySetInnerHTML={{ __html: option }}
                  />
                ) : (
                  <button
                    key={option}
                    className={` 
                   ${
                     answers[question.id] === option &&
                     answers[question.id] === question.correct_answer
                       ? "bg-green-200 text-purple-100 border border-green-500 py-1 px-6 mx-2 rounded-xl"
                       : answers[question.id] === option &&
                         answers[question.id] !== question.correct_answer
                       ? "bg-red-200 border text-purple-100 border-red-500 py-1 px-6 mx-2 rounded-xl"
                       : "text-purple-500 border border-purple-500 py-1 px-6 mx-2 rounded-xl"
                   }
                   
                 
                   `}
                    disabled={checked}
                    onClick={() => handleAnswerClick(question.id, option)}
                    dangerouslySetInnerHTML={{ __html: option }}
                  />
                )
              )}
            </div>
          </div>
        ))}

        {score === null ? (
          <div>
            <button
              className="bg-purple-500 text-md py-2 px-8 text-gray-100 rounded-xl"
              onClick={handleCheckAnswers}
            >
              Check Answers
            </button>
          </div>
        ) : (
          <div className="flex items-end">
            <h3 className="mr-6 text-2xl">Your Score: {score} / 5</h3>
            <button
              className="bg-purple-500 text-md py-2 px-8 text-gray-100 rounded-xl"
              onClick={handleRetakeQuiz}
            >
              Retake Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
