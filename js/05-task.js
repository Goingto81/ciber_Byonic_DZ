/*
        Завдання:
        Напишіть сценарії гри "Вгадай число". Суть гри: вгадати за меншу кількість спроб число, яке загадав сценарій.
        Щоразу, коли гравець намагається вгадати число, сценарій виводить підказку – менше чи більше число було загадано сценарієм.
        Сценарій загадує число лише один раз на початку гри, і це число не змінюється до завершення гри.
        Після завершення гри виведіть користувачеві інформацію про те, з якої спроби вгадано значення та скільки було витрачено часу на це.

        Для створення випадкового числа використовуйте такий код:
        let randomValue = Math.floor(Math.random() * 101); // випадкове значення від 0 до 100 буде записано в змінну randomValue.
        
        Приклад гри:
        Сценарій: я загадав випадкове значення від 0 до 100
        Користувач: 50
        Сценарій: я загадав значення більше за 50
        Користувач: 75
        Сценарій: я загадав значення менше за 75
        Користувач: 62
        Сценарій: я загадав значення менше за 62
        Користувач: 56
        Сценарій: Правильно! Загадане значення 56. Ви вгадали з 4-ї спроби за 10 сек.
        */

"use strict";

const randomValue = Math.floor(Math.random() * 101);

let attempts = 0;
let startTime = null;

function startGame() {
  startTime = new Date().getTime();
  let guessed = false;

  while (!guessed) {
    const guess = parseInt(prompt("Guess the number (between 0 and 100):"));

    if (isNaN(guess)) {
      alert("Please enter a valid number.");
      continue;
    }

    attempts++;

    if (guess < randomValue) {
      alert("The number is higher.");
    } else if (guess > randomValue) {
      alert("The number is lower.");
    } else {
      guessed = true;
      endGame();
    }
  }
}

function endGame() {
  const endTime = new Date().getTime();
  const timeTaken = (endTime - startTime) / 1000;
  alert(
    "Congratulations! You guessed the number " +
      randomValue +
      " in " +
      attempts +
      " attempts and " +
      timeTaken +
      " seconds."
  );
}

startGame();
