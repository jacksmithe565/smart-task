/* 
File Name: SophisticatedCode.js
Content: Complex and sophisticated code example demonstrating various JavaScript concepts and tasks.
*/

// Helper function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to greet the person
  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Array of people
const people = [
  new Person("John", 25),
  new Person("Alice", 30),
  new Person("Bob", 35),
];

// Function to filter adults from the array of people
function filterAdults(people) {
  return people.filter(person => person.age >= 18);
}

// Function to calculate the average age of people
function calculateAverageAge(people) {
  const totalAge = people.reduce((acc, person) => acc + person.age, 0);
  return totalAge / people.length;
}

// Generate a random number between 1 and 10
const randomNumber = getRandomNumber(1, 10);

// Perform some calculations using the random number
const squareNumber = randomNumber ** 2;
const halfNumber = randomNumber / 2;
const roundedNumber = Math.round(randomNumber);

// Output the results
console.log(`Random Number: ${randomNumber}`);
console.log(`Squared Number: ${squareNumber}`);
console.log(`Half Number: ${halfNumber}`);
console.log(`Rounded Number: ${roundedNumber}`);

// Filter adults from the array of people
const adults = filterAdults(people);

console.log("Adults:");
adults.forEach(person => person.greet());

// Calculate and output the average age of people
const averageAge = calculateAverageAge(people);
console.log(`Average Age: ${averageAge}`);

// More complex and sophisticated code...
// ...
// ...

// Note: The above code is a basic example and doesn't cover all the possible complexities and sophistication. You can add more functionality and complexity based on your requirements.