/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = 'Fred'
const s2 = 'fed'
const s3 = 'Ted'
const s4 = 'bread'
const s5 = 'and'

// Concatenate the string variables into one new string

const newString = s1 + ' ' + s2 + ' ' + s3 + ' ' + s4 + ' ' + s5

// Print out the concatenated string

console.log(newString)

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = 'java'
const part2 = 'script'

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const part1Camel =
	part1.slice(0, part1.length - 1) + part1[part1.length - 1].toUpperCase()
const part2Camel =
	part2.slice(0, part2.length - 1) + part2[part2.length - 1].toUpperCase()

console.log('part1Camel: ', part1Camel)
const sentence = part1Camel + part2Camel

// Print the cameLtaiL-formatted string
console.log('sentence: ', sentence)

/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84

// Calculate the tip (15% of the bill total)
const tip = billTotal * 0.15

// Print out the tipAmount
console.log('tip: ', tip)

/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const randomNumber = Math.floor(Math.random() * 10) + 1

// Print the generated random number
console.log('randomNumber: ', randomNumber)

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true
const b = false

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b
console.log('expresion1: ', false)
console.log('solution1: ', expression1)

const expression2 = a || b
console.log('expresion2: ', true)
console.log('solution2: ', expression2)

const expression3 = !a && b
console.log('expresion3: ', false)
console.log('solution3: ', expression3)

const expression4 = !(a && b)
console.log('expresion4: ', true)
console.log('solution4: ', expression4)

const expression5 = !a || !b
console.log('expresion5: ', true)
console.log('solution5: ', expression5)

const expression6 = !(a || b)
console.log('expresion6: ', false)
console.log('solution6: ', expression6)

const expression7 = a && a
console.log('expresion7: ', true)
console.log('solution7: ', expression7)
