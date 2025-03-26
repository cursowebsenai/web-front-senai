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
    var resultadoImc = peso / (altura * 2);

    if (resultadoImc < 18.5) {
        " - Magreza";
    }
    else if (resultadoImc > 18.5) {
        " - Normal";
    }

    else if (resultadoImc >= 25) {
        " - Sobrepeso";
    }

    else if (resultadoImc >= 30) {
        " - Obesidade";
    }
    else if (resultadoImc >= 40) {
        " - Obesidade Grave";
    }

    document.getElementById('resultadoCalculoImc').value = resultadoImc.toFixed(2);
}


//Função para calcular INSS
function calcularInss(a, c, s, d) {
    var nome = a;
    var cargo = c;
    var salario = parseFloat(s);
    var dependentes = parseInt(d);
    var vt;
    var va;
    var resultadoInss = 0;
    var resultadoIrrf = 0;
    var ps;

    //Cálculo do vale transporte
    vt = salario * (6 / 100);
    document.getElementById('vTransporte').value = vt.toFixed(2);

    //Cálculo do vale alimentação
    va = salario * (3.8 / 100);
    document.getElementById('vAlimentacao').value = va.toFixed(2);

    //quantidade de dependetes
    if (dependentes == NaN) {
        ps = 187.90;
    }
    else {
        ps = (dependentes + 1) * 187.90;
    }
    document.getElementById('pSaude').value = ps.toFixed(2);

    //Calcular INSS
    if (salario <= 1518) {
        resultadoInss = salario * (7.5 / 100);
    }

    else if (salario > 1518) {
        resultadoInss = salario * (9 / 100);
    }
    else if (salario > 2793.88) {
        resultadoInss = salario * (12 / 100);
    }
    else if (salario > 4190.83 && salario < 8157.41) {
        resultadoInss = salario * (12 / 100);
    }
    else {
        resultadoInss = salario * (14 / 100);
    }
    document.getElementById('inss').value = resultadoInss.toFixed(2);


    //Calcular IRRF
    if (salario <= 2259.20) {
        resultadoIrrf = 0;
    }
    else if (salario > 2559.20) {
        resultadoIrrf = salario * (7.5 / 100);
    }
    else if (salario > 22826.65) {
        resultadoIrrf = salario * (15 / 100);
    }
    else if (salario > 3751.05 && salario < 44664.68) {
        resultadoIrrf = salario * (22 / 100);
    }
    else {
        resultadoIrrf = salario * (27 / 100);
    }
    document.getElementById('irrf').value = resultadoIrrf.toFixed(2);

    //Soma total dos descontos
    var totalDescontos = vt + va + resultadoIrrf + resultadoInss;
    document.getElementById('totalDescontos').value = totalDescontos.toFixed(2);

    //Soma do salario total liquido
    var salLiquido = salario - totalDescontos - ps;
    document.getElementById('salarioLiquido').value = salLiquido.toFixed(2);

}