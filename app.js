'use strict';
//
//This is where the first five questions begin.
var question1 = prompt('Do you know who Alice in Wonderland is?').toLowerCase();

if (question1 === 'yes' || question1 === 'y' || question1 === 'yeah' || question1 === 'yea') {
  alert('That\'s great! The time has come then...');
  console.log('Alice in Wonderland, check');
  document.write('We\'ve found someone who may be a match');
}else if (question1 === 'no' || question1 === 'nah' || question1 === 'n') {
  alert('No problem. I know someone who can help.');
  console.log('This person has escaped British childrens literature');
  document.write('We\'ve got a gem in the rough here');
} else {
  alert('Try answering with yes or no.');
  console.log('We have some potentially indifference on our hands.');
  document.write('We might need to go back to square one.');
}

var question2 = prompt('Have you ever believed an impossible thing?').toLowerCase();

if (question2 === 'yes' || question2 === 'y' || question2 === 'yeah' || question2 === 'yea') {
  alert('Than one more won\'t be any issue at all');
}else if (question2 === 'no' || question2 === 'nah' || question2 === 'n') {
  alert('Never? Well let\'s begin!');
}else {
  alert('Do you think answering is impossible?');
}

var question3 = prompt('Do you think it\s impossible to find a creative, responsible person?').toLowerCase();

if (question3 === 'yes' || question3 === 'y' || question3 === 'yeah' || question3 === 'yea') {
  alert('Than you\'ll never find them at all');
}else if (question3 === 'no' || question3 === 'nah' || question3 === 'n') {
  alert('Well than you are in luck! Prepare to go down the rabbit hole!');
}else {
  alert('Again no answer? Let\'s try the next question');
}

var question4 = prompt('Do you have a creative idea or endeavour?').toLowerCase();

if (question4 === 'yes' || question4 === 'y' || question4 === 'yeah' || question4 === 'yea') {
  alert('Than Alison is the professional for you!');
}else if (question4 === 'no' || question4 === 'nah' || question4 === 'n') {
  alert('If there is a will, there is a way. Alison can help you!');
}else {
  alert('Again no answer? Let\'s try the next question');
}

var question5 = prompt('Do you want to start today?').toLowerCase();

if (question5 === 'yes' || question5 === 'y' || question5 === 'yeah' || question5 === 'yea') {
  alert('I\'m sorry Alison isn\'t available. Please feel free to schedule another time by contacting her at alisonramer@gmail.com');
  document.write(' Contact Alison at AlisonRamer@gmail.com');
} else if (question5 === 'no' || question5 === 'nah' || question5 === 'n') {
  alert('When ever you are ready, feel free to contact Alison at alisonramer@gmail.com');
  document.write(' Contact Alison at AlisonRamer@gmail.com');
} else {
  alert('Again no answer? Contact Alison at alisonramer@gmail.com');
  document.write(' Contact Alison at AlisonRamer@gmail.com');
}
//This is where the first five questions end

//This is where question6 begins
var question6 = 0;
var counter = 0;

while (question6 !== 6 && counter < 4) {
  question6 = parseInt(prompt('Can you guess how many days of the week Alison is working?'));
  if (question6 > 6) {
    alert ('Alison\'s Jewish. She observes Shabbat. That means one day off of work for her');
  }
  else if (question6 < 6) {
    alert ('Work is play! Alison spends more time working than that.');
  }
  else {
    alert ('Right on! You\'ve got it!'); }
}
//This is where question6 ends

//This is the beginning of question7
var placesIlived = ['SEATTLE','NEW YORK', 'TEL AVIV', 'JERUSALEM', 'RAMALLAH'];
var breakingOutOfWhileLoop = false;
var guesses = 0;

console.log(answerToQuestion7);

while (guesses < 6) {
  var answerToQuestion7 = prompt('Can you guess one of the places Alison has lived?').toUpperCase();
  for (var i = 0; i < placesIlived.length; i++) {
    if (answerToQuestion7 === placesIlived[i]) {
      breakingOutOfWhileLoop = true;
      guesses +=1;
      break;
    }//end of first if statement
  }//end of for if
  if (breakingOutOfWhileLoop) {
    alert ('Great job!');
    break;
  }else {
    alert('Try again!');
  }
  guesses++;
} //end  of while loop
//This is the end of question7
