const progress = document.getElementById("question-num");
const question = document.getElementById("question");
const questionPic = document.getElementById("question-pic");
const optionA = document.getElementById("optionA");
const optionB = document.getElementById("optionB");
const optionC = document.getElementById("optionC");
let scoreDisplay = document.getElementById("score-display");

/** All the questions*/

let questions = [
    { 
        question: "Which Disney character has seven dwarfs as friends ?",
        imgSrc: "assets/images/snowwhite.jpg",
        optionA: "The Evil Queen",
        optionB: "Snow White",
        optionC: "The Hunter",
        correct: "B"
    }, {
        question: "Which Disney character has a flying carpet ?",
        imgSrc: "assets/images/aladdin.jpg",
        optionA: "Genie",
        optionB: "Aladdin",
        optionC: "Princess Jasmine",
        correct: "B"
    }, {
        question: "What Disney song does Elsa sing in Frozen ?",
        imgSrc: "assets/images/frozen.jpg",
        optionA: "Let It Go",
        optionB: "Do You Want to Build a Snowman?",
        optionC: "For the First Time in Forever",
        correct: "A"
    }, {
        question: "Which Disney character is a young lion and the son of Mufasa ?",
        imgSrc: "assets/images/simba.jpg",
        optionA: "Scar",
        optionB: "Nala",
        optionC: "Simba",
        correct: "C"
    }, {
        question: "Which Disney character is a little mermaid ?",
        imgSrc: "assets/images/ariel.jpg",
        optionA: "Ariel",
        optionB: "Ursula",
        optionC: "Scuttle",
        correct: "A"
    }, {
        question: "Who is the owner of Pluto in Disney stories ?",
        imgSrc: "assets/images/mickeymouse.jpg",
        optionA: "Max Goof ",
        optionB: "Pete",
        optionC: "Mickey Mouse",
        correct: "C"
    }, {
        question: "Which Disney character wears a red cape and chases after a basket full of goodies ? ",
        imgSrc: "assets/images/littleredridinghood.jpg",
        optionA: "The Wolf",
        optionB: "Little Red Riding Hood",
        optionC: "Grandmother",
        correct: "B"
    }, {
        question: "Which Disney character is the main character in The Jungle Book ?",
        imgSrc: "assets/images/mogli.jpg",
        optionA: "Mowgli",
        optionB: "Bagheera",
        optionC: "Baloo",
        correct: "A"
    }, {
        question: "Which Disney character has a Blue Fairy as a mentor?",
        imgSrc: "assets/images/pinocchio.jpg",
        optionA: "Stromboli",
        optionB: "Geppetto",
        optionC: "Pinocchio.",
        correct: "C"
    }, {
        question: "Which Disney character is a rabbit and has a friend named Thumper? ",
        imgSrc: "assets/images/bambi.jpg",
        optionA: "Flower",
        optionB: "Bambi",
        optionC: "Faline",
        correct: "B"
    }
];

/**Variables for questions and score*/

let lastQuestion = questions.length - 1;
let runningQuestion = 0;
let score = 0;

/** Rendering display of progress through quiz*/
progress.textContent= runningQuestion+1+"/10";

/**Rendering score */
scoreDisplay.textContent = score;

/**Function to render questions*/
function renderQuestion() {

    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";
    questionPic.innerHTML = "<img src="+ q.imgSrc +">";
    optionA.innerHTML = q.optionA;
    optionB.innerHTML = q.optionB;
    optionC.innerHTML = q.optionC;
} 

renderQuestion();

/**Event listeners for answer selection */
optionA.addEventListener("click", checkAnswer);
optionB.addEventListener("click", checkAnswer);
optionC.addEventListener("click", checkAnswer);

/**Function to check answers */
function checkAnswer() {

    if ( this.value == questions[runningQuestion].correct) {
        score++;
        scoreDisplay.textContent = score;
        this.style.backgroundColor = "green";
        this.style.color = "white";
        runningQuestion++;
        
    } else {
        this.style.backgroundColor = "red";
        this.style.color = "white";
        runningQuestion++;
        
    }

    if (runningQuestion <= lastQuestion){
        setTimeout(nextQuestion, 200);
    } else {
        setTimeout(endGame, 200);
    }
}

/**Function to move on to next question after player's choice is checked */
function nextQuestion() {

    resetOptions();
    renderQuestion();
    window.scrollTo(0, 0);
    progress.textContent= runningQuestion+1+"/10";
}

/** Function to reset options divs after timeout post-selection*/
function resetOptions() {

    optionA.style.backgroundColor = "white";
    optionA.style.color = "grey";

    optionB.style.backgroundColor = "white";
    optionB.style.color = "grey";

    optionC.style.backgroundColor = "white";
    optionC.style.color = "grey";
}

/**Function to redirect to end page at end of quiz */
function endGame() {
    /**Saving players score to local storage */
    localStorage.setItem("playerScore", score);
    window.location = "end.html";
}