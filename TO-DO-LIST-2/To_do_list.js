document.getElementById("addTaskButton").addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    addTask(taskText);
    taskInput.value = "";
    taskInput.focus();
  }
});

function addTask(taskText) {
  const taskList = document.getElementById("taskList");

  const taskItem = document.createElement("li");
  taskItem.className = "task-item";
  taskItem.textContent = taskText;

  const removeButton = document.createElement("button");
  removeButton.className = "remove-button";
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", function () {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(removeButton);
  taskItem.addEventListener("click", function () {
    taskItem.classList.toggle("completed");
  });

  taskList.appendChild(taskItem);
}
