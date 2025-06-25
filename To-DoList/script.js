// Select elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Event listener to add task
addTaskBtn.addEventListener("click", addTask);

// Enter key can also add task
taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

// Function to add task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create li
    const li = document.createElement("li");
    li.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn">Delete</button>
  `;

    // Mark as complete on click
    li.addEventListener("click", function (e) {
        if (e.target.tagName === "SPAN") {
            li.classList.toggle("completed");
        }
    });

    // Delete button
    li.querySelector(".delete-btn").addEventListener("click", function () {
        li.remove();
    });

    // Append to task list
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
}
