const colors = require(`ansi-colors`);
const prompt = require(`prompt-sync`)();
const fn = require(`./Chalenge.js`);

let op = prompt("Please input an operation: ");
let n1 = prompt("Please submit a number: ");
let n2 = prompt("Please submit a second number: ");

let result = fn.calculate(n1, n2, op);

result < 0 ? console.log(colors.green(`Answer: ${result}`)) : result > 0 ? console.log(colors.red(`Answer: ${result}`)): console.log(colors.yellow(result))


