function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();

    if (!task) return;

    const li = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.textContent = task;

    taskText.addEventListener("click", () => {
        taskText.classList.toggle("completed");
    });

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = () => {
        const updatedTask = prompt("Edit your task", taskText.textContent);
        if (updatedTask) {
            taskText.textContent = updatedTask;
        }
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.onclick = () => li.remove();

    li.appendChild(taskText);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
