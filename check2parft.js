/*

1. Faça um programa que receba três inteiros e diga qual deles é o maior e qual o menor?

2. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um algoritimo que pergunte a 
idade de uma pessoa e diga se ela pode doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E (&&)

3. Faça um programa que peça um valor e mostre na tela se o valor é positivo ou negativo

4. Faça um programa para a leitura de duas notas de um aluno.  
    A mensagem “Aprovado”, se a média alcançada for maior ou igual a 7;
    A mensagem “Aprovado com Distinção”, se a média for igual a 10;
    A mensagem “Reprovado” se a média for menor de do que 7;

*/

//exerc 01
function numinteiro (numb1 , numb2 , numb3){

if (numb1 > numb2 && numb1 > numb3){
    return numb1
}
else if (numb2 > numb1 && numb2 > numb3){
    return numb2
}
else {
    return numb3}
}

console.log (numinteiro (4 , 5 , 1))

// exerc02

let idade = 65

if(idade >= 18 && idade <= 67){
    console.log("Você pode doar sangue")
}
else {
    console.log("Não está permitido")
}
    
// exerc 03

let valor = -1

if(valor >= 0){
    console.log("O valor é positivo")
}else {
    console.log("O valor é negativo")
}

// exerc 04

function media (nota1 , nota2){


if ((nota1 + nota2) / 2 === 10){
    return "Aprovado com Distinção"
}else if ((nota1 + nota2) / 2 >= 7){
    return "Aprovado"
}else {
    return "Reprovado"
}
}
console.log(media (5 , 5))