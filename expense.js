// Main container
const app = document.getElementById("app");

// Styling (basic)
app.style.fontFamily = "Arial";
app.style.width = "350px";
app.style.margin = "50px auto";
app.style.padding = "20px";
app.style.border = "1px solid #ddd";
app.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";

// Title
const title = document.createElement("h2");
title.textContent = "Expense Tracker";
app.appendChild(title);

// Input fields
const nameInput = document.createElement("input");
nameInput.placeholder = "Expense name (e.g. Food)";
nameInput.style.width = "100%";
nameInput.style.marginBottom = "8px";
app.appendChild(nameInput);

const amountInput = document.createElement("input");
amountInput.type = "number";
amountInput.placeholder = "Amount";
amountInput.style.width = "100%";
amountInput.style.marginBottom = "8px";
app.appendChild(amountInput);

// Add button
const addBtn = document.createElement("button");
addBtn.textContent = "Add Expense";
addBtn.style.width = "100%";
app.appendChild(addBtn);

// Total display
const totalText = document.createElement("h3");
totalText.textContent = "Total: $0";
app.appendChild(totalText);

// Expense list
const list = document.createElement("ul");
list.style.listStyle = "none";
list.style.padding = "0";
app.appendChild(list);

let total = 0;

// Add expense functionality
addBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const amount = parseFloat(amountInput.value);

  if (!name || isNaN(amount) || amount <= 0) {
    alert("Enter valid expense and amount!");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.style.display = "flex";
  li.style.justifyContent = "space-between";
  li.style.padding = "8px";
  li.style.borderBottom = "1px solid #ddd";

  const text = document.createElement("span");
  text.textContent = `${name} - $${amount}`;
  li.appendChild(text);

  // Delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", () => {
    total -= amount;
    totalText.textContent = `Total: $${total}`;
    li.remove();
  });

  li.appendChild(delBtn);
  list.appendChild(li);

  // Update total
  total += amount;
  totalText.textContent = `Total: $${total}`;

  // Clear inputs
  nameInput.value = "";
  amountInput.value = "";
});
