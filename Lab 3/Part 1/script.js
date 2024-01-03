exit = 0;
while (!exit) {
    assignmentNum = Number(prompt("Enter Assignment number (1 / 2)"));
    switch (assignmentNum) {
        case 1:
            logIn();
            exit = 1
            break;

        case 2:
            calc();
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
    let firstNumber = parseFloat(prompt("Enter first number"));
    let operation = 1;
    while (true) {
        operation = prompt("enter an operation (sum + ,multi * ,subtract - ,division / ,moduls %) Cancel to exit");
        if (operation === null) break;
        const secondNumber = parseFloat(prompt("Enter second number"));
        switch (operation) {
            case '+':
                alert('Result: ' + (firstNumber + secondNumber));
                firstNumber = firstNumber + secondNumber // first number is represention the sum
                break;
            case '-':
                alert('Result: ' + (firstNumber - secondNumber));
                firstNumber = firstNumber - secondNumber
                break;
            case '*':
                alert('Result: ' + (firstNumber * secondNumber));
                firstNumber = firstNumber * secondNumber
                break;
            case '/':
                alert('Result: ' + (firstNumber / secondNumber));
                firstNumber = firstNumber / secondNumber
                break;
            case '%':
                alert('Result: ' + (firstNumber % secondNumber));
                firstNumber = firstNumber % secondNumber
                break;
            default:
                return 'Invalid operation';
        }
    }
}
