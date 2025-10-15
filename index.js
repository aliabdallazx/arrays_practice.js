// 🌟Level 1: Understanding Arrays
// Q1. What is an array in JavaScript?

// Definition (in my own words):
// An array in JavaScript is a special type of variable that can store multiple values in a single place.
// Instead of creating many variables, we can keep all related data together in one array.

// Real-life examples of data stored in arrays:

// A list of student names: ["Ali", "Sara", "John"]

// Shopping cart items: ["Laptop", "Phone", "Headphones"]

// Temperatures of the week: [28, 30, 32, 31, 29, 27, 26]

// Q2. How do you create an array?

// There are three main ways to create arrays in JavaScript:

// 1. Using square brackets (most common)
let fruits = ["Apple", "Banana", "Orange"];

// 2. Using the new Array() constructor
let numbers = new Array(10, 20, 30, 40);

// 3. Creating an empty array and adding values later
let colors = [];
colors[0] = "Red";
colors[1] = "Blue";
colors[2] = "Green";

// Q3. What data types can you store inside an array?

// Arrays can store any data type, including:

// Numbers

// Strings

// Booleans

// Objects

// Even other arrays (nested arrays)

let mixedArray = [42, "Ali", true, null];
console.log(mixedArray);

// Q4. What is the difference between an array and a single variable?

// A single variable holds one value,
// but an array can hold many values in one place.

let singleNumber = 10; // One value
let numbersArray = [10, 20, 30, 40]; // Many values

console.log("Single variable:", singleNumber);
console.log("Array:", numbersArray);


//  In short:

// Variable → one item

// Array → many items (stored together)

// ⚙️ Level 2: Accessing and Modifying Arrays
// Q5. How do you access specific items from an array?

// You access array items using index numbers, starting from 0.

let fruit = ["Apple", "Banana", "Mango", "Orange"];

console.log("First element:", fruits[0]); // Apple
console.log("Last element:", fruits[fruits.length - 1]); // Orange

// Q6. How do you change a value in an array?

// You can update an element using its index.

let colors = ["Red", "Blue", "Green"];
colors[1] = "Yellow"; // Change "Blue" to "Yellow"

console.log(colors); // ["Red", "Yellow", "Green"]

// Q7. What does .length do?

// The .length property tells you how many items are in the array.

let animals = ["Cat", "Dog", "Elephant", "Lion"];
console.log("Number of items:", animals.length); // 4

// Q8. How can you add a new element to the end of an array without using .push()?

// You can use the array index assignment method.

let number = [10, 20, 30];
numbers[numbers.length] = 40; // Adds 40 at the end

console.log(numbers); // [10, 20, 30, 40]

//  Level 3: Working with Loops and Arrays
// Q9. Print all elements in an array using three loops
let fru = ["Apple", "Banana", "Mango"];

// 1. for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 2. for...of loop
for (let fruit of fruits) {
  console.log(fruit);
}

// 3. while loop
let i = 0;
while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}

// Q10. Print all numbers in an array multiplied by 2
let numbers = [2, 4, 6, 8];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] * 2);
}

// Q11. Create an array of names and print each name in uppercase
let names = ["ali", "sara", "mohamed", "lina"];

for (let name of names) {
  console.log(name.toUpperCase());
}

// Q12. Count how many items are in an array without using .length
let cars = ["BMW", "Audi", "Tesla", "Toyota"];
let count = 0;

for (let car of cars) {
  count++;
}

console.log("Total items:", count);

// Q13. Find the largest and smallest number in an array
let numbers = [12, 45, 7, 89, 23, 3];
let largest = numbers[0];
let smallest = numbers[0];

for (let num of numbers) {
  if (num > largest) {
    largest = num;
  }
  if (num < smallest) {
    smallest = num;
  }
}

console.log("Largest number:", largest);
console.log("Smallest number:", smallest);

