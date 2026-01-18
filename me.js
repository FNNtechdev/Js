addBtn.addEventListener("click", function() {
  const taskText = taskInput.value;

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  // Add delete button inside li
  li.appendChild(deleteBtn);

  // Add li to the list
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
});
