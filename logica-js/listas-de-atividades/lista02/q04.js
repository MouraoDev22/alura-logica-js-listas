// Lista de atividades 02 - Lógica de programação: mergulhe em programação com JavaScript - Alura

// 4. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string 
// para incluir o valor do saldo.

let saldoAnterior = Number (1000);
let compra = Number (prompt (`Seu saldo total é de ${saldoAnterior}, digite o valor da sua compra:`));

while (isNaN (compra)) {
    compra = Number (prompt (`Seu saldo total é de ${saldoAnterior}, digite o valor da sua compra:`));
}

let saldoNovo = saldoAnterior - compra;
alert (`Seu saldo disponível é de ${saldoNovo}.`);