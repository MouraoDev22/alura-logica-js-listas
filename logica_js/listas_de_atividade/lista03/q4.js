// Lista de atividades 03 - Lógica de programação: mergulhe em programação com JavaScript - Alura

// 4. Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando 
// um loop while no console do navegador.

let numeroEscolhido = Number(prompt("Digite um número entre 1 e 1000:"));

while (numeroEscolhido < 1 || numeroEscolhido > 1000 || isNaN (numeroEscolhido)) {
  numeroEscolhido = Number(prompt("Digite apenas números entre 1 e 1000:"));
}

let contador = 0;
while (contador <= numeroEscolhido) {
  console.log(contador);
  contador++;
}