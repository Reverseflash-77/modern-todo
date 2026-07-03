const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const text = taskInput.value.trim();

    if (text === "") return;

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${text}</span>
        <button class="delete-btn">Delete</button>
    `;

    const span = li.querySelector("span");

    span.addEventListener("click", function () {
        span.classList.toggle("completed");
    });

    li.querySelector(".delete-btn").addEventListener("click", function () {
        li.remove();
    });

    taskList.appendChild(li);

    taskInput.value = "";
}