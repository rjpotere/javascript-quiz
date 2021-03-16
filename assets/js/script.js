var startBtn = document.getElementById('start-btn');
var quiz = document.getElementById('question-container');
var startMenu = document.getElementById('start-menu')
var para = document.createElement("p");
para.className = "question-displayed";
var questionDiv = document.getElementById("question-container");
var timerEl = document.getElementById('countdown');


questionDiv.appendChild(para);


var score = 0
var currentQuestion = 0;
// window.onload = function() {
//     startBtn.style.display = "none"
// }
var questions = [
    {
        q: "what is HTML?",
        choices: ["A. Hypertext markup lanuage", "B. A function", "C. CSS", "D. Google.com"],
        answer: "A. Hypertext markup language"
    },
    {
        q: "what is Javascript?",
        choices: ["A. program","B. function","C. css","D. www"],
        answer: "B. function"
    },
    {
        q: "what is CSS?",
        choices: ["A. Hypertext markup lanuage","B. Casscaide Style Sheet","C. Javascript","D. www"],
        answer: "B. Casscaide Style Sheet"
    },
];


function timer() {
    var timeLeft = 75;

    var timeInterval = setInterval(function() {
    if (timeLeft > 1) {
        timerEl.textContent = "Timer: " + timeLeft;
        timeLeft--;
    } else { 
        timerEl.textContent = " "; 
        clearInterval(timeInterval);
    }
    },1000);
}

startBtn.addEventListener('click',startQuiz);

function startQuiz() {
    startMenu.setAttribute("class", "hide"); 
    timer ();
    nextQuestion();
};


function nextQuestion() {
    para.textContent = questions[currentQuestion].q;
    var newBtn;
    for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
        var choiceSelection = questions[currentQuestion].choices[i];
        newBtn = document.createElement('button');
        newBtn.className = "choice-btn";

        newBtn.textContent = choiceSelection;
        quiz.appendChild(newBtn);

        var newLine = document.createElement('br');
        quiz.appendChild(newLine);
        quiz.setAttribute("class", "display");

        newBtn.addEventListener('click', function(event) {
            var element = event.target;

            if (element.matches('button')){
                var answerChoice = questions[currentQuestion].answer;

                if (answerChoice === element) {
                    score++;
                    console.log(score);
                }
            }
            

        });
        
    }
    

    
};




