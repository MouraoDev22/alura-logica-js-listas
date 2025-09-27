// Lista de atividades 04 - Lógica de programação: mergulhe em programação com JavaScript - Alura

// 8. Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. 
// Use if-else para imprimir a respectiva mensagem.

let numero = Number (prompt ('Digite um número:'));

while (isNaN (numero)) {
    numero = Number (prompt ('Digite um número:'));
}

if (numero > 0) {
    alert ('Este é um número positivo.');
} else if (numero == 0) {
    alert ('Este número é o número 0.');
} else {
    alert ('Este é um número negativo.');
}