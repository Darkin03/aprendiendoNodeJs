// import repl from 'node:repl'
// repl.start()

// console.log('My %s has %d ears', 'cat', 2);
// %s format a variable as a string
// %d format a variable as a number
// %i format a variable as its integer part only
// %o format a variable as an object

import readline from 'node:readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Hi ${answer}!`)
  rl.close()
})
