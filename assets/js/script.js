//global variables
let countdown = $("#countdown");
let timeLeft = 5;
let startPageArray = [];
let currentQuestion = "question";

let questionArray = [
  {
    question: 0,
    answer1: "apple",
    answer2: "orange",
  },
];

//functions

// captures HTML at start
let recordStartPage = function () {
  startPageArray = $("main").html();
  //test with console
  // console.log(startPageArray);
};

// Wait for document to render
$(document).ready(() => {
  recordStartPage();
  console.log(startPageArray);
});

/// time functionality///////
let clock = () => {
  if (timeLeft) {
    timeLeft--;
    countdown.text(timeLeft);
  } else {
    //end game
    console.log("end time");
    clearInterval(interval);
  }
};
// start timer
let interval = setInterval(clock, 1000);
//////////////

// START GAME
let startGame = function () {
  // alert("works!");
  $("main").html(questionArray[0].answer1);
};

// RESTART GAME
let restartGame = function () {
  $("main").html(startPageArray);
  // Re-Apply Event Listener
  $("#start-btn").on("click", function () {
    startGame();
  });
};

// FIRST BUTTON
$("#start-btn").on("click", function () {
  startGame();
});

// let questionHolder = $("main").append("<p>Test</p>");
// $("questionHolder").; add class col

//remove start page function

// build start page function

// create array of objects for questions
// questions [
// {name:one
// answer1: answer1,
//answer2: answer 2
// correctanswer:number}
// ]

/// create question function
// generates a question
// takes object properties as arguments
// this.name then scramble this.answers
// append child or whatever

// check accuracy
// when clicked, compare if this.correctanswer = submitted answer
// stick clicked answer number and correctanswer in an array

//.hide() .show()
// sdafsadf
// sdafsadfadsf
// asdf
