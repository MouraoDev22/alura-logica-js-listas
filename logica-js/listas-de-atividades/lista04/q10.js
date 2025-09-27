// Lista de atividades 04 - Lógica de programação: mergulhe em programação com JavaScript - Alura

// 10. Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se 
// a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

let nota = Number (prompt ('Digite um número de 1 a 10:'));

while (nota > 10 || nota < 1 || isNaN (nota)) {
    nota = Number (prompt ('Digite um número de 1 a 10:'));
}

if (nota >= 7) {
    console.log ('Aprovado');
} else {
    console.log ('Reprovado');
}