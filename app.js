'use strict';

var question1 = prompt('Does Alison have any children?').toLowerCase();

if (question1 === 'yes' || question1 === 'y' || question1 === 'yeah' || question1 === 'yea') {
    alert('No, I am sorry you are wrong. Alison does not have children!');
  } else if (question1 === 'no' || question1 === 'n') {
    alert('Good job! you\'re right! Alison does not have children.');
  } else {
    alert('Try answering with yes or no');
  }
