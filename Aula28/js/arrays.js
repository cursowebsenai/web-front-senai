//Exemplo de Arrays - Vetor | Matriz
function vetor1() {
    var cores = [];
    cores[0] = "Azul";
    cores[1] = "Verde";
    cores[2] = "Amarelo";
    cores[3] = "Vermelho";
    window.alert(cores.length);

    cores = ["Azul", "Verde", "Amarelo", "Vermelho"]
}

function vetor2() {
    frutas = ["açaí", "maçã", "abacate", "goiaba", "pêra", "melancia"]
    window.alert(frutas[5]);
    window.alert(frutas);
}

function vetor3() {
    cursos = new Array("Python", "Java", "C#", "React", "Angular", "Power BI")
    window.alert(cursos.length);
    window.alert(cursos);
    window.alert(cursos[1]);
    cursos.unshift(window.prompt("Informe o novo valor"));
    window.alert(cursos);
    cursos.push("Bolo de Páscoa");
    window.alert(cursos);
    window.alert(cursos.length);

    cursos.pop(cursos);//remove o último valor da lista do vetor
    window.alert(cursos)

    cursos.shift(cursos);//remove o primeiro valor da lista do vetor
    window.alert(cursos)

    window.alert(cursos.indexOf("Java"));//mostra o indice de um vetor

    cursos.splice(2, 2);//remove de qualquer posição (num posição, qtd a ser deletada)
    window.alert(cursos);
}


function incremento1() {
    var valor1 = 10;
    window.alert("Novo valor =" + valor1);

    valor1 = 20;
    window.alert("Valor =" + valor1);


    // incremento tipo1
    valor1 = valor1 + 10;
    window.alert("Valor incrementado =" + valor1);


    // incremento tipo 2
    valor1 += 50;
    window.alert("Valor =" + valor1);

    // incremento tipo 3
    valor1++;
    window.alert("Valor =" + valor1);
}

function decremento1() {
    var valor2 = 152;
    window.alert("Valor = " + valor2);

    valor2 = 238;
    window.alert("Novo Valor = " + valor2);

    //decremento tipo 1
    valor2 = valor2 - window.prompt("Informe quto deseja diminuir");
    window.alert("Novo Valor decrementado 1= " + valor2);

    //cremento tipo 2
    valor2 += 10;
    window.alert("Novo Valor decrementado = " + valor2);

    //decremento tipo 3
    valor2--;
    window.alert("Valor = " + valor2);
}

//laços (loop)
function para() {
    for (var i = 1; i <= 10; i++) {
        window.alert("Valor do i: " + i);
    }
    window.alert("Fim do laço FOR");
}


function enquanto() {
    var k = 0;
    while (k < 10) {
        window.alert("Valor do k: " + k);
        k++;
    }
    window.alert("Fim do laço WHILE");
}

function fazerEnquanto() {
    var j = 1;

    do {
        window.alert("Valor do j: " + j)
        j++;
    }
    while (j <= 10) {
        window.alert("Fim do laço DO WHILE");
    }
}