"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

const AccountType = {
    Normal: "Brukskonto",
    Saving: "Sparekonto",
    Credit: "Kreditkonto",
    Pension: "Pensionskonto"
  };


class TAccount {
    static currencyTypes = { 
        NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
        EUR: { value: 0.0985, name: "Europeiske euro", denomination: "e" },
        USD: { value: 0.1091, name: "United States dollar", denomination: "s" },
        GBP: { value: 0.0847, name: "Pound sterling", denomination: "e" },
        INR: { value: 7.8309, name: "Indiske rupee", denomination: "T" },
        AUD: { value: 0.1581, name: "Australienske dollar", denomination: "As" },
        PHP: { value: 6.5189, name: "Filippinske peso", denomination: "P" },
        SEK: { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
        CAD: { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
        THB: { value: 3.3289, name: "Thai baht", denomination: "B" },
    }; 

    #type;
    #balance; 
    #withdrawCount; 
    #currencyType = "NOK"; 
  
    constructor(type) {
      this.#type = type;
      this.#balance = 0; 
      this.#withdrawCount = 0; 
    }

    toString() {
        return this.#type;
      }

    setType(aType) {
        const oldType = this.#type;
        this.#type = aType;
        this.#withdrawCount = 0; 
        printOut("Account is changed from " + oldType + " to " + aType);
      }


    getBalance() {
         return this.#balance;
    }

    #currencyConvert(aType) {
        return TAccount.currencyTypes.NOK.value / TAccount.currencyTypes[this.#currencyType].value * aType.value; 
    }

    setCurrencyType(aType) {
        if (aType !== this.#currencyType && aType in TAccount.currencyTypes) {
            const oldCurrency = this.#currencyType;
            

            const conversionFactor = this.#currencyConvert(TAccount.currencyTypes[aType]);
            this.#balance = this.#balance * conversionFactor;
            this.#currencyType = aType;
            printOut("The account currency has changed from " + TAccount.currencyTypes[oldCurrency].name + " to " + TAccount.currencyTypes[aType].name);
            printOut("New balance is " + this.#balance.toFixed(2) + TAccount.currencyTypes[aType].denomination);
        }    
    }

    deposit(aAmount){
        const oldBalance = this.#balance 
        this.#balance += aAmount; 
        this.#withdrawCount = 0;
        const currency = TAccount.currencyTypes[this.#currencyType];
        
        printOut("Money has been deposited!"); 
        printOut("Old balance is:  " + oldBalance.toFixed(2) + " and the amount is: " + aAmount+ currency.denomination); 
        printOut("New balance is: " + this.#balance.toFixed(2) + currency.denomination ); 
    }

    withdraw(aAmount){
        const currency = TAccount.currencyTypes[this.#currencyType];
        switch (this.#type) {

            case AccountType.Pension:
            printOut("You can't withdraw from a Pensionskonto");
                break;

            case AccountType.Saving:
                if (this.#withdrawCount < 3) {
                    const oldBalance = this.#balance 
                    this.#balance -= aAmount;
                    this.#withdrawCount++;
                    printOut( "Money has been withdrawn!"); 
                    printOut( "Old balance is: " + oldBalance.toFixed(2) + " and the amount is: " + aAmount + currency.denomination);
                    printOut("New balance is: " + this.#balance.toFixed(2) + currency.denomination ); 
                }
                else {
                    printOut("You can't withdraw from Sparekonto more than 3 times!");
                }
                break;

                default:
                    printOut("Withdrawal is not allowed for this account-type.");
                break;
        }
      }       
}

//printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
printOut("PART 1"); 
printOut(AccountType.Normal + "," + AccountType.Saving + "," + AccountType.Credit + "," + AccountType.Pension);

printOut(newLine);

//printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
printOut("PART 2"); 

let myAccount = new TAccount(AccountType.Normal);
printOut("myAccount=" + myAccount.toString()); 
    
myAccount.setType(AccountType.Saving);
printOut("myAccount=" + myAccount.toString()); 

printOut(newLine);

//printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
printOut("PART 3"); 

myAccount.deposit(100);

printOut(newLine);

myAccount.withdraw(25);
printOut("Balance: " + myAccount.getBalance()); 

printOut(newLine);


//printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
printOut("PART 4");

//const myAccount4 = new TAccount(AccountType.Saving,100);

myAccount.deposit(25);
printOut(newLine);
  
myAccount.withdraw(30);
printOut(newLine);

myAccount.withdraw(30);
printOut(newLine);

myAccount.withdraw(30);
printOut(newLine);

myAccount.withdraw(30); //Testing to see if it will stop - it should not be allowed 

myAccount.setType(AccountType.Pension);
myAccount.withdraw(30);

myAccount.setType(AccountType.Saving);
printOut(newLine); 
myAccount.withdraw(10);

printOut(newLine); 

//printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
printOut("PART 5");

myAccount.deposit(150);

myAccount.setCurrencyType("NOK"); // Should do nothing
printOut(newLine);  


//printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
printOut("PART 6");
myAccount.setCurrencyType("SEK");
myAccount.setCurrencyType("USD");
myAccount.setCurrencyType("NOK");
printOut(newLine);  

//printOut("--- Part 7 ----------------------------------------------------------------------------------------------"); 
printOut("PART 7");
myAccount.deposit(12, "USD");
myAccount.withdraw(10, "GBP");
myAccount.setCurrencyType("CAD");
myAccount.setCurrencyType("INR");
myAccount.withdraw(150.11, "SEK");