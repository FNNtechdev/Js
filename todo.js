// Create main container
const container = document.createElement("div");
document.body.appendChild(container);

// Title
const title = document.createElement("h2");
title.textContent = "To-Do List";
container.appendChild(title);

// Input
const input = document.createElement("input");
input.placeholder = "Enter a task";
container.appendChild(input);

// Add button
const addBtn = document.createElement("button");
addBtn.textContent = "Add Task";
container.appendChild(addBtn);

// Task list
const list = document.createElement("ul");
container.appendChild(list);

// Add task function
addBtn.addEventListener("click", () => {
  const task = input.value.trim();
  if (task === "") return alert("Enter a task");

  const li = document.createElement("li");
  li.textContent = task;

  // Complete task
  li.addEventListener("click", () => {
    li.style.textDecoration =
      li.style.textDecoration === "line-through"
        ? "none"
        : "line-through";
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.style.marginLeft = "10px";

  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
  });

  li.appendChild(deleteBtn);
  list.appendChild(li);
  input.value = "";
});

// Basic styling via JS
document.body.style.fontFamily = "Arial";
container.style.width = "300px";
container.style.margin = "50px auto";
container.style.padding = "20px";
container.style.background = "#fff";
container.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";
