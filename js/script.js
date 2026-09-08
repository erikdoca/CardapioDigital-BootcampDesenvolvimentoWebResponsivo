// ===== Menu mobile (hambúrguer) =====
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("navPrincipal");

menuToggle.addEventListener("click", () => {
  const aberto = nav.classList.toggle("is-aberto");
  menuToggle.setAttribute("aria-expanded", String(aberto));
});

// Fecha o menu ao clicar em um link (útil no celular)
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-aberto");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// ===== Abas do cardápio (Petiscos / Pratos / Bebidas) =====
const abas = document.querySelectorAll(".aba");
const paineis = document.querySelectorAll(".lista-cardapio");

abas.forEach((aba) => {
  aba.addEventListener("click", () => {
    // Atualiza estado visual e ARIA das abas
    abas.forEach((a) => {
      a.classList.remove("is-ativa");
      a.setAttribute("aria-selected", "false");
    });
    aba.classList.add("is-ativa");
    aba.setAttribute("aria-selected", "true");

    // Mostra apenas o painel correspondente
    const alvoId = aba.dataset.alvo;
    paineis.forEach((painel) => {
      painel.hidden = painel.id !== alvoId;
    });
  });
});

/* Selo "Aberto agora / Fechado agora"
   Bar do Seu Tonho — terça a domingo, das 17h à meia-noite.
   Segunda-feira fechado. */
(function () {
  var selos = document.querySelectorAll("[data-selo]");
  if (!selos.length) return;

  function estaAberto(agora) {
    var dia = agora.getDay(); // 0 = domingo, 1 = segunda ... 6 = sábado
    var hora = agora.getHours();

    if (dia === 1) return false; // segunda-feira: fechado
    return hora >= 17; // aberto das 17h até 23h59 (fecha à 00h)
  }

  function atualizar() {
    var aberto = estaAberto(new Date());

    selos.forEach(function (selo) {
      selo.classList.toggle("is-aberto", aberto);
      selo.classList.toggle("is-fechado", !aberto);

      var texto = selo.querySelector(".selo__texto");
      if (texto) texto.textContent = aberto ? "Aberto agora" : "Fechado agora";
    });
  }

  atualizar();
  setInterval(atualizar, 60000); // reavalia a cada minuto, sem recarregar a página
})();
