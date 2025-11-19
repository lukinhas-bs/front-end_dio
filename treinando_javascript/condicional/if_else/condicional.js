const numero = 2;

// '%' pede o resto da fração, igual no python
const numeroPar = (numero%2) === 0 

if (numeroPar) {
    console.log("Par")
}

// Essa "!" é a negação, ou seja, ele converte esse booleano no oposto dele
if (!numeroPar) {
    console.log("Impar")
}

// Outra forma de fazer essa condicional
if (numeroPar) {
    console.log("Par");
} else {
    console.log("Impar");
}
