const prompt = require('prompt-sync')()

let valorCompra = parseFloat(prompt("Digite o valor total da compra:"));
let codigoComprador = parseInt(prompt("Digite o código do comprador (1 para cliente comum, 2 para funcionário, 3 para vip):"));

let desconto = 0;

switch (codigoComprador) {
    case 1:
      
        break;
    case 2:
       desconto = 0.10;
        break;
    case 3:
        desconto = 0.05;
        break;
    default:
        console.log("Código de comprador inválido. Por favor, escolha 1, 2 ou 3.");
}


let valorTotalPago = valorCompra - (valorCompra * desconto);


if (desconto > 0) {
    console.log("Valor total a ser pago com desconto: R$ " + valorTotalPago.toFixed(2));
} else {
    console.log("Valor total a ser pago: R$ " + valorCompra.toFixed(2));
}