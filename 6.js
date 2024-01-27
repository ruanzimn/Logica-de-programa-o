const prompt = require('prompt-sync')()

let numNascimentos = parseInt(prompt("Digite o número de crianças nascidas:"));
let numObitos = parseInt(prompt("Digite o número de óbitos:"));
let numHabitantes = parseInt(prompt("Digite o número de habitantes:"));


var indicador = prompt("Digite 'N' para calcular a taxa de natalidade ou 'M' para calcular a taxa de mortalidade:").toUpperCase();


switch (indicador) {
    case 'N':
        let taxaNatalidade = (numNascimentos * 1000) / numHabitantes;
        console.log("Taxa de Natalidade: " + taxaNatalidade.toFixed(2) + " por mil habitantes.");
        break;
    case 'M':
        let taxaMortalidade = (numObitos * 1000) / numHabitantes;
        console.log("Taxa de Mortalidade: " + taxaMortalidade.toFixed(2) + " por mil habitantes.");
        break;
    default:
        console.log("Opção inválida. Digite 'N' para taxa de natalidade ou 'M' para taxa de mortalidade.");
}