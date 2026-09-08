// ===== Menu mobile (hambúrguer) =====
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('navPrincipal');

menuToggle.addEventListener('click', () => {
  const aberto = nav.classList.toggle('is-aberto');
  menuToggle.setAttribute('aria-expanded', String(aberto));
});

// Fecha o menu ao clicar em um link (útil no celular)
nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-aberto');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// ===== Abas do cardápio (Petiscos / Pratos / Bebidas) =====
const abas = document.querySelectorAll('.aba');
const paineis = document.querySelectorAll('.lista-cardapio');

abas.forEach((aba) => {
  aba.addEventListener('click', () => {
    // Atualiza estado visual e ARIA das abas
    abas.forEach((a) => {
      a.classList.remove('is-ativa');
      a.setAttribute('aria-selected', 'false');
    });
    aba.classList.add('is-ativa');
    aba.setAttribute('aria-selected', 'true');

    // Mostra apenas o painel correspondente
    const alvoId = aba.dataset.alvo;
    paineis.forEach((painel) => {
      painel.hidden = painel.id !== alvoId;
    });
  });
});
