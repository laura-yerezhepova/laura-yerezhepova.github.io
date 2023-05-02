$(document).ready(function () {
  correct = ["WLL", "2024", "NIS", "NU", "5"];
  questions = [
    "What is my major or area of study?",
    "What is my expected graduation year?",
    "Which high school did I graduate from??",
    "Select my university from the given list",
    "How do you rate my website out of 5?"
  ];
  choice_options = [
    ["PSIR", "ECON", "WLL", "SOC"],
    ["2020", "2019", "2024", "none of the above"],
    ["Haileybury","IQanat","NIS","BIL"],
    ["MIT","KIMEP","SDU","NU"],
    ["1","5","4","3"]
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
      "<h2>Your Quiz Results = " + countCorrect + '/' + questions.length + "</h2>"
    );
  });

  $(".button-4").click(function (event){
    location.reload()
  });
});
