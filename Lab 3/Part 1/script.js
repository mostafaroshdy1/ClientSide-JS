exit = 0;
while (!exit) {
    assignmentNum = Number(prompt("Enter Assignment number (1 / 2 / 3)"));
    switch (assignmentNum) {
        case 1:
            logIn();
            exit = 1
            break;

        case 2:
            alert('Result: ' + calc());
            exit = 1;
            break;

        case 3:
            time = prompt("Enter the Hour in (from 0 to 24)");
            alert(`${EX3(parseInt(time))}`);
            exit = 1;
            break;
        default:
            console.log("invalid input");
    }
}

function logIn() {
    while (true) {
        const username = prompt("Enter Your Username");
        const password = prompt("Enter Your Password");
        if (username === "admin" && password === "421$$") {
            alert("Welcome login success");
            break;
        }
        else if (username !== "admin" && password === "421$$") {
            alert("Invalid Username!!");
        }
        else if (username === "admin" && password !== "421$$") {
            alert("Invalid Password!!");
        }
        else {
            alert("Invalid Username and Password!!");
        }
    }
}
function calc() {
    const firstNumber = parseFloat(prompt("Enter first number"));
    const operation = prompt("enter an operation (sum + ,multi * ,subtract - ,division / ,moduls %)");
    const secondNumber = parseFloat(prompt("Enter second number"));
    switch (operation) {
        case '+':
            return firstNumber + secondNumber;
        case '-':
            return firstNumber - secondNumber;
        case '*':
            return firstNumber * secondNumber;
        case '/':
            return firstNumber / secondNumber;
        case '%':
            return firstNumber % secondNumber;
        default:
            return 'Invalid operation';
    }
}
