// Type Conversion
const inputYear = '1994';
console.log(inputYear + 18); // 199418

// Convert String to a Number
console.log(Number(inputYear) + 18); // 2012

// Convert a Non-Numeric String to a Number
console.log(Number('Jason')); // NaN

// Convert a Number to a String
console.log(String(7577762209)); // 7577762209

// Type Coercions
console.log('I am ' + 23 + ' years old.'); // I am 23 years old.
console.log('I am 23 years old.'); // I am 23 years old.
console.log('23' - 10 - '3'); // 10 - Number
console.log('23' + 10 + '3'); // 23103 - String
console.log('10' * 3); // 30 - Number
console.log('15' / 5); // 3 - Number
