const prompt = require('prompt-sync')()

var numero1 = parseInt(prompt("Digite o primeiro número:"));
var numero2 = parseInt(prompt("Digite o segundo número:"));

// Realiza as operações matemáticas
soma = numero1 + numero2;
subtracao = numero1 - numero2;
multiplicacao = numero1 * numero2;
divisao = numero1 / numero2;

// Exibe os resultados
console.log("Resultado da Soma: " + soma);
console.log("Resultado da Subtração: " + subtracao);
console.log("Resultado da Multiplicação: " + multiplicacao);
console.log("Resultado da Divisão: " + divisao);
