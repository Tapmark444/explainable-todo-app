function addTask() {
  const task = document.getElementById("task").value.trim();
  const difficulty = Number(document.getElementById("difficulty").value);
  const timeValue = Number(document.getElementById("time").value);
  const timeUnit = document.getElementById("timeUnit").value;

  if (!task || !timeValue) {
    alert("Fill all fields");
    return;
  }

  // Normalize time into hours for scoring
  let timeInHours = timeValue;
  if (timeUnit === "minutes") timeInHours = timeValue / 60;
  if (timeUnit === "days") timeInHours = timeValue * 24;

  // Priority score logic
  const priorityScore = (difficulty * 2) + timeInHours;
  let priority;

  if (priorityScore >= 8) priority = "High";
  else if (priorityScore >= 5) priority = "Medium";
  else priority = "Low";

  // ---------- MIST EFFECT ----------
  const mist = document.createElement("div");
  mist.className = `mist ${priority.toLowerCase()}`;
  document.body.appendChild(mist);
  setTimeout(() => mist.remove(), 900);
  // --------------------------------

  // ---------- SMART MOTIVATION ----------
  let explanationText;

  if (priority === "High") {
    explanationText =
      `Completing "${task}" within the planned ${timeValue} ${timeUnit} is critical. It demands focus now, and finishing it early will reduce mental load and prevent future stress.`;
  } else if (priority === "Medium") {
    explanationText =
      `"${task}" is important but manageable. Addressing it within ${timeValue} ${timeUnit} will keep your schedule balanced and avoid unnecessary pressure later.`;
  } else {
    explanationText =
      `"${task}" is flexible and restorative. Completing it within ${timeValue} ${timeUnit} will add value without urgency, making it easier to stay consistent.`;
  }
  // -------------------------------------

  // Create task item
  const li = document.createElement("li");
  li.className = `task-item ${priority.toLowerCase()}`;

  li.innerHTML = `
    <div class="task-header">
      <b>${task}</b>
      <span class="priority ${priority.toLowerCase()}">${priority}</span>
    </div>

    <small class="explanation">${explanationText}</small>

    <div class="task-actions">
      <button class="complete-btn">✔ Complete</button>
      <button class="delete-btn">🗑 Delete</button>
    </div>
  `;

  // Complete / archive
  li.querySelector(".complete-btn").onclick = () => {
    li.classList.toggle("completed");
  };

  // Delete
  li.querySelector(".delete-btn").onclick = () => {
    li.remove();
  };

  document.getElementById("taskList").appendChild(li);

  // Reset inputs
  document.getElementById("task").value = "";
  document.getElementById("time").value = "";
}

// ---------- DARK MODE ----------
function toggleMode() {
  document.body.classList.toggle("dark");

  const btn = document.getElementById("modeToggle");
  btn.textContent = document.body.classList.contains("dark")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
}
