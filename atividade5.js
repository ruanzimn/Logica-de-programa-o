const prompt = require('prompt-sync')()

var salario = parseFloat(prompt("Digite o salario:"));

novoSalario = salario * 1.1

console.log("O novo salario é: ", novoSalario)