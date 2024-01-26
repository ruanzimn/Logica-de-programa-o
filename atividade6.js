const prompt = require('prompt-sync')()
var A = parseInt(prompt("Digite o valor de A:"));
var B = parseInt(prompt("Digite o valor de B:"));


if (A === B) {

    var C = A + B;
    console.log("Os valores são iguais. A + B = " + C);
} else {
  
    var C = A * B;
    console.log("Os valores são diferentes. A * B = " + C);
}
