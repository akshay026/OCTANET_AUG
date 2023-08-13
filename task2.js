const taskInput = document.getElementById("taskInput");
const prioritySelect = document.getElementById("prioritySelect");
const deadlineInput = document.getElementById("deadlineInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", addTask);


function addTask() {
    const taskText = taskInput.value.trim();
    const priority = prioritySelect.value;
     const deadline = deadlineInput.value;

    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <span class="task-priority">Priority: ${priority}</span>
            <span class="task-deadline">Deadline: ${deadline}</span>
            <button class="delete-button">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
        prioritySelect.value = "";
        deadlineInput.value = "";

        setupDeleteButton(li);
    }
   
}
function setupDeleteButton(li) {
    const deleteButton = li.querySelector(".delete-button");
    deleteButton.addEventListener("click", () => {
        taskList.removeChild(li);
    });
}
