const projetos = [
  {
    nome: "SIGEC-Amarante",
    descricao: "Sistema Integrado de Gestão Educacional da Cooperativa de Amarante",
    link: "https://www.figma.com/make/gVZ92WX11o9Y56n2Gu4NQ5/Sistema-Integrado-de-Gest%C3%A3o?fullscreen=1&t=gvmEPuOY7BEf5JNi-1"
  },
];

const lista = document.getElementById("lista-projetos");

function renderizarProjetos() {
  lista.innerHTML = "";

  if (projetos.length === 0) {
    lista.innerHTML = "<p>Nenhum projeto cadastrado.</p>";
    return;
  }

  projetos.forEach(projeto => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${projeto.nome}</h3>
      <p>${projeto.descricao}</p>
      <a href="${projeto.link}" target="_blank" class="btn">Ver projeto</a>
    `;

    lista.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", renderizarProjetos);