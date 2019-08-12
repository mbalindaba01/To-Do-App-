loadEvents();

//load events in the page

function loadEvents() {
  document.querySelector("form").addEventListener("submit", submit);

  document.querySelector("#clear").addEventListener("click", clearList);

  document.querySelector("ul").addEventListener("click", deleteOrTick);
}

function submit(e) {
  e.preventDefault();
  let input = document.querySelector("input");
  if (input.value != "");
  addTask(input.value);
  document.querySelector("input").value= "";
}

//add tasks
function addTask(task) {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.innerHTML = `<input type="checkbox"><label>${task}</label><span class="delete">x</span>`;
  ul.appendChild(li);

  document.querySelector(".taskboard").style.display = "block";
}
  let input = document.querySelector("input");
  if (input.value != "");
  addTask(input.value);
  document.querySelector("input").value= "";
}

//add tasks
function addTask(task) {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.innerHTML = `<input type="checkbox"><label>${task}</label><span class="delete">x</span>`;
  ul.appendChild(li);

  document.querySelector(".taskboard").style.display = "block";
}

//clearing the list
function clearList(e) {
  const ul = (document.querySelector("ul").innerHTML = "");
}

//delete or tick items
function deleteOrTick(e) {
  if (e.target.className == "delete") {
    deleteTask(e);
  } else {
    tickTask(e);
  }
}

//delete Task
function deleteTask(e) {
  let remove = e.target.parentNode;
  let parentNode = remove.parentNode;
  parentNode.removeChild(remove);
}

//tick a task
function tickTask(e) {
  const task = e.target.nextSibling;
  if (e.target.checked) {
    task.style.textDecoration = "line-through";
    task.style.color = "#ff0000";
  }else {
    task.style.textDecoration = "none";
    task.style.color = "#2f4f4f";
  }
}
