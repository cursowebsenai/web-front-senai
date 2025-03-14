// criando função no js
function calcularArea(x) {
    window.alert('O valor da area ao quadrado: ' + Math.pow(x, 2));
}

// Função de soma da calculadora

var valor1 = 0;
var valor2 = 0;
function somar(x, y) {
    valor1 = parseInt(x);
    valor2 = parseInt(y);
    var res = valor1 + valor2;
    window.alert("O valor da soma dos valores é: " + res);
}

function subtrair(x, y) {
    valor1 = parseInt(x);
    valor2 = parseInt(y);
    var res = valor1 - valor2;
    window.alert("O valor da subtração dos valores é: " + res);
}

function multiplicar(x, y) {
    valor1 = parseInt(x);
    valor2 = parseInt(y);
    var res = valor1 * valor2;
    window.alert("O valor da multiplicação dos valores é: " + res);
}

function dividir(x, y) {
    valor1 = parseInt(x);
    valor2 = parseInt(y);
    var res = valor1 / valor2;
    window.alert("O valor da divisão dos valores é: " + res);
}

function calcularMedia(b1, b2, b3, b4) {
    var n1 = parseFloat(b1);
    var n2 = parseFloat(b2);
    var n3 = parseFloat(b3);
    var n4 = parseFloat(b4);

    var mediaFinal = (n1 + n2 + n3 + n4) / 4;
    // window.alert("Médial final: " + mediaFinal);
    console.log("Media final: " + mediaFinal);

    // saida de resultado para o usuario
    document.getElementById('media').value = mediaFinal;
}

function calcularPerimetro(l, a) {
    var largura = parseFloat(l);
    var altura = parseFloat(a);
    var per = (altura * 2) + (largura * 2);
    document.getElementById('perimetro').value = per;
}

function calcularVolumeCaixa(l, a, p) {
    var largura = parseFloat(l);
    var altura = parseFloat(a);
    var profundidade = parseFloat(p);
    var vol = largura * altura * profundidade;
    document.getElementById('volume').value = vol;
}

function calcularVolumeCilindro(a, r) {
    var altura = parseInt(a);
    var raio = parseInt(r);
    var vol = Math.PI * a * (r * Math.pow);
    document.getElementById('volumeCil').value = vol;
}