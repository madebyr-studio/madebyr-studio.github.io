/* Nada — behaviour. All data is local; nothing is sold, saved or sent. */
(function () {
  'use strict';
  I18N.init({ key: 'nada-lang', en: {
    __title: 'Nada — skincare, slowly (concept)', skip: 'Skip to content',
    ribbon: 'Self-initiated concept by made by r. — “Nada” is a fictional brand, not a real client. Nothing is sold or charged.', about: 'About this project', backMbr: 'Back to made by r.',
    navL: 'Navigation', nColl: 'Collection', nIng: 'Ingredients', nRoutine: 'Routine', nStory: 'Our story', bag: 'Bag', menu: 'Menu', close: 'Close',
    heroEy: 'Morning serum · 30 ml', h1: 'Your skin,<br>slowly.', heroP: 'Three ingredients, and a routine you remember after the first time.',
    addSerum: 'Add the serum to bag', seeIng: 'Meet the ingredients', pressDrop: 'Tap the drop to discover the next ingredient.', dropLabel: 'Release a drop and discover the next ingredient',
    cEy: 'The collection', cH: 'Three products. No more.', cP: 'Morning and evening, the same steps. Prices here are illustrative for this concept.',
    p1: 'Morning Cleanser', p1s: '150 ml · light foam', p1d: 'Cleans without tightening the skin, with a light rose scent.', p1u: 'Massage onto damp skin, then rinse with lukewarm water.',
    p2: 'Dew Serum', p2s: '30 ml · light drops', p2d: 'Taif rose water and niacinamide in a texture that never feels heavy.', p2u: 'Two to three drops on clean skin, morning and evening.',
    p3: 'Night Cream', p3s: '50 ml · rich texture', p3d: 'Jojoba oil for the end of a long day. Leaves skin feeling soft.', p3u: 'Smooth on a thin layer before bed.',
    how: 'How to use', add: 'Add to bag', sar: 'SAR',
    iEy: 'Ingredients', iH: 'We know where everything comes from.',
    i1: 'Taif rose water', i1o: 'From the rose farms of Taif', i1d: 'A light scent and a fresh feel on the skin. The base of the serum and the cleanser.',
    i2: 'Niacinamide', i2o: 'A familiar ingredient in daily care', i2d: 'A light, watery texture that fits into a routine without feeling heavy.',
    i3: 'Jojoba oil', i3o: 'A golden plant oil', i3d: 'A light, non-greasy texture that leaves skin feeling soft, in the night cream.',
    rEy: 'Routine', rH: 'Your routine in a minute.', rP: 'Choose the time of day and how your skin feels, and we will order the steps for you.',
    when: 'When?', am: 'Morning', pm: 'Evening', feel: 'How does your skin usually feel?', dry: 'Dry', normal: 'Normal', oily: 'Oily', sensitive: 'Sensitive',
    disc: 'A general suggestion for this concept, not medical advice.', addRoutine: 'Add this routine to bag',
    sEy: 'Our story', quote: '“Why does a good routine need ten steps?”',
    s1: 'Nada started with that question. We wanted a short routine you remember after the first time, with ingredients whose origins we know.',
    s2: 'So we made only three products, and gave each one a clear job: cleanse, hydrate, protect.',
    fH: 'Frequently asked', q1: 'Are the products suitable for every skin type?', a1: 'They are designed to be simple and gentle, but sensitive skin should try each one on a small area first.',
    q2: 'In what order do I use them?', a2: 'Cleanser, then serum, then the cream in the evening. Use the routine builder above.',
    q3: 'Is this a real shop?', a3: 'No. Nada is a design concept by made by r. The products and prices are illustrative, and nothing is sold or charged.',
    nlH: 'One quiet letter a month.', email: 'Email', emailPh: 'Your email', join: 'Subscribe',
    ftNote: 'Self-initiated concept by made by r. — fictional brand.',
    subtotal: 'Subtotal', noCheckout: 'This is a concept site: checkout is not available and no order will be placed.', checkout: 'Checkout unavailable'
  }, ar: {} });

  var t = function (k, a) { return I18N.t(k, a); };
  var en = function () { return I18N.lang() === 'en'; };
  var $ = function (s, r) { return (r || document).querySelector(s); }, $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var AR_DIGITS = '٠١٢٣٤٥٦٧٨٩';
  var dig = function (n) { return en() ? String(n) : String(n).replace(/\d/g, function (d) { return AR_DIGITS[d]; }); };

  /* menu */
  var mnav = $('#mnav');
  function menu(open) { mnav.hidden = !open; $('#openMenu').setAttribute('aria-expanded', String(open)); document.body.style.overflow = open ? 'hidden' : ''; (open ? $('#closeMenu') : $('#openMenu')).focus(); }
  $('#openMenu').addEventListener('click', function () { menu(true); });
  $('#closeMenu').addEventListener('click', function () { menu(false); });
  mnav.addEventListener('click', function (e) { if (e.target.closest('a')) menu(false); });

  /* hero: the falling drop cycles through the three ingredients */
  var ING = [
    { ar: ['ماء الورد الطائفي', 'من ورد الطائف، برائحة خفيفة تمنح البشرة إحساسًا بالانتعاش.'], en: ['Taif rose water', 'From the roses of Taif, with a light scent that leaves skin feeling fresh.'] },
    { ar: ['نياسيناميد', 'مكوّن مألوف في روتين العناية اليومي، بقوام لا يُثقل البشرة.'], en: ['Niacinamide', 'A familiar ingredient in daily care, in a texture that never feels heavy.'] },
    { ar: ['زيت الجوجوبا', 'قوام خفيف غير دهني، يترك ملمسًا ناعمًا.'], en: ['Jojoba oil', 'A light, non-greasy texture that leaves skin feeling soft.'] }
  ];
  var ingI = 0, flip = false, swapT = null, arch = $('#arch');
  function renderIng() {
    var d = ING[ingI][en() ? 'en' : 'ar'];
    $('#ingN').textContent = dig(ingI + 1); $('#ingName').textContent = d[0]; $('#ingText').textContent = d[1];
    $('.ing small').textContent = '/' + dig(3);
  }
  function setFall() { arch.style.setProperty('--fall', Math.round(arch.clientHeight * 0.518 - 29) + 'px'); }
  setFall(); addEventListener('resize', setFall);
  $('#dropBtn').addEventListener('click', function () {
    flip = !flip;
    var drop = $('#drop'), hang = $('#hang'), r1 = $('#rip1'), r2 = $('#rip2'), box = $('#ingBox');
    drop.classList.remove('fa', 'fb'); hang.classList.remove('ga', 'gb'); r1.classList.remove('ra', 'rb'); r2.classList.remove('ra', 'rb', 'r2'); box.classList.remove('fade', 'b');
    if (!reduce) {
      drop.classList.add(flip ? 'fa' : 'fb'); hang.classList.add(flip ? 'ga' : 'gb');
      r1.classList.add(flip ? 'ra' : 'rb'); r2.classList.add(flip ? 'ra' : 'rb', 'r2');
      box.classList.add('fade'); if (!flip) box.classList.add('b');
    }
    ingI = (ingI + 1) % ING.length;
    clearTimeout(swapT); swapT = setTimeout(renderIng, reduce ? 0 : 700);
  });

  /* toast */
  var toastT;
  function toast(msg) { var el = $('#toast'); el.textContent = msg; el.hidden = false; clearTimeout(toastT); toastT = setTimeout(function () { el.hidden = true; }, 2600); }

  /* bag (local only) */
  var PROD = { cleanser: { k: 'p1', price: 89 }, serum: { k: 'p2', price: 145 }, cream: { k: 'p3', price: 129 } };
  var bagItems = {};
  function add(id, quiet) { bagItems[id] = (bagItems[id] || 0) + 1; renderBag(); if (!quiet) toast((en() ? 'Added: ' : 'أُضيف: ') + t(PROD[id].k)); }
  $$('[data-add]').forEach(function (b) { b.addEventListener('click', function () { add(b.getAttribute('data-add')); }); });
  function renderBag() {
    var list = $('#items'), sum = 0, count = 0; list.textContent = '';
    var ids = Object.keys(bagItems);
    if (!ids.length) { var e = document.createElement('li'); e.style.display = 'block'; e.textContent = en() ? 'Your bag is empty.' : 'سلتك فارغة.'; list.appendChild(e); }
    ids.forEach(function (id) {
      var q = bagItems[id], p = PROD[id]; sum += p.price * q; count += q;
      var li = document.createElement('li'), info = document.createElement('div');
      var nm = document.createElement('b'); nm.textContent = t(p.k); nm.style.fontSize = '22px'; info.appendChild(nm);
      var d = document.createElement('div'); d.style.color = 'var(--soft)'; d.textContent = p.price + ' ' + t('sar'); info.appendChild(d);
      var qty = document.createElement('div'); qty.className = 'qty';
      var minus = document.createElement('button'); minus.type = 'button'; minus.textContent = '−'; minus.setAttribute('aria-label', (en() ? 'Decrease ' : 'إنقاص ') + t(p.k));
      var out = document.createElement('span'); out.textContent = q; out.style.minWidth = '24px'; out.style.textAlign = 'center';
      var plus = document.createElement('button'); plus.type = 'button'; plus.textContent = '+'; plus.setAttribute('aria-label', (en() ? 'Increase ' : 'زيادة ') + t(p.k));
      minus.onclick = function () { bagItems[id]--; if (!bagItems[id]) delete bagItems[id]; renderBag(); var f = $('#items .qty button'); (f || $('#closeBag')).focus(); };
      plus.onclick = function () { bagItems[id]++; renderBag(); };
      qty.appendChild(minus); qty.appendChild(out); qty.appendChild(plus);
      li.appendChild(info); li.appendChild(qty); list.appendChild(li);
    });
    $('#subtotal').textContent = sum; $('#count').textContent = count;
  }
  var lastFocus = null;
  function bag(open) {
    $('#bag').hidden = !open; $('#scrim').hidden = !open; document.body.style.overflow = open ? 'hidden' : '';
    if (open) { lastFocus = document.activeElement; renderBag(); $('#closeBag').focus(); } else if (lastFocus) lastFocus.focus();
  }
  $('#openBag').addEventListener('click', function () { bag(true); });
  $('#closeBag').addEventListener('click', function () { bag(false); });
  $('#scrim').addEventListener('click', function () { bag(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { if (!$('#bag').hidden) bag(false); if (!mnav.hidden) menu(false); }
    if (e.key === 'Tab' && !$('#bag').hidden) { /* keep focus inside the drawer */
      var f = $$('#bag button:not([disabled])'), first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* routine builder */
  var STEP = {
    cleanser: { k: 'p1', ar: 'يُدلَّك على بشرة رطبة ثم يُشطف.', en: 'Massage onto damp skin, then rinse.' },
    serum: { k: 'p2', ar: 'قطرتان إلى ثلاث على بشرة نظيفة.', en: 'Two to three drops on clean skin.' },
    cream: { k: 'p3', ar: 'طبقة رقيقة لإحساس بالنعومة.', en: 'A thin layer for a soft feel.' },
    creamLight: { k: 'p3', ar: 'كمية أقل، أو تكتفي بالسيروم إن شعرت بثقل.', en: 'Use less, or just the serum if it feels heavy.' },
    spf: { ar: ['واقي الشمس', 'الواقي الذي تفضّله، آخر خطوة صباحًا. ليس من منتجات نَدى.'], en: ['Sunscreen', 'The sunscreen you prefer, as the last morning step. Not a Nada product.'] }
  };
  var TIP = {
    dry: { ar: 'للبشرة الجافة: أضف الكريم صباحًا أيضًا قبل واقي الشمس.', en: 'For dry skin: add the cream in the morning too, before sunscreen.' },
    normal: { ar: 'الروتين الأساسي يكفي، والأهم أن تستمر عليه.', en: 'The basic routine is enough. Sticking with it matters most.' },
    oily: { ar: 'للبشرة الدهنية: قلّل الكريم، أو اكتفِ بالسيروم مساءً.', en: 'For oily skin: use less cream, or just the serum in the evening.' },
    sensitive: { ar: 'للبشرة الحساسة: جرّب كل منتج على جزء صغير أولًا، وأوقفه إن شعرت بانزعاج.', en: 'For sensitive skin: try each product on a small area first, and stop if it feels uncomfortable.' }
  };
  var rb = $('#rb'), current = [];
  function renderRoutine() {
    var f = new FormData(rb), time = f.get('t'), skin = f.get('s'), L = en() ? 'en' : 'ar';
    var seq = ['cleanser', 'serum'];
    if (time === 'am') { if (skin === 'dry') seq.push('cream'); seq.push('spf'); }
    else seq.push(skin === 'oily' ? 'creamLight' : 'cream');
    current = seq.filter(function (s) { return s !== 'spf'; }).map(function (s) { return s === 'creamLight' ? 'cream' : s; });
    var ol = $('#rSteps'); ol.textContent = '';
    seq.forEach(function (s, i) {
      var st = STEP[s], li = document.createElement('li');
      var k = document.createElement('span'); k.className = 'k'; k.setAttribute('aria-hidden', 'true'); k.textContent = dig(i + 1);
      var body = document.createElement('div'), b = document.createElement('b'), sp = document.createElement('span');
      if (s === 'spf') { b.textContent = st[L][0]; sp.textContent = st[L][1]; li.style.background = 'transparent'; li.style.border = '1.5px dashed rgba(62,36,51,.35)'; }
      else { b.textContent = t(st.k); sp.textContent = st[L]; }
      sp.style.color = 'var(--soft)';
      body.appendChild(b); body.appendChild(sp); li.appendChild(k); li.appendChild(body); ol.appendChild(li);
    });
    $('#rTip').textContent = TIP[skin][L];
  }
  rb.addEventListener('change', renderRoutine);
  rb.addEventListener('submit', function (e) { e.preventDefault(); });
  $('#addRoutine').addEventListener('click', function () {
    current.forEach(function (id) { add(id, true); });
    toast(en() ? 'Routine added: ' + current.length + ' products' : 'أُضيف الروتين: ' + (current.length === 2 ? 'منتجان' : dig(current.length) + ' منتجات'));
  });

  /* newsletter (not connected) */
  $('#news').addEventListener('submit', function (e) {
    e.preventDefault(); var v = $('#nl').value.trim();
    $('#nlMsg').textContent = !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)
      ? (en() ? 'Please enter a valid email.' : 'اكتب بريدًا إلكترونيًا صحيحًا.')
      : (en() ? 'This is a concept site: your email was not saved or sent.' : 'هذا موقع مفهوم: لم يُحفظ بريدك ولم يُرسل.');
  });

  I18N.on(function () { renderIng(); renderRoutine(); renderBag(); });
  renderIng(); renderRoutine(); renderBag();
})();
