function addTask() {
    const newTaskInput = document.getElementById("new-task");
    const taskText = newTaskInput.value.trim();

    if (taskText !== "") {
        const todoList = document.getElementById("todo-list");

        const listItem = document.createElement("li");
        listItem.classList.add("todo-item");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const taskLabel = document.createElement("span");
        taskLabel.textContent = taskText;

        const deleteBtn = document.createElement("span");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.innerHTML = "&#10006;";
        deleteBtn.onclick = function () {
            todoList.removeChild(listItem);
        };

        listItem.appendChild(checkbox);
        listItem.appendChild(taskLabel);
        listItem.appendChild(deleteBtn);

        todoList.appendChild(listItem);

        newTaskInput.value = ""; // Clear input field after adding task
    }
}
