//global variables
let countdown = $("#countdown");
let timeLeft = 500;
let startPageArray = [];
let currentQuestion = 0;
////////GOOOODDDDDDDD
//https://michael-karen.medium.com/how-to-save-high-scores-in-local-storage-7860baca9d68
const NO_OF_HIGH_SCORES = 10;
const HIGH_SCORES = "highScores";

function checkHighScore(score) {
  const highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
  const lowestScore = highScores[NO_OF_HIGH_SCORES - 1]?.score ?? 0;

  if (score > lowestScore) {
    saveHighScore(score, highScores);
    showHighScores();
  }
}

function saveHighScore(score, highScores) {
  const name = prompt("You got a highscore! Enter name:");
  const newScore = { score, name };

  // 1. Add to list
  highScores.push(newScore);

  // 2. Sort the list
  highScores.sort((a, b) => b.score - a.score);

  // 3. Select new list
  highScores.splice(NO_OF_HIGH_SCORES);

  // 4. Save to local storage
  localStorage.setItem(HIGH_SCORES, JSON.stringify(highScores));
}

let showHighScores = function () {
  // Clear screen
  $("main").html("");

  // Display end game screen
  $("main").append("<p id='gameOver' class='col-6 offset-md-3'>Game Over!</p>");
  $("main").append("<h2>HIGH SCORES<h2>");
  $("main").append("<ol id='highScores'></ol>");

  // highscores.map((score) => `<li>${score.score} — ${score.name}`);

  // Create restart button
  $("main").append(
    "<button id='restart' class='col-6 offset-md-3'>RESTART TEST BUTTON</button>"
  );
  // Add event listener to restart button
  $("#restart").on("click", function () {
    restartGame();
  });
};

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
    title: "Which of the following is an example of a template literal?",
    answer1: "console.log('do JavaScript quizzes' + num + ' times a day')",
    answer2: "alert('use leetcode' + num+ ' times a week')",
    answer3: "console.log(`My grandma ${name} still uses Internet Explorer`)",
    answer4:
      "window.alert(`My grandma` ${name} `still uses Internet Explorer`)",
    correctAnswer: "answer3",
  },
];

const endGame = function () {
  checkHighScore(timeLeft);
  // saveScore();
  timeLeft = 0;
  // displayHighscores();
};

// captures HTML at start, so it can be replace when game ends
const recordStartPage = () => {
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
  // Check if there are any more questions
  const checkIfGameEnd = function () {
    if (currentQuestion >= questionArray.length) {
      endGame();
    } else {
      buildQuestionTemplate();
    }
  };

  // Check accuracy functions
  const correct = () => {
    // alert("correct!");
    currentQuestion += 1;
    checkIfGameEnd();
  };
  const incorrect = () => {
    // alert("incorrect!");
    currentQuestion += 1;
    timeLeft -= 100;
    checkIfGameEnd();
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

  // Reset variables
  timeLeft = 500;
  currentQuestion = 0;

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
