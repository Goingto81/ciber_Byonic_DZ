/*
        Завдання:
        
        Доопрацюйте сценарій.
        1. Під час натискання на кнопку "Стоп" анімація має зупинитися.
        2. Під час натискання на кнопку "Прискорити" анімація має прискоритися. 
           За повторного натискання швидкість анімації має збільшуватися.
        3. Під час натискання на кнопку "Уповільнити" анімація сповільнюється. 
           За повторного натискання швидкість стає меншою.
        */
// "use strict";
let element = document.querySelector("#element");
let elementWidth = parseInt(getComputedStyle(element).width);
let containerWidth = parseInt(
  getComputedStyle(document.querySelector("#container")).width
);

let direction = "right";
let speed = 3;
let intervalId;

function moveLeft() {
  element.style.left = getLeft(element) - speed + "px";
}

function moveRight() {
  element.style.left = getLeft(element) + speed + "px";
}

function getLeft(e) {
  return parseInt(getComputedStyle(e).left);
}

function move() {
  if (getLeft(element) >= containerWidth - elementWidth) {
    direction = "left";
  }
  if (getLeft(element) <= 0) {
    direction = "right";
  }

  if (direction == "right") {
    moveRight();
  } else {
    moveLeft();
  }
}

document.querySelector("#startBtn").addEventListener("click", function () {
  intervalId = setInterval(move, 40);
});

document.querySelector("#stopBtn").addEventListener("click", function () {
  clearInterval(intervalId);
});

document.querySelector("#increaseBtn").addEventListener("click", function () {
  speed += 1;
  clearInterval(intervalId);
  intervalId = setInterval(move, 40);
});

document.querySelector("#decreaseBtn").addEventListener("click", function () {
  speed -= 1;
  if (speed < 1) {
    speed = 0;
  }
  clearInterval(intervalId);
  intervalId = setInterval(move, 40);
});
