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
