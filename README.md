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
</ul>
Installation<br>
Clone the repository:<br>
git clone https://github.com/simran145678/quiz-app.git<br>
cd quiz-app<br><br>

Install dependencies:<br>
npm install<br><br>

Start the development server:<br>
npm run dev<br><br>

API<br><br>
This app uses the Open Trivia Database API to fetch quiz questions. The API endpoint used is:
<br>
https://opentdb.com/api.php?amount=5

<p>Components</p>
App.js
<ul>
<li?>Renders the intro page and quiz components.</li>
</ul>
Quiz.js
<ul>
<li?>Manages the main state of the application.</li>
<li>Fetches quiz questions using useEffect.</li>
<li>Renders the questions and options.</li>
<li>Manages user answers and handles answer checking.</li>
<li>Displays individual questions and their options.</li>
<li>Highlights correct and incorrect answers based on the user's selection.</li>
</ul>
Styling
<ul>
<li>Tailwind CSS is used for styling the application.</li>
<li>Tailwind classes are applied directly in the JSX elements.</li>
</ul>
