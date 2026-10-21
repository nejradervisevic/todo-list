let todoInput = document.getElementById("todoInput");

todoInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && todoInput.value.trim() !== "") {
    const inputText = todoInput.value.trim();

    const taskItem = document.createElement("div");
    taskItem.classList.add("todo-item");

    const taskText = document.createElement("span");
    taskText.textContent = inputText;

    taskItem.addEventListener("click", function () {
      taskText.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✕";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      taskItem.remove();
    });

    taskItem.appendChild(taskText);
    taskItem.appendChild(deleteBtn);

    const todoSection = document.querySelector(".todo-section");
    todoSection.appendChild(taskItem);

    todoInput.value = "";
  }
});
