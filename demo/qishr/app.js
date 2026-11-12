/* Qishr — behaviour. All data is local; nothing is sold or sent. */
(function () {
  'use strict';
  I18N.init({ key: 'qishr-lang', en: {
    __title: 'Qishr — specialty coffee roastery (concept)', skip: 'Skip to content',
    ribbon: 'Self-initiated concept by made by r. — “Qishr” is a fictional brand, not a real client. Nothing is sold or charged.', about: 'About this project', backMbr: 'Back to made by r.',
    navL: 'Navigation', nBeans: 'Beans', nRoast: 'Roastery', nBrew: 'Brewing', nSub: 'Subscription', nCafe: 'Café', order: 'Your order', menu: 'Menu', close: 'Close',
    heroEy: 'Small-batch roastery · specialty coffee', h1: 'Every cup<br>has an origin.', heroP: 'We roast in small batches every week and send it to you fresh, with a card that tells you where it came from.',
    heroCta: 'Choose your beans', heroSub: 'Subscribe monthly', cupLabel: 'A cup of coffee seen from above. Drag inside the cup to stir the crema.', stir: 'Drag inside the cup to stir the crema',
    chooseOrigin: 'Choose an origin', o0: 'Ethiopia', o0r: 'Yirgacheffe', o1: 'Colombia', o1r: 'Huila', o2: 'Yemen', o2r: 'Haraz',
    n01: 'Jasmine', n02: 'Bergamot', n03: 'Honey', n11: 'Caramel', n12: 'Red apple', n13: 'Chocolate', n21: 'Raisin', n22: 'Cardamom', n23: 'Cocoa',
    f1: 'Whole beans or ground for your brewer', f2: 'Roasted every week', f3: 'A subscription you can pause any time',
    bEy: 'This month’s harvest', bH: 'Three origins, three stories.', bP: 'Choose the size and the grind; we prepare your order straight after roasting. Prices here are illustrative for this concept.',
    b0p: 'A bright, floral coffee with jasmine, bergamot and honey sweetness. Made for pour-over.', b1p: 'Balanced and comforting, with caramel sweetness and a touch of red apple. Works with any brewer.', b2p: 'Coffee from the old mountains: raisin, cardamom and cocoa, with a heavy body and a long finish.',
    region: 'Region', process: 'Process', roastL: 'Roast', washed: 'Washed', natural: 'Natural', light: 'Light', medium: 'Medium', medDark: 'Medium-dark',
    size: 'Size', g250: '250 g', g1000: '1 kg', grind: 'Grind', gWhole: 'Whole beans', gFilter: 'For filter', gEsp: 'For espresso', gSaudi: 'For Saudi coffee', sar: 'SAR', add: 'Add to order',
    pEy: 'Roastery', pH: 'From bean to cup.', pP: 'Each origin gets its own roast curve, then rests before it reaches you.', curveLabel: 'Illustration of a roast curve across four stages',
    ph1: 'Drying', ph2: 'Roasting', ph3: 'First crack', ph4: 'Cooling',
    s1h: 'We choose', s1p: 'We cup samples from small farms and choose what deserves roasting.', s2h: 'We roast', s2p: 'Small batches, with a heat curve that suits each origin.', s3h: 'We rest', s3p: 'The beans rest a few days so the flavour settles.', s4h: 'We send', s4p: 'It arrives with an origin card and the roast date.',
    brEy: 'Brew guide', brH: 'Brew it your way.', mV60: 'V60 pour-over', mEsp: 'Espresso', mSaudi: 'Saudi coffee', mPress: 'French press',
    kCoffee: 'Coffee', kWater: 'Water', kTemp: 'Temperature', kTime: 'Time', cupsL: 'Number of cups', less: 'Fewer', more: 'More', grindFor: 'Grind:',
    sEy: 'Subscription', sH: 'Fresh beans, without remembering.', sP: 'Design your subscription and see the cost before you decide. 10% off every delivery.',
    qFreq: 'How often?', every2: 'Every two weeks', every1: 'Every month', qBags: 'Bags per delivery? (250 g)', qWhich: 'Which coffee?', rotate: 'Monthly harvest, rotating',
    sumH: 'Your subscription', perShip: 'Each delivery', perMonth: 'Deliveries per month', monthly: 'Estimated monthly cost', startSub: 'Start subscription', sumNote: 'Illustrative prices for a design concept.',
    cEy: 'Café', cH: 'Come and taste the new harvest.', cP: 'A small café next to the roastery. Every Thursday we open a free tasting of the new harvest.',
    days1: 'Saturday – Wednesday', days2: 'Thursday – Friday', tasting: 'Tasting session', tastingT: 'Thursday 19:00', addr: 'Address: [illustrative address] — the café is fictional, part of this concept.', mapLabel: 'Illustrative map of the café location',
    fqH: 'Frequently asked', q1: 'When does my order ship?', a1: 'We roast at the start of each week and ship orders straight after roasting.', q2: 'Which grind is right for me?', a2: 'If you are not sure, choose “whole beans” and grind just before brewing, or use the brew guide above.',
    q3: 'Can I pause my subscription?', a3: 'Yes, any time from your account, with no fees.', q4: 'Is this a real shop?', a4: 'No. Qishr is a design concept by made by r. Prices and the café are illustrative, and nothing is sold or charged.',
    nlH: 'Hear about the next harvest first.', email: 'Email', emailPh: 'Your email', join: 'Join the newsletter', ftNote: 'Self-initiated concept by made by r. — fictional brand.',
    subtotal: 'Subtotal', noCheckout: 'This is a concept site: checkout is not available and no order will be placed.', checkout: 'Checkout unavailable',
    dlgH: 'Thanks for your interest', dlgP: 'Qishr is a design concept, so there is no real subscription or payment. We designed this step to show how it would work.', ok: 'OK'
  }, ar: {} });
  var t = function (k, a) { return I18N.t(k, a); };
  var $ = function (s, r) { return (r || document).querySelector(s); }, $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var num = function (n) { return I18N.lang() === 'ar' ? String(n) : String(n); };

  /* header + menu */
  addEventListener('scroll', function () { $('#hd').classList.toggle('s', scrollY > 10); }, { passive: true });
  var mnav = $('#mnav');
  function menu(open) { mnav.hidden = !open; $('#openMenu').setAttribute('aria-expanded', String(open)); document.body.style.overflow = open ? 'hidden' : ''; (open ? $('#closeMenu') : $('#openMenu')).focus(); }
  $('#openMenu').addEventListener('click', function () { menu(true); });
  $('#closeMenu').addEventListener('click', function () { menu(false); });
  mnav.addEventListener('click', function (e) { if (e.target.closest('a')) menu(false); });

  /* hero cup + origins */
  var ORI = [{ rim: 'ETHIOPIA', c: '#6B3F22', k: '#C9965F' }, { rim: 'COLOMBIA', c: '#5A3420', k: '#B07A47' }, { rim: 'YEMEN', c: '#45281A', k: '#9A6538' }];
  var angle = -20, swirl = $('#swirl'), cup = $('#cup'), drag = false;
  function setAngle(a) { angle = a; swirl.style.transform = 'rotate(' + a + 'deg)'; }
  function pickOrigin(i) {
    $$('.origin').forEach(function (b) { b.setAttribute('aria-pressed', String(+b.getAttribute('data-o') === i)); });
    $('#coffee').setAttribute('fill', ORI[i].c); $('#crema').setAttribute('stroke', ORI[i].k);
    var u = 'QISHR · ' + ORI[i].rim + ' · SPECIALTY COFFEE · SMALL-BATCH ROASTERY · ';
    $('#rimText').textContent = u + u; setAngle(angle + 120);
  }
  $$('.origin').forEach(function (b) { b.addEventListener('click', function () { pickOrigin(+b.getAttribute('data-o')); }); });
  function stirTo(e) { var r = cup.getBoundingClientRect(); setAngle(Math.round(Math.atan2(e.clientY - (r.top + r.height / 2), e.clientX - (r.left + r.width / 2)) * 180 / Math.PI + 90)); }
  cup.addEventListener('pointerdown', function (e) { drag = true; swirl.classList.add('drag'); try { cup.setPointerCapture(e.pointerId); } catch (x) {} stirTo(e); });
  cup.addEventListener('pointermove', function (e) { if (drag) stirTo(e); });
  ['pointerup', 'pointercancel'].forEach(function (ev) { cup.addEventListener(ev, function () { drag = false; swirl.classList.remove('drag'); }); });

  /* toast */
  var toastT;
  function toast(msg) { var el = $('#toast'); el.textContent = msg; el.hidden = false; clearTimeout(toastT); toastT = setTimeout(function () { el.hidden = true; }, 2600); }

  /* order (local only) */
  var order = [];
  var NAMES = ['o0', 'o1', 'o2'], GR = { whole: 'gWhole', filter: 'gFilter', espresso: 'gEsp', saudi: 'gSaudi' };
  $$('.bean').forEach(function (b) {
    var size = 250;
    $$('[data-size]', b).forEach(function (s) {
      s.addEventListener('click', function () {
        size = +s.getAttribute('data-size');
        $$('[data-size]', b).forEach(function (x) { x.setAttribute('aria-pressed', String(x === s)); });
        $('[data-price]', b).textContent = b.getAttribute('data-p' + size);
      });
    });
    $('[data-add]', b).addEventListener('click', function () {
      var i = +b.getAttribute('data-bean'), g = $('[data-grind]', b).value, price = +b.getAttribute('data-p' + size);
      var hit = order.filter(function (o) { return o.i === i && o.size === size && o.g === g; })[0];
      if (hit) hit.q++; else order.push({ i: i, size: size, g: g, price: price, q: 1 });
      renderOrder();
      toast((I18N.lang() === 'en' ? 'Added: ' : 'أُضيف: ') + t(NAMES[i]));
    });
  });
  function renderOrder() {
    var list = $('#items'); list.textContent = ''; var sum = 0, count = 0;
    if (!order.length) { var li = document.createElement('li'); li.style.display = 'block'; li.textContent = I18N.lang() === 'en' ? 'Your order is empty.' : 'طلبك فارغ.'; list.appendChild(li); }
    order.forEach(function (o, k) {
      sum += o.price * o.q; count += o.q;
      var li = document.createElement('li');
      var info = document.createElement('div');
      var nm = document.createElement('b'); nm.textContent = t(NAMES[o.i]); info.appendChild(nm);
      var d = document.createElement('div'); d.style.fontSize = '14px'; d.textContent = (o.size === 250 ? t('g250', '250 غ') : t('g1000', '1 كغ')) + ' · ' + t(GR[o.g]) + ' · ' + o.price + ' ' + t('sar', 'ر.س'); info.appendChild(d);
      var q = document.createElement('div'); q.className = 'qty';
      var minus = document.createElement('button'); minus.type = 'button'; minus.textContent = '−'; minus.setAttribute('aria-label', I18N.lang() === 'en' ? 'Decrease' : 'إنقاص');
      var out = document.createElement('span'); out.textContent = o.q; out.style.minWidth = '24px'; out.style.textAlign = 'center';
      var plus = document.createElement('button'); plus.type = 'button'; plus.textContent = '+'; plus.setAttribute('aria-label', I18N.lang() === 'en' ? 'Increase' : 'زيادة');
      minus.onclick = function () { o.q--; if (!o.q) order.splice(k, 1); renderOrder(); };
      plus.onclick = function () { o.q++; renderOrder(); };
      q.appendChild(minus); q.appendChild(out); q.appendChild(plus);
      li.appendChild(info); li.appendChild(q); list.appendChild(li);
    });
    $('#subtotal').textContent = sum; $('#count').textContent = count;
  }
  var lastFocus = null;
  function bag(open) {
    $('#bag').hidden = !open; $('#scrim').hidden = !open; document.body.style.overflow = open ? 'hidden' : '';
    if (open) { lastFocus = document.activeElement; renderOrder(); $('#closeBag').focus(); } else if (lastFocus) lastFocus.focus();
  }
  $('#openBag').addEventListener('click', function () { bag(true); });
  $('#closeBag').addEventListener('click', function () { bag(false); });
  $('#scrim').addEventListener('click', function () { bag(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { if (!$('#bag').hidden) bag(false); if (!mnav.hidden) menu(false); } });

  /* roast curve */
  (function () { var ln = $('#curve .ln'); if (ln && ln.getTotalLength) { var L = Math.ceil(ln.getTotalLength()); ln.style.strokeDasharray = L; ln.style.strokeDashoffset = L; } })();
  $('#curve').addEventListener('transitionend', function () {});
  if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { var ln = $('#curve .ln'); $('#curve').classList.add('on'); ln.style.strokeDashoffset = 0; } }); }, { threshold: 0.3 }).observe($('#curve'));
  else { $('#curve').classList.add('on'); $('#curve .ln').style.strokeDashoffset = 0; }

  /* brew guide */
  var M = {
    v60: { g: 15, w: 250, temp: '93°', time: '3:00', grind: ['متوسط ناعم', 'Medium-fine'], steps: [['بلّل الورقة واسكب ماءها.', 'Rinse the paper and discard the water.'], ['اسكب ضعف وزن البنّ ماءً، وانتظر ٣٠ ثانية.', 'Pour twice the coffee’s weight in water and wait 30 seconds.'], ['أكمل السكب بدوائر هادئة حتى الكمية كاملة.', 'Keep pouring in slow circles up to the full amount.'], ['اتركها تنساب حتى الدقيقة الثالثة تقريبًا.', 'Let it drain until about the three-minute mark.']] },
    esp: { g: 18, w: 36, temp: '93°', time: '0:28', grind: ['ناعم', 'Fine'], unitOut: true, steps: [['وزّع البنّ بالتساوي واضغطه بثبات.', 'Distribute the coffee evenly and tamp firmly.'], ['استخلص نحو ضعف وزن البنّ في السائل.', 'Extract about twice the coffee’s weight in liquid.'], ['إن كان مُرًّا اطحن أخشن، وإن كان حامضًا اطحن أنعم.', 'Too bitter: grind coarser. Too sour: grind finer.']] },
    saudi: { g: 10, w: 200, temp: '100°', time: '10:00', grind: ['متوسط', 'Medium'], steps: [['اغلِ الماء ثم أضف البنّ المحمّص تحميصًا فاتحًا.', 'Bring the water to a boil, then add lightly roasted coffee.'], ['اتركها على نار هادئة نحو عشر دقائق.', 'Simmer gently for about ten minutes.'], ['أضف الهيل المطحون، ومعه زعفران أو قرنفل إن أحببت.', 'Add ground cardamom, with saffron or cloves if you like.'], ['اتركها تهدأ دقيقة، ثم صبّها في الدلّة.', 'Let it settle for a minute, then pour into the dallah.']] },
    press: { g: 17, w: 255, temp: '95°', time: '4:00', grind: ['خشن', 'Coarse'], steps: [['ضع البنّ واسكب الماء كاملًا.', 'Add the coffee and pour in all the water.'], ['حرّك برفق، وغطِّ دون أن تضغط.', 'Stir gently and cover without pressing.'], ['بعد أربع دقائق اضغط ببطء وصبّ فورًا.', 'After four minutes, press slowly and pour straight away.']] }
  };
  var mode = 'v60', cups = 1;
  function renderBrew() {
    var m = M[mode], en = I18N.lang() === 'en';
    $('#bCoffee').textContent = (m.g * cups) + (en ? ' g' : ' غ');
    $('#bWater').textContent = (m.w * cups) + (m.unitOut ? (en ? ' g out' : ' غ ناتج') : (en ? ' ml' : ' مل'));
    $('#bTemp').textContent = m.temp; $('#bTime').textContent = m.time; $('#bGrind').textContent = m.grind[en ? 1 : 0];
    $('#cups').textContent = cups + (en ? (cups === 1 ? ' cup' : ' cups') : (cups === 1 ? ' كوب' : ' أكواب'));
    var ol = $('#bSteps'); ol.textContent = ''; m.steps.forEach(function (s) { var li = document.createElement('li'); li.textContent = s[en ? 1 : 0]; ol.appendChild(li); });
  }
  var tabs = $$('.tab');
  function selectTab(tb, focus) {
    tabs.forEach(function (x) { var on = x === tb; x.setAttribute('aria-selected', String(on)); x.tabIndex = on ? 0 : -1; });
    $('#brewPanel').setAttribute('aria-labelledby', tb.id); mode = tb.getAttribute('data-m'); renderBrew(); if (focus) tb.focus();
  }
  tabs.forEach(function (tb, i) {
    tb.addEventListener('click', function () { selectTab(tb); });
    tb.addEventListener('keydown', function (e) {
      var rtl = I18N.lang() === 'ar', n = null;
      if (e.key === (rtl ? 'ArrowLeft' : 'ArrowRight')) n = tabs[(i + 1) % tabs.length];
      if (e.key === (rtl ? 'ArrowRight' : 'ArrowLeft')) n = tabs[(i - 1 + tabs.length) % tabs.length];
      if (n) { e.preventDefault(); selectTab(n, true); }
    });
  });
  $('#cupsMinus').addEventListener('click', function () { cups = Math.max(1, cups - 1); renderBrew(); });
  $('#cupsPlus').addEventListener('click', function () { cups = Math.min(6, cups + 1); renderBrew(); });
  renderBrew();

  /* subscription calculator */
  var BAG = { rot: 75, 0: 79, 1: 69, 2: 119 };
  var sf = $('#subForm');
  function renderSub() {
    var f = new FormData(sf), freq = +f.get('freq'), bags = +f.get('bags'), which = f.get('which'), en = I18N.lang() === 'en';
    var ship = Math.round(BAG[which] * bags * 0.9);
    $('#sumShip').textContent = ship + (en ? ' SAR' : ' ر.س'); $('#sumCount').textContent = freq; $('#sumTotal').textContent = ship * freq;
  }
  sf.addEventListener('change', renderSub);
  sf.addEventListener('submit', function (e) { e.preventDefault(); var d = $('#dlg'); if (d.showModal) d.showModal(); else toast(t('dlgP')); });
  renderSub();

  /* newsletter (not connected) */
  $('#news').addEventListener('submit', function (e) {
    e.preventDefault(); var v = $('#nlMail').value.trim(), en = I18N.lang() === 'en';
    $('#nlMsg').textContent = !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? (en ? 'Please enter a valid email.' : 'اكتب بريدًا إلكترونيًا صحيحًا.') : (en ? 'This is a concept site: your email was not saved or sent.' : 'هذا موقع مفهوم: لم يُحفظ بريدك ولم يُرسل.');
  });

  I18N.on(function () { renderBrew(); renderSub(); renderOrder(); });
  renderOrder();
})();
