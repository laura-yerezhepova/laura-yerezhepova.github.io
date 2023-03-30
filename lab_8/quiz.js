$(document).ready(function () {
  correct = ["document", "p", "1989", "3", "12","name"];
  questions = [
    "What node within a DOM model is regarded as a root?",
    "Which tag can be used to define a paragraph?",
    "Which year WWW, HTTP and HTML technologies were invented?",
    "How many ways exists to add CSS styles to HTML document?",
    "How many columns does a responsive grid-view have?",
    "Which keyword of the following cannot be used to declare a new variable?"
  ];
  choice_options = [
    ["document", "div", "html", "body"],
    ["a", "p", "h1", "none of the above"],
    ["1991","1988","1989","1990"],
    ["5","6","4","3"],
    ["12","10","8","6"],
    ["const", "var", "let", "name"]
  ];

  quizBox = $("#quiz-box");
  quizBox.append("<div class='question'>");
  for (let i = 0; i < questions.length; i++) {
    $(".question").append(
      "<p class='d'> Q" +
        (i + 1) +
        ". " + questions[i] +" </p>"
    );
    for (let j = 0; j < choice_options[i].length; j++) {
      $(".question").append(
        "<label><input type='radio' name='q" +
          (i + 1) +
          "' value='a'>" +
          choice_options[i][j] +
          "</label>"
      );
    }
  }

  countCorrect = 0;
  reset = false;

  $(".button-3").click(function (event) {
    for (let i = 0; i < questions.length; i++) {
      $("input[name=q" + (i+1) +"]").each(function (index) {
        choice = $(this).parent().text();
        if ($(this).prop("checked") == true && correct[i] == choice) {
          countCorrect += 1;
        }
      });
    }
    $("#quiz-box").append(
      "<h2>Result of the quiz is: " + countCorrect + '/' + questions.length + "</h2>"
    );
  });

  $(".button-4").click(function (event){
     location.reload()
  });
});
