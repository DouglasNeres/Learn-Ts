//: number, string, boolean...
let nome:string = "Developer"
let age:number = 17

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
 let tuple: [number, string, string, boolean[]] 
tuple = [5, "beleza", "legal", [false, true, false]]

//Object Literals:

const person: { nome:string, idade:number, apelido:string, character:boolean} = {
    nome: "Dev",
    idade: 18,
    apelido: "Programador",
    character: true
}

console.log(person)

//Any:
//Tipo aleatório, "dinâmico"
let random:any = 0

random = true
random = false
random = 777
random = "Aleatório"  

//Union Type:
//Define que o tipo pode ser um ou outra coisa, ou outra coisa...
let id :  string | boolean = true

id = "adress"

//Type Alias:
type myType = number | boolean
const type: myType = true
const other: myType = 999

//enum:
//Tamanho de Roupas (Size: Médio, Size: Pequeno)
enum Size{
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    name: "Camisa gola V",
    size: Size.G,
}

console.log(camisa)

//Literal Types:
//Valor literal para o Tipo

let teste: "valorQualquer" | null
//Outro valor não irá funcionar com o cód abaixo
//teste = "outroValor"
teste = "valorQualquer"
teste = null

//Funções;