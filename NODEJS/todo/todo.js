//https://nodejs.org/api/fs.html

//fs module

const fs = require("fs");
const filePath = "./tasks.json";
//application below

const loadTask = () => {
    //file needs to be read first -> dataJSON -> then that needs to parsed so it can be returned as a JSON
  try {
    const dataBuffer = fs.readFileSync(filePath);
    //dataJSON isn't the same as JSON so you'll need to convert it again
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks);
  fs.writeFileSync(filePath, dataJSON);
};

const addTask = (task) => {
  //you need to load the task first, hence the method above
  const tasks = loadTask();
  tasks.push(task);
  saveTasks(tasks);
  console.log("Task added ", task);
};

const listTasks = () => {
  const tasks = loadTask();
  tasks.forEach((task, index) => {
    console.log(`${index + 1} - ${task}`)
  });
};

const command = process.argv[2];
const argument = process.argv[3];

if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  listTasks();
} else if (command === "remove") {
  removeTask(parseInt(argument));
} else {
  console.log("Command not found !");
}
