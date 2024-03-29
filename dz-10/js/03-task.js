/*
      Завдання:
      За аналогією з посиланнями size-16, size-24, size-32, які використовують замикання, додайте обробники
      на клік за посиланням red, green, blue. Під час натискання на посилання має змінюватися колір параграфа на червоний, зелений або синій.
      Використовуйте замикання в обробниках.
      */
"use strict";

function makeSizer(size) {
  return function () {
    document.body.style.fontSize = size + "px";
  };
}

function makeColorChanger(color) {
  return function () {
    document.body.style.color = color;
  };
}

const size16 = makeSizer(16);
const size24 = makeSizer(24);
const size32 = makeSizer(43);

const redColor = makeColorChanger("red");
const greenColor = makeColorChanger("green");
const blueColor = makeColorChanger("blue");

document.querySelector("#size-16").onclick = size16;
document.querySelector("#size-24").onclick = size24;
document.querySelector("#size-32").onclick = size32;

document.querySelector("#red").onclick = redColor;
document.querySelector("#green").onclick = greenColor;
document.querySelector("#blue").onclick = blueColor;
