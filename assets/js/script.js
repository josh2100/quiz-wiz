//global variables
let countdown = $("#countdown");
let timeLeft = 300;
let startPageArray = [];
let currentQuestion = 0;

//https://michael-karen.medium.com/how-to-save-high-scores-in-local-storage-7860baca9d68
const NO_OF_HIGH_SCORES = 10;
const HIGH_SCORES = "highScores";
const highScoreString = localStorage.getItem(HIGH_SCORES);
const highScores = JSON.parse(highScoreString) ?? [];

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
  // timeLeft = 0;

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
  $("main").append("<h2 class='col-6 offset-md-3'>HIGH SCORES<h2>");
  $("main").append("<ol id='highScores' class='col-6 offset-md-3'></ol>");

  //https://michael-karen.medium.com/how-to-save-high-scores-in-local-storage-7860baca9d68
  const highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
  const highScoreList = document.getElementById(HIGH_SCORES);

  highScoreList.innerHTML = highScores
    .map((score) => `<li>${score.score} ----------- ${score.name}`)
    .join("");

  // Create restart button
  $("main").append(
    "<button id='restart' class='col-6 offset-md-3'>Go Back</button>"
  );
  // Add event listener to restart button
  $("#restart").on("click", function () {
    restartGame();
  });
};

const endGame = function () {
  checkHighScore(timeLeft);
  console.log(timeLeft);
  console.log("game ended");
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
    } else if (timeLeft <= 0) {
      endGame();
    } else {
      buildQuestionTemplate();
    }
  };

  // Check accuracy functions
  const correct = () => {
    console.log(currentQuestion);
    currentQuestion += 1;
    checkIfGameEnd();
  };
  const incorrect = () => {
    console.log(currentQuestion);
    //// only increment if less than questionarray.length
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
    "<button id='answer1' class='col-4 offset-md-2'>ANSWER1</button>"
  );
  $("main").append(
    "<button id='answer2' class='col-4 offset-md-2'>ANSWER2</button>"
  );
  $("main").append(
    "<button id='answer3' class='col-4 offset-md-2'>ANSWER3</button>"
  );
  $("main").append(
    "<button id='answer4' class='col-4 offset-md-2'>ANSWER4</button>"
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
  timeLeft = 300;
  currentQuestion = 0;

  /// time functionality///////
  //https://www.freecodecamp.org/news/javascript-timers-everything-you-need-to-know-5f31eaa37162/
  let clock = () => {
    if (timeLeft > 1) {
      timeLeft--;
      countdown.text(timeLeft);
    } else {
      //end game
      console.log("end time");
      showHighScores(timeLeft);
      endGame();
      clearInterval(increment);
    }

    if (!questionArray[currentQuestion]) {
      showHighScores(timeLeft);
      clearInterval(increment);
      console.log("no more questions");
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
