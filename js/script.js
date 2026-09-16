// Horários da loja em minutos desde 00:00, por dia da semana (0 = domingo).
const STORE_HOURS = {
  0: [[8 * 60, 13 * 60]],
  1: [
    [8 * 60, 12 * 60 + 30],
    [14 * 60, 20 * 60],
  ],
  2: [
    [8 * 60, 12 * 60 + 30],
    [14 * 60, 20 * 60],
  ],
  3: [
    [8 * 60, 12 * 60 + 30],
    [14 * 60, 20 * 60],
  ],
  4: [
    [8 * 60, 12 * 60 + 30],
    [14 * 60, 20 * 60],
  ],
  5: [
    [8 * 60, 12 * 60 + 30],
    [14 * 60, 20 * 60],
  ],
  6: [[8 * 60, 20 * 60]],
};

const DESKTOP_QUERY = window.matchMedia("(min-width: 1024px)");

function isStoreOpen(date = new Date()) {
  const minutes = date.getHours() * 60 + date.getMinutes();
  return STORE_HOURS[date.getDay()].some(
    ([opens, closes]) => minutes >= opens && minutes < closes,
  );
}

/* ---------- 1) Selo "Aberto / Fechado" em tempo real ---------- */
function setupStoreStatus() {
  const badge = document.getElementById("storeStatus");
  const text = document.getElementById("storeStatusText");
  if (!badge || !text) return;

  function update() {
    const open = isStoreOpen();
    badge.classList.toggle("is-closed", !open);
    text.textContent = open ? "Aberto agora" : "Fechado agora";
  }

  update();
  setInterval(update, 60 * 1000);
}

/* ---------- 2) Destaque da seção atual nos menus ---------- */
function setupScrollSpy() {
  const sections = [...document.querySelectorAll("[data-section]")];
  const links = document.querySelectorAll("[data-nav]");
  const sectionLabel = document.getElementById("currentSection");
  if (sections.length === 0) return;

  let current = null;

  function update() {
    // Distância do topo em que a seção passa a ser considerada "ativa"
    // (altura do cabeçalho fixo + folga).
    const offset = DESKTOP_QUERY.matches ? 240 : 120;
    let active = sections[0];

    sections.forEach((section) => {
      if (section.getBoundingClientRect().top - offset <= 0) active = section;
    });

    const reachedBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 2;
    if (reachedBottom) active = sections[sections.length - 1];

    if (active === current) return;
    current = active;

    links.forEach((link) => {
      const isActive = link.dataset.nav.split(" ").includes(active.id);
      link.classList.toggle("is-active", isActive);
      if (isActive) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });

    if (sectionLabel) sectionLabel.textContent = active.dataset.section;
  }

  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    },
    { passive: true },
  );
  window.addEventListener("resize", update);
  update();
}

document.addEventListener("DOMContentLoaded", () => {
  setupStoreStatus();
  setupScrollSpy();

  const year = document.getElementById("currentYear");
  if (year) year.textContent = new Date().getFullYear();
});
