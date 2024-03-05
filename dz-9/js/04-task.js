/*
        Завдання:
        Знайдіть і виправте помилку, яка пов'язана з використанням контексту.
        */
"use strict";

const taskNameInput = document.querySelector("#task-name-input");
const addTaskButton = document.querySelector("#add-task-btn");
const startMessage = document.querySelector("#start-message");
const showAllButton = document.querySelector("#show-all-btn");
const showNotCompletedButton = document.querySelector(
  "#show-not-completed-btn"
);
const taskList = document.querySelector(".task-list");

const tasks = [];

addTaskButton.addEventListener("click", addTaskHandler);
showAllButton.addEventListener("click", showAllHandler);
showNotCompletedButton.addEventListener("click", showNotCompletedHandler);

taskNameInput.addEventListener("keydown", function (e) {
  if (e.code == "Enter") addTaskHandler();
});

function addTaskHandler() {
  if (taskNameInput.value) {
    if (!startMessage.hidden) startMessage.hidden = true;

    const newTask = new Task(taskNameInput.value);
    newTask.createIn(taskList);
    tasks.push(newTask);

    taskNameInput.value = "";
  } else {
    alert("введіть ім'я завдання");
  }
}

function showAllHandler() {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    task.createIn(taskList);
  });
}

function showNotCompletedHandler() {
  taskList.innerHTML = "";
  tasks
    .filter((task) => task.isDone == false)
    .forEach((task) => {
      task.createIn(taskList);
    });
}

class Task {
  constructor(text) {
    this.text = text;
    this.isDone = false;
    this.div = null;
  }

  createIn(element) {
    this.div = document.createElement("div");
    this.div.classList.add("task");

    const input = document.createElement("input");
    input.addEventListener("click", this.changeState.bind(this));
    input.type = "checkbox";

    const p = document.createElement("p");
    p.innerText = this.text;

    this.div.append(input);
    this.div.append(p);

    if (this.isDone) {
      this.div.classList.add("completed");
      input.checked = true;
    }
    element.append(this.div);
  }

  changeState() {
    this.isDone = !this.isDone;
    this.div.classList.toggle("completed");
  }
}
