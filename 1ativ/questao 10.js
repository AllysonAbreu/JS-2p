/*10. Por meio do const array = [1, 22, 3, 14, 5, 36] crie um script para gerar: A e B
a) A soma dos valores pares de array usando o reduce e o filter
▪ array.filter(e => !(i & 1))                                                                                         (72)
▪ reduce((s, v) => s + v) */

const valores = [1, 22, 3, 14, 5, 36]

console.log('valores armazenados', valores)

function pares (valor) {
    return valor % 2 == 0
}

console.log('valores pares', valores.filter(pares))

const par = valores.filter(pares)
const soma = (total, valorAtual) => total + valorAtual

console.log('soma dos valores pares', par.reduce(soma))