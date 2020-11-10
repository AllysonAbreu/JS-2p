


function imprimirIniciais(nomes) {
    for (let i = 0; i<nomes.length; i++) {
        if (nomes[i]!='e' && nomes[i]!='do' && nomes[i]!='da' && nomes[i]!='dos' && nomes[i]!='das' && nomes[i]!='de' && nomes[i]!='di' && nomes[i]!='du') {
            var inicial = nomes[i].charAt(0)
            console.log(inicial.toUpperCase())
        }
    }
}

var nome = 'maria das graças pimenta'
const nomes = nome.split(' ')
console.log(nomes)
imprimirIniciais(nomes)

