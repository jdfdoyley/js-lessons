let x;

// Array Literals
const numbers = [12, 45, 33, 29, 39, 102];
const mixed = [12, 'Hello', true, null];

// Array Constructor
const fruits = new Array('apple', 'grape', 'orange');

x = numbers[0];
x = numbers[0] + numbers[3];
x = `My favorite fruit is an ${fruits[2]}`;
x = numbers.length;

fruits[2] = 'banana';
x = fruits;

// fruits.length = 2;
fruits[3] = 'pineapple';
fruits[fruits.length] = 'blueberry';

console.log(x);
