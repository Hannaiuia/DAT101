"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

const AccountType = {
    Normal: "Brukskonto",
    Saving: "Sparekonto",
    Credit: "Kreditkonto",
    Pension: "Pensionskonto"
};

const CurrencyTypes = {
    NOK:{value: 1.0000, name: "Norske kroner", denomination: "kr"},
    EUR:{value: 0.0985, name: "Europeriske euro", denomination: "€"},
    USD:{value: 0.1891, name: "United States dollar", denomination: "$"},
    GBP:{value: 0.0847, name: "Pound sterling", denomination: "£"},
    INR:{value: 7.8389, name: "Indiske rupee", denomination: "₹"},
    AUD:{value: 0.1581, name: "Australske dollar", denomination: "A$"},
    PHP:{value: 6.5189, name: "Fillippinske peso", denomination: "₱"},
    SEK:{value: 1.0580, name: "Svenske kroner", denomination: "kr"},
    CAD:{value: 0.1435, name: "Canadiske dollar", denomination: "C$"},
    THB:{value: 3.3289, name: "Thai baht", denomination: "฿"}
}; 

class TAccount {
    #type;
    #balance;
    #withdrawCount;
    #currencyType;

    constructor(aType) {
        this.#type = aType;
        this.#balance = 0;
        this.#withdrawCount = 0;
        this.#currencyType = CurrencyTypes.NOK;
    }

    toString() {
        return this.#type; 
    }

    setType(aType) {
        let output = "Account type is changed from " + this.#type; 
        this.#type = aType; 
        this.#withdrawCount = 0; 
        output += " to " + this.#type; 
        printOut(output); 
    }

    getBalance(){
        return this.#balance; 
    }

    deposit(aAmount, aType = CurrencyTypes.NOK) {
        const newAmount = aAmount / this.#currencyConvert(aType); 
        this.#balance += newAmount; 
        this.#withdrawCount = 0;
        let output = " There has been a deposit of: " + aAmount + " " + aType.name + ", new balance is: "; 
        output += this.#balance.toFixed(2); 
        output += this.#currencyType.denomination; 
        printOut(output); 
    }

    withdraw(aAmount, aType = CurrencyTypes.NOK) {
      let canWithdraw = true; 
      let output = ""; 
      const newAmount = aAmount / this.#currencyConvert(aType);
      
      switch (this.#type) {
        case AccountType.Saving:
            if (this.#withdrawCount < 3) {
                this.#withdrawCount++;
                canWithdraw = true;
            }else{
                canWithdraw = false;
                output = "Cannot withdraw more than 3 times from " + this.#type;
            }
            break;
                case AccountType.Pension:
                canWithdraw = false;
                output = "Cannot withdraw from " + this.#type; 
                break;
     }

     if (canWithdraw) {
        this.#balance -= newAmount;
        output = "The withdrawal is: " + aAmount + " " + aType.name + " , the new balance is: ";
        output += this.#balance.toFixed(2);
        output += aType.denomination;
        }
        
        printOut(output);
    }   

    setCurrencyType(aNewCurrencyType){
        if(this.#currencyType === aNewCurrencyType){
            return;
        }

        this.#balance = this.#balance * this.#currencyConvert(aNewCurrencyType);
        let output = "The account currency has been changed from ";
        output += this.#currencyType.name + " to " + aNewCurrencyType.name + ". ";
        output += newLine + "New balance is ";
        output += this.#balance.toFixed(2) + aNewCurrencyType.denomination;
        this.#currencyType = aNewCurrencyType;
        printOut(output);
     }

        #currencyConvert(aType){
            return CurrencyTypes.NOK.value / this.#currencyType.value * aType.value;
        }
    }


//Part 1
printOut("Part 1"); 
const accountTypesList = Object.values(AccountType).join(","); 
printOut("" + accountTypesList); 
printOut(newLine); 

//Part 2 
printOut("Part 2")

let myAccount = new TAccount(AccountType.Normal); 
printOut("My account = " + myAccount.toString()); 

myAccount.setType(AccountType.Saving);
printOut("MyAccount = " + myAccount.toString());
printOut(newLine); 

//Part 3
printOut("Part 3"); 

myAccount.deposit(100);
myAccount.withdraw(25);
printOut("My account balance is: " + myAccount.getBalance());
printOut(newLine);

//Part 4
printOut("Part 4"); 

myAccount.deposit(25);
printOut(newLine);

myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);
printOut(newLine);

myAccount.withdraw(30);
printOut(newLine);

myAccount.setType(AccountType.Pension);
myAccount.withdraw(25);
printOut(newLine);

myAccount.setType(AccountType.Normal);
myAccount.withdraw(10);
printOut(newLine);

//Part 5 
printOut("Part 5"); 
myAccount.deposit(150); 
printOut(newLine);

//Part 6
printOut("Part 6"); 
myAccount.setCurrencyType(CurrencyTypes.SEK);
myAccount.setCurrencyType(CurrencyTypes.USD);
myAccount.setCurrencyType(CurrencyTypes.NOK);
printOut(newLine);

//part 7
printOut("Part 7"); 
myAccount.deposit(12, CurrencyTypes.USD);
myAccount.withdraw(10, CurrencyTypes.GBP);
myAccount.setCurrencyType(CurrencyTypes.CAD);
myAccount.setCurrencyType(CurrencyTypes.PHP);
myAccount.withdraw(97.32, CurrencyTypes.EUR);

