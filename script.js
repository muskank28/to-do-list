function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();

    if (!task) return;

    const li = document.createElement("li");
    li.textContent = task;

    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    const btn = document.createElement("button");
    btn.textContent = "X";
    btn.onclick = () => li.remove();

        li.appendChild(btn);
    document.getElementById("taskList").appendChild(li);

    input.value = ""; 
}
