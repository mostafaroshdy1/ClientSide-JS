const email = document.querySelector(".email");
const username = document.querySelector(".name");
const img = document.querySelector(".img");
window.addEventListener("load", userData);
async function userData() {
    try {
        const response = await fetch("https://dummyjson.com/users/1");
        const data = await response.json();
        console.log(data);
        email.innerText = data.email;
        username.innerText = data.username;
        img.src = data.image;
    } catch {
        email.innerText = "ERROR Occured while fetching data";
        username.innerText = "ERROR Occured while fetching data";
    }
}


