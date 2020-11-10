//QUESTAO 13
let resultadoConcurso = [
    {candidato: "Renata Soares", nota: 7.8, idade: 28},
    {candidato: "Neyde Cruz", nota: 10, idade: 22},
    {candidato: "Enzo Gabriel", nota: 5.5, idade: 19},
    {candidato: "Marcia Villareal", nota: 9.8, idade: 21},
    {candidato: "Carla Pontes", nota: 8, idade: 19},
    {candidato: "João Batista", nota: 6, idade: 25},
  ]
  console.log('\n\nquestao 13 letra a')
  //QUESTAO 13 LETRA A)
  function filterNota(obj) {
    return obj.nota >= 7.0
  }
  function oredemAlfabetica(a,b) {
    if (a.candidato.toUpperCase() < b.candidato.toUpperCase())
       return -1;
    if (a.candidato.toUpperCase() > b.candidato.toUpperCase())
      return 1;
    return 0;
  }
  function RelacaoAprovados() {
   var aprov = resultadoConcurso.filter(filterNota)
   aprov.sort(oredemAlfabetica)
   for (let index = 0; index < aprov.length; index++) {
     console.log('nome: '+aprov[index].candidato+' nota: '+aprov[index].nota)
   }
  }
  RelacaoAprovados()
  console.log('\n\n\nquestao 13 letra b')
  //QUESTAO 13 B)
  resultadoConcurso.sort(function(a,b) {
    return a.nota > b.nota ? -1 : a.nota > b.nota ? 1 : 0;
  });
  function Situacao() {
    let situacao = resultadoConcurso.map(function(valor,index) {
    if(valor.nota <=7.0){
      return 'Nome: '+valor.candidato +' Situação: Desclassificado';
    }else if(valor.nota >= 7.0){
      if(index == 0 || index==1 || index ==2){
        return 'Nome: '+valor.candidato +' Situação: aprovado';
      }else{
        return 'Nome: '+valor.candidato+' dituação: Homologado'
      }
    }
  })
  for (let index = 0; index < situacao.length; index++) {
    console.log(situacao[index])
    }
  }
  Situacao()
  
  console.log('\n\nmedia do concurso questao 13 letra c)')
  //QUESTAO 13 LETRA C
  let media = resultadoConcurso.reduce(function(total, numero){
     return total + numero.nota/resultadoConcurso.length;
  }, 0);
  console.log('Media do concurso: '+media.toFixed(2))