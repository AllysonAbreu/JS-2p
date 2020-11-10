


function areaDoCirculo(raio){
    const Pi = Math.PI;
    let raioAoQuadrado = Math.pow(raio, 2);
    var area = Pi * raioAoQuadrado;
    console.log(area)
    console.log(Math.round(area)); /*arredonda o numero para o mais proximo*/
    console.log(Math.ceil(area)); /* retorna o maior inteiro maior ou menor que a area */
    console.log(Math.floor(area)); /* retorna o menor inteiro dentro o valor da area */
};
var raio = 4
areaDoCirculo(raio)

