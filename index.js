let NOME = prompt("Digite seu primeiro nome: ");
let SOBRENOME = prompt("Digite seu sobrenome: ");

let nomeCompleto = NOME + SOBRENOME;
alert(`Seu nome completo é: ${NOME + " " + SOBRENOME} \nSeu nome de catálogo é: ${SOBRENOME.toUpperCase()} ${NOME}`);