//atv 3

let banco = []
banco.unshift('Maju')
console.log(banco)
banco.shift()
banco.unshift('Amanda')
console.log(banco)
banco.shift()
banco.unshift('Flavia')
console.log(banco)
banco.shift()
console.log(banco)

//atv 4

let devolucoes = []
const livro1 = {
    titulo: "Prova da Amanda",
    autor: "Amanda",
    atrasado: true
}
const livro2 = {
    titulo:"Oi menina, que hrs sao?",
    autor: "Maju",
    atrasado: true
};
const livro3 = {
    titulo: "Pega a bola de tenis de mesa",
    autor: "Flavia",
    atrasado: true
};
devolucoes.push(livro1,livro2,livro3)
console.log(devolucoes)
console.log(livro1)
console.log(livro2)
console.log(livro3)
const livroremovido = devolucoes.shift()
console.log(livroremovido)
const livroremovido2 = devolucoes.shift()
console.log(livroremovido2)
const livroremovido3 = devolucoes.shift()
console.log(livroremovido3)
console.log(devolucoes)

//atv 5
let idade = 11
if (idade <=12) {
    console.log("Tipo de ingresso: infantil")
}
else if( idade <=17) {
    console.log("Tipo de ingresso: adolescente")
}
else if( idade <=59) {
    console.log("Tipo de ingresso: adulto")
}
else{
    ("Tipo de ingresso: Sênior")
}



