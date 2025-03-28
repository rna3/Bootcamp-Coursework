const form = document.querySelector("#addTasks");
const input = document.querySelector("#tasks");
const toDoLi = document.querySelector("#todo-list");
const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

for (let i = 0; i < savedTasks.length; i++) {
  let newToDo = document.createElement("li");
  newToDo.innerText = savedTasks[i].task;
  toDoLi.appendChild(newToDo);
}

toDoLi.addEventListener("click", function (e) {
  if (e.target.textContent === "Remove Task") {
    e.target.parentElement.remove();
    removeTaskAndUpdateLocalStorage(e.target.parentElement);
  }
  if (e.target.textContent === "Complete Task") {
    e.target.parentElement.style.textDecoration = "line-through";
    updateLocalStorage();
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(input.value);
  const newLi = document.createElement("li");
  const removeBtn = document.createElement("button");
  const completeBtn = document.createElement("button");
  removeBtn.innerText = "Remove Task";
  completeBtn.innerText = "Complete Task";
  newLi.innerText = input.value;
  newLi.append(removeBtn);
  newLi.append(completeBtn);
  input.value = "";
  toDoLi.appendChild(newLi);
  savedTasks.push({ task: newLi.innerText });
  localStorage.setItem("tasks", JSON.stringify(savedTasks));
});

function updateLocalStorage() {
  savedTasks.length = 0;
  toDoLi.childNodes.forEach((task) => {
    savedTasks.push({ task: task.innerText });
  });
  localStorage.setItem("tasks", JSON.stringify(savedTasks));
}

function removeTaskAndUpdateLocalStorage(taskElement) {
  taskElement.remove();
  updateLocalStorage();
}
