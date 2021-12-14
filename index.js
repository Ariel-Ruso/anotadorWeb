const form = document.getElementById("newTask");
const newTask = document.getElementById("newTaskInput");
const emptyTaskAlert = document.getElementById("emptyTask");
const taskContainer = document.getElementById("container");
const taskList = document.getElementById("tasks");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = newTask.value;

    if (!task) {

        emptyTaskAlert.classList.remove("hidden");
        setTimeout(() => { emptyTaskAlert.classList.add("hidden"); }, 3000);
        return;

    }

    const taskElement = document.createElement("div");
    taskElement.classList.add("container");
    const taskInput = document.createElement("input");
    taskInput.classList.add("taskInput");
    taskInput.value = task;
    taskInput.type = "text";
    taskInput.setAttribute("readonly", "readonly");

    taskElement.appendChild(taskInput);
    taskList.appendChild(taskElement);
    newTask.value = "";

    const taskBtns = document.createElement("div");
    taskBtns.classList.add("btns");

    editBtn = document.createElement("button");
    editBtn.classList.add("edit");

    scrapBtn = document.createElement("button");
    scrapBtn.classList.add("scrap");

    eraseBtn = document.createElement("button");
    eraseBtn.classList.add("erase");

    taskBtns.appendChild(editBtn);
    taskBtns.appendChild(scrapBtn);
    taskBtns.appendChild(eraseBtn);

    taskElement.appendChild(taskBtns);
});