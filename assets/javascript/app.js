//Making the game work! 

// Variables
var correctGuesses = 0;
var incorrectGuesses = 0;
var unansweredQuestions = 0;
var number = 60;
var intervalId;

$(document).ready(function() {

  // start of game

  $("#play").hide();

  // User hits Accio Questions to start timer

  $("#start").on("click", "#start-button", function() {
    $(this).slideUp();
    $("#play").show();
    timerRun();
  });

  // When submit button is clicked

  $("#play").on("click", "#done-button", function() {

    // Question 1 functions

    function answerCheck1 () {

      if ($("input[id='answerButton1']").is(':checked')) {

        var userAnswer = $('input[id=answerButton1]:checked', '#myGame').val();

          if (userAnswer === "correct") {
            correctGuesses++;
            console.log("correct answers: " + correctGuesses);
          }

          else {
            incorrectGuesses++;
            console.log("incorrect answers: " + incorrectGuesses);
          }
        }

      else if (!$("input[id='answerButton1']").is(':checked')) {
        unansweredQuestions++;
        console.log("unanswered questions: " + unansweredQuestions);
      }
    }

    var firstQuestion = $("#question1");

    answerCheck1(firstQuestion);

    // Question 2 logic

    function answerCheck2() {

      if ($("input[id='answerButton2']").is(':checked')) {

        var userAnswer = $('input[id=answerButton2]:checked', '#myGame').val();

          if (userAnswer === "correct") {
            correctGuesses++;
            console.log("correct answers: " + correctGuesses);
          }

          else {
            incorrectGuesses++;
            console.log("incorrect answers: " + incorrectGuesses);
          }
        }

      else if (!$("input[id='answerButton2']").is(':checked')) {
        unansweredQuestions++;
        console.log("unanswered questions: " + unansweredQuestions);
      }
    }

    var secondQuestion = $("#question2");

    answerCheck2(secondQuestion);

    // Question 3 

    function answerCheck3() {

      if ($("input[id='answerButton3']").is(':checked')) {

        var userAnswer = $('input[id=answerButton3]:checked', '#myGame').val();

          if (userAnswer === "correct") {
            correctGuesses++;
            console.log("correct answers: " + correctGuesses);
          }

          else {
            incorrectGuesses++;
            console.log("incorrect answers: " + incorrectGuesses);
          }
        }

      else if (!$("input[id='answerButton3']").is(':checked')) {
        unansweredQuestions++;
        console.log("unanswered questions: " + unansweredQuestions);
      }
    }

    var thirdQuestion = $("#question3");

    answerCheck3(thirdQuestion);

    // Question 4 

    function answerCheck4() {

      if ($("input[id='answerButton4']").is(':checked')) {

        var userAnswer = $('input[id=answerButton4]:checked', '#myGame').val();

          if (userAnswer === "correct") {
            correctGuesses++;
            console.log("correct answers: " + correctGuesses);
          }

          else {
            incorrectGuesses++;
            console.log("incorrect answers: " + incorrectGuesses);
          }
        }

      else if (!$("input[id='answerButton4']").is(':checked')) {
        unansweredQuestions++;
        console.log("unanswered questions: " + unansweredQuestions);
      }
    }

    var fourthQuestion = $("#question4");

    answerCheck4(fourthQuestion);

    // Question 5 

    function answerCheck5() {

      if ($("input[id='answerButton5']").is(':checked')) {

        var userAnswer = $('input[id=answerButton5]:checked', '#myGame').val();

          if (userAnswer === "correct") {
            correctGuesses++;
            console.log("correct answers: " + correctGuesses);
          }

          else {
            incorrectGuesses++;
            console.log("incorrect answers: " + incorrectGuesses);
          }
        }

      else if (!$("input[id='answerButton5']").is(':checked')) {
        unansweredQuestions++;
        console.log("unanswered questions: " + unansweredQuestions);
      }
    }

    var fifthQuestion = $("#question5");

    answerCheck4(fifthQuestion);

    // Hide game
    $("#game").hide();

    // Display score
    $("#results").show();
      // Correct score
      $("#correctText").text("Correct Answers: " + correctGuesses);
      // Incorrect score
      $("#incorrectText").text("Incorrect Answers: " + incorrectGuesses);
      // Unanswered score
      $("#unansweredText").text("Unanswered Questions: " + unansweredQuestions);

  });

  //Set timer 60 seconds and count down to 0

  function timerRun() {
    intervalId = setInterval(countdown, 1000);
  }

  function countdown() {

    number--;

    $("#timer").text("Time Remaining: " + number + " seconds");

      if (number === 0) {

        timerStop();

        // Hide game
        $("#play").hide();

        // Display results
        $("#results").show().prepend("Immobulous - Time's Up!");
        // Correct score
        $("#correctText").text("Correct Answers: " + correctGuesses);
        // Incorrect incorrect score
        $("#incorrectText").text("Incorret Answers: " + incorrectGuesses);
        // Unanswered score
        $("#unansweredText").text("Unanswered Questions: " + unansweredQuestions);
      }

  }

  function timerStop() {
    clearInterval(intervalId);
      if (!$("input[id='answerButton1']").is(':checked')) {
      unansweredQuestions++;
      console.log("unanswered questions: " + unansweredQuestions);
      }
      if (!$("input[id='answerButton2']").is(':checked')) {
      unansweredQuestions++;
      console.log("unanswered questions: " + unansweredQuestions);
      }
      if (!$("input[id='answerButton3']").is(':checked')) {
      unansweredQuestions++;
      console.log("unanswered questions: " + unansweredQuestions);
      }
      if (!$("input[id='answerButton4']").is(':checked')) {
      unansweredQuestions++;
      console.log("unanswered questions: " + unansweredQuestions);
      }
      if (!$("input[id='answerButton5']").is(':checked')) {
      unansweredQuestions++;
      console.log("unanswered questions: " + unansweredQuestions);
      }
  }

});

