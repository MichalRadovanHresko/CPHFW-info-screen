
const questions = [
    {
        image: 'resources/images/first-guess.png',
        options: ['Bonnetje', 'Bonnepe', 'Bannipe'],
        correct: 0 
    },
    {
        image: 'resources/images/second-guess.png',
        options: ['Caro Editions', 'Barb Editions', 'Aarg Editions'],
        correct: 0
    },
    {
        image: 'resources/images/third-guess.png',
        options: ['Han Københaven', 'Han Kjøbenhavn', 'Han Keenhav'],
        correct: 0
    },
    {
        image: 'resources/images/fourth-guess.png',
        options: ['OmegaSport', 'OceaSport', 'OperaSport'],
        correct: 0
    },
    {
        image: 'resources/images/fifth-guess.png',
        options: ['TG flora', 'TG Botanical', 'TG Nativa'],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;


const gameImage = document.querySelector('.game img');
const buttonBoxes = document.querySelectorAll('.button-box');
const gameTitle = document.querySelector('.game h1');
const gameDescription = document.querySelector('.game p');


function initGame() {
    loadQuestion(currentQuestion);
    buttonBoxes.forEach((button, index) => {
        button.addEventListener('click', () => handleAnswer(index));
    });
}

function loadQuestion(questionIndex) {
    const question = questions[questionIndex];
    gameImage.src = question.image;
    
    buttonBoxes.forEach((button, index) => {
        button.textContent = question.options[index];
        button.style.backgroundColor = '#FFF';
        button.style.color = '#000';
        button.style.pointerEvents = 'auto'; 
    });
}


function handleAnswer(selectedIndex) {
    const question = questions[currentQuestion];
    const isCorrect = selectedIndex === question.correct;
    buttonBoxes.forEach(button => {
        button.style.pointerEvents = 'none';
    });
    
    if (isCorrect) {
        buttonBoxes[selectedIndex].style.backgroundColor = '#28a745'; // GREEN 
        buttonBoxes[selectedIndex].style.color = '#FFF';
        score++;
    } else {
        buttonBoxes[selectedIndex].style.backgroundColor = '#dc3545'; // RED
        buttonBoxes[selectedIndex].style.color = '#FFF';
        buttonBoxes[question.correct].style.backgroundColor = '#28a745';
        buttonBoxes[question.correct].style.color = '#FFF';
    }
    
    setTimeout(() => {
        currentQuestion++;
        
        if (currentQuestion < questions.length) {
            loadQuestion(currentQuestion);
        } else {
            showResults();
        }
    }, 2000);
}

function showResults() {
    gameTitle.textContent = 'Game Over!';
    gameDescription.textContent = `Your score: ${score} / ${questions.length}`;
    gameImage.style.display = 'none';
    
    buttonBoxes.forEach(button => {
        button.style.display = 'none';
    });
    

    const buttonsContainer = document.querySelector('.buttons');
    const restartButton = document.createElement('div');
    restartButton.className = 'button-box';
    restartButton.textContent = 'Play Again';
    restartButton.style.backgroundColor = '#B70101';
    restartButton.style.color = '#FFF';
    restartButton.style.cursor = 'pointer';
    restartButton.style.display = 'flex';
    
    restartButton.addEventListener('click', () => {
        currentQuestion = 0;
        score = 0;
        gameTitle.textContent = 'Guess the Brand';
        gameDescription.textContent = 'Test your fashion instincts!!';
        gameImage.style.display = 'block';
        restartButton.remove();
        buttonBoxes.forEach(button => {
            button.style.display = 'flex';
        });
        
        loadQuestion(currentQuestion);
    });
    
    buttonsContainer.appendChild(restartButton);
}

document.addEventListener('DOMContentLoaded', initGame);
