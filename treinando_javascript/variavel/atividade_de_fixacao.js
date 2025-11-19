/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - preço do combustivel
2 - gasto médio de combustível do carro por KM
3 - distância em KM da viagem

*/
const combustivel = 5.79;

const kmPorLitro = 10;

let distancia = 100

const valorDaViagem = distancia/kmPorLitro*combustivel;

console.log("O valor gasto na viagem foi de " + valorDaViagem)
