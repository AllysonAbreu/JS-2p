//QUESTAO 5
console.log('\n\nQuestao 5')
let dataRecebida = '06/12/1997'

function removerCarcterbarra() {
  return dataRecebida.split('/')
}
function vericaMes() {
  var vetor = removerCarcterbarra();
  if(vetor[1]==01 || vetor[1]==1){
    return vetor[0].concat(' de janeiro de').concat(vetor[2]);
  }
  if(vetor[1]==02 || vetor[1]==2){
    return vetor[0].concat(' de fevereiro de').concat(vetor[2]);
  }
  if(vetor[1]==03 || vetor[1]==3){
    return vetor[0].concat(' de março de').concat(vetor[2]);
  }
  if(vetor[1]==04 || vetor[1]==4){
    return vetor[0].concat(' de abril de').concat(vetor[2]);
  }
  if(vetor[1]==05 || vetor[1]==5){
    return vetor[0].concat(' de maio de').concat(vetor[2]);
  }
  if(vetor[1]==06 || vetor[1]==6){
    return vetor[0].concat(' de junho de').concat(vetor[2]);
  }
  if(vetor[1]==07 || vetor[1]==7){
    return vetor[0].concat(' de julho de').concat(vetor[2]);
  }
  if(vetor[1]==08 || vetor[1]==8){
    return vetor[0].concat(' de agosto de').concat(vetor[2]);
  }
  if(vetor[1]==09 || vetor[1]==9){
    return vetor[0].concat(' de setembro de').concat(vetor[2]);
  }
  if(vetor[1]==10){
    return vetor[0].concat(' de outubro de').concat(vetor[2]);
  }
  if(vetor[1]==11){
    return vetor[0].concat(' de novembro de').concat(vetor[2]);
  }
  if(vetor[1]==12 ){
    return vetor[0].concat(' de dezembro de').concat(vetor[2]);
  }
}
console.log(vericaMes())
