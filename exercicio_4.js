/*Formula IMC:

IMC = peso/ (altura ^ 2)

IMC EM ADULTOS CONDIÇÃO:
    -18.5 ABAIXO DO PESO
    -ENTRE 18.5 E 25 PESO NORMAL
    -ENTRE 25 E 30 ACIMA DO PESO
    -ENTRE 30 E 40 OBESO
    ACIMA DE 40 OBESIDADE GRAVE
*/

const peso = 99;
const altura = 1.89;

const imc = peso/ (Math.pow(altura,2));

if (imc < 18.5){
    console.log('Abaixo do Peso');
    console.log(imc.toFixed(2));
}

else if (imc >= 18.5 && imc <25){
    console.log('Peso normal');
    console.log(imc.toFixed(2));
}

else if (imc >=25 && imc <30){
    console.log('acima do peso');
    console.log(imc.toFixed(2));
}

else if (imc >=30 && imc <40){
    console.log('Obesidade');
    console.log(imc.toFixed(2));
}

else{
    console.log('Obesidade Grave');
    console.log(imc.toFixed(2));
}
    


