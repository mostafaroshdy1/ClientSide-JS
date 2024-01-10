// ######## Uncomment to test #########

// ######## Using class #########
// class Person {
//     constructor(fullName, money, sleepMood, healthRate) {
//         this.fullName = fullName;
//         this.money = money;
//         this.sleepMood = sleepMood;
//         this.healthRate = healthRate;
//     }

//     sleep(hours) {
//         if (hours < 7) {
//             this.sleepMood = "tired";
//         } else if (hours > 7) {
//             this.sleepMood = "lazy";
//         } else {
//             this.sleepMood = "happy";
//         }
//     }
//     eat(meals) {
//         if (meals === 3) {
//             this.healthRate = 100;
//         } else if (meals === 2) {
//             this.healthRate = 75;
//         } else if (meals === 1) {
//             this.healthRate = 50;
//         }
//     }
//     buy(items) {
//         this.money -= 10 * items;
//     }
// }

// ######## Using constructor function #########
// function Person(fullName, money, sleepMood, healthRate) {
//     this.fullName = fullName;
//     this.money = money;
//     this.sleepMood = sleepMood;
//     this.healthRate = healthRate;

//     Person.prototype.sleep = (hours) => {
//         if (hours < 7) {
//             this.sleepMood = "tired";
//         } else if (hours > 7) {
//             this.sleepMood = "lazy";
//         } else {
//             this.sleepMood = "happy";
//         }
//     }
//     Person.prototype.eat = (meals) => {
//         if (meals === 3) {
//             this.healthRate = 100;
//         } else if (meals === 2) {
//             this.healthRate = 75;
//         } else if (meals === 1) {
//             this.healthRate = 50;
//         }
//     }
//     Person.prototype.buy = (items) => {
//         this.money -= 10 * items;
//     }
// }


// ########## OLOO Method ##################
// const Person = {
//     init(fullName, money, sleepMood, healthRate) {
//         this.fullName = fullName;
//         this.money = money;
//         this.sleepMood = sleepMood;
//         this.healthRate = healthRate;

//         return this;
//     },
//     sleep(hours) {
//         if (hours < 7) {
//             this.sleepMood = "tired";
//         } else if (hours > 7) {
//             this.sleepMood = "lazy";
//         } else {
//             this.sleepMood = "happy";
//         }
//     },
//     eat(meals) {
//         if (meals === 3) {
//             this.healthRate = 100;
//         } else if (meals === 2) {
//             this.healthRate = 75;
//         } else if (meals === 1) {
//             this.healthRate = 50;
//         }
//     },
//     buy(items) {
//         this.money -= 10 * items;
//     },
// }

// ######## Using constructor factory function #########
// function Person(fullName, money, sleepMood, healthRate) {
//     return {
//         fullName,
//         money,
//         sleepMood,
//         healthRate,
//         sleep(hours) {
//             if (hours < 7) {
//                 this.sleepMood = "tired";
//             } else if (hours > 7) {
//                 this.sleepMood = "lazy";
//             } else {
//                 this.sleepMood = "happy";
//             }
//         },
//         eat(meals) {
//             if (meals === 3) {
//                 this.healthRate = 100;
//             } else if (meals === 2) {
//                 this.healthRate = 75;
//             } else if (meals === 1) {
//                 this.healthRate = 50;
//             }
//         },
//         buy(items) {
//             this.money -= 10 * items;
//         },
//     };
// }




// const ahmed = new Person("Ahmed Adel", 15000, "tired", 100); // for class and constructor function
// const ahmed = Object.create(Person).init("Ahmed Adel", 15000, "tired", 100) // for OLOO
// const ahmed = Person("Ahmed Adel", 15000, "tired", 100); // for factory function method


console.log(ahmed);