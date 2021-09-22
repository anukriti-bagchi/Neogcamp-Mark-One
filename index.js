var readlineSync = require('readline-sync');
 let score = 0;
var userName = readlineSync.question('HEY!! What\'s your name? ');
console.log('Welcome ' + userName +'!! let me check how well you know Anukriti!');

function play(question,answer){
      var userAnswer = readlineSync.question(question);
  if(answer.toUpperCase() === userAnswer.toUpperCase()){
    console.log('Right answer :D');
    score++;
  }else{console.log('Wrong answer:(')}
console.log('Your Score:', score); 
}

var questions = [{
  question : "Which pet does Anukriti have at her home?",
  answer : "Parrot"
},{
  question : "Who is Anukriti's favourite marvel character?",
  answer : "Iron Man"
},{
  question : "What is Anukriti's favourite show?",
  answer : "The Office"
},{
  question : "What is Anukriti's favourite ice-cream flavour?",
  answer : "Chocolate"
},{
  question : "What is Anukriti's dream travel destination?",
  answer : "New York"
}
]
for(i=0; i < questions.length;i++){
  var currentquestion = questions[i];
  play(currentquestion.question,currentquestion.answer)
}
 