const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const days = Array.from(document.querySelectorAll(".day"));
const hoursIn = document.querySelector(".hoursIn");
const minutesIn = document.querySelector(".minutesIn");
const secondsIn = document.querySelector(".secondsIn");
const setBtn = document.querySelector(".setBtn");
const clearBtn = document.querySelector(".clearBtn");
days.unshift(days.pop());
setInterval(updateTime, 1000);

const alerts = [];// collects the timeoutID of each setBtn click so that be able to stop them when clearBtn is clicked


setBtn.addEventListener('click', () => {
    alerts.push(
        setTimeout(
            () => {
                alert("Times up!!!")
            }
            , alarmSeconds()
        )
    )
})

clearBtn.addEventListener('click', () => {
    hoursIn.value = "";
    minutesIn.value = "";  // Wrap the number in quotes to make it a string
    secondsIn.value = "";
    for (let i = 0; i < alerts.length; i++) {
        clearTimeout(alerts[i]);
    }
});




function updateTime() {
    const date = new Date();
    hours.innerText = date.getHours();
    minutes.innerText = date.getMinutes();
    seconds.innerText = date.getSeconds();

    for (let i = 0; i < days.length; i++) {
        days[i].classList.remove("infocus");
        if ((new Date()).getDay() == i) {
            days[i].classList.add("infocus");
        }
    }
}


function alarmSeconds() {
    const milliseconds = hoursIn.value * 60 * 60 * 1000 + minutesIn.value * 60 * 1000 + secondsIn.value * 1000;
    return milliseconds;
}
