// função que recebe os valores do melhor combustível

var gas = 0;
var alc = 0;
var comb = 0.0;
var texto;
function melhorComb(a, g) {
    // atribuir valores das entradas
    alc = parseFloat(a);
    gas = parseFloat(g);

    //método de processamento
    comb = alc / gas;
    if (comb >= 0.7) {
        texto = "GASOLINA";
    }
    else {
        texto = "ALCOOL";
    }

    //saída dos resultados
    document.getElementById('combustivel').value = texto;

}



//Função para calcular valor do boleto
function calcBoleto(b, v, p) {
    var vencimento = v;
    var pagamento = p;
    var boleto = parseFloat(b);
    var diasVencidos = vencimento - pagamento;

    var total = boleto;

    if (pagamento > vencimento) {
        total = boleto + (boleto * (12.5 / 100));
    }

    else if (pagamento < vencimento) {
        total = boleto - (boleto * (8 / 100))
    }

    // if (pagamento > vencimento) {
    //     diasVencidos = parseFloat(b) * 1.25;
    //     console.log(diasVencidos);
    // }
    document.getElementById('valorBoleto').value = total;
}

// Função para descobrir a data com condicional composta
var dia = 0;
var resultado;
function verDia(d) {
    dia = parseInt(d);
    if (dia == 1) {
        resultado = 'Domingo';
    }
    else if (dia == 2) {
        resultado = 'Segunda-feira';
    }
    else if (dia == 3) {
        resultado = 'Terça-feira';
    }
    else if (dia == 4) {
        resultado = 'Quarta-feira';
    }

    else if (dia == 5) {
        resultado = 'Quinta-feira';
    }
    else if (dia == 6) {
        resultado = 'Sexta-feira';
    }
    else if (dia == 7) {
        resultado = 'Sábado';
    }
    else {
        resultado = 'Inválido!'
    }
    document.getElementById('diaSemana').value = resultado;
}


// Função SWITCH CASE para descobrir o dia da semana
var dia2 = 0;
var valor;
function verDia2(d) {
    dia2 = parseInt(d);
    switch (dia2) {
        case 1:
            valor = "DOMINGO";
            break;
        case 2:
            valor = "SEGUNDA-FEIRA";
            break;
        case 3:
            valor = "TERÇA-FEIRA";
            break;
        case 4:
            valor = "QUARTA-FEIRA";
            break;
        case 5:
            valor = "QUINTA-FEIRA";
            break;
        case 6:
            valor = "SEXTA-FEIRA";
            break;
        case 7:
            valor = "SÁBADO";
            break;
        default:
            valor = "INVÁLIDO!";
            break;
    }
    document.getElementById('diaSemana2').value = valor;
}


//Sistema de login usando função SE - IF
var user = "";
var pass = "";
function logar(u, p) {
    user = u;
    pass = p;

    if (user === "senai") {
        if (pass === "senai123") {
            window.alert("Entrada autorizada!")
            window.location.href = "index.html";
        }
        else {
            window.alert("Entrada Negada! Senha Incorreta!")
        }
    }
    else {
        window.alert("Entrada Negada! Usuário ou Senha Incorretos!")
    }
}



//Sistema de Login usando função ternária
var user1 = "";
var pass1 = "";
function logar2(u, p) {
    user1 = u;
    pass1 = p;
    if ((user1 == "senai") && (pass1 == "senai123")) {
        window.alert("Entrada Autorizada!")
        window.location.href = "index.html"
    }
    else if ((user1 == "senai") && (pass1 != "senai123")) {
        window.alert("Entrada Negada! Senha Incorreta!")
    }
    else if ((user1 != "senai") && (pass1 == "senai123")) {
        window.alert("Entrada Negada! Usuário Inválido!")
    }
    else {
        window.alert("Entrada Negada! Usuário ou Senha Incorretos!")
    }
}

//Função para avalição de candidato
function triagem(n, i, f, ni) {
    var nome = n;
    var idade = parseInt(i);
    var formacao = f;
    var nivelIngles = ni;


    if ((idade >= 18 && formacao == "completo") || (idade >= 18 && nivelIngles == "fluente")) {
        document.getElementById('resposta').value = nome + " - Próxima Fase";
    }

    else {
        document.getElementById('resposta').value = nome + " - Dispensado";
    }
}

//Função para calcular IMC
function calcularImc(a, p) {
    var altura = parseFloat(a);
    var peso = parseFloat(p);
    resultado = peso / (altura * 2);

    if (resultado < 18.5) {
        document.getElementById('resultadoCalculoImc').value = resultado.toFixed(2) + " - Magreza";
    }
    else if (resultado >= 18.5 && resultado <= 24.9) {
        document.getElementById('resultadoCalculoImc').value = resultado.toFixed(2) + " - Normal";
    }

    else if (resultado >= 25 && resultado <= 29.9) {
        document.getElementById('resultadoCalculoImc').value = resultado.toFixed(2) + " - Sobrepeso";
    }

    else if (resultado >= 30 && resultado <= 39.9) {
        document.getElementById('resultadoCalculoImc').value = resultado.toFixed(2) + " - Obesidade";
    }
    else if (resultado >= 40) {
        document.getElementById('resultadoCalculoImc').value = resultado.toFixed(2) + " - Obesidade Grave";
    }
}

//Função para calcular INSS
function calcularImcInss(s) {
    var salario = parseFloat(s);
        resultado = 0;

    if (salario <= 1518) {
        resultado = salario * (7.5 / 100);
    }

    else if (salario > 1518 && salario <= 2793.88) {
        resultado = salario * (9 / 100);
    }
    else if (salario > 2793.88 && salario <= 4190.83) {
        resultado = salario * (12 / 100);
    }
    else if (salario > 4190.83 && salario < 8157.41) {
        resultado = salario * (12 / 100);
    }

    document.getElementById('resultadoCalculoInss').value = resultado;

}