let name = '  Rando  '

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Includes method
let password = 'abc123password098'
console.log(!password.includes('password'))

// Trim
console.log(name.trim())

// Challange area

// isValidPassword
// length is more than 8 - and it doesn't contain the word password



let isValidPassword = function(password) {
    return password.length > 8 && !password.includes('password')
   }


console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abd123!@@£@$€'))
console.log(isValidPassword('asdfsdfsakljpassword'))

