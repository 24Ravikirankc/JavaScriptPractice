let x = 10;
let y = 5;

console.log(x * y)
console.log(x + y)
console.log(x % y)
console.log(x / y)
//console.log(x++)
//console.log(--y)
console.log(y++)
console.log(++x)
console.log(++y)
console.log(x == y)
console.log(x === y)
console.log(x > y)
console.log(y <= x)

const isValidNum = x > 8 && 8 > y
console.log(isValidNum)

const isValidNum1 = x > 8 || 8 > y
console.log(isValidNum1)

const isValid = true
console.log(!isValid)

const isValid1 = false
console.log(!isValid1) //not operator

console.log('Ravi' + 'kiran')

const isEven = 10 % 2 === 0 ? 'Number is Even' : 'Number is odd'
console.log(isEven)
