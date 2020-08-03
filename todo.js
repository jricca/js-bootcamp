const todos = ['sleep', 'eat', 'dream', 'leave', 'feel']

todos.splice(2, 1)
todos.push('clean your room')
todos.shift()

console.log(`You have ${todos.length} todos:`)

todos.forEach(function(item, index) {
    const num = index + 1
    console.log(`${num}. ${item}`)
})
