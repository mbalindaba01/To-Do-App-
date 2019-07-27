loadEvents();

//load events in the page

const loadEvents = () => {
  document.querySelector('form').addEventListener('submit', submit)

document.querySelector('#clear').addEventListener('click', clearList);

document.querySelector('ul').addEventListener('click', deleteOrTick);  
  }
  
const submit = (e) => {
 e.preventDefault();
 let input = document.querySelector('input');
 if(input.value != '');
 addTask(input.value);
 document.querySelector("input").value="";
 
}
  
//add tasks
const addTask = (task) => {
  const ul = document.querySelector('ul');
  const li = document.querySelector('li');
  li.innerHTML = `<input type="checkbox"><label>${task}</label><span class="delete">x</spanspan>`;
  ul.appendChild(li);
  
  document.querySelector('.taskboard').style.display = 'block';
}

//clearing the list
const clearList = (e) => {
 const ul = document.querySelector('ul').innerHTML = "";
}

//delete or tick items
const deleteOrTick = (e) =>{
 if(e.target.className == "delete"){
  deleteTask(e);
  }else{
   tickTask(e);
  }
 }
 
//delete Task
const deleteTask = (e) => {
 let remove = e.target.parentNode;
 let parentNode = remove.parentNode;
 parentNode.removeChild(remove);
}

//tick a task
const tickTask = (e) => {
 const task = e.target.nextSibling;
  if(e.target.checked){
   task.style.textDecoration = "line-through";
   task.style.color = "#ff0000";
  }else{
   task.style.textDecoration = "none";
   task.style.color = "#2f4f4f";
  }
}
