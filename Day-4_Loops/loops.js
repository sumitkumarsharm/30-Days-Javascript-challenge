// Activites and Tasks

// Activity - 1
// Task-1 write the program to print number from 1 to 10 using For loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Task-2 write the program to print mulyiplication of 5 using While loop
num_1 = 5;
for (let i = 1; i <= 10; i++) {
  console.log(num_1 * i);
}

// Acitvity - 2: while loop
// Task-3 write the program to print sum of all number between 1 to 10 using while loop
let num_2 = 1;
let Total_1 = 0;
while (num_2 <= 10) {
  console.log(num_2);
  Total_1 = Total_1 + num_2;
  num_2++;
}
console.log(Total_1);

// Task - 4 write the program to print 10 to 1 using while loop
let num_3 = 10;
let Total = 0;
while (num_3 >= 1) {
  console.log(num_3);
  num_3--;
}

// Activity - 3
// Task-5 : write the program to print number form 1 to 5 using a do while loop
let num_4 = 1;
do {
  console.log(num_4);
  num_4++;
} while (num_4 <= 5);

// Task - 6 : write the program to print factorial using do while loop
let num_5 = 5;
let fact = 1;
do {
  fact = fact * num_5;
  num_5--;
} while (num_5 > 1);
console.log(fact);

// Activity - 4
// Task - 7 write the program to print a pattern using nested for loop
let count_star = 5;
let star = "";
for (let i = 1; i <= count_star; i++) {
  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);

// Activity - 5
// Task - 8 write the program to print number form 1 to 10 but skip number 5 using continue statment
let num_6 = 1;
while (num_6 <= 10) {
  if (num_6 == 5) {
    num_6++;
    continue;
  }
  console.log(num_6);
  num_6++;
}

// Task - 9 write the program to print number form 1 to 10 but stop the loop when number 7 is using the break statment
let num_7 = 1;
while (num_7 <= 10) {
  if (num_7 == 7) {
    break;
  }
  console.log(num_7);
  num_7++;
}
