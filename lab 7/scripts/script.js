let user;
let tick = 0, cross = 0, taskId = 0;
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
let a = document.getElementsByTagName('a');


tasksBlock.addEventListener('click', (e) => {
    // console.log(e.target.id);
    let match = e.target.id.match(/cross(\d+)/);
    if (match) {
        document.getElementById(`task${match[1]}`).remove();
    } else {
        match = e.target.id.match(/tick(\d+)/);
        document.getElementById(`task${match[1]}`).style.backgroundColor = "#71C055";
        console.log(match);
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


let j = 0
addTaskBtn.addEventListener('click', (e) => {
    console.log('hehe');
    const task = document.createElement('div');
    task.id = `task${taskId++}`;
    task.innerHTML = ` <div id="taskText">${taskName.value}</div> <a class="tick" id="tick${tick++}" href="#">&#9989</a>  <a  class="cross" id="cross${cross++}" href="#">&#10060</a>`
    task.classList.add("task")
    tasksBlock.appendChild(task);
})

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    auth() {
        return user.username == "admin" && user.password == "123" ? 1 : 0
    }
}
