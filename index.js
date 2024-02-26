const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.getElementById("add-button"); // Changed to use ID for the add button

// Function to add a new task
function addTask() {
    if (inputBox.value === '') {
        alert("Write something in it");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value; // Changed innerHTML to textContent
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\ud007";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// Function to handle the keypress event
function handleKeyPress(event) {
    if (event.key === "Enter") {
        addTask();
    }
}

// Event listener for the click function
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        e.target.classList.add("celebrate"); // Add the celebrateAnimation class
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Event listener for the "Enter" keypress on the input field
inputBox.addEventListener("keypress", handleKeyPress);

// Event listener for the click event on the add button
addButton.addEventListener("click", addTask);

// Function to save data to localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to show tasks from localStorage
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data")
}

// Load tasks when the page loads
showTask();
