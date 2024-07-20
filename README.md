<h3>Demo</h3>

<a href="https://quizzical-quiz-trivia.netlify.app/">live app link</a>

<h3>Features<h3>
<ul>
<li>Fetches trivia questions from an external API</li>
<li>Fetches trivia questions from an external API</li>
<li>Displays questions with multiple choices</li>
<li>Allows users to select answers and check them</li>
<li>Highlights correct and incorrect answers</li>
<li>Shows the final score</li>
<li>Option to retake the quiz</li>

Installation
Clone the repository:

Copy code
git clone https://github.com/simran145678/quiz-app.git
cd quiz-app
Install dependencies:

Copy code
npm install
Start the development server:

bash
Copy code
npm run dev

API
This app uses the Open Trivia Database API to fetch quiz questions. The API endpoint used is:

arduino
Copy code
https://opentdb.com/api.php?amount=5
Components
App.js
Manages the main state of the application.
Renders the intro page and quiz components.
Quiz.js
Fetches quiz questions using useEffect.
Renders the questions and options.
Manages user answers and handles answer checking.
Displays individual questions and their options.
Highlights correct and incorrect answers based on the user's selection.
Styling
Tailwind CSS is used for styling the application.
Tailwind classes are applied directly in the JSX elements.
Example:
jsx
Copy code
<button className="bg-blue-500 text-white px-4 py-2 rounded">
Start Quiz
</button>
License
This project is licensed under the MIT License.
