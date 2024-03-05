/*
        Завдання:
        Перепишіть код так, щоб він працював у будь-якому середовищі виконання (браузер, node.js тощо).
        */

if (typeof calc === "undefined") {
  function calc(x, y) {
    console.log(x + y);
  }
}

calc(10, 20);
