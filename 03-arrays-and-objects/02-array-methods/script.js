let x;

const arr = [34, 55, 95, 20, 15];

// Add an item to the end of an array
// arr.push(100);

// Add an item to the beginning of an array
// The unshift() mutator array method adds a new element or elements to the
// beginning of an array.
// arr.unshift(23);

// Remove an item from an array
// arr.pop();

// Removes the first element from the beginning of an array
// arr.shift();

// Reverse the order of the elements in an array
// console.log(arr);
// arr.reverse();

// The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// x = arr.includes(55); // true
// x = arr.includes(23); // false

// The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.
// x = arr.indexOf(20); // 3
// x = arr.indexOf(204); // -1

// The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2)); // [ 'camel', 'duck', 'elephant' ]

console.log(animals.slice(2, 4)); // [ 'camel', 'duck' ]

console.log(animals.slice(1, 5)); // [ 'bison', 'camel', 'duck', 'elephant' ];

console.log(animals.slice(-2)); // [ 'duck', 'elephant' ]

console.log(animals.slice(2, -1)); // [ 'camel', 'duck' ]

console.log(animals.slice()); // [ 'ant', 'bison', 'camel', 'duck', 'elephant' ]

// The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
const months = ['Jan', 'Mar', 'Apr', 'Jun'];
// console.log(months);

months.splice(1, 0, 'Feb'); // Insert an element at index 1
// console.log(months);

months.splice(4, 1, 'May'); // Replaces 1 element at index 4
// console.log(months);
