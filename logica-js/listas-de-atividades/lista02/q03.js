// Lista de atividades 02 - Lógica de programação: mergulhe em programação com JavaScript - Alura

// 3. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre 
// "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

let pontuação = Number (prompt ('Digite um número de 0 a 150:'));

while (isNaN (pontuação)) {
    pontuação = Number (prompt ('Digite um número de 0 a 150:'));
}

if (pontuação >= 100 && pontuação <= 150) {
    alert ('Parabêns, você venceu!');
} else {
    alert ('Tente novamente para ganhar.');
}