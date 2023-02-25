var speakWord = "Hello";
function speak(name) {
  console.log(speakWord + " " + name);
}
(function speak() {
  var names = ["Aruzhan", "Kamila", "ars", "Zhasmin",
    "Sultan", "Batyr", "Dima", "Perizat", "Zhazira", "ali", "everybody"];
  for (let i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
      helloSpeaker(names[i]);
      function helloSpeaker(names) {
        console.log("Hello " + names);
      }
    }
  }
)();
console.log(Math.max(5, 8, 7));
console.log(Math.max(-4, -8, -11));

let arr= [10, 7, 13];
console.log(10*7*13);