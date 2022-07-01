//: number, string, boolean...

let nome:string = "Developer"
let age:number = 22

console.log(`nome: ${nome}, age: ${age}`);

// Inferência:
let n = 17

// Annotation:
let n2: number = 18

// Tipos Básicos:
let nick: string = "Scott"
let num: number = 999
let certo: boolean = true

console.log(typeof nick, typeof num, typeof certo)

//Só se pode alterar por conta de ambos serem Strings caso o contrário a alteração não é possível por não ser do mesmo tipo.
nick = "Sammmers"
console.log(nick)

// Object:
let myNums: number[] = [1, 3, 7, 11, 22]
let myNames: string[] = ['Neres', 'da', 'Silva']
myNums.push(5)
console.log(myNums)
console.log(myNums.length)
console.log(nick.toUpperCase())

// Tuplas:
