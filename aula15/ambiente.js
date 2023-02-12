let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} pssiçoes`)
let pos = num.indexOf(10)
if (pos == -1) {
    console.log(`O Valor nao foi encontrado!`)
}else {
    console.log(`O valoe 8 esta na posição ${pos}`)

}

