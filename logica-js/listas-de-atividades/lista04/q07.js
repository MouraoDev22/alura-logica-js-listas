// Lista de atividades 04 - Lógica de programação: mergulhe em programação com JavaScript - Alura

// 7. Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if
// para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

let idade = Number (prompt ('Digite sua idade:'));

while (isNaN (idade)) {
    idade = Number (prompt ('Digite sua idade:'));
}

if (idade >= 18) {
    console.log ('Você é maior de idade');
} else {
    console.log ('Você é menor de idade');
}