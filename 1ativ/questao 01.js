console.log('questao 1')
console.log('media do aluno')
var x = mediaNotas(10, 10, 10, 10);

//QUESTÃO 1
function mediaNotas() {
  var i;
  var soma = 0;
  for (i = 0; i < arguments.length; i++) {
    soma += arguments[i];
  }
  let media = soma/arguments.length
  if(media>=7){
    console.log('aluno aprovado media: '+media)
    return 
  }else if(media<=3){
    console.log('prova final media: '+media)
    return
  }else{
    console.log('reprovado media: '+media)
    return 
  }
}