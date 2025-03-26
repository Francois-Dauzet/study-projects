let successCount = 0;
let failCount = 0;
let   = 0;

async function loadQuestions() {
    const response = await fetch('questions.json');
    const questions = await response.json();
    generateQCM(questions);
}

function generateQCM(questions) {
    const index = Math.floor(Math.random() * questions.length);
    const q = questions[index];

    const container = document.getElementById('quiz');
    container.innerHTML = '';

    const questionEl = document.createElement('div');
    questionEl.classList.add('question');

    const categoryEl = document.createElement('h3');
    categoryEl.textContent = q.category;
    questionEl.appendChild(categoryEl);

    const questionTextEl = document.createElement('h2');
    questionTextEl.textContent = q.question;
    questionEl.appendChild(questionTextEl);

    // Mélanger les choix
    const shuffledChoices = shuffleArray(q.choices);

    shuffledChoices.forEach(function (choice) {
        const choiceEl = document.createElement('button');
        choiceEl.textContent = choice;
        choiceEl.classList.add('choice');
        choiceEl.onclick = function () {
            showExplanation(q, choice);
            document.getElementById('nextQuestion').style.display = 'inline';
            hideButtons();
        };
        questionEl.appendChild(choiceEl);
    });

    container.appendChild(questionEl);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function hideButtons() {
    const buttons = document.querySelectorAll('.choice');
    buttons.forEach(function (button) {
        button.style.display = 'none';
    });
}

function showExplanation(question, userChoice) {
    const container = document.getElementById('quiz');
    const explanationEl = document.createElement('div');
    explanationEl.classList.add('container-explanation');

    if (userChoice === question.correctAnswer) {
        successCount++;
        explanationEl.innerHTML =
            '<img src="./assets/true.png"/><p class="response-true">Correct</p>' +
            '<p class="explanation">' +
            question.explanation +
            '</p>';
    } else {
        failCount++;
        explanationEl.innerHTML =
            '<img src="./assets/false.png"/><p class="response-false">Incorrect</p>' +
            '<p class="explanation">' +
            question.explanation +
            '</p>';
    }

    // Mise à jour de l'affichage du score
    document.getElementById('successCount').textContent = successCount;
    document.getElementById('failCount').textContent = failCount;

    container.appendChild(explanationEl);
}

document.getElementById('nextQuestion').onclick = function () {
    this.style.display = 'none';
    loadQuestions();
};

loadQuestions();
