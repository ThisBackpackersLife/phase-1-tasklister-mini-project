const form = document.getElementById("create-task-form");
const newTaskText = document.getElementById("new-task-description");
const list = document.getElementById("tasks");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const li = document.createElement('li');
    list.appendChild(li);

  const newToDoItem = document.createElement("span");
    newToDoItem.textContent = newTaskText.value;
    li.appendChild(newToDoItem); 
})