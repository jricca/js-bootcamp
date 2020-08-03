let number = 103.941

console.log(number.toFixed(1))

console.log(Math.round(number))
console.log(Math.floor(number))
console.log(Math.ceil(number))

let min = 1
let max = 5
let randomNum = Math.floor(Math.random() * (max -min) + 1) + min
// 10 - 20
console.log(randomNum)

// challange area
// 1 - 5 - true if correct, false if not correct


let makeGuess = function(guess) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max -min) + 1) + min
    return {
        random2: randomNum,
        random: randomNum === guess
        }
}

console.log(makeGuess(3).random2)