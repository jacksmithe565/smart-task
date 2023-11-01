/*
    Filename: ComplexCode.js
    Description: This JavaScript code showcases a complex and sophisticated implementation.
*/

// Create a class called ComplexCode
class ComplexCode {
  constructor() {
    this.data = [];
  }

  // Generate random number between min and max (inclusive)
  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Generate an array of random numbers
  generateRandomArray(size, min, max) {
    for (let i = 0; i < size; i++) {
      this.data.push(this.getRandomNumber(min, max));
    }
  }

  // Sort the array using bubble sort algorithm
  bubbleSort() {
    const n = this.data.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (this.data[j] > this.data[j + 1]) {
          const temp = this.data[j];
          this.data[j] = this.data[j + 1];
          this.data[j + 1] = temp;
        }
      }
    }
  }

  // Multiply each element of the array by a specified factor
  multiplyArray(factor) {
    for (let i = 0; i < this.data.length; i++) {
      this.data[i] *= factor;
    }
  }

  // Find the sum of all the elements in the array
  getArraySum() {
    let sum = 0;
    for (let i = 0; i < this.data.length; i++) {
      sum += this.data[i];
    }
    return sum;
  }

  // Generate a new array with unique elements
  getUniqueArray() {
    return Array.from(new Set(this.data));
  }

  // Reverse the order of the array elements
  reverseArray() {
    this.data.reverse();
  }

  // Convert the array to a string representation
  getArrayAsString() {
    return this.data.join(", ");
  }
}

// Usage
const complexCode = new ComplexCode();
complexCode.generateRandomArray(100, 1, 1000);
console.log("Generated Array:", complexCode.getArrayAsString());
complexCode.bubbleSort();
console.log("Sorted Array:", complexCode.getArrayAsString());
complexCode.multiplyArray(2);
console.log("Multiplied Array:", complexCode.getArrayAsString());
console.log("Sum of Array:", complexCode.getArraySum());
console.log("Unique Elements Array:", complexCode.getUniqueArray());
complexCode.reverseArray();
console.log("Reversed Array:", complexCode.getArrayAsString());
