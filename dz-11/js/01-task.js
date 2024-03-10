/*
        Завдання:
        Під час натискання на кнопку "Показати значення", використовуючи цикл for, виведіть значення всіх елементів керування input (крім input type=button) на консоль.
        */

"use strict";

document
  .querySelector('input[type="button"]')
  .addEventListener("click", function () {
    const inputs = document.querySelectorAll(
      'input[type="text"], input[type="password"]'
    );
    for (const input of inputs) {
      console.log(input.value);
    }
  });
