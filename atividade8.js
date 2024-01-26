const prompt = require('prompt-sync')()

var nomeAluno = prompt("Digite o nome do aluno:");


var nota1 = parseFloat(prompt("Digite a nota 1 do aluno:"));
var nota2 = parseFloat(prompt("Digite a nota 2 do aluno:"));
var nota3 = parseFloat(prompt("Digite a nota 3 do aluno:"));

var media = (nota1 + nota2 + nota3) / 3;

var aprovado = media >= 8;


console.log("Nome do aluno: " + nomeAluno);
console.log("Média: " + media.toFixed(2));

if (aprovado) {
    console.log("Situação: Aprovado!");
} else {
    console.log("Situação: Reprovado.");
}