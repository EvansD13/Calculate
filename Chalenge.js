const colors = require(`ansi-colors`)
const prompt = require(`prompt-sync`)

function calculate(a, b, operation){
    if (typeof(a) != "number" || typeof(b) != "number"){
        return "ERROR! Please submit valid numbers!"
    }
    if (operation === "+"){
        return a + b
    }else if(operation ==="-"){
        return a - b
    }else if(operation ==="*"){
        return a * b
    }else if(operation ==="/"){
        return a/b
    }else{
        return "ERROR! Please submit a valid operation"
    }
}



let operation = "-"//prompt("Please input an operation")

for(let i = 0; i < 5; i++){
    let n1 = Math.floor(Math.random() * 13)//prompt("Please input a value");
    let n2 =  Math.floor(Math.random() * 13)//prompt("Please input a second value");
    if (n1 === 12 || n2 === 12) {
        n1 = "wut" 
    }

    result = calculate(n1, n2, operation)
    result < 0 ? console.log(colors.green(`Answer: ${result}`)) : result > 0 ? console.log(colors.red(`Answer: ${result}`)): console.log(colors.yellow(result))
}

