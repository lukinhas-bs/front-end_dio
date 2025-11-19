// for
/* 
Entendendo o passo a passo:

            for (let index = 0; index < array.length; index++){}

'let index = 0' - essa é a parte de onde vai começar o programa. 
EX: "index = 0" - significa que o laço vai começar na posição 0 (o primeiro elemento do array).

"index < array.length"- Essa parte é verificada antes de cada repetição, ou seja, enquanto essa expressão for verdadeira, o laço continua executando.
"array.length" - representa o tamanho do array (quantos elementos ele tem).
EX: se o array tem 3 elementos (length = 3), o laço vai rodar com index = 0, 1 e 2. Quando index chegar a 3, a condição será falsa (3 < 3 → falso) e o laço para.

"index++" - é o mesmo que index = index + 1.
*/

const nome = 'Jean Grey'

for (let i = 0; i < nome.length; i++) {
    
    console.log(nome[i]);
}


for (let i = 0; i < nome.length; i++) {
    const letra = nome[i];
    console.log(letra)
    
}

const notas = []

notas.push(5);
notas.push(1);
notas.push(8);
notas.push(4);
notas.push(3);
notas.push(2);

let soma = 0 

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota
}

const media = soma / notas.length;
console.log(media)



// Crie um programa que dado um número imprima a sua tabuada.
for (let i = 1; i <= 10; i++) {
    console.log(i * 4);   
}


// Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let i = 0; i < numeros.length; i++) {
    const par = numeros[i] % 2 === 0;
    if (par){
        console.log(numeros[i])
    }
      
}
