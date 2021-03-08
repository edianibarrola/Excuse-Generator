/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.querySelector("#excuse").innerHTML = generateExcuse();
};

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

let generateExcuse = () => {
  console.log(who[randomNumber(who.length)] + "cool");
  return (
    who[randomNumber(who.length)] +
    " " +
    action[randomNumber(action.length)] +
    " " +
    what[randomNumber(what.length)] +
    " " +
    when[randomNumber(when.length)]
  );
};
let randomNumber = arrayLength => {
  return Math.floor(Math.random() * arrayLength);
};
