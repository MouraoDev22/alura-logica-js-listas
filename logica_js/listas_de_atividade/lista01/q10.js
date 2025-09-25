// Lista de atividades 01 - Lógica de programação: mergulhe em programação com JavaScript - Alura

// 10. Agora, para validar a idade que capturamos no desafio 09, caso a idade seja maior ou igual
// que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".

let idade = Number (prompt ('Qual é a sua idade?'));

while (isNaN (idade)) {
    idade = Number (prompt ('Qual é a sua idade?'));
}

if (idade1 >= 18) {
    alert ('Pode tirar a habilitação!');
} else {
    alert ('Não pode tirar a habilitação!');
}