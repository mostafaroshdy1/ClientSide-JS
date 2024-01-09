// this assignment shows these arrays method : Find foreach map


const array1 = [0, 2, 4, 6, 8, 10];

array1.forEach((el, i, arr) => console.log(el * 2, i, arr)) //prints 0 0  

// 0 0 [ 0, 2, 4, 6, 8, 10 ]
// 4 1 [ 0, 2, 4, 6, 8, 10 ]
// 8 2 [ 0, 2, 4, 6, 8, 10 ]
// 12 3 [ 0, 2, 4, 6, 8, 10 ]
// 16 4  [ 0, 2, 4, 6, 8, 10 ]
// 20 5  [ 0, 2, 4, 6, 8, 10 ]
//where the first col is the element after multiplication and the second col is the index and the third col is the third argument
// which is the array that for each was called upon

// The forEach() method of Array instances executes a provided function once for each array element. 

// Parameters

// callbackFn

//     A function to execute for each element in the array.Its return value is discarded.The function is called with the following arguments:

//   element

//         The current element being processed in the array.
//   index

//         The index of the current element being processed in the array.
//   array

//         The array forEach() was called upon.

// Return value

// None (undefined).





const found = array1.find((el) => el > 4)

console.log(found) // prints 6 because it is the first element larger than 4


// The find() method of Array instances returns the first element in the provided array that satisfies
//  the provided testing function. If no values satisfy the testing function, undefined is returned. 


// Parameters

// callbackFn

//     A function to execute for each element in the array. It should return a truthy value to indicate a matching element has been found, and a falsy value otherwise. The function is called with the following arguments:

//     element

//         The current element being processed in the array.
//     index

//         The index of the current element being processed in the array.
//     array

//         The array find() was called upon.


const array2 = array1.map((el) => el * 2)

// the obvious diffrence between map and foreach is that map returns an new array after executeing
// the call back function on each element


// Parameters

// callbackFn

//     A function to execute for each element in the array. Its return value is added as a single element in the new array. The function is called with the following arguments:

//     element

//         The current element being processed in the array.
//     index

//         The index of the current element being processed in the array.
//     array

//         The array map() was called upon.

