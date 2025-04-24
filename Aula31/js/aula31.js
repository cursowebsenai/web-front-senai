//LGPD
document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptButton = document.getElementById("accept-cookies");


    // Verificar se o usuário ja aceitou os cookies
    if (!localStorage.getItem("cookiesAccepted")) {
        cookieBanner.style.display = "block";
    }
    acceptButton.addEventListener("click", function () {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.style.display = "none";
    });
})


// Cadastrar tabela
const form = document.getElementById('dataForm');
const tableBody = document.getElementById('tableBody');
const data = [];
form.addEventListener('submit', function (event) {
    event.preventDefault();//Evita o reload da página
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    console.log("nome", name, "idade", age);

    //Adiciona os dados ao array
    data.push({ name, age });

    // Limpa a tabela antes de preencher novamente
    tableBody.innerHTML = '';

    for (var i = 0; i < data.length; i++) {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const ageCell = document.createElement('td');

        nameCell.textContent = data[i].name;
        ageCell.textContent = data[i].age;

        row.appendChild(nameCell);
        row.appendChild(ageCell);
        tableBody.appendChild(row);
    }

    // Limpa os campos do formulário
    form.reset();
})