// Lista de atividades 04 - Lógica de programação: mergulhe em programação com JavaScript - Alura

// 6. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos
// de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

let valor1 = Number (prompt ('Digite um valor:'));

while (isNaN (valor1)) {
    valor1 = Number (prompt ('Digite um valor:'));
}

let valor2 = Number (prompt ('Digite outro valor:'));

while (isNaN (valor2)) {
    valor2 = Number (prompt ('Digite outro valor:'));
}

let resultado = valor1 - valor2;

console.log (`A diferença de ${valor1} e ${valor2} é igual a ${resultado}.`);