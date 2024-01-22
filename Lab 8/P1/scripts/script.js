const carouselEl = document.querySelectorAll(".carousel-el");
const carousel = document.querySelectorAll(".carousel");
const rightBtn = document.querySelector(".rightBtn");
const leftBtn = document.querySelector(".leftBtn");
let carouselArray = Array.from(carouselEl);
const firstElement = carouselEl[0];
const lastElemen = carouselEl[carouselEl.length - 1];
carouselSetup();


rightBtn.addEventListener('click', (e) => {
    const temp = carouselArray.shift()
    carouselArray.push(temp);
    carouselSetup();
})

leftBtn.addEventListener('click', (e) => {
    const temp = carouselArray.pop();
    carouselArray.unshift(temp);
    carouselSetup();
})


function carouselSetup() {
    for (let i = 0; i < carouselArray.length; i++) {
        carouselArray[i].classList.add("hidden");
        carouselArray[i].classList.remove("infocus");
    }
    carouselArray[carouselArray.length / 2].classList.remove("hidden");
    carouselArray[carouselArray.length / 2].classList.add("infocus");

}
