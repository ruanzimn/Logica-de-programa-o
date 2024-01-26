const prompt = require('prompt-sync')()

let precoAVista = parseFloat(prompt("Digite o preço à vista do produto:"));


let numParcelas = parseInt(prompt("Digite o número de parcelas (3 ou 5):"));

let acrescimo = 0;

if (numParcelas === 3) {
    acrescimo = 0.10; // Acréscimo de 10% para 3 parcelas
} else if (numParcelas === 5) {
    acrescimo = 0.20; // Acréscimo de 20% para 5 parcelas
} else {
    console.log("Número de parcelas inválido. Por favor, escolha 3 ou 5.");
}


let totalAPagar = precoAVista * (1 + acrescimo);
let valorPrestacao = totalAPagar / numParcelas;

console.log("Preço total a pagar: R$ " + totalAPagar.toFixed(2));
console.log("Valor da prestação mensal: R$ " + valorPrestacao.toFixed(2));