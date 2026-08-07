const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <span style="text-decoration:${task.completed ? "line-through" : "none"}">
                ${task.text}
            </span>

            <button onclick="toggleTask(${index})">✔</button>

            <button onclick="deleteTask(${index})">🗑</button>
        `;

        taskList.appendChild(li);
    });
}

addTask.addEventListener("click", () => {

    if (taskInput.value.trim() === "") return;

    tasks.push({
        text: taskInput.value,
        completed: false
    });

    taskInput.value = "";

    saveTasks();

    displayTasks();
});

function toggleTask(index) {

    tasks[index].completed = !tasks[index].completed;

    saveTasks();

    displayTasks();
}

function deleteTask(index) {

    tasks.splice(index, 1);

    saveTasks();

    displayTasks();
}

displayTasks();