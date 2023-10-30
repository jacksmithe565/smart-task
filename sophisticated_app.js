/* filename: sophisticated_app.js */

// This code is a sophisticated shopping application that allows users to add items to a shopping cart, calculate total costs, and apply discounts.

// This is an example product database
const products = [
  { id: 1, name: 'Item 1', price: 10 },
  { id: 2, name: 'Item 2', price: 20 },
  { id: 3, name: 'Item 3', price: 30 },
  { id: 4, name: 'Item 4', price: 40 },
  { id: 5, name: 'Item 5', price: 50 }
];

// This is the shopping cart object
const cart = {
  items: [],
  total: 0,
  discountApplied: false,

  // Add an item to the cart
  addItem: function(itemId) {
    const item = products.find(product => product.id === itemId);
    this.items.push(item);
    this.calculateTotal();
  },

  // Remove an item from the cart
  removeItem: function(itemId) {
    const index = this.items.findIndex(item => item.id === itemId);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
    this.calculateTotal();
  },

  // Calculate the total cost of the items in the cart
  calculateTotal: function() {
    let total = 0;
    this.items.forEach(item => {
      total += item.price;
    });
    this.total = total;
  },

  // Apply a discount to the total cost of the cart
  applyDiscount: function(discountPercent) {
    if (!this.discountApplied) {
      this.total = this.total - (this.total * (discountPercent / 100));
      this.discountApplied = true;
    }
  },

  // Print the items in the cart and the total cost
  printCart: function() {
    console.log('Shopping Cart:');
    this.items.forEach(item => {
      console.log(`${item.name} - $${item.price}`);
    });
    console.log(`Total: $${this.total.toFixed(2)}`);
  }
};

// Example usage:
cart.addItem(1);
cart.addItem(3);
cart.addItem(5);
cart.printCart(); // Output: Item 1 - $10, Item 3 - $30, Item 5 - $50, Total: $90

cart.removeItem(3);
cart.printCart(); // Output: Item 1 - $10, Item 5 - $50, Total: $60

cart.applyDiscount(10);
cart.printCart(); // Output: Item 1 - $10, Item 5 - $50, Total: $54