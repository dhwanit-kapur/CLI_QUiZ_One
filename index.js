var readlineSync = require('readline-sync');

var score = 0;

var userName = readlineSync.question("Please enter your name : ");
console.log("Welcome", userName, "to Do YOU KNOW Dk ?\n");

function play(question, answer){
  var userReply = readlineSync.question(question);
  console.log("You answered : " + userReply);

  if (userReply.toUpperCase() === answer.toUpperCase()){
    console.log("Your answer is correct!");
    score = score + 1;
  }
  else {
    console.log("Wrong answer!");
    console.log("Correct answer is : ", answer);
  }

  console.log("Current score : ", score);
  console.log("*************************************");

}

var questionListOne = [
  {
    question : "How old am I ? ",
    answer : "21"
  },
  {
    question : "Which city do I live in ? ",
    answer : "Ahmedabad"
  },
  {
    question : "Which city do I study in ? ",
    answer : "Pune"
  },
  {
    question : "Which football team do I support in the Spanish football league (La Liga) ? ",
    answer : "FC Barcelona" 
  },
  {
    question : "Which football team do I support in the English football league ? ",
    answer : "Liverpool"
  }
]

for (var i = 0; i < questionListOne.length ; i++) {
  play(questionListOne[i].question, questionListOne[i].answer);
}

console.log("You've reached the end of this game", userName, "!");
console.log("Your final score is : ", score);

