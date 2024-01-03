exit = 0;
while (!exit) {
    const assignmentNum = Number(prompt("Enter Assignment number (1 / 2)"));
    if (assignmentNum === 1) {
        let result = "n";
        while (result !== "y") {
            const firstName = prompt("Enter your first name");
            const lastName = prompt("Enter your last name");
            result = prompt(`Is you name ${firstName + " " + lastName} , (y/n)`)

            if (result === 'y') {
                let currentDate = new Date();
                let currentYear = currentDate.getFullYear();
                age = Number(currentYear - prompt("Enter your birth year"));
                console.log(age);
                alert(`Welcome ${firstName + " " + lastName} you are ${age} years old`);
            }
        }
        exit = 1
    }
    else if (assignmentNum === 2) {
        alert("Hi,this is the first release of a calculator that only has a summation feature.");
        const num1 = Number(prompt("Enter First Number"));
        const num2 = Number(prompt("Enter Second Number"));
        alert(`The result : ${num1}+${num2}=${num1 + num2}`);
        exit = 1;
    }
    else {
        alert("input must be 1 or 2");
    }
}
