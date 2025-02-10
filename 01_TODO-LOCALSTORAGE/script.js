//Understand why this was wrapped in an addEventListener w/ DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  const toDoInput = document.getElementById("todo-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const toDoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("task") || []); //param here needs to match

  tasks.forEach(task => renderTasks(task)) //foreach method available to run the same-named loop

  addTaskBtn.addEventListener("click", () => {
    const taskText = toDoInput.value.trim();
    if (taskText === "") return; //find out why you don't need curly braces here

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    tasks.push(newTask);
    toDoInput.value = ""; //clear input
    console.log(tasks);
  });

  function renderTasks(task) {

  }
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
