class Person {
    #healthRate
    constructor(fullName, money, sleepMood, healthRate) {
        this.fullName = fullName;
        this.money = money;
        this.sleepMood = sleepMood;
        this.healthRate = healthRate;
    }

    sleep(hours) {
        if (hours < 7) {
            this.sleepMood = "tired";
        } else if (hours > 7) {
            this.sleepMood = "lazy";
        } else {
            this.sleepMood = "happy";
        }
    }
    eat(meals) {
        if (meals === 3) {
            this.healthRate = 100;
        } else if (meals === 2) {
            this.healthRate = 75;
        } else if (meals === 1) {
            this.healthRate = 50;
        }
    }
    buy(items) {
        this.money -= 10 * items;
    }
    get healthRate() {
        return this.healthRate;
    }
    set healthRate(value) {
        this.#healthRate = value;
        if (value < 0 || value > 100) {
            this.#healthRate = 100;
        }
    }
}

class Employee extends Person {
    #salary;
    static id = 0;
    constructor(fullName, money, sleepMood, healthRate, email, workMood, salary, isManager) {
        super(fullName, money, sleepMood, healthRate)
        this.id = ++Employee.id;
        this.email = email;
        this.workMood = workMood;
        this.salary = salary
        this.isManager = isManager;
    }
    work(hours) {
        if (hours > 8) {
            this.workMood = "tired";
        } else if (hours < 8) {
            this.workMood = "lazy";
        } else {
            this.workMood = "happy"
        }
    }
    get salary() {
        return this.#salary
    }
    set salary(salary) {
        this.#salary = salary < 1000 ? 1000 : salary;
    }

}


// const emp1 = new Employee("ahmed ", 60000, "happy", 70, "mostafaroshdy1@gmail.com", "happy", 100, 0);
// const emp2 = new Employee("omar ", 60000, "happy", 70, "mostafaroshdy1@gmail.com", "happy", 100, 0);
// const emp3 = new Employee("ibraheem ", 60000, "happy", 70, "mostafaroshdy1@gmail.com", "happy", 100, 0);

// console.log(emp1);


class Office {

    constructor() {
        this.employees = [];
    }
    hire(emp) {
        this.employees.push(emp);
    }
    fire(id) {
        for (let i = 0; i < this.employees.length; i++) {
            if (id === this.employees[i].id) {
                for (let j = i; j < this.employees.length - 1; j++) {   // to delete the employee
                    this.employees[j] = this.employees[j + 1];
                }
                this.employees.pop();
                break;
            }
        }
        // another easier way using splice()
        // for (let i = 0; i < this.employees.length; i++) {
        //     if (id === this.employees[i].id) {
        //         this.employees.splice(i, 1);
        //         break;
        //     }
        // }
    }
    getAllEmployees() {
        return this.employees;
    }
    getEmployee(id) {
        for (let i = 0; i < this.employees.length; i++) {
            if (id === this.employees[i].id) {
                return this.employees[i];
            }
        }
    }
}
// const office1 = new Office
// office1.hire(emp1);
// office1.hire(emp2);
// office1.hire(emp3);

const employees = [];
const offices = new Map();
let option;
do {
    option = prompt("Welcome to Employees Web App\nEnter Operation:\n1- Create Office\n2- Hire New Employee\n3- Fire Employee\n4- Search for Employee\n5- Display All Employees\n6- Exit");
    switch (Number(option)) {
        case 1:
            let officeName = prompt("Type the new Office Name");
            if (!offices.has(officeName)) {
                offices.set(officeName, new Office);
            } else {
                alert(`${officeName} already Exists`);
            }
            break;
        case 2:
            let isManager;
            do {
                isManager = prompt(
                    'If You Want To Add Manager type "mngr" \nIf Normal Employee type "nrml" '
                );
                if (isManager === "mngr") {
                    isManager = true;
                } else if (isManager === "nrml") {
                    isManager = false;
                }
            } while (isManager !== true && isManager !== false);
            do {
                var fullName = prompt("Full Name:");
            } while (fullName === null || fullName === "");

            do {
                var salary = Number(prompt("Salary:"));
            } while (salary === null || salary === "");

            do {
                var healthRate = prompt("Health Rate from 0 to 100:");
            } while (healthRate === null || healthRate === "");
            let money = Number(prompt("Money:"));
            let email = prompt("Email:");
            let sleepMood = prompt("Sleep Mood:");
            console.log(isManager);
            let emp = new Employee(
                fullName,
                money,
                sleepMood,
                healthRate,
                email,
                "",
                salary,
                isManager,
            );

            do {
                var workHours = Number(prompt("Work Hours:"));
            } while (workHours === null || isNaN(workHours) || workHours < 0);
            emp.work(workHours);
            do {
                var sleepHours = Number(prompt("Sleep Hours:"));
            } while (sleepHours === null || isNaN(sleepHours) || sleepHours < 0);
            emp.sleep(sleepHours);
            do {
                var office = prompt(`Type which office you want to hire the employee in\n${[...offices.keys()].join(', ')}`);
            } while (!offices.has(office));
            offices.get(office).hire(emp); // adds the employee to the specific office
            employees.push(emp);
            alert("Employee is hired");
            break;

        case 3:
            var empId = Number(prompt("Enter Employee ID you want to fire"));
            let found = false;
            for (let i = 0; i < employees.length; i++) {
                if (empId === employees[i].id) {
                    for (const office of offices.values()) {
                        office.fire(empId);
                    }
                    employees.splice(i, 1);
                    alert("Employee is fired");
                    found = true;
                    break;
                }
            }
            if (!found) {
                alert("Employee not found with the given ID");
            }
            break;

        case 4:
            var empIdToSearch = Number(prompt("Enter Employee ID you want to search for"));
            let foundEmployee = null;
            for (const employee of employees) {
                if (empIdToSearch === employee.id) {
                    foundEmployee = employee;
                    break;
                }
            }
            if (foundEmployee) {
                let employeeDetails = `Employee Found:\nFull Name: ${foundEmployee.fullName}\nEmail: ${foundEmployee.email}\nSalary: ${foundEmployee.salary}\nIs Manager: ${foundEmployee.isManager}`;
                alert(employeeDetails);
            } else {
                alert("Employee not found with the given ID");
            }
            break;
        case 5:
            if (employees.length === 0) {
                alert("No employees to display");
            } else {
                alert(JSON.stringify(employees));
                console.log(employees);
            }
            break;
    }

} while (option !== null && option !== "6");
