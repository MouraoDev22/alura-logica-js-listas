// Lista de atividades 02 - Lógica de programação: mergulhe em programação com JavaScript - Alura

// 2. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let numero = Number (prompt ('Digite um número:'));

while (isNaN (numero)) {
    numero = Number (prompt ('Digite um número:'));
}

if (numero > 0) {
    alert ('Este é um número positivo.');
} else if (numero == 0) {
    alert ('Este é um número neutro.');
} else {
    alert ('Este é um número negativo.');
}