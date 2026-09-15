
const CART_STORAGE_KEY = 'realSupermercadoCart';

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

function formatBRL(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 1) Menu mobile ---------- */
  const menuToggle = document.getElementById('menuToggle');
  const siteNav = document.getElementById('siteNav');

  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.textContent = isOpen ? '✕' : '☰';
  });

  siteNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = '☰';
    });
  });

  /* ---------- 2) Filtro de categorias (chips) ---------- */
  const chips = document.querySelectorAll('.chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('is-active'));
      chip.classList.add('is-active');
      // Filtro apenas visual: os produtos exibidos são estáticos.
    });
  });

  /* ---------- 3) Carrinho: botão adicionar + contador + total ---------- */
  const cartCountEl = document.getElementById('cartCount');
  const cartBar = document.getElementById('cartBar');
  const cartBarCount = document.getElementById('cartBarCount');
  const cartBarTotal = document.getElementById('cartBarTotal');

  let cart = loadCart(); // { productName: { qty, price, icon } }

  function parsePrice(card) {
    const now = card.querySelector('.product-price .now');
    const text = now.textContent.replace('R$', '').replace(',', '.').trim();
    return parseFloat(text);
  }

  function parseIcon(card) {
    const media = card.querySelector('.product-media');
    return media.childNodes[0].textContent.trim();
  }

  function updateCartUI() {
    saveCart(cart);
    const totalQty = Object.values(cart).reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = Object.values(cart).reduce((sum, item) => sum + item.qty * item.price, 0);

    if (cartCountEl) cartCountEl.textContent = totalQty;
    if (cartBarCount) cartBarCount.textContent = totalQty;
    if (cartBarTotal) cartBarTotal.textContent = formatBRL(totalPrice);
    if (cartBar) cartBar.classList.toggle('is-visible', totalQty > 0);
  }

  // A quantidade só é alterada dentro da aba lateral do carrinho.
  document.querySelectorAll('.product-card').forEach(card => {
    const name = card.dataset.name;
    const price = parsePrice(card);
    const addBtn = card.querySelector('.add-btn');

    addBtn.addEventListener('click', () => {
      if (cart[name]) {
        cart[name].qty += 1;
      } else {
        cart[name] = { qty: 1, price, icon: parseIcon(card) };
      }
      updateCartUI();

      const originalText = addBtn.textContent;
      addBtn.textContent = 'Adicionado ✓';
      addBtn.disabled = true;
      setTimeout(() => {
        addBtn.textContent = originalText;
        addBtn.disabled = false;
      }, 700);
    });
  });

  updateCartUI();

  /* ---------- 4) Formulário Clube Real ---------- */
  const clubForm = document.getElementById('clubForm');
  if (clubForm) {
    clubForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const emailInput = document.getElementById('clubEmail');
      const button = clubForm.querySelector('button');
      const originalText = button.textContent;

      button.textContent = 'Cadastrado! ✓';
      button.disabled = true;

      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        emailInput.value = '';
      }, 2500);
    });
  }

  /* ---------- 5) Aba lateral do carrinho ---------- */
  const cartDrawer = document.getElementById('cartDrawer');
  if (cartDrawer) {
    const cartOverlay = document.getElementById('cartOverlay');
    const cartToggle = document.getElementById('cartToggle');
    const cartBarOpen = document.getElementById('cartBarOpen');
    const cartDrawerClose = document.getElementById('cartDrawerClose');
    const cartList = document.getElementById('cartList');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartDrawerFooter = document.getElementById('cartDrawerFooter');
    const cartSubtotalEl = document.getElementById('cartSubtotal');
    const cartTotalEl = document.getElementById('cartTotal');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const cartEmptyLink = document.getElementById('cartEmptyLink');

    function openCartDrawer() {
      cartDrawer.classList.add('is-open');
      cartOverlay.classList.add('is-open');
      cartDrawer.setAttribute('aria-hidden', 'false');
      if (cartToggle) cartToggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('no-scroll');
    }

    function closeCartDrawer() {
      cartDrawer.classList.remove('is-open');
      cartOverlay.classList.remove('is-open');
      cartDrawer.setAttribute('aria-hidden', 'true');
      if (cartToggle) cartToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('no-scroll');
    }

    if (cartToggle) cartToggle.addEventListener('click', openCartDrawer);
    if (cartBarOpen) cartBarOpen.addEventListener('click', openCartDrawer);
    cartDrawerClose.addEventListener('click', closeCartDrawer);
    cartOverlay.addEventListener('click', closeCartDrawer);
    if (cartEmptyLink) cartEmptyLink.addEventListener('click', closeCartDrawer);
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeCartDrawer();
    });

    function renderCartDrawer() {
      const items = Object.entries(cart);

      if (items.length === 0) {
        cartList.hidden = true;
        cartEmpty.hidden = false;
        cartDrawerFooter.hidden = true;
        return;
      }

      cartList.hidden = false;
      cartEmpty.hidden = true;
      cartDrawerFooter.hidden = false;

      cartList.innerHTML = items.map(([name, item]) => `
        <article class="cart-item" data-name="${name}">
          <span class="cart-item-icon">${item.icon || '🛒'}</span>
          <div class="cart-item-info">
            <h3>${name}</h3>
            <span class="cart-item-price">${formatBRL(item.price)} / un.</span>
          </div>
          <div class="stepper cart-item-stepper">
            <button type="button" class="cart-minus" aria-label="Diminuir quantidade">−</button>
            <span class="qty">${item.qty}</span>
            <button type="button" class="cart-plus" aria-label="Aumentar quantidade">+</button>
          </div>
          <span class="cart-item-subtotal">${formatBRL(item.price * item.qty)}</span>
          <button type="button" class="cart-remove" aria-label="Remover ${name}">🗑</button>
        </article>
      `).join('');

      const subtotal = items.reduce((sum, [, item]) => sum + item.price * item.qty, 0);
      cartSubtotalEl.textContent = formatBRL(subtotal);
      cartTotalEl.textContent = formatBRL(subtotal);

      cartList.querySelectorAll('.cart-item').forEach(row => {
        const name = row.dataset.name;

        row.querySelector('.cart-plus').addEventListener('click', () => {
          cart[name].qty += 1;
          updateCartUI();
          renderCartDrawer();
        });

        row.querySelector('.cart-minus').addEventListener('click', () => {
          cart[name].qty -= 1;
          if (cart[name].qty <= 0) delete cart[name];
          updateCartUI();
          renderCartDrawer();
        });

        row.querySelector('.cart-remove').addEventListener('click', () => {
          delete cart[name];
          updateCartUI();
          renderCartDrawer();
        });
      });
    }

    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        if (Object.keys(cart).length === 0) return;
        checkoutBtn.textContent = 'Pedido enviado! ✓';
        checkoutBtn.disabled = true;
        setTimeout(() => {
          cart = {};
          updateCartUI();
          renderCartDrawer();
          checkoutBtn.textContent = 'Finalizar pedido';
          checkoutBtn.disabled = false;
          closeCartDrawer();
        }, 2000);
      });
    }

    renderCartDrawer();
    updateCartUI = ((original) => (...args) => {
      original(...args);
      renderCartDrawer();
    })(updateCartUI);
  }

});
