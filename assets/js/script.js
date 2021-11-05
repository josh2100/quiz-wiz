let countdown = $("#countdown");
let timeLeft = 5;

let tickTock = () => {
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
let interval = setInterval(tickTock, 1000);




// let questionHolder = $("main").append("<p>Test</p>");
// $("questionHolder").; add class col

let startPageArray = [];

startPageArray = $("main").html();

alert(startPageArray);

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
