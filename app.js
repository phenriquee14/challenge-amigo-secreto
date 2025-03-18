//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []; // Array para armazenar os nomes dos amigos

// Função para adicionar amigo ao array
function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value.trim();

    if (nomeAmigo === "") {
        alert("Por favor, digite um nome antes de adicionar.");
        return;
    }//Validação para garantir que o campo não esteja vazio

    amigos.push(nomeAmigo); // Adiciona o nome ao array

    // Limpa o campo de entrada
    document.getElementById("amigo").value = "";

    // Atualiza a lista de amigos exibida
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpa a lista antes de atualizar

    amigos.forEach(function(amigo) {
        let itemLista = document.createElement("li"); // Cria um novo item de lista
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Não há amigos disponíveis para sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpa a área de resultados antes de exibir o sorteio

    let itemResultado = document.createElement("li");
    itemResultado.textContent = " Amigo Sorteado: " + amigoSorteado + "";
    resultado.appendChild(itemResultado);

   
}

