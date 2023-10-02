const questions = [
    {
        question:"Who developed Python Programming Language?",
        answers:[
            {text:"Wick van Rossum",correct:false},
            {text:"Rasmus Lerdorf",correct:false},
            {text:"Guido van Rossum",correct:true},
            {text:"Niene Stom",correct:false},
        ]
    },
    {
        question:"Which type of Programming does Python support?",
        answers:[
            {text:"object-oriented programming",correct:false},
            {text:"structured programming",correct:false},
            {text:"functional programming",correct:false},
            {text:"all of the mentioned",correct:true},
        ]
    },
    {
        question:"What will be the value of the following Python expression? (4 + 3 % 5)",
        answers:[
            {text:"7",correct:true},
            {text:"2",correct:false},
            {text:"4",correct:false},
            {text:"1",correct:false},
        ]
    },
    {
        question:"Which of the following is used to define a block of code in Python language?",
        answers:[
            {text:"Indentation",correct:true},
            {text:"Key",correct:false},
            {text:"Brackets",correct:false},
            {text:"all of the mentioned",correct:false},
        ]
    },
    {
        question:"Which keyword is used for function in Python language?",
        answers:[
            {text:"Function",correct:false},
            {text:"def",correct:true},
            {text:"Fun",correct:false},
            {text:"Define",correct:false},
        ]
    },
    {
        question:"What is the order of precedence in python?",
        answers:[
            {text:"Exponential, Parentheses, Multiplication, Division, Addition, Subtraction",correct:false},
            {text:"Exponential, Parentheses, Division, Multiplication, Addition, Subtraction",correct:false},
            {text:"Parentheses, Exponential, Multiplication, Division, Subtraction, Addition",correct:false},
            {text:"Parentheses, Exponential, Multiplication, Division, Addition, Subtraction",correct:true},
        ]
    },
    {
        question:"What does pip stand for python?",
        answers:[
            {text:"Pip Installs Python",correct:false},
            {text:"Pip Installs Packages",correct:false},
            {text:"Preferred Installer Program",correct:true},
            {text:"All of the mentioned",correct:false},
        ]
    },
    {
        question:"Which of the following is correct regarding variables in Python?",
        answers:[
            {text:"Variable names in Python cannot start with number. However, it can contain number in any other position of variable name.",correct:false},
            {text:"Variable names can start with an underscore.",correct:false},
            {text:"Data type of variable names should not be declared",correct:false},
            {text:"All of the mentioned",correct:true},
        ]
    },
    {
        question:"Which of the following functions is a built-in function in python?",
        answers:[
            {text:"factorial()",correct:false},
            {text:"print()",correct:true},
            {text:"seed()",correct:false},
            {text:"sqrt()",correct:false},
        ]
    },
    {
        question:"Which of these is the definition for packages in Python?",
        answers:[
            {text:"A set of main modules",correct:false},
            {text:"A folder of python modules",correct:true},
            {text:"A number of files containing Python definitions and statements",correct:false},
            {text:"A set of programs making use of Python modules",correct:false},
        ]
    },
    {
        question:" How many keywords are there in python 3.7?",
        answers:[
            {text:"30",correct:false},
            {text:"31",correct:false},
            {text:"32",correct:false},
            {text:"33",correct:true},
        ]
    },
    {
        question:"Which of the following is a valid variable?",
        answers:[
            {text:"var@",correct:false},
            {text:"32var",correct:false},
            {text:"class",correct:false},
            {text:"abc_a_c",correct:true},
        ]
    },
    {
        question:"Which one is false regarding local variables?",
        answers:[
            {text:"These can be accessed only inside owning function",correct:false},
            {text:"Any changes made to local variables does not reflect outside the function.",correct:false},
            {text:"These remain in memory till the program ends",correct:true},
            {text:"None of the above",correct:false},
        ]
    },
    {
        question:"Which of the following will give error?",
        answers:[
            {text:"a=b=c=1",correct:false},
            {text:"a,b,c=1",correct:true},
            {text:"a,b,c=1, python, 1.5",correct:false},
            {text:"None of the above",correct:false},
        ]
    },
    {
        question:"What is output of print(math.pow(3, 2))?",
        answers:[
            {text:"9.0",correct:true},
            {text:"None",correct:false},
            {text:"9",correct:false},
            {text:"None ofabove",correct:false},
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score=0;
function startQuiz()
{
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion()
{
    resetState();
    let currentQuestion = questions[currentQuestionIndex];


    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML = questionNo+". "+currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct)
        {
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild)
    {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e)
{
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct==="true";
    if(isCorrect)
    {
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true")
        {
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}
function showScore()
{
    resetState();
    questionElement.innerHTML=`you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again!";
    nextButton.style.display="block";
}
function handleNextButton()
{
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length)
    {
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length)
    {
        handleNextButton();
    }
    else
    {
        startQuiz();
    }
});

startQuiz();