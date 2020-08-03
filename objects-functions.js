let myBook = {
    title: '1984', 
    author: 'George Orwell',
    pageCount: 326
} 

let otherBook = {
    title: 'A Peoples History', 
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function(book) {

    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long `
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)
console.log(otherBookSummary.summary)

// Challange area 
// create function - take fahrenheit in - return object with all three

let sun = function(star) {
    let conCelsius = (star -32) * 5 / 9
    let conKelvin = (star + 459.67) * 5 / 9
    return {
        temp: `The temperature is ${star} Fahrenheit, ${conCelsius} Celsius and ${conKelvin} Kelvin`,
        fer: star,
        cel: conCelsius,
        kel: conKelvin
    }
}

let allTemps = sun(30)
let giveKel = sun(30)


console.log(giveKel)
console.log(allTemps)





