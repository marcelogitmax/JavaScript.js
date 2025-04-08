
/* Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal de aetiqueta e a escolha da condição de pagamento.
utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado.

Código Condição de pagamento:
1- Á vista débito, recebe 10% de desconto;
2- Á vista no Dinheiro PIX, recebe 15% de desconto;
3- Em duas vezes, preço normal de etiqueta sem juros;
4-Acima de duas vezes, preço normal de etiqueta mais  juros de 10%;
*/


function aplicarDisconto (valor,desconto){
    return valor - (valor*(desconto/100));
}

const valor = 100;
const formaDePagamento = 2;


if (formaDePagamento === 1){
    console.log (aplicarDisconto(valor,10));
}

else if (formaDePagamento === 2)
    {
    console.log (aplicarDisconto (valor, 15));
}

else if (formaDePagamento === 3)
    {
    console.log = valor;
}

else { (formaDePagamento === 4)
    console.log ( valor +(valor * 0.10));
}