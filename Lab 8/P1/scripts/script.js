const carouselEl = document.querySelectorAll(".carousel-el");
const carousel = document.querySelectorAll(".carousel");
const rightBtn = document.querySelector(".rightBtn");
const leftBtn = document.querySelector(".leftBtn");
let carouselArray = Array.from(carouselEl);
const firstElement = carouselEl[0];
const lastElemen = carouselEl[carouselEl.length - 1];
carouselSetup();

setInterval(moveToRight, 4000);

rightBtn.addEventListener('click', (e) => {
    moveToRight();
})


leftBtn.addEventListener('click', (e) => {
    moveToLeft();
})


function carouselSetup() {
    for (let i = 0; i < carouselArray.length; i++) {
        carouselArray[i].classList.add("hidden");
        carouselArray[i].classList.remove("infocus");
    }
    carouselArray[carouselArray.length / 2].classList.remove("hidden");
    carouselArray[carouselArray.length / 2].classList.add("infocus");
    carouselArray[carouselArray.length / 2].style.backgroundColor = getRandomColor();
}

function moveToRight() {
    const temp = carouselArray.shift()
    carouselArray.push(temp);
    carouselSetup();
}

function moveToLeft() {
    const temp = carouselArray.pop();
    carouselArray.unshift(temp);
    carouselSetup();
}



function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}