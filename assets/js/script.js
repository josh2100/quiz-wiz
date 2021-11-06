//global variables
let countdown = $("#countdown");
let timeLeft = 500;
let startPageArray = [];
let currentQuestion = 0;
// let restartTestButton = [
//   <button id="restart" class="col-6">
//     RESTART TEST BUTTON
//   </button>,
// ];

const questionArray = [
  {
    title: "What is Josh's favorite fruit?",
    answer1: "apple",
    answer2: "mango",
    answer3: "banana",
    answer4: "monkey",
    correctAnswer: "answer2",
  },

  {
    title: "Which of the following is an example of string interpolation?",
    answer1: "console.log('do JavaScript quizzes' + num + ' times a day')",
    answer2: "alert('use leetcode' + num+ ' times a week')",
  },
];

// captures HTML at start, so it can be replace when game ends
const recordStartPage = function () {
  startPageArray = $("main").html();
};

// Wait for document to render
$(document).ready(() => {
  recordStartPage();
  // FIRST BUTTON
  $("#start-btn").on("click", function () {
    startGame();
  });
  // RESTART BUTTON
});

/// BUILD QUESTION TEMPLATE
const buildQuestionTemplate = () => {
  // Check accuracy functions
  const correct = () => {
    alert("correct!");
    currentQuestion += 1;
    buildQuestionTemplate();
  };
  const incorrect = () => {
    alert("incorrect!");
    currentQuestion += 1;
    timeLeft -= 100;
    buildQuestionTemplate();
  };

  // Clear screen
  $("main").html("");

  // Add question
  $("main").append("<p id='title' class='col-6 offset-md-3'></p>");

  /// Add answer buttons
  $("main").append(
    "<button id='answer1' class='col-4 offset-md-4'>ANSWER1</button>"
  );
  $("main").append(
    "<button id='answer2' class='col-4 offset-md-4'>ANSWER2</button>"
  );
  $("main").append(
    "<button id='answer3' class='col-4 offset-md-4'>ANSWER3</button>"
  );
  $("main").append(
    "<button id='answer4' class='col-4 offset-md-4'>ANSWER4</button>"
  );

  // Fill in question title
  $("#title").text(questionArray[currentQuestion].title);
  // Fill in possible answers
  $("#answer1").text(questionArray[currentQuestion].answer1);
  $("#answer2").text(questionArray[currentQuestion].answer2);
  $("#answer3").text(questionArray[currentQuestion].answer3);
  $("#answer4").text(questionArray[currentQuestion].answer4);

  // Check accuracy
  $("#answer1").on("click", function () {
    if (questionArray[currentQuestion].correctAnswer == "answer1") {
      correct();
    } else {
      incorrect();
    }
  });

  $("#answer2").on("click", function () {
    if (questionArray[currentQuestion].correctAnswer == "answer2") {
      correct();
    } else {
      incorrect();
    }
  });

  $("#answer3").on("click", function () {
    if (questionArray[currentQuestion].correctAnswer == "answer3") {
      correct();
    } else {
      incorrect();
    }
  });

  $("#answer4").on("click", function () {
    if (questionArray[currentQuestion].correctAnswer == "answer4") {
      correct();
    } else {
      incorrect();
    }
  });
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
      clearInterval(increment);
    }
  };
  // start timer
  let increment = setInterval(clock, 1000);

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
