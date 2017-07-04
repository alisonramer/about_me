'use strict';
//

var correctAnswers = 0;
console.log(correctAnswers);

//This is where the first five questions begin.
function q1() {
  var question1 = prompt('Do you know who Alice in Wonderland is?').toLowerCase();

  if (question1 === 'yes' || question1 === 'y' || question1 === 'yeah' || question1 === 'yea') {
    alert('That\'s great! The time has come then...');
    console.log('Alice in Wonderland, check');
    document.write('<br>The user has read Alice in Wonderland');
    correctAnswers+=1;
  }else if (question1 === 'no' || question1 === 'nah' || question1 === 'n') {
    alert('No problem. I know someone who can help.');
    console.log('This person has escaped British childrens literature');
    document.write('<br>The user has not read Alice in Wonderland');
  } else {
    alert('Try answering with yes or no.');
    console.log('The user did not answer yes or no.');
  }
}
q1();
function q2() {
  var question2 = prompt('Have you ever believed an impossible thing?').toLowerCase();

  if (question2 === 'yes' || question2 === 'y' || question2 === 'yeah' || question2 === 'yea') {
    alert('Than one more won\'t be any issue at all');
    document.write('<br>The user has believed in impossible things before.')
    correctAnswers+=1;
  }else if (question2 === 'no' || question2 === 'nah' || question2 === 'n') {
    alert('Never? Well let\'s begin!');
    document.write('<br>The user has never believed in an impossible thing before.')
  }else {
    alert('Do you think answering is impossible?');
    document.write('<br>The user thinks that answering is impossible.')
  }
  console.log('The user\'s answer to if they believe something impossible is ' + question2);
}
q2();

function q3() {
  var question3 = prompt('Do you think it\s impossible to find a creative, responsible person?').toLowerCase();

  if (question3 === 'yes' || question3 === 'y' || question3 === 'yeah' || question3 === 'yea') {
    alert('Than you\'ll never find them at all');
    correctAnswers+=1;
  }else if (question3 === 'no' || question3 === 'nah' || question3 === 'n') {
    alert('Well than you are in luck! Prepare to go down the rabbit hole!');
  }else {
    alert('Again no answer? Let\'s try the next question');
  }
  console.log('The user\'s answer to if it is impossible to find a creative, responsible person is ' + question3);
  document.write('<br>Impossible to find a creative,responsible person: ' + question3)
}
q3();

function q4 () {
  var question4 = prompt('Do you have a creative idea or endeavour?').toLowerCase();

  if (question4 === 'yes' || question4 === 'y' || question4 === 'yeah' || question4 === 'yea') {
    alert('Than Alison is the professional for you!');
    correctAnswers+=1;
  }else if (question4 === 'no' || question4 === 'nah' || question4 === 'n') {
    alert('If there is a will, there is a way. Alison can help you!');
  }else {
    alert('No answer? Let\'s try the next question');
  }
  console.log('The user\'s answer to "Do you have a creative idea or endeavour" is ' + question4);
  document.write('<br>Creative Idea: ' + question4);
}
q4();

function q5 () {
  var question5 = prompt('Do you want to start today?').toLowerCase();

  if (question5 === 'yes' || question5 === 'y' || question5 === 'yeah' || question5 === 'yea') {
    alert('I\'m sorry Alison isn\'t available. Please feel free to schedule another time by contacting her at alisonramer@gmail.com');
    correctAnswers+=1;
  } else if (question5 === 'no' || question5 === 'nah' || question5 === 'n') {
    alert('When ever you are ready, feel free to contact Alison at alisonramer@gmail.com');
  } else {
    alert('No answer? Contact Alison at alisonramer@gmail.com');
  }
  console.log ('Starting today? ' + question5);
  document.write('<br>Starting today: ' + question5);
}
q5();
//This is where the first five questions end

var question6 = 0;
var counter = 0;

while (question6 !== 6 && counter < 4) {
  question6 = parseInt(prompt('Can you guess how many days of the week Alison is working?'));
  if (question6 > 7) {
    alert ('That\'s not possible! There are not that many days in the week!');
  }
  else if (question6 > 6) {
    alert ('Alison\'s Jewish. She observes Shabbat. That means that she takes one day a week off from work.');
    correctAnswers+=1;
  }
  else if (question6 < 6) {
    alert ('Work is play! Alison spends more time working than that.');
  }
  else {
    alert ('Right on! You\'ve got it!'); }

  console.log ('The user guessed that Alison is working ' + question6 + 'days a week.')
  guesses+=1;
}

//This is where question6 ends

//This is the beginning of question7
var placesIlived = ['SEATTLE','NEW YORK', 'TEL AVIV', 'JERUSALEM', 'RAMALLAH'];
var breakingOutOfWhileLoop = false;
var guesses = 0;


while (guesses < 6) {
  var answerToQuestion7 = prompt('Can you guess one of the places Alison has lived? You have six changes!').toUpperCase();
  for (var i = 0; i < placesIlived.length; i++) {
    if (answerToQuestion7 === placesIlived[i]) {
      breakingOutOfWhileLoop = true;
      guesses +=1;
      break;
    }//end of first if statement
  }//end of for if
  if (breakingOutOfWhileLoop) {
    alert ('Great job!');
    correctAnswers +=1;
    break;
  }else {
    alert('Try again!');
  }
  guesses+=1;
} //end  of while loop

//This is the end of question7
console.log('Good job! You got ' + correctAnswers + ' of the answers correct');
function awards () {
  if (correctAnswers > 6) {
    alert ('You know Alison! The Association for Knowledge about Alison is pleased to award you with our very, very special gold-plated medal.');
    document.write('The user was awarded a gold medal.')
  }

  else if (correctAnswers >= 3 && correctAnswers <= 5) {
    alert ('You\'re getting to know Alison. Good work! The Association for Knowledge About Alison is pleased to awarded you a silver-ish medal.');
    document.write('The user was awarded a silver medal.')
  }

  else {
    alert ('Thank you for your efforts. The Association for Knowledge About Alison is pleased to reward you with a bronze metal.');
    document.write('The user was awarded a silver medal.')
  }
}
awards ();
