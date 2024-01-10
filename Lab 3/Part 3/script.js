// Object predefined methods :


const obj = {
    std1: "ahmed",
    std2: "mostafa",
    std3: "karim",
    std4: "belal",
}


console.log(Object.keys(obj)); // prints the an array of the keys

console.log(Object.values(obj)); // prints the an array of the keys

console.log(Object.entries(obj)); // prints the an array of sub arrays containing [key,value]

console.log(Object.entries(obj)); // prints the an array of sub arrays containing [key,value]

console.log(obj.hasOwnProperty("std1")); // checks of the object has a specific key

Object.seal(obj);//This method seals an object, preventing new properties from being added and marking all existing properties as non-configurable. However, values can still be changed on existing properties.

console.log(Object.isSealed(obj)); // check if the object is sealed

Object.freeze(obj) //Freezing an object prevents extensions and makes existing properties non-writable and non-configurable

console.log(Object.isFrozen(obj)); // check if the object is frozen

console.log(Object.is(obj.std1, obj.std2)) // checks if two values are the same , here would be false


// Array predefined methods :


const arr = [10, 25, 25, 5, 3, 0];
const arr2 = [1, 2, 50, 13, 200];

console.log(arr.length); // gets the array length

console.log(arr.concat(arr2)); // concats 2 arrays without changing the actual arrays (does not mutate)

console.log(arr.indexOf(25)); // gets the index of the first occurrence

console.log(arr.lastIndexOf(25)); // gets the index of the first occurrence

console.log(arr.includes(25)); // checks if a specific element exists (true or false)

console.log(Array.isArray(arr)); // checks if the argument is an array

arr.push(5);// pushes the parameter to the end of array

arr.unshift(5); // pushes the parameter to the first index of array

arr.pop(5); // removes the last element

arr.shift(5); // removes the first element


console.log(arr.reverse()); // reverses the array

console.log(arr.sort((a, b) => a - b)); // sorts the array;

// EX3

function outerFunction(outerParam) {
    // Outer function scope
    console.log(`Outer parameter: ${outerParam}`);
    function innerFunction(innerParam) {
        // Inner function scope
        console.log(`Inner parameter: ${innerParam}`);
        console.log(`Outer parameter within inner function: ${outerParam}`);
    }
    // Returning the inner function from the outer function
    return innerFunction;
}

// Creating an instance of outerFunction with parameter 10
const closureExample = outerFunction(10);
// Invoking the inner function with parameter 5
closureExample(5);
