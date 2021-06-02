var question = document.querySelector("#question");
var choices = Array.from(document.querySelector(".choice-text"));
var scoreText = document.querySelector("#score");
var currentQuestion = {}
var correctAnswers = true
var score = 0
var availableQuesrions = []

var questions = [
    {
        question: 'What does js stand for?',
        choice1: 'Python',
        choice2: 'Java Smith',
        choice3: 'John Smith',
        choice4: 'Javascript',
        answer: 4,
    },
    {
        question: 'What does js stand for?',
        choice1: 'Python',
        choice2: 'Java Smith',
        choice3: 'John Smith',
        choice4: 'Javascript',
        answer: 4,
    },
    {
        question: 'What does js stand for?',
        choice1: 'Python',
        choice2: 'Java Smith',
        choice3: 'John Smith',
        choice4: 'Javascript',
        answer: 4,
    },
    {
        question: 'What does js stand for?',
        choice1: 'Python',
        choice2: 'Java Smith',
        choice3: 'John Smith',
        choice4: 'Javascript',
        answer: 4,
    },
]

var 