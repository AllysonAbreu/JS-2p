

function mostrarPalavra(palavra) {
    for (let i = 0; i < palavra.length; i++) {
        console.log(palavra.substring(0, i + 1));
    }
    for (let i = palavra.length-1;  i>=0; i--) {
        console.log(palavra.substring(0, i));
      }
}
let palavra = 'IFPB'
mostrarPalavra(palavra)
