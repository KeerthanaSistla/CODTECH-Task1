const quizData = [
    {
        question: "1. What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: 3
    },
    {
        question: "2. Which planet is known as the Red Planet?",
        options: ["Earth", "Jupiter", "Mars", "Venus"],
        correct: 2
    },
    {
        question: "3. Who wrote the play 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        correct: 1
    },
    {
        question: "4. Which element has the chemical symbol 'O'?",
        options: ["Gold", "Oxygen", "Osmium", "Oganesson"],
        correct: 1
    },
    {
        question: "5. What is the capital of Japan?",
        options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
        correct: 2
    },
    {
        question: "6. Which artist painted the ceiling of the Sistine Chapel?",
        options: ["Michelangelo", "Raphael", "Leonardo da Vinci", "Caravaggio"],
        correct: 0
    },
    {
        question: "7. What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Quartz"],
        correct: 2
    },
    {
        question: "8. What is the longest river in the world?",
        options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        correct: 1
    },
    {
        question: "9. Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "South Korea", "Thailand"],
        correct: 1
    },
    {
        question: "10. Who developed the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;
let scores = [];

const question = document.getElementById("question");
const options = document.querySelectorAll(".option");
const quiz = document.getElementById("questions");
const quizEnd = document.getElementById("quiz-end");
const marks = document.getElementById("marks");
const mks = document.querySelector("table");

function start() {
    document.getElementById("start").style.display="none";
    document.getElementById("container").style.display="block";
}

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    question.innerText = currentQuizData.question;
    options.forEach((option, index) => {
        option.innerText = currentQuizData.options[index];
    });
}

function selectOption(index) {
    const correctOption = quizData[currentQuestion].correct;
    if (index === correctOption) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        result();
    }
}

function result() {
    quiz.style.display = "none";
    quizEnd.style.display = "block";
    marks.innerText = `${score} / ${quizData.length}`;
    displayScores();
}

function displayScores() {
    scores.push(score);
    let results="";
    for (let i = 0; i < scores.length; i++) {
        const ele = scores[i];
        results = results + `<tr>
    <td>${i+1}</td>
    <td>${ele}</td>
</tr>`
    }
    mks.innerHTML=`
                    <tr>
                      <th>Attempt count</th>
                      <th>Score</th>
                    </tr>
                    ${results}`;
}

function resetScores() {
    scores = [];
    mks.innerHTML="   ";
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    quiz.style.display = "block";
    quizEnd.style.display = "none";
    loadQuestion();
}

loadQuestion();