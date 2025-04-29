function pegaNome() {
   let nome = "Mariana"
   return nome
}
function exibirNome(){
    let resultado = pegaNome()
    console.log(resultado)
}
exibirNome()
//parametros
function somaNumeros(numero1, numero2 = 0){
    console.log( numero1 + numero2)
}
somaNumeros(5, 19)
let nome = "Mariana"
console.log(nome.length)
console.log(nome.toUpperCase())
console.log(nome.toLocaleLowerCase())
console.log(nome.includes("M"))
console.log(nome)
console.log(nome.trim())

let numero = 5.44433
console.log(numero.toFixed(2))
console.log(isNaN(numero))

console.log(Math.floor(Math.random()*11))
console.log(Math.ceil(Math.random()*11))
console.log(Math.round(Math.random()*11))

let dataAtual = new Date()
console.log(dataAtual)



//if (nome.length < 3)

//const somaNumeros = (numero1+numero2) => numero1 + numero2
