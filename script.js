/* Declare variables below to save the different sections (divs) of your story*/
let title = document.querySelector(".title");
let storyOpening = document.querySelector(".story-opening");
let buttons = document.querySelector(".buttons");
let optionOne = document.querySelector(".option-one");
let optionTwo = document.querySelector(".option-two");
let optionOneScreen = document.querySelector(".option-one-screen");
let optionTwoScreen = document.querySelector(".option-two-screen");
let blue = document.querySelector(".blue");
let red = document.querySelector(".red");
let bluecaptiontext = document.querySelector(".bluecaption");
 let redcaptiontext = document.querySelector(".redcaption");
let optionTwoEnd = document.querySelector(".option-two-end");
let optionOneEnd = document.querySelector(".option-one-end");

optionOne.onclick=function(){
title.style.display= "none";
  storyOpening.style.display="none";
  buttons.style.display="none";
 optionOneScreen.style.display="block";
  bluecaptiontext.innerHTML = "Blue, great choice";

};

optionTwo.onclick=function(){
title.style.display= "none";
  storyOpening.style.display="none";
  buttons.style.display="none";
  optionTwoScreen.style.display="block";
  redcaptiontext.innerHTML = "Very unfortunate for you my friend";
};


optionOneScreen.onclick=function(){
blue.style.display="none"
  optionOneScreen.style.display="none"
  optionOneEnd.style.display="block"
};


optionTwoScreen.onclick=function(){
  red.style.display="none"
  optionTwoScreen.style.display="none"
  optionTwoEnd.style.display="block"
};

