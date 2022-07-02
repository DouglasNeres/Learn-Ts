"use strict";
//: number, string, boolean...
let nome = "Developer";
let age = 17;
console.log(`nome: ${nome}, age: ${age}`);
// Inferência:
let n = 17;
// Annotation:
let n2 = 18;
// Tipos Básicos:
let nick = "Scott";
let num = 999;
let certo = true;
console.log(typeof nick, typeof num, typeof certo);
//Só se pode alterar por conta de ambos serem Strings caso o contrário a alteração não é possível por não ser do mesmo tipo.
nick = "Sammmers";
console.log(nick);
// Object:
let myNums = [1, 3, 7, 11, 22];
let myNames = ['Neres', 'da', 'Silva'];
myNums.push(5);
console.log(myNums);
console.log(myNums.length);
console.log(nick.toUpperCase());
// Tuplas:
let tuple;
tuple = [5, "beleza", "legal", [false, true, false]];
//Object Literals:
const person = {
    nome: "Dev",
    idade: 18,
    apelido: "Programador",
    character: true
};
console.log(person);
//Any:
//Tipo aleatório, "dinâmico"
let random = 0;
random = true;
random = false;
random = 777;
random = "Aleatório";
//Union Type:
//Define que o tipo pode ser um ou outra coisa, ou outra coisa...
let id = true;
id = "adress";
const type = true;
const other = 999;
//enum:
//Tamanho de Roupas (Size: Médio, Size: Pequeno)
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.G,
};
console.log(camisa);
//Literal Types:
//Valor literal para o Tipo
let teste;
//Outro valor não irá funcionar com o cód abaixo
//teste = "outroValor"
teste = "valorQualquer";
teste = null;
//Funções;
