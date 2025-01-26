// 🎉 Welcome to Day 98 of the 100 Days of JavaScript Coding Challenge! 🚀

// 🌟 **Today's challenge is about creating a BankAccount class** that handles deposit and withdrawal operations.  


// Write a BankAccount class with a balance property and methods deposit and withdraw to handle bank transactions

// deposit method: Adds a specified amount to the balance. The amount must be greater than 0.
// withdraw method: Deducts a specified amount from the balance. The amount must be less than or equal to the current balance.

// Approach:
//Defines a class named BankAccount. This class will be used to create bank account objects, each with a balance and methods for deposit and withdrawal.
// class BankAccount {}

// constructor(balance) {
//     The constructor method initializes a new BankAccount object with an initial balance property. This method is called when an instance is created
//     this.balance = balance; This will store the balance of the bank account.
// }

// deposit(amount) {
//     This method is used to deposit money into the bank account. It checks if the amount is greater than 0 before adding it to the balance.
//     if (amount > 0) {
//         this.balance += amount;
//         console.log(`$${amount} deposited successfully. New balance: $${this.balance}`);
//     } else {
//         console.log("Deposit amount must be greater than 0.");
//     }
// }

// withdraw(amount) {
//     This method is used to withdraw money from the bank account. It checks if the amount is greater than 0 and less than or equal to the current balance.
//     if (amount > 0 && amount <= this.balance) {
//         this.balance -= amount;
//         console.log(`$${amount} withdrawn successfully. New balance: $${this.balance}`);
//     } else {
//         console.log("Invalid withdrawal amount or insufficient balance.");
//     }
// }

// Create an insatance >> new keyword
// let account=new BankAccount(100)
// account.deposit(50);                  // Deposit 50     >>150
// account.deposit(-10);                 // Invalid deposit
// account.withdraw(20);                  // Withdraw 20   >>130
// account.deposit(50);                  // Deposit 50     >>180

   

class BankAccount {
    constructor(balance) {
      this.balance = balance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`$${amount} deposited successfully. New balance: $${this.balance}`);
      } else {
        console.log("Deposit amount must be greater than 0.");
      }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
          this.balance -= amount;
          console.log(`$${amount} withdrawn successfully. New balance: $${this.balance}`);
        } else {
          console.log("Invalid withdrawal amount or insufficient balance.");
        }
      }
    }
  
  // Example usage:
  let account = new BankAccount(100); // Initial balance of 100
  account.deposit(50);                  // Deposit 50  
  account.deposit(-10);                 // Invalid deposit
  account.withdraw(20);                  // Withdraw 20
  account.deposit(50);                  // Deposit 50

//   Why Challeneg useful
 // 💡 **Why is this important?**
  // - Teaches how to manage state within a class, such as tracking a bank account balance.
  // - Demonstrates how to validate input data and ensure that it meets specific conditions before taking action.
  // - Shows how to implement methods to update and interact with class properties.
