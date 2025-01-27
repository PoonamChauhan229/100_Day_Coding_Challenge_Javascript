// Write a BankAccount class with a balance property and methods deposit and withdraw to handle bank transactions

// deposit method: Adds a specified amount to the balance. The amount must be greater than 0.
// withdraw method: Deducts a specified amount from the balance. The amount must be less than or equal to the current balance.

// class >>BankAccount
// balance property
// methods deposit and withdraw

// Approach:
// class BankAccount{}
// constructor(balance){
    // this.balance=balance
// }

// deposit(amount){
    // amount must be greater than 0 >>if condition
    // if(amount>0){
        //deposit
        // this.balance+=amount
        // print >> balanace ||deposited amount
    // }else{
        // >>print >>The amount must be greater than 0
    // }
// }

// withdraw(amount){
    // The amount must be less than or equal to the current balance.
    // amount must be greater than 0
    // if(amount>0 && amount<=this.balance){
        // this.balance-=amount;
        // Print >> Balanace || Withdrwal Amt
    // }else{
        // Print >>Invalid Withdrwal || Insufficient Balance
    // }
   // }

// Create an Instance
// let account=new BankAccount(100)
// account.deposit(50)     >>150 || 50
// account.withdraw(20)    >>130 ||20
// account.deposit(-10)    >>The amount must be greater than 0 ||Invalid deposit
// account.deposit(50)     >>180  ||50

class BankAccount{
    constructor(balance){
        this.balance=balance
    }
    
    deposit(amount){
        if(amount>0){
            this.balance+=amount;
            console.log(`${amount} deposited successfully ...New Balance ${this.balance}`)
        }else{
            console.log(`${amount} :the amount must be greater than 0`)
        }
    }

    withdraw(amount){
        if(amount>0 && amount<=this.balance){
            this.balance-=amount;
            console.log(`${amount} withdrawn succesffully ...New balance ${this.balance}`)
        }else{
            console.log(`${amount} :Invalid Withdrwal || Insufficient Balance`)
        }
    }
  
}

let account=new BankAccount(100)
account.deposit(50)
account.deposit(-10)
account.withdraw(20)
account.deposit(50)
account.withdraw(-20)
account.withdraw(250)






