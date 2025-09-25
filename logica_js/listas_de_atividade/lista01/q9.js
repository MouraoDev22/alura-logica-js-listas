// Lista de atividades 01 - Lógica de programação: mergulhe em programação com JavaScript - Alura

// 9. Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.

let idade = Number (prompt ('Qual é a sua idade?'));

while (isNaN (idade)) {
    idade = Number (prompt ('Qual é a sua idade?'));
}