

console.log("\nQuestao 8\n");

codigoCesar('a ligeira raposa marrom saltou sobre o cachorro cansado');

function codigoCesar ( text ) {
    let letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let textoCodificado = '';
    for ( let k = 0 ; k < text.length ; k++ ) {
        for ( let l = 0 ; l < letras.length ; l++ ) {
            if ( text[k].toUpperCase() == letras[l].toUpperCase() ) {
                textoCodificado += letras[(l + 3) % 26].toUpperCase();
                l = letras.length;
            } else if ( l == letras.length - 1 ) {
                textoCodificado += text[k].toUpperCase();
            }
        }
    }

    console.log(textoCodificado);
}