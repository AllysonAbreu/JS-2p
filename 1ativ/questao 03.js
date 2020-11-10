function calcularIR(salario, aliquota, parcela){

    let tax = (salario * aliquota) - parcela;
    console.log(tax);

}


let salario = 4664.68;

if(salario >= 1903.99 && salario <= 2826.65){

    var imposto = calcularIR(salario, 0.075, 142.80);

} else if(salario >= 2826.66 && salario <= 3751.05){

    var imposto = calcularIR(salario, 0.15, 354.80);

} else if(salario >= 3751.06 && salario <= 4664.68){

    var imposto = calcularIR(salario, 0.225, 636.13);

} else if(salario > 4664.68){

    var imposto = calcularIR(salario, 0.275, 869.36);
  
} else{
    
    console.log('Você não contribui com Imposto de Renda.')

}

