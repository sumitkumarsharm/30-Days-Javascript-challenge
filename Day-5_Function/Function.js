// Task/ Activities

// Activity - 1 Function Decelaration

// Task-1 : write the function to check the number is odd or even log it the result to the console
function Even_Odd(Numbers) {
  if (Numbers % 2 === 0) {
    console.log("The number is even");
  } else {
    console.log("the number is an Odd");
  }
}
Even_Odd(5);

// Task - 2 write A function to return the squire of a number and print the result
function square(number) {
  let result = number ** 2;
  console.log(result);
}
// square(5);

// Activity - 2 Function Expression
// Task - 3 write a function expression to check the number is which is greater and return the result

const Result2 = function (a, b) {
  let results;
  if (a > b) {
    results = a; // if a is greater than b then a is the result
  } else {
    results = b; // if b is greater than a then b is the result
  }
  return results;
};

console.log(Result2(3, 4));
// Expected output: 4

// Task -4 write the funciton expression to concatinate the two string and return the result
let Concated_string = function (str_1, str_2) {
  let concated_str;
  concated_str = str_1 + "" + str_2;
  return concated_str;
};
console.log(Concated_string("Hello ", " World"));

// Activity - 3 Arrow function
// Task - 5 write the arrow function to return the sum of two number
const Result3 = (num_1, num_2) => {
  let result = num_1 + num_2;
  return result;
};
console.log(Result3(5, 6)); // Expected output: 11

// Task - 6 write the arrow function to check string is contain specific charactor return the reuslt true or false

let str_1 = "he is a good boy but he has&a lot of knowledge ";
const Check_valid_str = (str, char) => {
  let result5;
  if (str.includes(char)) {
    result5 = true;
  } else {
    result5 = false;
  }
  return result5;
};

console.log(Check_valid_str(str_1, "&"));

// Activity - 4 Function parameter and defult value
// Task - 7 write the function that take two parameters and return thair products prodive the defult value for the second parameter
const sums1 = (num_3 = 1, num_4 = 1) => {
  let result_6;
  result_6 = num_3 + num_4;
  return result_6;
};
console.log(sums1(5, 6)); // Expected output: 11
console.log(sums1()); // Expected output: 2

// Task - 8 write the function that takes a person name and age and return a greeting message. provid the defult value for age.
const sum = (Name, age = 25) => {
  let greeting;
  greeting = `Hello Mr ${Name}
  you are ${age} years old`;
  return greeting;
};
console.log(sum("Ahmed")); // Expected output: Hello Mr Ahmed you are 25 years old
console.log(sum("Amit", 30)); // Expected output: Hello Mr Ahmed you are

// Activity - 5 Heigher order function

function sayHello() {
  return "My number is : ";
}
function greeting(helloMessage, name) {
  console.log(helloMessage() + name);
}
// Pass `sayHello` as an argument to `greeting` function
greeting(sayHello, 9135862748);
// Hello, JavaScript!
console.log('hello');