/*Formula IMC:

IMC = peso/ (altura ^ 2)

IMC EM ADULTOS CONDIÇÃO:
    -18.5 ABAIXO DO PESO
    -ENTRE 18.5 E 25 PESO NORMAL
    -ENTRE 25 E 30 ACIMA DO PESO
    -ENTRE 30 E 40 OBESO
    ACIMA DE 40 OBESIDADE GRAVE
*/
function calcularImc (peso,altura) {
    return  peso / Math.pow(altura,2);
    console.log(imc);
}

function classificarImc(imc) {
    if (imc < 18.5){
        return 'Abaixo do Peso';
       
    }
    
    else if (imc >= 18.5 && imc <25){
        return 'Peso normal';
       
    }
    
    else if (imc >=25 && imc <30){
        return 'acima do peso';
       
    }
    
    else if (imc >=30 && imc <40){
        return 'Obesidade';
       
    }
    
    else{
        return 'Obesidade Grave';
       
    }
        
}

function main (){
    /*essas são as variaveis*/
    const peso = 99;
    const altura = 1.89;

    const imc = calcularImc(peso,altura);
    console.log(classifciar(imc));

    
}

main();




