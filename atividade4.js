const prompt = require('prompt-sync')()

var numero1 = parseInt(prompt("Digite o primeiro número:"));
var numero2 = parseInt(prompt("Digite o segundo número:"));
var numero3 = parseInt(prompt("Digite o terceiro número:"))

media = (numero1 + numero2 + numero3)/3

console.log("A média é: ",media)