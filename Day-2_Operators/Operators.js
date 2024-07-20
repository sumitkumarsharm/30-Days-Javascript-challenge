// Activity - 1  ARITHMETIC OPERATOR
// TASK-1 Write a program to Add two numbers and log  the result to the console
let first_number = 79;
let second_number = 45;
let result = first_number + second_number;
console.log(result);

// TASK-2 Write a program to subttract two numbers and log  the result to the console
let first_number_1 = 79;
let second_number_1 = 45;
let result_1 = first_number_1 - second_number_1;
console.log(result_1);

// TASK-3 Write a program to multily two numbers and log  the result to the console
let first_number_2 = 79;
let second_number_2 = 45;
let result_2 = first_number_2 * second_number_2;
console.log(result_2);

// TASK-4 Write a program to divide two numbers and log  the result to the console
let first_number_3 = 79;
let second_number_3 = 45;
let result_3 = first_number_3 / second_number_3;
console.log(result_3);

// TASK-5 Write a program to modulus two numbers and log  the result to the console
let first_number_4 = 79;
let second_number_4 = 45;
let result_4 = first_number_4 % second_number_4;
console.log(result_4);

// Activity - 2  ASSIGNMENTS OPERATOR
// TASK-6 Write a program to use += operartor and add the value and console it into lof
let first_number_5 = 20;
first_number_5 += 2;
console.log(first_number_5);

// TASK-7 Write a program to use -= operartor and subtract the value and console it into lof

let first_number_6 = 20;
first_number_6 -= 2;
console.log(first_number_6);

// Activity - 3  COMPARISON OPERATOR

// TASK-8 Write a program  to compair two number using > < operator and console it.
let first_number_7 = -10;
let second_number_7 = 10;
if (first_number_7 > second_number_7) {
  console.log("First number is greater than second number");
} else {
  console.log("Second number is less than First number ");
}

// TASK-9 Write a program  to compair two number using >=,  <= operator and console it.

let first_number_8 = 9;
let second_number_8 = 10;
if (first_number_8 >= second_number_8) {
  console.log("First number is greater than or equal to second number");
} else {
  console.log("Second number is less than or equal to First number ");
}

// TASK - 10 Write a program  to compair two number using === and == operator and console it.

// Activity - 4  Logical OPERATOR

// TASK - 11 write the program using " && " operatorn to combine two condition and log the result to the console
let first_number_9 = 10;
let second_number_9 = 10;

if (first_number_9 > second_number_9 && first_number_9 < 20) {
  console.log("First number is greater than second number and less than 20");
} else {
  console.log(
    "First number is not greater than second number but first number is less than 20"
  );
}

// Task- 12  write the program using " || " operatorn to combine two condition and log the result to the console
let first_number_10 = 12;
let second_number_10 = 10;

if (first_number_10 > second_number_10 || first_number_10 < 20) {
  console.log("First number is greater than second number or less than 20");
} else {
  console.log(
    "First number is not greater than second number but first number is less than 20"
  );
}

// TASK-15 Write a program  to uses ! operator to naget a condition and log the result to the console
let first_number_16 = 11;
let second_number_16 = 10;
if (!first_number_16 > second_number_16) {
  console.log("First number is greater than or equal to second number");
} else {
  console.log("Second number is less than or equal to First number ");
}

// Activity - 5  TERNARY OPERATOR

// Task - 14 write a program to use the ternary operators to check if number is posative and number is negative and log the result to the console.
let number_14 = 10;
let result_14 = number_14 > 0 ? "Number is positive" : "Number is negative";
console.log(result_14);

// FEATURE REQUEST

// (1) Arithmetic Operators scripts : write the scripts that perform basic arithmetic operations (Addition, subtraction, multiplication, division, and Reminder) on the two numbers and logs the result the console

function ArithmeticOperator(num_1, Operators, num2) {
  let result;
  switch (Operators) {
    case "+":
      result = num_1 + num2;
      break;
    case "-":
      result = num_1 - num2;
      break;
    case "*":
      result = num_1 * num2;
      break;
    case "/":
      result = num_1 / num2;
      break;
    case "%":
      result = num_1 % num2;
      break;
    default:
      console.log("Invalid Operator");
      result = null;
  }
  return result;
}
const newSum = ArithmeticOperator(10, "+", 20);
console.log(newSum);

// (2) Comparison and logical operator script :- create a script that compair two number using different comparison operator and combines condition using logical operator
let first_number_11 = 100;
let second_number_11 = 100;
if (first_number_11 > 100 && second_number_11 > 80) {
  console.log("Both number are greater than 100 and 80");
} else if (first_number_11 < 100 || second_number_11 < 75) {
  console.log("One of the number is greater than 100 and 80");
} else if (first_number_11 != 100 && second_number_11 != 80) {
  console.log("Both number are not equal to 100 and 80");
} else {
  console.log("Both number are equal to 100 and 80");
}


// (3)Ternary Operator script : write a script that use the ternary operators to determine number is posative and number is negative and log the result to the console.
let number_15 = 10;
let result_15 = number_15 > 0 ? "Number is positive" : "Number is negative";
console.log(result_15);
