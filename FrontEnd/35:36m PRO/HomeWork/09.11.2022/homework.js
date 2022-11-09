let root = document.querySelector(".root");

let task_1 = document.createElement("div");
let button_1 = document.createElement("button");
let button_2 = document.createElement("button");
let button_3 = document.createElement("button");
let inputElem = document.createElement("input");
let task_2 = document.createElement("div");
let pElem1 = document.createElement("p");
let pElem2 = document.createElement("p");
let pElem3 = document.createElement("p");
let pElem4 = document.createElement("p");
let pElem5 = document.createElement("p");

task_1.classList.add("task-1");
task_2.classList.add("task-2");
button_1.classList.add("button");
button_2.classList.add("button");
button_3.classList.add("button");
inputElem.classList.add("input");
pElem1.classList.add("par");
pElem2.classList.add("par");
pElem3.classList.add("par");
pElem4.classList.add("par");
pElem5.classList.add("par");

task_1.innerText = "Task 1";
task_2.innerText = "Task 2";
button_1.textContent = "BLOCK";
button_2.textContent = "UNLOCK";
button_3.textContent = "Change names to index!";

button_3.setAttribute("changed", true);
inputElem.value = "SOME TEXT";

task_1.append(button_1, button_2, inputElem);
task_2.append(button_3, pElem1, pElem2, pElem3, pElem4, pElem5);
root.append(task_1, task_2);

button_1.addEventListener("click", blockInput);
button_2.addEventListener("click", unlockInput);
button_3.addEventListener("click", changeText);

function blockInput() {
  inputElem.disabled = true;
  blockCursoreInInput();
}

function unlockInput() {
  inputElem.disabled = false;
  blockCursoreInInput();
}

function blockCursoreInInput() {
  inputElem.classList.toggle("input_block");
}

//==================================================

let paragraphs = document.querySelectorAll(".par");

paragraphs.forEach((element) => {
  element.textContent = "some text...";
});

function changeText() {
  if (button_3.hasAttribute("changed")) {
    for (let i = 0; i < paragraphs.length; i++) {
      paragraphs[i].textContent = i;
    }
    button_3.removeAttribute("changed");
    button_3.textContent = "Change index to name!";
  } else {
    button_3.setAttribute("changed", true);
    button_3.textContent = "Change names to index!";
    for (let i = 0; i < paragraphs.length; i++) {
      paragraphs[i].textContent = "some text...";
    }
  }
}
