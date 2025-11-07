let nome = prompt("Digite o seu nome: ");
let nivel = parseInt(prompt("Digite a sua quantidade de XP: "));

if (nivel < 1000){
    console.log("Ferro")
} else if (nivel > 1000 && nivel < 2000){
    console.log("Bronze")
} else if (nivel >2000 && nivel < 5000){
    console.log("Prata")
} else if (nivel > 5000 && nivel < 7000){
    console.log("Ouro")
}  else if (nivel > 7000 && nivel < 8000){
    console.log("Platina")
} else if (nivel > 8000 && nivel < 9000){
    console.log("Ascendente")
}  else if (nivel > 9000 && nivel < 10000){
    console.log(" Imortal")
} else if (nivel > 10000){
    console.log("Radiante")
}

console.log("O Herói de nome " + nome + " está no nível de " + nivel)
