let successCount = 0;
let failCount = 0;
let remainingQuestions = [];
let totalQuestions = 0;

const scoreBoard = document.getElementById('scoreBoard');
const questionCounter = document.getElementById('questionCounter');
const nextButton = document.getElementById('nextQuestion');
const successDisplay = document.getElementById('successCount');
const failDisplay = document.getElementById('failCount');
const quizContainer = document.getElementById('quiz');

async function loadQuestions() {
    const response = await fetch('questions.json');
    const questions = await response.json();
    totalQuestions = questions.length;
    remainingQuestions = shuffleArray(questions);
    generateQCM();
}

function generateQCM() {
    quizContainer.innerHTML = '';

    if (remainingQuestions.length === 0) {
        showEndScreen();
        return;
    }

    const q = remainingQuestions.shift();
    const questionEl = document.createElement('div');
    questionEl.classList.add('question');

    questionEl.innerHTML = `
        <h3>${q.category}</h3>
        <h2>${q.question}</h2>
    `;

    const shuffledChoices = shuffleArray(q.choices);
    shuffledChoices.forEach(choice => {
        const choiceEl = document.createElement('button');
        choiceEl.textContent = choice;
        choiceEl.classList.add('choice');
        choiceEl.onclick = () => {
            showExplanation(q, choice);
            nextButton.style.display = 'inline';
            hideButtons();
        };
        questionEl.appendChild(choiceEl);
    });

    quizContainer.appendChild(questionEl);
    updateCounter();
}

function updateCounter() {
    const current = totalQuestions - remainingQuestions.length;
    questionCounter.textContent = `${current} / ${totalQuestions}`;
}

function updateScoreDisplay() {
    successDisplay.textContent = successCount;
    failDisplay.textContent = failCount;
}

function showExplanation(question, userChoice) {
    const explanationEl = document.createElement('div');
    explanationEl.classList.add('container-explanation');
    scoreBoard.classList.add('score-container-hide');

    const isCorrect = userChoice === question.correctAnswer;
    const resultClass = isCorrect ? 'response-true' : 'response-false';
    const resultText = isCorrect ? 'Correct' : 'Incorrect';
    const resultImg = isCorrect ? 'true.png' : 'false.png';

    if (isCorrect) successCount++;
    else failCount++;

    explanationEl.innerHTML = `
        <img src="./assets/${resultImg}"/>
        <p class="${resultClass}">${resultText}</p>
        <p class="explanation">${question.explanation}</p>
    `;

    updateScoreDisplay();
    quizContainer.appendChild(explanationEl);
}

function hideButtons() {
    document.querySelectorAll('.choice').forEach(btn => btn.style.display = 'none');
}

function showEndScreen() {
    quizContainer.innerHTML = `
        <h2>Toutes les questions ont été posées !</h2>
        <button id="restart">Rejouer</button>
    `;
    nextButton.style.display = 'none';

    document.getElementById('restart').onclick = () => {
        successCount = 0;
        failCount = 0;
        updateScoreDisplay();
        scoreBoard.classList.remove('score-container-hide');
        loadQuestions();
    };
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

nextButton.onclick = () => {
    nextButton.style.display = 'none';
    scoreBoard.classList.remove('score-container-hide');
    generateQCM();
};

loadQuestions();
