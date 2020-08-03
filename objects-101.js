let myBook = {
    title: '1984', 
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)


// Challange area

// name, age, location 

// Rando is 29 and lives in Tartu
// Increase age by 1 and print message again

let person = { 
    name: 'Rando',
    ages: 29,
    location: 'Tartu'
}

console.log(`${person.name} is ${person.ages} and lives in ${person.location}`)

person.ages = 30

console.log(`${person.name} is ${person.ages} and lives in ${person.location}`)