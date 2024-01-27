const prompt = require('prompt-sync')()

var valorProduto = parseFloat(prompt("Digite o valor do produto:"));
var formaPagamento = parseInt(prompt("Digite a forma de pagamento (1 para à vista, 2 para à prazo):"));

var valorFinal;

switch (formaPagamento) {
    case 1:
       
        valorFinal = valorProduto - (valorProduto * 0.10);
        console.log("Valor final (à vista com desconto): R$ " + valorFinal.toFixed(2));
        break;
    case 2:
      
        valorFinal = valorProduto;
        console.log("Valor final (à prazo): R$ " + valorFinal.toFixed(2));
        break;
    default:
        console.log("Forma de pagamento inválida. Digite 1 para à vista ou 2 para à prazo.");
}