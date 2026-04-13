let qty = 0;
  let inCart = false;

  function changeQty(delta) {
    qty = Math.max(0, qty + delta);
    document.getElementById('qty-display').textContent = qty;
    if (inCart) updateCart();
  }

  function dodajUKorpu() {
    if (qty === 0) qty = 1;
    document.getElementById('qty-display').textContent = qty;
    inCart = true;
    const btn = document.getElementById('add-btn');
    btn.textContent = 'Hinzugefügt ✓';
    btn.classList.add('added');
    updateCart();
  }

  function ukloni() {
    qty = 0;
    inCart = false;
    document.getElementById('qty-display').textContent = 0;
    const btn = document.getElementById('add-btn');
    btn.textContent = 'In den Warenkorb';
    btn.classList.remove('added');
    updateCart();
  }

  function updateCart() {
    const empty = document.getElementById('cart-empty');
    const items = document.getElementById('cart-items');
    const footer = document.getElementById('cart-footer');
    const count = document.getElementById('cart-count');
    const total = document.getElementById('cart-total-text');

    if (!inCart || qty === 0) {
      empty.style.display = 'block';
      items.innerHTML = '';
      footer.style.display = 'none';
      count.textContent = '0';
    } else {
      empty.style.display = 'none';
      items.innerHTML = '<div class="cart-item"><div><div class="cart-item-name">Toilettenpapier und Papierhandtücher</div><div class="cart-item-sub">' + qty + ' Palette(n)</div></div><button class="cart-remove" onclick="ukloni()" title="Ukloni">✕</button></div>';
      footer.style.display = 'flex';
      total.textContent = qty + ' Palette(n)';
      count.textContent = qty;
    }
  }

  function zavrsiNarudzbinu() {
    const ime = document.getElementById('f-ime').value.trim();
    const tel = document.getElementById('f-tel').value.trim();
    const adresa = document.getElementById('f-adresa').value.trim();
    if (!ime) { alert('Bitte Vor- und Nachname eingeben.'); return; }
    if (!tel) { alert('Bitte Telefonnummer eingeben.'); return; }
    if (!adresa) { alert('Bitte Lieferadresse eingeben.'); return; }
    if (!inCart || qty === 0) { alert('Warenkorb ist leer. Bitte Produkt hinzufügen.'); return; }
    const box = document.getElementById('success-box');
    document.getElementById('success-text').innerHTML = '<strong>Bestellung eingegangen!</strong><br>Vielen Dank, <strong>' + ime + '</strong>! Ihre Bestellung wurde erfolgreich erfasst.<br>Lieferung an: <strong>' + adresa + '</strong><br>Kontakt: <strong>' + tel + '</strong><br><br>Bestellt: <strong>Toilettenpapier und Papierhandtücher — ' + qty + ' Palette(n)</strong>';
    box.classList.add('visible');
    box.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }