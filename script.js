const verbiage = document.querySelector('h2');
const btnA = document.querySelector('.a');
const btnB = document.querySelector('.b');
const btnC = document.querySelector('.c');
const btnD = document.querySelector('.d');
const next = document.querySelector('.next');
const questionBox = document.querySelector('.question-box');
const optionsBox = document.querySelector('.options-box');
const scorebox = document.querySelector('.player-score');

let correctNum = 0;
let currentQuestion = 0;



const questions = [
	{
        question: "Who was Luke Skywalker's first master? Was it:", 
        answers: {
            a: "   A:    Obi-Wan Kenobi   ",
            b: "   B:    Gandhi   ",
            c: "   C:    Anakin Skywalker   ",
            d: "   D:    Mace Windu   ",
        },
        correctAnswer: "a"
    },
    {
	question: "In his first vicious & downright CGI duel with Count Dooku, which limb did Anakin Skywalker lose? Was it:",
    answers: {
        a: "   A:   His left leg   ",
        b: "   B:   The toes on his right foot   ",
        c: "   C:   His right arm   ",
        d: "   D:   His left ear   ",
    },
    correctAnswer: "c"
},
{
    question: "On what planet did the Clone Wars truly begin? (Hint: Think creepy long-necks)",
	 answers: {
         a: "   A:   Naboo   ",
         b: "   B:   Tatooine   ",
         c: "   C:   Uranus   ",
         d: "   D: Geonosis   ",
     },
     correctAnswer: "d"
    },
    {
	question: "What world class, dashing young actor played the near invincible Qui-Gon Jinn in the visually stunning Episode 1?", 
    answers: {
        a: "   A:   Tom Holland   ",
        b: "   B:   Liam Neeson   ",
        c: "   C:   Ford Pickert   ",
        d: "   D:   Sarah Jessica Parker   ",
    },
    correctAnswer: "b"
},
{ 
	question: "What was the name of the most infamous ship in the galaxy? (Hint: It was piloted by Indiana Jones & Bigfoot)",
     answers: {
         a: "   A:   Starship STX-90   ",
         b: "   B:   Copper Cougar   ", 
         c: "   C:   Millenium Falcon   ",
         d: "   D:   Lost Ark   ",
     },
     correctAnswer: "c"
    },
    {
    question: "Which character absolutely annihilates the Death Star?",
    answers: {
        a: "   A:   George Lucas   ",
        b: "   B:   Han Solo   ",
        c: "   C:   Princess Leia   ",
        d: "   D:   Luke Skywalker   ",
    },
    correctAnswer: "d"
},
{
    question: "What species of humanoids does Chewbacca belong to?",
    answers: {
        a: "   A:   Wookie   ",
        b: "   B:   Cookie   ",
        c: "   C:   Snookie   ",
        d: "   D:   Sasquatch   ",
    },
    correctAnswer: "a"
},
{
    question: "How far are we really from all this goodness?",
    answers: {
        a: "   A:   Far away   ",
        b: "   B:   Far, far away   ",
        c: "   C:   Like two million miles   ",
        d: "   D:   Really close actually   ",
    },
    correctAnswer: "b"
},
{
    question: "Han Solo has a weirdo wannabe Sith kid with which iconic character (and actress!)?",
    answers: {
        a: "   A:   R2-D2   ",
        b: "   B:   Your mom   ",
        c: "   C:   Princess Leia   ",
        d: "   D:   Queen Padme Amidala   ",
    },
    correctAnswer: "c"
},
{
   question: "Complete this iconic line that shook millions in its stead: 'Luke, I am your ___.'",
    answers: {
        a: "   A:   Dude   ",
        b: "   B:   Dad   ",
        c: "   C:   Parental Unit   ",
        d: "   D:   Father   ",
    },
    correctAnswer: "d"
}
];



function didIWin() {
    if (scorebox.innerHTML === '5') {
        alert("You win! You may hit ok and keep playing or refresh the page to start over");
    }
};

function isItRight(choice) {
    const target = choice.target.className;
    if (target === questions[currentQuestion - 1].correctAnswer) {
        correctNum++;
        scorebox.innerHTML = correctNum;
        choice.target.style.color = 'green';
        didIWin();
        return verbiage.innerText = "Correct! Please hit next to continue";
    } else {
        choice.target.style.color = 'red';
        return verbiage.innerText = "You wrong dawg. Please guess again or hit next to continue";
    }
};

next.addEventListener('click', () => {
	verbiage.innerText = '';
	questionBox.innerHTML = questions[currentQuestion].question;
	optionsBox.innerHTML = Object.values(questions[currentQuestion].answers);
	currentQuestion++;
});

btnA.addEventListener('click', isItRight);
btnB.addEventListener('click', isItRight);
btnC.addEventListener('click', isItRight);
btnD.addEventListener('click', isItRight);