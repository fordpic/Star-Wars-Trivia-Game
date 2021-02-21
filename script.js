const playerAnswer = [];
const questions = [
	{
        question: "Who was Luke Skywalker's first master? Was it:", 
        answers: {
            a: "Obi-Wan Kenobi",
            b: "Gandhi",
            c: "Anakin Skywalker",
            d: "Mace Windu",
        },
        correctAnswer: "a"
    },
    {
	question: "In his first vicious & downright CGI duel with Count Dooku, which limb did Anakin Skywalker lose? Was it:",
    answers: {
        a: "His left leg",
        b: "The toes on his right foot",
        c: "His right arm"
        d: "His left ear",
    },
    correctAnswer: "c"
},
{
    question: "On what planet did the Clone Wars begin?",
	 answers: {
         a: "Naboo",
         b: "Tatooine",
         c: "Uranus",
         d: "Geonosis",
     },
     correctAnswer: "d"
    },
    {
	question: "What world class, dashing young actor played the near invincible Qui-Gon Jinn in the visually stunning Episode 1?", answers: {
        a: "Tom Holland",
        b: "Liam Neeson",
        c: "Ford Pickert",
        d: "Sarah Jessica Parker",
    },
    correctAnswer: "b"
},
{ 
	question: "What was the name of the most infamous ship in the galaxy? (Hint: It was piloted by Indiana Jones & Bigfoot)",
     answers: {
         a: "Starship STX-90",
         b: "Copper Cougar", 
         c: "Millenium Falcon",
         d: "Lost Ark",
     },
     correctAnswer: "c"
    },
    {
    question: "Which character absolutely annihilates the Death Star?",
    answers: {
        a: "George Lucas",
        b: "Han Solo", 
        c: "Princess Leia",
        d: "Luke Skywalker",
    },
    correctAnswer: "d"
},
{
    question: "What species of humanoids does Chewbacca belong to?",
    answers: {
        a: "Wookie",
        b: "Cookie",
        c: "Snookie",
        d: "Sasquatch",
    },
    correctAnswer: "a"
},
{
    question: "How far are we really from all this goodness?",
    answers: {
        a: "Far away",
        b: "Far, far away",
        c: "Like two million miles",
        d: "Really close actually",
    },
    correctAnswer: "b"
},
{
    question: "Han Solo has a weirdo wannabe Sith kid with which iconic character (and actress!)?",
    answers: {
        a: "R2-D2",
        b: "Your mom",
        c: "Princess Leia",
        d: "Queen Padme Amidala",
    },
    correctAnswer: "c"
},
{
   question: "Complete this iconic line: 'Luke, I am your ___.'",
    answers: {
        a: "Dude",
        b: "Dad",
        c: "Parental Unit",
        d: "Father",
    },
    correctAnswer: "d"
}
];

const btnA = document.getElementsByClassName("A");
const btnB = document.getElementsByClassName("B");
const btnC = document.getElementsByClassName("C");
const btnD = document.getElementsByClassName("D");

let correctNum = 0;

function isItRight(event) {
    if (event.target === questions.correctAnswer) {
        correctNum++;
        event.target.style.color = 'green';
    } else {
        event.target.style.color = 'red';
    }
};