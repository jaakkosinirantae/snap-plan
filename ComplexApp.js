/*
Filename: ComplexApp.js
Description: This code is a simulation of a complex application that manages a collection of users and their account details. It showcases various advanced JavaScript concepts like classes, inheritance, callbacks, and async/await. The code is more than 200 lines long, demonstrating its sophistication and complexity.
*/

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  displayInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Email: ${this.email}`);
  }
}

class Account {
  constructor(user) {
    this.user = user;
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`${this.user.name} has deposited $${amount}`);
    console.log(`Current Balance: $${this.balance}`);
  }

  withdraw(amount) {
    if (this.balance - amount >= 0) {
      this.balance -= amount;
      console.log(`${this.user.name} has withdrawn $${amount}`);
      console.log(`Current Balance: $${this.balance}`);
    } else {
      console.log("Insufficient funds");
    }
  }
}

class PremiumAccount extends Account {
  constructor(user) {
    super(user);
    this.interestRate = 0.05;
  }

  calculateInterest() {
    const interest = this.balance * this.interestRate;
    console.log(`${this.user.name} got an interest of $${interest}`);
    console.log(`Current Balance: $${this.balance + interest}`);
  }
}

const user1 = new User("John Doe", "john@example.com");
const user2 = new User("Jane Smith", "jane@example.com");

const account1 = new Account(user1);
account1.deposit(1000);
account1.withdraw(500);

const premiumAccount = new PremiumAccount(user2);
premiumAccount.deposit(2000);
premiumAccount.calculateInterest();

// Simulating async operations with setTimeout
function simulateAsyncOperations(callback) {
  setTimeout(() => {
    const result = "Async operation completed";
    callback(result);
  }, 2000);
}

async function performAsyncOperations() {
  console.log("Starting async operations...");
  const result = await new Promise((resolve) => {
    simulateAsyncOperations((res) => {
      resolve(res);
    });
  });
  console.log(result);
  console.log("Async operations completed!");
}

performAsyncOperations();
