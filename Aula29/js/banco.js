var saldo = 5000.00;
var nome = "Willian Fruttero"
var dep = 0;
var saq = 0.0;
var valorAtual = saldo;

function logarBanco(a, c) {
    var agencia = a;
    var conta = c;

    if (agencia == "" || conta == "") {
        window.alert("Informe a Conta e a Agência!");
    }
    else if (agencia == "1234-5" && conta == "0001-2") {
        document.getElementById('cliente').value = nome;
        document.getElementById('saldo').value = saldo.toFixed(2);
        document.getElementById('saldoAtual').value = saldo.toFixed(2);
    }

    else {
        window.alert("Entrada não autorizada!");
    }
}

function depositar(v) {
    dep = parseFloat(v);

    if (dep <= 0 || dep == "") {
        window.alert("Digite um valor válido para o deposito!");
    }
    else {

        saldo = saldo + dep; //incremento do saldo
        window.alert("Depósito realizado com sucesso! valor de R$" + dep.toFixed(2));
        document.getElementById('saldoAtual').value = saldo;
    }
}

function sacar(v) {
    saq = parseFloat(v);
    if (saq > saldo) {
        window.alert("Saldo insuficiente!")
        document.getElementById('saldoAtual').value = saldo;
    }
    else if (saq == "" || saq <= 0) {
        window.alert("Digite um valor válido para o saque")
    }

    else {

        window.alert("Saque realizado com sucesso! valor de R$" + saq.toFixed(2));
        document.getElementById('saldoAtual').value = saldo;
        saldo = saldo - saq; //decremento do saldo
    }
}