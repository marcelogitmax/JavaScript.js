/* Faça um algoritiom que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

média = (nota 1 + nota 2 + nota 3)/3

classificação:

-Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
-Média acima de 7, passou de semestre;
*/

const nota1 = 5; 
const nota2 = 3;
const nota3 = 7;

const media = (nota1 + nota2 + nota3)/3

if (media < 5){
    console.log ('Aluno Reprovado');
}
else if (media >=5 && media <=7) {
    console.log('Aluno em Recuperação');
}
else{
    console.log('Aluno Aprovado');
}
