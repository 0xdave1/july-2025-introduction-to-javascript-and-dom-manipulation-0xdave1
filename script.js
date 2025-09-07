// ------------------------------------
// 🎯 Part 1: JavaScript Basics
// ------------------------------------

// Variable declaration and input
let userName = "";

// Function to get input and use conditionals
function greetUser() {
  userName = document.getElementById("userName").value;

  if (userName.trim() === "") {
    document.getElementById("greetingMessage").textContent = "Please enter a name!";
  } else {
    document.getElementById("greetingMessage").textContent = "Hello, " + userName + "!";
  }
}

// ------------------------------------
// ❤️ Part 2: JavaScript Functions
// ------------------------------------

// Function 1: Calculate the square of a number
function squareNumber(num) {
  return num * num;
}

// Function 2: Format a greeting string
function formatGreeting(name) {
  return `Welcome, ${name}! Glad you're here.`;
}

// (Optional) Using those functions
console.log(squareNumber(5)); // 25
console.log(formatGreeting("Alice")); // Welcome, Alice! Glad you're here.

// ------------------------------------
// 🔁 Part 3: JavaScript Loops
// ------------------------------------

// Loop Example 1: Countdown using a for loop
function showCountdown() {
  const countdownList = document.getElementById("countdownList");
  countdownList.innerHTML = ""; // Clear previous list

  for (let i = 5; i >= 1; i--) {
    const li = document.createElement("li");
    li.textContent = i;
    countdownList.appendChild(li);
  }
}

// Loop Example 2: Using forEach to list items
const colors = ["Red", "Green", "Blue"];
colors.forEach((color) => {
  console.log("Color:", color);
});

// ------------------------------------
// 🌐 Part 4: DOM Manipulation
// ------------------------------------

// DOM Interaction 1: Change text content (see greetUser)

// DOM Interaction 2: Toggle class on click
function toggleText() {
  const text = document.getElementById("toggleTarget");
  text.classList.toggle("hidden");
}

// DOM Interaction 3: Create and append element
function addNewItem(text) {
  const newItem = document.createElement("li");
  newItem.textContent = text;
  document.getElementById("countdownList").appendChild(newItem);
}

// Example use:
addNewItem("This is an added item!");
