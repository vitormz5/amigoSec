let amigos = [];

function adicionar() {
  // Recuperar nome inserido
  let amigo = document.getElementById("nome-amigo");
  // Se não  inserir nada, acusa erro
  if (amigo.value == "") {
    alert("Nome inválido inserido");
    return;
  }
  // Se o nome inserido já estiver na lista, acusa erro
  if (amigos.includes(amigo.value)) {
    alert("Erro, esse nome já foi adicionado");
    return;
  }
  // Recupera a lista de amigos
  let lista = document.getElementById("lista-amigos");
  // Adiciona o amigo inserido no array
  amigos.push(amigo.value);
  // Adicionar o nome na lista (visual)
  if (lista.textContent == "") {
    lista.innerHTML =
      lista.innerHTML + `<p id="lista-amigos">${amigo.value}</p>`;
  } else {
    lista.textContent = lista.textContent + ", " + amigo.value;
  }
  amigo.value = "";
}
// Acusa erro se adicionar menos de 4 nomes
function sortear() {
  if (amigos.length < 4) {
    alert("Adicione pelo menos 4 nomes ");
    return;
  }
  // Embaralha o array
  embaralha(amigos);
  let sorteio = document.getElementById("lista-sorteio");

  // Faz a disposição de quem tirou quem no amigo secreto
  // O último pegará o primeiro da lista
  for (let i = 0; i < amigos.length; i++) {
    // Amigos length - 1 pra comparar com o último do array
    if (i == amigos.length - 1) {
      sorteio.innerHTML = sorteio.innerHTML + amigos[i] + " --> " + amigos[0];
    } else {
      sorteio.innerHTML =
        sorteio.innerHTML + amigos[i] + " --> " + amigos[i + 1] + "<br>";
    }
  }
}

function embaralha(lista) {
  // Fisher-Yates
  for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);

    // atribuição via destructuring
    [lista[indice - 1], lista[indiceAleatorio]] = [
      lista[indiceAleatorio],
      lista[indice - 1],
    ];
  }
}

// Resetar a lista
function reiniciar() {
  amigos = [];
  document.getElementById("lista-amigos").innerHTML = "";
  document.getElementById("lista-sorteio").innerHTML = "";
}
