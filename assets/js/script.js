//global variables
let countdown = $("#countdown");
let timeLeft = 500;
let startPageArray = [];
let currentQuestion = "question";
// let restartTestButton = [
//   <button id="restart" class="col-6">
//     RESTART TEST BUTTON
//   </button>,
// ];

let questionArray = [
  {
    title: "What is Josh's favorite fruit?",
    answer1: "apple",
    answer2: "mango",
    correctAnswer: 1,
  },
];

//functions

// captures HTML at start, so it can be replace when game ends
let recordStartPage = function () {
  startPageArray = $("main").html();
};

// Wait for document to render
$(document).ready(() => {
  recordStartPage();
  console.log(startPageArray);
  // FIRST BUTTON
  $("#start-btn").on("click", function () {
    startGame();
  });
  // RESTART BUTTON
});

//////////////

/// BUILD QUESTION TEMPLATE
//create template
// update with real questions, random gen
// make event listeners

buildQuestionTemplate = function () {
  // Adds question
  $("main").append("<p id='title' class='col-6 offset-md-3'></p>");
  /// Adds answer buttons
  $("main").append(
    "<button id='answer1' class='col-4 offset-md-4'>ANSWER1</button>"
  );
  $("main").append(
    "<button id='answer2' class='col-4 offset-md-4'>ANSWER2</button>"
  );
  // Fill in question title
  $("#title").text(questionArray[0].title);
  // Fill in possible answers
  $("#answer1").text(questionArray[0].answer1);
  $("#answer2").text(questionArray[0].answer2);
};

// START GAME
let startGame = function () {
  // Clear screen
  $("main").html("");

  // Start timer
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

  // Build question template
  buildQuestionTemplate();

  // Create restart button
  $("main").append(
    "<button id='restart' class='col-6 offset-md-3'>RESTART TEST BUTTON</button>"
  );
  // Add event listener to restart button
  $("#restart").on("click", function () {
    restartGame();
  });
};

// RESTART GAME
let restartGame = function () {
  $("main").html(startPageArray);
  // Re-Apply Event Listener
  $("#start-btn").on("click", function () {
    startGame();
  });
};

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
