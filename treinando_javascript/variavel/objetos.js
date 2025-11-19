// isso é um obejeto
const lucas = {
    nome: "Lucas Smith",
    idade: 30
};

// vai ser acionado no obejeto "const lucas"
lucas.altura = 1.82;
lucas.sexo = "masculino";

// o "lucas.sexo" vai ser apagado do objeto
delete lucas.sexo;

console.log(lucas.nome);
console.log(lucas.idade);
console.log(lucas);
