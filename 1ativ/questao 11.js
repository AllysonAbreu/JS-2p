//QUESTAO 11
let empressas = [
    {nome:'samsung',ValorDeMercado:50, CEO: 'Kim Hyun Suk', ano: 1938},
    {nome:'microsoft',ValorDeMercado:415, CEO: 'Satya Nadella', ano: 1975},
    {nome:'intel',ValorDeMercado:177, CEO: 'Brian Krzanich', ano: 1968},
    {nome:'facebook',ValorDeMercado:383, CEO: 'mark zuckerberg', ano: 2004},
    {nome: 'Spotify', ValorDeMercado:30, CEO: 'Daniel Ek', ano: 2006},
    {nome:'apple',ValorDeMercado:845, CEO:'tim cook', ano: 1976}
]
 
  console.log('\n\n\questão 11 letra a)')
  function filtro2000(obj) {
    return obj.ano >= 2000
  }
  
  function retornodasempressasde2000() {
   var emp = empressas.filter(filtro2000)
   for (let index = 0; index < emp.length; index++) {
     console.log(emp[index].nome+' ano '+emp[index].ano)
   }
  }
  retornodasempressasde2000()
  
  console.log('\n\n\nquestao 11 letra b)')
  
  function imprimeResultado() {
    var empr = empressas.map(function(objEm) {
      return objEm.CEO+ '..... '+objEm.nome
  });
  for (let index = 0; index < empr.length; index++) {
    console.log(empr[index])
    
  }
  }
  imprimeResultado()
  console.log('\n\n\questão 11 letra c)')
  let ValTotal = empressas.reduce(function(total, numero){
    return total + numero.ValorDeMercado;
  }, 0);
  console.log(ValTotal)
  
  
  console.log('\n\n\nconcurso')
  