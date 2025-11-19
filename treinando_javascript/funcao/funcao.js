// função 1
function teste(){
    console.log('teste');
}
teste();

// função 2
function sayMyName (name){
    console.log('Your name is ' + name)
}
sayMyName('Lucas');

// função 3
function quadrado (valor){
    return valor * valor
} 
// uma outra maneira de chamar a função
const quadradoDeDez = quadrado(20);
console.log(quadradoDeDez); 


/* função 4
em um código, a função principal é sempre chamada 'main'

TRANSFORME ESSE CÓDIGO EM FUNÇÕES

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
 */ 

function calculoImc(peso, altura){
    return peso/(altura * altura)
}

function classificarImc (imc){
    if (imc < 18.5){
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25){
        return "Peso normal";
    } else if (imc >= 25 && imc < 30){
        return "Acima do peso";
    } else if (imc >= 30 && imc < 40){
        return "Obeso";
    } else {
        return "Obesidade grave";
    }
}

function main(){
    const peso = 68.7;
    const altura = 1.60;

    const imc = calculoImc(peso, altura);
    console.log(classificarImc (imc));
}

main();
