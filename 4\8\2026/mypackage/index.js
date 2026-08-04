const Math=require('./meumath');
const readline=require('readline');

const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("[1]Somar\n[2]Subtrair\n[3]Multiplicar\n[4]Dividir\n[5]Elevar\nEscolha uma das opções do menu: ", function(e){
    rl.question("Digite o primeiro número: ", function(a){
        rl.question("Digite o segundo número: ", function(b){
            a=Number(a);
            b=Number(b);
            e=Number(e);
            if (isNaN(a) || isNaN(b)) {
                console.log("Por favor, forneça dois números como argumentos.");
            rl.close();
            }else{
                if (e===1){
                    console.log("O resultado é: "+(Math.som(a,b)));
                }else if(e===2){
                    console.log("O resultado é: "+(Math.sub(a,b)));
                }else if(e===3){
                    console.log("O resultado é: "+(Math.mult(a,b)));
                }else if(e===4){
                    console.log("O resultado é: "+(Math.div(a,b)));
                }else if(e===5){
                    console.log("O resultado é: "+(Math.pot(a,b)));
                }else{
                    console.log(e+" não é uma opção válida.");
                }
            }
            rl.close();
        });
    });
});
