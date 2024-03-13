// Accessing/Target elements

let taskInput = document.querySelector('#taskInput');
let taskForm = document.querySelector('#taskForm');
let taskList = document.querySelector('#taskList');

// Adding event listener for form submission

taskForm.addEventListener('submit', handleSubmit);
                             
// Function to add a task

function handleSubmit(e){
  e.preventDefault();
  
  if(taskInput.value != "") {
    let listItem = document.createElement('li');
    listItem.textContent = taskInput.value;
    
    
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', deleteTask)

    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);
taskInput.value = "";
  }
else{
    taskInput.value = 'Type your task here';
  }
}
// Function to delete a task
function deleteTask(e) {
  e.target.parentNode.remove();
}
