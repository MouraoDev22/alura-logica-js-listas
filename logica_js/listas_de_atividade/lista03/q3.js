// Lista de atividades 03 - Lógica de programação: mergulhe em programação com JavaScript - Alura

// 3. Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando 
// um loop while no console do navegador.

let contador = Number (prompt ('Digite um número de 1 a 1000:'));

while (contador < 1 || contador > 1000 || isNaN (contador)) {
  contador = Number(prompt("Digite apenas números entre 1 e 1000:"));
}

while (contador >= 0) {
  console.log(contador);
  contador--;
}