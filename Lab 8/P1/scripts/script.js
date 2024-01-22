const carouselEl = document.querySelectorAll(".carousel-el");
const carousel = document.querySelectorAll(".carousel");
const rightBtn = document.querySelector(".rightBtn");
const leftBtn = document.querySelector(".leftBtn");
let carouselArray = Array.from(carouselEl);
const firstElement = carouselEl[0];
const lastElemen = carouselEl[carouselEl.length - 1];
console.log(carouselEl[0].classList.contains("carousel-el"));
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
    // for (let i = 0; i < carouselArray.length; i++) {
    //     if (i === carouselArray.length / 2 - 1 || i === carouselArray.length / 2 || i === carouselArray.length / 2 + 1) {
    //         carouselArray[i].classList.remove("hidden");
    //         if (i === carouselArray.length / 2) {
    //             carouselArray[i].classList.add("infocus");
    //         } else {
    //             carouselArray[i].classList.remove("infocus");
    //         }
    //     } else {
    //         carouselArray[i].classList.remove("infocus");
    //         carouselArray[i].classList.add("hidden");
    //     }
    // }


    for (let i = 0; i < carouselArray.length; i++) {
        carouselArray[i].classList.add("hidden");
        carouselArray[i].classList.remove("infocus");
    }

    if (carouselArray[carouselArray.length / 2].classList.contains("last")) {
        carouselArray[carouselArray.length / 2].classList.remove("last");
        const temp = carouselEl[0];
        temp.classList.add("last")
        carouselEl[0].remove();
        carousel[0].appendChild(temp);
        // console.log(carouselEl[0]);
        // carouselArray = Array.from(carouselEl);
        console.log(carouselArray);


    }

    carouselArray[carouselArray.length / 2 - 1].classList.remove("hidden");
    carouselArray[carouselArray.length / 2 + 1].classList.remove("hidden");
    carouselArray[carouselArray.length / 2].classList.remove("hidden");
    carouselArray[carouselArray.length / 2].classList.add("infocus");

}
