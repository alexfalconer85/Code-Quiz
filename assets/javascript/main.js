// set variables and prompt for initials
var initials = prompt("Your Initials?");

// empty array for high scores
var scores = [];

// create time allowed
var timeleft = 15;
// set blank variable for timer
var downloadTimer;
// initialize timer function
startIt();
// timer function
function startIt() {
  // setting inerval of timer
  downloadTimer = setInterval(function () {
    // start counting down
    timeleft--;
    // what to do when time runs out
    if (timeleft <= 0) {
      // when time runs out, run check function
      check();
      // clear interval when there's no time left
      clearInterval(downloadTimer);
      // tell test taker time is up when time runs out
      document.getElementById("countdown").innerHTML = "Time is up!";
    } else {
      // if time is not up, display time with "seconds remaining" after it
      document.getElementById("countdown").innerHTML =
        timeleft + " seconds remaining";
    }
  }, 1000);
}
// play again button and prompt for new initials
function playAgain() {
  initials = prompt("Your Initials?");
  timeleft = 15;
  startIt();
  // Toggle visible windows when playing again
  document.getElementById("quiz").style.visibility = "visible";
  document.getElementById("after_submit").style.visibility = "hidden";
  document.getElementById("high_scores").style.visibility = "hidden";
}
//document.getElementsByTagName("<h1>").innerHTML = secondsElapsed;

// submit quiz answers

function check() {
  clearInterval(downloadTimer);
  // running quiz again loop
  for (i = 0; i < 5; i++) {
    // 5 questions set up as variables with document values
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    // setting correctly answered questions to zero to start
    var correct = 0;
    // if question is correct, add point to correct variable
    if (question1 == "Correct1") {
      correct++;
    }
    if (question2 == "Correct2") {
      correct++;
    }
    if (question3 == "Correct3") {
      correct++;
    }
    if (question4 == "Correct4") {
      correct++;
    }
    if (question5 == "Correct5") {
      correct++;
    }
    // give messages based on scores array
    var messages = ["Perfect!", "Not Great", "Pretty Good", "Study Harder"];
    // set variable message after total score
    var msgScore;
    // if 5/5 then send back Perfect!
    if (correct == 5) {
      msgScore = 0;
    }
    // if 3 or 4 correct, send back Pretty Good
    if (correct > 2 && correct < 5) {
      msgScore = 2;
    }
    // if 1 or 2 correct, send back Not Great
    if (correct > 0 && correct < 3) {
      msgScore = 1;
    }
    // if 0 correct, send back Study Harder
    if (correct == 0) {
      msgScore = 3;
    }
    // after submitting, make score screen visible
    //document.getElementById("after_submit").className = "visible";

    document.getElementById("after_submit").style.visibility = "visible";
    // after submitting, deliver message based on score
    document.getElementById("message").innerHTML = messages[msgScore];
    // give a message with how many you got correct
    document.getElementById("number_correct").innerHTML =
      "You got " + correct + " correct.";
    // add both initials and correct answers to same array
    scores.push(correct + " = " + initials);
    // sort the scores (but in wrong order)
    scores.sort();
    // sort the scores in the right order
    scores.reverse(); // this is are final array
    document.getElementById("each_score").textContent = "";

    // each element in the scores array will be an li inside the ol
    function orderList(item) {
      var lineItem = document.createElement("li");
      lineItem.textContent = item;
      document.getElementById("each_score").append(lineItem);
    }
    scores.forEach(orderList);
    //use map method to append li elements

    // make high scores visible after submitting
    //document.getElementById("high_scores").className = "visible";

    document.getElementById("high_scores").style.visibility = "visible";
    // enter each score on high score window
    document.getElementById("quiz").style.visibility = "hidden";
    // create array out of inputs from html
    var tagArray = document.getElementsByTagName("input");
    // create loop to uncheck radio buttons
    for (i = 0; i < 10; i++) {
      // iterate through tagArray while unchecking
      tagArray[i].checked = false;
    }
  }
}
