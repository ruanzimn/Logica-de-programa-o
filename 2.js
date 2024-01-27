const prompt = require('prompt-sync')()

let operando1 = parseFloat(prompt("Digite o primeiro operando:"));
let operando2 = parseFloat(prompt("Digite o segundo operando:"));

console.log("Escolha a operação:");
console.log("1. Adição");
console.log("2. Subtração");
console.log("3. Multiplicação");
console.log("4. Divisão");


let escolhaOperacao = parseInt(prompt("Digite o número da operação desejada:"));

switch (escolhaOperacao) {
    case 1:
        let adi = operando1 + operando2;
        console.log("Resultado da Adição: " + adi);
        break;
    case 2:
        let sub = operando1 - operando2;
        console.log("Resultado da Subtração: " + sub);
        break;
    case 3:
        let resultado = operando1 * operando2;
        console.log("Resultado da Multiplicação: " + resultado);
        break;
    case 4:
        if (operando2 !== 0) {
            let resultado = operando1 / operando2;
            console.log("Resultado da Divisão: " + resultado);
        } else {
            console.log("Não é possível dividir por zero.");
        }
        break;
    default:
        console.log("Operação inválida. Por favor, escolha uma operação válida.");
}