const prompt = require('prompt-sync')()
var sexo = prompt("Digite o sexo (M para Masculino, F para Feminino):").toUpperCase();
var pesoUsuario = parseFloat(prompt("Digite o peso do usuário em kg:"));

var pesoIdeal;

if (sexo === "M") {
    pesoIdeal = (pesoUsuario - 100) * 0.9;
    console.log("Opção escolhida: Masculino");
} else if (sexo === "F") {
    pesoIdeal = (pesoUsuario - 100) * 0.85;
    console.log("Opção escolhida: Feminino");
} else {
    console.log("Opção inválida. Por favor, escolha M ou F para o sexo.");
}

if (pesoIdeal !== undefined) {
    console.log("Peso ideal: " + pesoIdeal.toFixed(2) + " kg");
}