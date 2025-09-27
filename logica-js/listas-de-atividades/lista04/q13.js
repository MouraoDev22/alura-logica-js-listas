// Lista de atividades 04 - Lógica de programação: mergulhe em programação com JavaScript - Alura

// 13. Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

let faixa = Math.floor (Math.random() * 3);
let numAleatorio;

if (faixa === 0) {
    numAleatorio = Math.floor (Math.random() * 10) + 1;      
} else if (faixa === 1) {
    numAleatorio = Math.floor (Math.random() * 90) + 11;    
} else {
    numAleatorio = Math.floor (Math.random() * 900) + 101;   
}

console.log (numAleatorio);