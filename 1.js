const prompt = require('prompt-sync')()

var nomeHospede = prompt("Digite o nome do hóspede:");


console.log("Bem-vindo, " + nomeHospede + "!");
console.log("Opções disponíveis:");
console.log("1. Fazer Check-in");
console.log("2. Chamar serviço de quarto");
console.log("3. Fazer pedido");
console.log("4. Fazer Check-out");


var escolha = parseInt(prompt("Digite o número da opção desejada:"));


switch (escolha) {
    case 1:
        console.log("Check-in realizado com sucesso. Aproveite sua estadia!");
        break;
    case 2:
        console.log("Serviço de quarto solicitado. Será atendido em breve.");
        break;
    case 3:
        console.log("Pedido realizado. Aguarde a entrega.");
        break;
    case 4:
        console.log("Check-out concluído. Obrigado pela visita!");
        break;
    default:
        console.log("Opção inválida. Por favor, escolha uma opção válida.");
}