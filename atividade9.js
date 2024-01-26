const prompt = require('prompt-sync')()

var numero1 = parseFloat(prompt("Digite o primeiro número real:"));
var numero2 = parseFloat(prompt("Digite o segundo número real:"));

var codigoSelecao = parseInt(prompt("Digite o código de seleção (1, 2 ou 3):"));


var resultado;

switch (codigoSelecao) {
    case 1:
        resultado = numero1 + numero2;
        console.log("Resultado da adição: " + resultado);
        break;
    case 2:
        resultado = numero1 * numero2;
        console.log("Resultado da multiplicação: " + resultado);
        break;
    case 3:
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
            console.log("Resultado da divisão: " + resultado);
        } else {
            console.log("Não é possível dividir por zero.");
        }
        break;
    default:
        console.log("Código de seleção inválido. Digite 1, 2 ou 3.");
}