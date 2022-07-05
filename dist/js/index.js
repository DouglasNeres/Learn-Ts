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
//Funções:
function multiplic(a, b) {
    return a + b;
}
console.log(multiplic(333, 777));
function speak(nome1, nome2) {
    return `Olá ${nome1} ${nome2}, nome Bonitão`;
}
console.log(speak("Douglas", "Neres"));
//Não retorna nada...
function abc(msgn) {
    console.log(msgn);
}
abc("Mensagem...");
function greeting(name, greet) {
    if (greet) {
        console.log(`Hey ${greet} ${name}`);
        return;
    }
    console.log(`Hey ${name}`);
}
greeting('Programmer');
greeting('Developer', 'Senhor');
function calc(numbers) {
    return numbers.n1 ** numbers.n2;
}
console.log(calc({ n1: 9, n2: 2 }));
const someNumbers = {
    n1: 5,
    n2: 3
};
console.log(calc(someNumbers));
//Narrowing:
//Checagem de tipos
function something(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}
something(7);
something(true);
//Generics 
function showArrays(arr) {
    arr.forEach((item) => {
        console.log(`Item: ${item}`);
    });
}
const a = [1, 0, 1, 0];
const b = ['D', 'E', 'V'];
showArrays(a);
showArrays(b);
//Classes 
class user {
    constructor(nome, idade, aprovado) {
        this.nome = nome;
        this.idade = idade;
        this.aprovado = aprovado;
    }
    showName() {
        console.log(`O nome do user é ${this.nome}`);
    }
    showAproveed() {
        console.log(`Aprovação foi ${this.aprovado}`);
    }
    showAge(canShow) {
        if (canShow) {
            console.log(`Idade do User é: ${this.idade}`);
            return;
        }
        console.log('Informação Restrita ou Não Encontrada!');
    }
}
const usuario = new user("Robscleilton", 30, true);
console.log(usuario);
usuario.showName();
usuario.showAproveed();
usuario.showAge(true);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é: ${this.brand}`);
    }
}
const fuscao = new Car("Fiat", 4);
fuscao.showBrand();
