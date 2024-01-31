let prompt = require('prompt-sync')();

let valor;

valor = parseFloat(prompt("Digite o valor da tabuada: "));

while(valor<=0){
    valor = parseFloat(prompt("O valor precisa ser maior que zero! "));
}

    for(i=0; i<=10;i++){

       calculo = (valor*i);
        
        console.log("A tabuada é:", valor,'*', i,'=',calculo)
}