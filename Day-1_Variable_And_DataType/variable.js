// Activity 1 Variable decelaration
// task-1 declare a variable using var assign it a number and log the value to the console
var Num = 999;
console.log(Num);
// output : 999

// task-2 declare a variable using let assign it a string and log the value to the console

let myName = "Sumit sharma";
console.log(myName);
// output : Sumit sharma




// Activity 2 Constant decelaration
// task-3 declare a variable using const assign it a boolean value and log the value to the console
const myID = 21451254;
console.log(myID);
// output : 21451254






// Activity 3 Data Types
// task-4 create a variable of different data type(number string boolan Object Array) and log each type of variable usinng typeOf variable
// string
let mySurname = "sharma";
console.log(typeof mySurname);
// output : string

// number
let myIDs = 21451254;
console.log(typeof myIDs);
// output : number

// objects
let myAddress = {
  city: "Delhi",
  state: "Delhi",
  country: "India",
};
console.log(typeof myAddress);
// output : object

// Array
let myFriends = ["Sumit", "Rahul", "Rajat", "Rahul"];
console.log(typeof myFriends);
// output : object

// boolean
let myBool = true;
console.log(typeof myBool);
// output : boolean

// null
let myNull = null;
console.log(typeof myNull);
// output : object

// undefined
let myUndefined = undefined;
console.log(typeof myUndefined);
// output : undefined

// synbol
let mySymbol = Symbol("mySymbol");
console.log(typeof mySymbol);
// output : symbol

// bigInt
let myBigInt = 1234567890123456789n;
console.log(typeof myBigInt);
// output : bigint

// float
let myFloat = 123.456;
console.log(typeof myFloat);
// output : number

// NaN
let myNaN = NaN;
console.log(typeof myNaN);
// output : number







// Activity 4  - Reasigning a variable
// Task - Declear a vaariable using let keyword assign it an initial value, reassign a new value and log both value to the console

let myVar = "Sumit"; // here i define the variable
console.log(myVar);
myVar = "Rahul"; // herei redeclear the variable
console.log(myVar);

// Activity 5 - Understanding the const keyword
// Task - Declear a variable using const keyword and observe the error
const myVar2 = "Sumit"; // here i define the variable
console.log(myVar2);
myVar2 = "Rahul"; // herei redeclear the variable
console.log(myVar2);

// Output :-
// TypeError: Assignment to constant variable.
