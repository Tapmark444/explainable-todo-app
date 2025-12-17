function addTask() {
  const task = document.getElementById("task").value;
  const difficulty = Number(document.getElementById("difficulty").value);
  const time = Number(document.getElementById("time").value);

  if (!task || !time) {
    alert("Fill all fields");
    return;
  }

  // Explainable priority logic
  let priorityScore = (difficulty * 2) + time;
  let priority;

  if (priorityScore >= 8) priority = "High";
  else if (priorityScore >= 5) priority = "Medium";
  else priority = "Low";

  const explanation =
    `Priority is ${priority} because difficulty (${difficulty}) and time (${time} hrs)
     resulted in score ${priorityScore}.`;

  const li = document.createElement("li");
  li.innerHTML = `<b>${task}</b> — ${priority}<br><small>${explanation}</small>`;

  document.getElementById("taskList").appendChild(li);
}
