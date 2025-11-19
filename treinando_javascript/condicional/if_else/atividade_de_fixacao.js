/*
O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;
*/ 
const pesoKG = 68.7;
const alturaM = 1.60;

const imc = pesoKG/(alturaM * alturaM)

if (imc < 18.5){
    console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 25){
    console.log("Peso normal");
} else if (imc >= 25 && imc < 30){
    console.log("Acima do peso");
} else if (imc >= 30 && imc < 40){
    console.log("Obeso");
} else {
    console.log("Obesidade grave");
}


/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/ 

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
