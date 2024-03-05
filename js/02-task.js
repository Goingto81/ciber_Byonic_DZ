/*
        Завдання:
        Створіть функцію showWithDelay (масив);
        Метод приймає масив і на консоль по черзі виводить кожен елемент масиву з 
        інтервалом в одну секунду.
        Зробіть два варіанти з setInterval і setTimeout.
        */
"use strict";

function showWithDelayTimeout(array) {
  function printElement(index) {
    console.log(array[index]);
    if (index < array.length - 1) {
      setTimeout(() => {
        printElement(index + 1);
      }, 1000);
    }
  }
  printElement(0);
}

const myArray = [1, 2, 3, 4, 5];
showWithDelayTimeout(myArray);

// ************************************************* //

function showWithDelayInterval(array) {
  let index = 0;
  const intervalId = setInterval(() => {
    console.log(array[index]);
    index++;
    if (index >= array.length) {
      clearInterval(intervalId);
    }
  }, 800);
}

const myArray1 = [1, 2, 3, 4, 5];
showWithDelayInterval(myArray1);
