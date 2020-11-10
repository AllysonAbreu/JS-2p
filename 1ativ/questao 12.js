
class Compras{
    idProduto;
    precoUnitario;
    quantidade;
};

//RESPOSTA QUESTAO 12 LETRAS "A" e "B"
let carrinhoCompras = [];
let imprimir = function (compra){
    carrinhoCompras.push(compra);
    console.table(carrinhoCompras);       
};

let compras1 = new Compras();
compras1.idProduto = 1;
compras1.precoUnitario = 10;
compras1.quantidade = 2;
console.log("\nImprimindo 1 Objeto.\n")
imprimir(compras1);

let compras2 = new Compras();
compras2.idProduto = 2;
compras2.precoUnitario = 10;
compras2.quantidade = 2;
console.log("\nImprimindo 2 Objeto.\n")
imprimir(compras2);

let compras3 = new Compras();
compras3.idProduto = 3;
compras3.precoUnitario = 10;
compras3.quantidade = 2;
console.log("\nImprimindo 3 Objeto.\n")
imprimir(compras3);

let compras4 = new Compras();
compras4.idProduto = 4;
compras4.precoUnitario = 10;
compras4.quantidade = 2;
console.log("\nImprimindo 4 Objeto.\n")
imprimir(compras4);

let compras5 = new Compras();
compras5.idProduto = 5;
compras5.precoUnitario = 10;
compras5.quantidade = 2;
console.log("\nImprimindo 5 Objeto.\n")
imprimir(compras5);

//RESPOSTA QUESTAO 12 LETRA "C"
let carrinhoCompras2 = carrinhoCompras.filter( ({quantidade}) => quantidade > 0 );
console.log("\nImprimindo Carrinho Filtrado.\n")
console.table(carrinhoCompras2);

//RESPOSTA QUESTAO 12 LETRA "D"
let somar = function (idProduto, quantidade){
    let aux = 0;
    for(let i = 0; i < idProduto; i++){
        let calc = quantidade + aux;
        aux = calc;
    }
    return aux;
}

let carrinhoSubtotal = carrinhoCompras.map(({idProduto, quantidade}) => {
    let obj = {
        idProduto,
        subTotal: somar(idProduto, quantidade)
    }
    return obj;
})
console.log("\nImprimindo Subtotal de produtos.\n")
console.table(carrinhoSubtotal);

//RESPOSTA QUESTAO 12 LETRA "E"
let valorTotal = carrinhoCompras.reduce(function( acumulador, {precoUnitario, quantidade}) {
    let valorProdutos = precoUnitario * quantidade;
    if( valorProdutos == 0) {
        return acumulador;
    }
    return valorProdutos + acumulador;
}, 0)
console.log("O valor total dos produtos é: R$ "+valorTotal+",00");


