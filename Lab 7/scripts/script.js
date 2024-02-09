let user;
const loginBtn = document.getElementById("login");
const username = document.getElementById("username");
const password = document.getElementById("password");
const loginBlock = document.getElementById("loginBlock");
const todoBlock = document.getElementById("todoBlock");
const addTaskBtn = document.getElementById("addTask");
const tasksBlock = document.getElementById("tasksBlock");
const taskName = document.getElementById("taskName");
const body = document.getElementsByTagName("body");
const response = document.getElementById("response");
const a = document.getElementsByTagName('a');

if (localStorage.getItem("tasks")) {
    var tasks = JSON.parse(localStorage.getItem("tasks"));
    var tick = tasks[tasks.length - 1].id + 1;
    var cross = tasks[tasks.length - 1].id + 1;
    var taskId = tasks[tasks.length - 1].id + 1;

} else {
    console.log('hehe');
    var tasks = [];
    var tick = 0
    var cross = 0
    var taskId = 0;

}
restoreTasksBlock();


tasksBlock.addEventListener('click', (e) => {
    let match = e.target.id.match(/cross(\d+)/);
    if (match) {
        removeTask(match[1])
        document.getElementById(`task${match[1]}`).remove();
    } else {
        match = e.target.id.match(/tick(\d+)/);
        document.getElementById(`task${match[1]}`).style.backgroundColor = "#71C055";
        markDone(match[1])
    }
})

loginBtn.addEventListener('click', () => {
    user = new User(username.value, password.value);
    if (user.auth()) {
        console.log("loggedin");
        response.innerText = "Welcome";
        setTimeout(() => {
            loginBlock.classList.toggle('visible');
            body[0].style.backgroundColor = 'white';
            todoBlock.classList.toggle('visible');
        }, 2000)

    } else {
        response.innerText = "not registered";

        console.log(response, "Invalid username or password!");
    }
})

addTaskBtn.addEventListener('click', (e) => {
    const task = document.createElement('div');
    saveToLocalStorage()
    addTask(task)
    task.classList.add("task");
    tasksBlock.appendChild(task);
})
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const task = document.createElement('div');
        saveToLocalStorage();
        addTask(task);
        task.classList.add("task");
        tasksBlock.appendChild(task);
    }
});
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    auth() {
        return user.username == "admin" && user.password == "123" ? 1 : 0
    }
}

function saveToLocalStorage() {
    tasks.push({
        taskName: taskName.value,
        tick: tick++,
        cross: cross++,
        id: taskId++,
        backgroundColor: "white",
    })
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function restoreTasksBlock() {
    console.log(tasks);
    for (let i = 0; i < tasks.length; i++) {
        const task = document.createElement('div');
        task.innerHTML = ` <div id="taskText">${tasks[i].taskName}</div> <a class="tick" id="tick${tasks[i].tick}" href="#">&#9989</a>  <a  class="cross" id="cross${tasks[i].cross}" href="#">&#10060</a>`
        task.style.backgroundColor = tasks[i].backgroundColor;
        task.id = `task${tasks[i].id}`;
        task.classList.add("task");
        tasksBlock.appendChild(task);
    }
}

function addTask(task) {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    task.innerHTML = ` <div id="taskText">${tasks[tasks.length - 1].taskName}</div> <a class="tick" id="tick${tasks[tasks.length - 1].tick}" href="#">&#9989</a>  <a  class="cross" id="cross${tasks[tasks.length - 1].cross}" href="#">&#10060</a>`
    task.id = `task${tasks[tasks.length - 1].id}`;

}
function removeTask(id) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == id) {
            tasks.splice(i, 1);
        }
    }
    if (tasks.length) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
        localStorage.removeItem("tasks");
    }


}
function markDone(id) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == id) {
            tasks[i].backgroundColor = "#71C055";
        }
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
}