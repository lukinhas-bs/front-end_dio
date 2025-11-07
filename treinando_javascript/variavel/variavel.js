console.log("hello world!")

// O 'let' é para declarar um variavel
// Boas práticas: quando declarar uma variavel evite números, acentos e espaços. Se for uma variável com duas palavras, a primeira palavra é minuscula e a segunda palavra começa maiúscula.
let nickname = "lukinhasbs"
let poteCafe = 'café pilão'
let poteAcucar = "Açucar cristal"

// Concatenando uma mensagem fixa + uma variável
console.log("Bem vindo" + nickname)
console.log ("Na cozinha da vovó hoje tem: " + poteAcucar + " " + poteCafe)

// Nesse caso, não vai dá erro, pois quando a variavel é declarada com "let", ela pode ter ser seu valor alterado
poteCafe = 'café 3 corações'
console.log ("Na cozinha da vovó hoje tem: " + poteAcucar + " " + poteCafe)



// O 'const' é para declarar uma constante
const notificacao = "pokemon go"

console.log("Bem vindo" + notificacao)
console.log(notificacao + "é um jogo legal")

// Isso vai dá erro, pois para alterar o valor da constante é na própria constante, não criando uma nova constante.
const notificacao = "digimon go"
