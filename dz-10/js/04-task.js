// "use strict"

/*
        Завдання:
        Використовуючи IIFE, позбавтеся глобальних ідентифікаторів у коді.
        Переконайтеся, що глобальних ідентифікаторів немає, виконавши код після 25 рядка.
        */
(() => {
  var exampleName1 = "Test1";
  let exampleName2 = "Test2";

  function testFunc() {
    console.log("This is test function");
  }

  // Код для перевірки глобальних ідентифікаторів, виконайте за межами IIFE.
  // Якщо глобальних змінних немає, буде повернено значення undefind.
  // Якщо функція testFunc не є глобальною, буде помилка на етапі виконання.
  console.log(globalThis.exampleName1);
  console.log(globalThis.exampleName2);
  console.log(exampleName2);

  testFunc();
  globalThis.testFunc();
})();
