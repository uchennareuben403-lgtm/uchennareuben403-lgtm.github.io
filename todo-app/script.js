function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = task;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}