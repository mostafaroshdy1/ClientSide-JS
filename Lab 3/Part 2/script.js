const assignmentNum = Number(prompt("Enter Assignment number (1 / 2 / 3)"));
switch (assignmentNum) {
    case 1:
        EX1();
        exit = 1
        break;

    case 2:
        EX2();
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

function EX1() {
    const max = prompt("Enter how many number you want to add ")
    const nums = [];
    let sum = 0;
    for (let i = 0; i < max; i++) {
        nums.push(parseFloat(prompt(`Enter the Number ${i}/${max}`)));
        sum += nums[i];
    }
    const avg = sum / max;
    alert(`The the total sum of the numbers is : ${sum} and the average is ${avg}`);
}

function EX2() {
    const contacts = [];
    let option;
    do {
        option = prompt("Enter 'add' or 'search' or Cancel to exit");
        switch (option) {
            case "add":
                add();
                break;
            case "search":
                search();
                break;
        }
        console.log(contacts);
    } while (option !== null);

    function add() {
        const name = prompt("Enter the name");
        const number = prompt("Enter the phone number");
        contacts.push({ name: name, number: number });
    }
    function search() {
        option = prompt("Enter 1 to search by name or 2 to search by phone number");

        switch (option) {
            case "1":
                searchByName();
                break;
            case "2":
                searchByNumber();
                break;
            default:
                alert("Invalid Option");
        }
    }
    function searchByName() {
        const name = prompt("Enter the name");
        for (let i = 0; i < contacts.length; i++) {
            if (contacts[i].name === name) {
                alert(JSON.stringify(contacts[i]));
                return;
            }
        }
        alert("Not Found");
    }
    function searchByNumber() {
        const number = prompt("Enter the phone number");
        for (let i = 0; i < contacts.length; i++) {
            if (contacts[i].number === number) {
                alert(JSON.stringify(contacts[i]));
                return;
            }
        }
        alert("Not Found");
    }
}
