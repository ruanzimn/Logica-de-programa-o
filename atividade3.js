const prompt = require('prompt-sync')()

let idade = parseInt(prompt("Digite sua idade:"));

if (idade >= 18){
    console.log("Maior de idade")
}else {
    console.log("Menor de idade")
}


