"use strict";
//: number, string, boolean...
let nome = "Developer";
let age = 22;
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
