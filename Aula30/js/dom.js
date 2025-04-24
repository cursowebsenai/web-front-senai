// manipulação da página via DOM
function noturno() {
    document.getElementById('modo').style.backgroundColor = "black";
    document.getElementById('modo').style.color = "white";
}

function normal() {
    document.getElementById('modo').style.backgroundColor = "white";
    document.getElementById('modo').style.color = "black";
}

var flag = 0; //variável que guarda o estado da lampada

function controleLampada() {
    if (flag == 0) {
        flag = 1;
        document.getElementById('lamp').src = "img/on.png";
    }
    else {
        flag = 0;
        document.getElementById('lamp').src = "img/off.png";
    }
}