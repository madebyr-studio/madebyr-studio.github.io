/* Khatt — behaviour. Everything runs in the page; nothing is saved or sent. */
(function () {
  'use strict';
  I18N.init({ key: 'khatt-lang', en: {
    __title: 'Khatt — a playground for variable letters (concept)', skip: 'Skip to content',
    ribbon: 'Self-initiated concept by made by r. — “Khatt” is a fictional product, not a real client. There is no real subscription or payment.', about: 'About this project', backMbr: 'Back to made by r.',
    navL: 'Navigation', nPlay: 'Playground', nFeat: 'Features', nHow: 'How it works', nGal: 'Gallery', nPrice: 'Pricing', join: 'Waitlist', menu: 'Menu', close: 'Close',
    heroEy: 'KHATT · variable type tool · concept', h1: 'Arabic letters<br>that move with you.',
    lead: 'Khatt is a web tool for shaping and animating variable letters. Move across the stage: horizontal changes the weight, vertical changes the shape of the small elements each letter is built from.',
    stageL: 'Interactive stage showing the word with the current settings', locked: 'Locked · click to release',
    wordL: 'Type a word (up to 14 characters)', presetsL: 'Presets', pHeavy: 'Heavy', pLight: 'Light', pWide: 'Wide grid', pRandom: 'Random',
    padTitle: 'Axis pad', padHelp: 'Use the arrow keys: left and right for weight, up and down for shape. Hold Shift for bigger steps.',
    tW: 'Weight', tG: 'Grid', tS: 'Shape', copyCss: 'Copy CSS', reset: 'Reset',
    fEy: 'Features', fH: 'Three tools, one state.', fP: 'Whatever you change here changes in the playground above, and the other way round. Try the tools directly; they all run in your browser without talking to a server.',
    f1h: 'Live axes', f1p: 'Three axes shape every letter: the weight, the size of the grid it is built on, and the shape of the small elements that make it up.',
    f2h: 'Motion without code', f2p: 'Pick a rhythm and watch the words breathe. Motion applies to whole words, so Arabic letters stay joined as they should.',
    motionL: 'Motion type', mPulse: 'Pulse', mWave: 'Wave', mWrite: 'Write', mStop: 'Stop', rmNote: 'Motion is paused because your device asks for reduced motion.',
    f3h: 'Copy and ship', f3p: 'Real CSS for the current settings, working with the free Handjet font from Google Fonts. Copy it into your own site.',
    hEy: 'How it works', hH: 'From an idea to a living letter.', h1t: 'Type', h1p: 'A word, a name or a headline. In Arabic or Latin.',
    h2t: 'Move', h2p: 'Shape the letters with the pointer, the pad or the sliders, and lock what you like.', h3t: 'Copy', h3p: 'Take ready-made CSS for your site or app. No files, no install.',
    gEy: 'Gallery', gH: 'The specimen wall.', gP: 'Each specimen is a different setting of the same font. Click any one to open it in the playground and carry on from there.',
    prEy: 'Pricing', prH: 'Start for free.', prP: 'Prices here are illustrative for this concept. There is no real subscription or payment; the buttons take you to the waitlist.',
    billL: 'Billing period', monthly: 'Monthly', yearly: 'Yearly', save: 'Yearly = two months free',
    pl0: 'Starter', pl0d: 'For trying variable letters.', free: 'Free forever', pl0a: 'All three axes', pl0b: 'Copy CSS', pl0c: '3 saved projects',
    pl1: 'Creator', pl1d: 'For people who design every day.', pl1a: 'Every motion type', pl1b: 'Unlimited projects', pl1c: 'Short video export',
    pl2: 'Studio', pl2d: 'For teams and brands.', pl2a: 'Everything in Creator', pl2b: 'Shared workspace', pl2c: 'Custom brand fonts',
    choose: 'Join with this plan', prNote: 'Illustrative prices in Saudi riyals for a design concept. The listed features are part of the idea, not an available product.',
    qH: 'Frequently asked', q1: 'Is Khatt a real tool?', a1: 'No. Khatt is a design concept by made by r., but the playground on this page really works in your browser, and the copied CSS is real.',
    q2: 'Which font is used?', a2: 'Handjet, an open-source font from Google Fonts. It supports Arabic and Latin and has three axes: weight, grid size and element shape.',
    q3: 'Does the playground send any data?', a3: 'No. Everything happens inside the page; your words are not saved or sent anywhere.',
    q4: 'Why do the letters look different on my device?', a4: 'If Handjet fails to load (because of the connection, for example), the browser shows a fallback font without the axes, so you will not see the shape change.',
    wlEy: 'Waitlist', wlH: 'Be the first to try it.', email: 'Email', emailPh: 'Your email', planL: 'Plan you are interested in', wlBtn: 'Sign me up',
    ftNote: 'Self-initiated concept by made by r. — fictional product. Letters set in Handjet (Google Fonts).'
  }, ar: {} });

  var t = function (k, a) { return I18N.t(k, a); };
  var en = function () { return I18N.lang() === 'en'; };
  var $ = function (s, r) { return (r || document).querySelector(s); }, $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = matchMedia('(pointer: fine)').matches;
  var root = document.documentElement;

  /* menu */
  var mnav = $('#mnav');
  function menu(open) { mnav.hidden = !open; $('#openMenu').setAttribute('aria-expanded', String(open)); document.body.style.overflow = open ? 'hidden' : ''; (open ? $('#closeMenu') : $('#openMenu')).focus(); }
  $('#openMenu').addEventListener('click', function () { menu(true); });
  $('#closeMenu').addEventListener('click', function () { menu(false); });
  mnav.addEventListener('click', function (e) { if (e.target.closest('a')) menu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !mnav.hidden) menu(false); });

  var toastT;
  function toast(msg) { var el = $('#toast'); el.textContent = msg; el.hidden = false; clearTimeout(toastT); toastT = setTimeout(function () { el.hidden = true; }, 2600); }

  /* ---------- shared state ---------- */
  var DEF = { w: 560, g: 1.2, s: 3 };
  var S = { w: DEF.w, g: DEF.g, s: DEF.s };
  var clamp = function (v, a, b) { return Math.min(b, Math.max(a, v)); };
  var stage = $('#stage'), pad = $('#pad'), wordEl = $('#word'), input = $('#wordIn');
  var locked = false, userTyped = false;

  function css() {
    return [
      { c: '/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Handjet:wght,ELGR,ELSH@100..900,1..2,0..16&display=swap"> */' },
      { p: '.khatt', raw: ' {' },
      { p: '  font-family', v: '"Handjet", sans-serif' },
      { p: '  font-variation-settings', v: '"wght" ' + Math.round(S.w) + ', "ELGR" ' + S.g.toFixed(2) + ', "ELSH" ' + S.s.toFixed(1) },
      { raw: '}' }
    ];
  }
  function cssText() { return css().map(function (l) { return l.c ? l.c : l.v ? l.p + ': ' + l.v + ';' : (l.p || '') + (l.raw || ''); }).join('\n'); }
  function renderCode() {
    var code = $('#code'); code.textContent = '';
    css().forEach(function (l, i) {
      if (i) code.appendChild(document.createTextNode('\n'));
      if (l.c) { var c = document.createElement('span'); c.className = 'k-c'; c.textContent = l.c; code.appendChild(c); return; }
      if (l.p) { var p = document.createElement('span'); p.className = 'k-p'; p.textContent = l.p; code.appendChild(p); }
      if (l.v) { code.appendChild(document.createTextNode(': ')); var v = document.createElement('span'); v.className = 'k-v'; v.textContent = l.v; code.appendChild(v); code.appendChild(document.createTextNode(';')); }
      if (l.raw) code.appendChild(document.createTextNode(l.raw));
    });
  }

  var raf = 0;
  function apply(fromPreset) {
    S.w = clamp(S.w, 100, 900); S.g = clamp(S.g, 1, 2); S.s = clamp(S.s, 0, 16);
    root.style.setProperty('--w', Math.round(S.w)); root.style.setProperty('--g', S.g.toFixed(2)); root.style.setProperty('--s', S.s.toFixed(1));
    var px = (S.w - 100) / 800, py = S.s / 16;
    [stage, pad].forEach(function (el) { el.style.setProperty('--px', px.toFixed(4)); el.style.setProperty('--py', py.toFixed(4)); });
    $('#vW').textContent = Math.round(S.w); $('#vG').textContent = S.g.toFixed(2); $('#vS').textContent = S.s.toFixed(1);
    $('#bW').style.setProperty('--v', px); $('#bG').style.setProperty('--v', S.g - 1); $('#bS').style.setProperty('--v', py);
    $('#sW').value = Math.round(S.w); $('#sG').value = S.g; $('#sS').value = S.s;
    $('#oW').textContent = Math.round(S.w); $('#oG').textContent = S.g.toFixed(2); $('#oS').textContent = S.s.toFixed(1);
    if (!fromPreset) $$('[data-preset]').forEach(function (b) { if (b.hasAttribute('aria-pressed')) b.setAttribute('aria-pressed', 'false'); });
    if (!raf) raf = requestAnimationFrame(function () { raf = 0; renderCode(); });
  }

  /* fit the word inside the stage, measured at its widest settings */
  function fit() {
    var avail = wordEl.parentNode.clientWidth * 0.86, base = Math.min(stage.clientWidth * 0.4, stage.clientHeight * 0.6, 380);
    wordEl.style.setProperty('--fs', base + 'px');
    wordEl.style.fontVariationSettings = '"wght" 900, "ELGR" 2, "ELSH" 0';
    var wd = wordEl.getBoundingClientRect().width;
    wordEl.style.fontVariationSettings = '';
    if (wd > avail) wordEl.style.setProperty('--fs', Math.floor(base * avail / wd) + 'px');
  }
  function setWord(v) { wordEl.textContent = v; fit(); }
  function defaultWord() { return en() ? 'Khatt' : 'خط'; }

  input.addEventListener('input', function () { userTyped = input.value.trim() !== ''; setWord(input.value.trim() || defaultWord()); });
  addEventListener('resize', fit);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);

  /* stage: pointer position drives weight (x) and shape (y) */
  function fromPoint(el, e) {
    var r = el.getBoundingClientRect();
    S.w = 100 + clamp((e.clientX - r.left) / r.width, 0, 1) * 800;
    S.s = Math.round(clamp((e.clientY - r.top) / r.height, 0, 1) * 32) / 2;
    apply();
  }
  stage.addEventListener('pointermove', function (e) {
    if (locked) return;
    if (e.pointerType === 'touch') { var r = stage.getBoundingClientRect(); S.w = 100 + clamp((e.clientX - r.left) / r.width, 0, 1) * 800; apply(); return; }
    stage.classList.add('live'); fromPoint(stage, e);
  });
  stage.addEventListener('pointerleave', function () { stage.classList.remove('live'); });
  stage.addEventListener('click', function (e) {
    if (e.pointerType === 'touch' || !fine) return;
    locked = !locked; stage.classList.toggle('locked', locked); $('#lockTag').hidden = !locked;
    if (!locked) fromPoint(stage, e);
  });
  function setHint() { $('#hint').textContent = fine ? (en() ? 'Move to shape · click to lock' : 'حرّك المؤشر · اضغط للتثبيت') : (en() ? 'Swipe sideways for weight · use the pad below' : 'اسحب أفقيًا للوزن · أو استخدم اللوحة'); }

  /* pad: drag or arrow keys */
  var padDrag = false;
  pad.addEventListener('pointerdown', function (e) { padDrag = true; try { pad.setPointerCapture(e.pointerId); } catch (x) {} fromPoint(pad, e); });
  pad.addEventListener('pointermove', function (e) { if (padDrag) fromPoint(pad, e); });
  ['pointerup', 'pointercancel'].forEach(function (ev) { pad.addEventListener(ev, function () { padDrag = false; }); });
  pad.addEventListener('keydown', function (e) {
    var big = e.shiftKey ? 4 : 1, used = true;
    if (e.key === 'ArrowRight') S.w += 25 * big;
    else if (e.key === 'ArrowLeft') S.w -= 25 * big;
    else if (e.key === 'ArrowDown') S.s += 0.5 * big;
    else if (e.key === 'ArrowUp') S.s -= 0.5 * big;
    else used = false;
    if (used) { e.preventDefault(); apply(); }
  });

  /* presets */
  var PRE = { heavy: { w: 900, g: 1, s: 0 }, light: { w: 100, g: 1, s: 0 }, wide: { w: 520, g: 2, s: 4 } };
  $$('[data-preset]').forEach(function (b) {
    b.addEventListener('click', function () {
      var k = b.getAttribute('data-preset'), p = PRE[k];
      if (k === 'random') p = { w: 100 + Math.round(Math.random() * 800), g: 1 + Math.round(Math.random() * 20) / 20, s: Math.round(Math.random() * 32) / 2 };
      S.w = p.w; S.g = p.g; S.s = p.s; apply(true);
      $$('[data-preset]').forEach(function (x) { if (x.hasAttribute('aria-pressed')) x.setAttribute('aria-pressed', String(x === b)); });
    });
  });

  /* sliders */
  $('#sW').addEventListener('input', function (e) { S.w = +e.target.value; apply(); });
  $('#sG').addEventListener('input', function (e) { S.g = +e.target.value; apply(); });
  $('#sS').addEventListener('input', function (e) { S.s = +e.target.value; apply(); });

  /* reset */
  $('#reset').addEventListener('click', function () {
    S.w = DEF.w; S.g = DEF.g; S.s = DEF.s; locked = false; stage.classList.remove('locked'); $('#lockTag').hidden = true;
    userTyped = false; input.value = defaultWord(); setWord(defaultWord()); apply();
    $('#copyMsg').textContent = '';
  });

  /* copy CSS (real) */
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text).then(function () { return true; }, legacy);
    return Promise.resolve(legacy());
    function legacy() {
      var ta = document.createElement('textarea'); ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select();
      var ok = false; try { ok = document.execCommand('copy'); } catch (x) {} document.body.removeChild(ta); return ok;
    }
  }
  $$('[data-copy]').forEach(function (b) {
    b.addEventListener('click', function () {
      var out = b.closest('.panel') ? $('#copyMsg2') : $('#copyMsg');
      copyText(cssText()).then(function (ok) {
        out.textContent = ok ? (en() ? 'Copied. Paste it into your stylesheet.' : 'نُسخ الكود. الصقه في ملف التنسيق.') : (en() ? 'Your browser blocked copying. Select the code in the Features section and copy it manually.' : 'منع المتصفح النسخ. حدّد الكود في قسم المزايا وانسخه يدويًا.');
      });
    });
  });

  /* motion demo */
  var motion = 'pulse', moving = $('#moving');
  function renderMoving() {
    var words = en() ? ['Letters', 'that', 'move'] : ['الحرف', 'يتحرّك', 'معك'];
    moving.textContent = '';
    words.forEach(function (w, i) { var s = document.createElement('span'); s.textContent = w; s.style.setProperty('--i', i); moving.appendChild(s); });
    moving.className = 'moving' + (motion === 'none' ? '' : ' m-' + motion);
  }
  $$('[data-motion]').forEach(function (b) {
    b.addEventListener('click', function () {
      motion = b.getAttribute('data-motion');
      $$('[data-motion]').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      renderMoving();
    });
  });
  if (reduce) $('#rmNote').hidden = false;

  /* gallery → playground */
  $$('.tile').forEach(function (tl) {
    var w = +tl.getAttribute('data-w'), g = +tl.getAttribute('data-g'), s = +tl.getAttribute('data-s');
    tl.style.setProperty('--tw', w); tl.style.setProperty('--tg', g); tl.style.setProperty('--ts', s);
    $('.tmeta', tl).textContent = 'wght ' + w + ' · ELGR ' + g + ' · ELSH ' + s;
    tl.addEventListener('click', function () {
      var word = tl.getAttribute('data-word');
      S.w = w; S.g = g; S.s = s; locked = false; stage.classList.remove('locked'); $('#lockTag').hidden = true;
      input.value = word; userTyped = true; setWord(word); apply();
      $('#play').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
      input.focus({ preventScroll: true });
      toast(en() ? 'Opened “' + word + '” in the playground' : 'فُتحت «' + word + '» في الملعب');
    });
  });
  function labelTiles() { $$('.tile').forEach(function (tl) { var w = tl.getAttribute('data-word'); tl.setAttribute('aria-label', en() ? 'Open “' + w + '” in the playground' : 'افتح «' + w + '» في الملعب'); }); }

  /* pricing */
  var bill = 'm';
  function renderPrices() {
    $$('.amt b[data-m]').forEach(function (b) { b.textContent = b.getAttribute('data-' + bill); });
    $$('.per').forEach(function (p) { if (p.hasAttribute('data-i18n')) return; p.textContent = en() ? (bill === 'm' ? 'SAR / month' : 'SAR / year') : (bill === 'm' ? 'ر.س / شهر' : 'ر.س / سنة'); });
  }
  $$('[data-bill]').forEach(function (b) {
    b.addEventListener('click', function () { bill = b.getAttribute('data-bill'); $$('[data-bill]').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); }); renderPrices(); });
  });
  $$('[data-plan]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault(); $('#wlPlan').value = a.getAttribute('data-plan');
      $('#waitlist').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }); $('#wlMail').focus({ preventScroll: true });
    });
  });

  /* waitlist (not connected) */
  $('#wlForm').addEventListener('submit', function (e) {
    e.preventDefault(); var v = $('#wlMail').value.trim(), plan = $('#wlPlan');
    $('#wlMsg').textContent = !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)
      ? (en() ? 'Please enter a valid email.' : 'اكتب بريدًا إلكترونيًا صحيحًا.')
      : (en() ? 'This is a concept site: nothing was saved or sent, and there is no real “' + plan.options[plan.selectedIndex].text + '” plan.' : 'هذا موقع مفهوم: لم يُحفظ شيء ولم يُرسل، ولا توجد خطة «' + plan.options[plan.selectedIndex].text + '» فعلية.');
  });

  I18N.on(function () {
    if (!userTyped) { input.value = defaultWord(); setWord(defaultWord()); }
    setHint(); renderMoving(); renderPrices(); labelTiles();
  });
  if (!userTyped) { input.value = defaultWord(); setWord(defaultWord()); }
  setHint(); renderMoving(); renderPrices(); labelTiles(); apply();
})();
