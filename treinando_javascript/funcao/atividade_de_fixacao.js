//EXERCICIOS 
// Escreva uma função que escreva o seu nome
function meuNome(name){
    console.log(name);
}

meuNome('Lucas');


// Escreva uma função para saber se você é maior de idade
function maiorDeIdade(idade){
    if (idade >= 18 ){
        console.log('Maior de idade');
    } else {
        console.log('Menor de idade');
    }
}

maiorDeIdade(15);


/*
TRASNFORME ESSE CÓDIGO EM FUNÇÕES

const produto = 100;
const debito = 0.1; 
const pixOuDinheiro = 0.15; 
const duasVezes = 0.1;

const formaDePagamento = "Débito";

if (formaDePagamento === "Débito"){
    const desconto = produto * debito;
    const calculo = produto - desconto;
    console.log("O valor do produto é de " + calculo); 
} else if (formaDePagamento === "PIX"){
    const desconto = produto * pixOuDinheiro;
    const calculo = produto - desconto;
    console.log("O valor do produto é de " + calculo); 
} else if (formaDePagamento === "Acima de duas vezes"){
    const desconto = produto * duasVezes;
    const calculo = produto + desconto;
    console.log("O valor do produto é de " + calculo); 
} else if (formaDePagamento === "Em duas vezes"){
    console.log("O valor do produto é de " + produto);
} else {
    console.log("Método de pagamento incorreto");
}
*/

function main(formaDePagamento){
    
    const produto = 100;
    const debito = 0.1; 
    const pixOuDinheiro = 0.15; 
    const duasVezes = 0.1;
    
    if (formaDePagamento === "Débito"){
        const desconto = produto * debito;
        const calculo = produto - desconto;
        console.log("O valor do produto é de " + calculo); 
    } else if (formaDePagamento === "PIX"){
        const desconto = produto * pixOuDinheiro;
        const calculo = produto - desconto;
        console.log("O valor do produto é de " + calculo); 
    } else if (formaDePagamento === "Acima de duas vezes"){
        const desconto = produto * duasVezes;
        const calculo = produto + desconto;
        console.log("O valor do produto é de " + calculo); 
    } else if (formaDePagamento === "Em duas vezes"){
        console.log("O valor do produto é de " + produto);
    } else {
        console.log("Método de pagamento incorreto");
    }
}

main('PIX');
