
// let myAccount = {
//    name: 'Rando',
//    expenses: 0,
//    income: 0
// }

// let otherAccount = myAccount
// otherAccount.income = 1000

// let addExpense = function(account, amount) {
//    account.expenses = account.expenses + amount
//    console.log(account)
//  }

// addIncome

// resetAccount

// getAccountSummary
// Account for Rando has €900. $1000 in income, $100 in expenses.

// addIncome
// addExpense
// getAccountSummary
// resetAccount
// getAccountSummary


let myAccount = {
    name: 'Rando',
    expenses: 0,
    income: 0
}

let addIncome = function(account, amount) {
    account.income = account.income + amount
}

addIncome(myAccount, 300)

let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount
}


 
let resetAccount = function(account) {
    account.income = 0
    account.expenses = 0
}

getAccountSummary = function(account) {
    return `Account for ${account.name} has $${account.income - account.expenses}. $${account.income} in income, $${account.expenses} in expenses.` 
}

console.log(getAccountSummary(myAccount))
