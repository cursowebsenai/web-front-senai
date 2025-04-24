var nome;
var sexo;

function formPascoa(n, s) {
    nome = n;
    sexo = s;
    localStorage.setItem('nome', nome);
    localStorage.setItem('sexo', sexo);
    window.location.href = 'pascoa.html';
}