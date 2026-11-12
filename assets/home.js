/* made by r. — homepage behaviour */
(function () {
  'use strict';
  /* Set this to a form service URL (e.g. Formspree) to send inquiries. Empty = not connected, and the page says so. */
  var FORM_ENDPOINT = '';

  var EN = {
    __title: 'made by r. — independent creative digital studio',
    skip: 'Skip to content', navMain: 'Main navigation', navWork: 'Work', navServices: 'Services', navStudio: 'Studio', navSites: 'Landing pages',
    menu: 'Menu', close: 'Close menu', langWord: 'Language', cta: 'Start a Project',
    heroEyebrow: 'Independent creative digital studio', h1a: 'Good ideas deserve', h1b: 'great execution.',
    heroSub: 'We design and build websites, intelligent tools and digital experiences that make ideas happen.', ctaWork: 'Explore our work',
    noteSketch: 'first draft… heavier weight?', sign: 'ideas, built & designed by r.', idea: 'idea', made: 'made',
    slider: 'From idea to made: drag the spark along the orbit', replay: 'Watch the logo build again', hint: 'drag the spark around the logo',
    workH: 'Selected work', workIntro: 'Every project has its own identity. If it works now, we say so. If it is still in progress, we say that too.',
    worksNow: 'Works now', inProgress: 'Concept in progress',
    w0t: 'AI perfume advisor', w0c: 'AI · private project', w0s: 'Recorded demo', w0d: 'A real chat advisor that understands perfume questions the way people ask them. The project is private, so we show it here with recorded conversations.', w0l: 'See the project',
    w1t: 'Landing page collection', w1c: 'Web design & development · 3 working sites', w1s: 'Live sites', w1d: 'Three fictional brands, each with a complete working website in its own identity. A fourth is being redesigned.', w1l: 'See the collection',
    w2t: 'Dukkan — homeware store', w2c: 'E-commerce', w2d: 'A shop that makes mobile browsing calm and quick, from product to basket.', later: 'We will share it when it is finished.',
    w3t: 'Muashir — sales dashboard', w3c: 'Data & dashboards', w3d: 'Lots of numbers on one screen, arranged to be read in seconds.',
    w4t: 'Bunyan — engineering firm website', w4c: 'Business website', w4d: 'A composed company site that presents projects in an architectural language.',
    pv0: 'Preview: the perfume advisor interface', pv1: 'Preview: three landing page sites', pv2: 'Concept preview: Dukkan store', pv3: 'Concept preview: Muashir dashboard', pv4: 'Concept preview: Bunyan website',
    redesign: 'Being redesigned', conceptPv: 'Concept preview',
    aiEyebrow: 'Featured · AI · private project', aiH: 'An advisor that understands your taste in perfume.',
    aiP: 'Shoppers ask it the way they would ask a friend — “a light morning scent”, or “something like my favourite, for less” — and it suggests perfumes and explains why each one suits them.',
    aiUnd: 'It understands:', d1: 'Occasion', d2: 'Season', d3: 'Scent family', d4: 'Notes', d5: 'Similarity to another perfume', d6: 'Budget', d7: 'Intensity', d8: 'Day or evening',
    aiCta: 'See the project', aiNote: 'The real advisor is a private project running on a paid service, so it is not open to the public. What you see here are recorded conversations and illustrative products.',
    aiLang: 'The conversation is in Arabic: the advisor is built for Arabic-speaking shoppers.',
    colEyebrow: 'Landing pages · self-initiated concepts', colH: 'Three brands, three live websites',
    colP: 'Fictional brands we designed and built as complete websites to show what is possible. They are not real client work. Open any of them and try it yourself.',
    qName: 'Qishr', qCat: 'Specialty coffee', qDesc: 'A small-batch roastery site: a cup seen from above whose crema you stir, beans you choose by origin, a brew guide and a subscription.',
    selfTag: 'Self-initiated concept — not a client project', live: 'Live demo', caseStudy: 'Case study',
    nName: 'Nada', nCat: 'Skincare', nDesc: 'A skincare brand site: a product story told drop by drop, a collection, ingredients and a simple routine builder.',
    kName: 'Khatt', kCat: 'Creative technology', kDesc: 'A product page for a fictional tool that animates variable letters: a live playground, real copyable CSS, a specimen wall, pricing and a waitlist.',
    nasjNote: 'redrawing it from scratch…', jName: 'Nasj', jCat: 'Fashion', jDesc: 'A fashion label site with an entirely new identity. The visual direction is in review and will be built once approved.',
    svcEyebrow: 'Services', svcH: 'What we make', svcP: 'Four starting points. Every project begins by understanding your idea, and ends with something that actually works.',
    s1t: 'Website Design & Development', s1v: 'Clear, fast websites that explain what you offer and work beautifully on every screen.', inc: 'Includes', ex: 'For example',
    s1i1: 'Business websites', s1i2: 'Landing pages', s1i3: 'Portfolio websites', s1i4: 'E-commerce interfaces', s1i5: 'Responsive web experiences', s1e1: 'A launch page for a new product', s1e2: 'A shop front that is easier on mobile', s1c: 'Start a website project',
    s2t: 'AI Solutions', s2v: 'Intelligent tools that understand your customers, answer them, and give your team time back.', s2i1: 'Custom AI chatbots', s2i2: 'AI-powered tools', s2i3: 'Intelligent customer support', s2i4: 'AI integration for your business', s2e1: 'An advisor that recommends the right perfume', s2e2: 'Instant answers to frequent questions', s2c: 'Discuss an AI idea',
    s3t: 'Automation & Data', s3v: 'Repetitive work turned into systems that run themselves, and numbers turned into a clear picture.', s3i1: 'Workflow automation', s3i2: 'Data analysis', s3i3: 'Interactive dashboards', s3i4: 'Business reporting tools', s3e1: 'A weekly report that builds itself', s3e2: 'A sales dashboard that stays current', s3c: 'Start an automation project',
    s4t: 'Digital Products', s4v: 'Ready-made templates and resources, built to studio standards.', s4i1: 'Website templates', s4i2: 'Presentation templates', s4i3: 'Spreadsheet templates', s4i4: 'Downloadable digital resources', s4e1: 'A startup pitch deck', s4e2: 'A budget tracker', s4c: 'Ask about a template',
    phEyebrow: 'Our philosophy', phH: 'We turn ideas into meaningful digital experiences: designed with care, and built to work.',
    st1t: 'We listen', st1p: 'Your question, your audience, and what you want to happen.', st2t: 'We sketch', st2p: 'A visual direction and a prototype you can see before we build.',
    st3t: 'We build and test', st3p: 'Real development, on mobile and desktop, in Arabic and English.', st4t: 'We launch and follow up', st4p: 'A tidy launch, then improvements based on real use.',
    ctaA: 'Got an ', ctaB: 'idea', ctaC: '?', ctaLine: 'Tell us about it, and we will come back with a clear next step.',
    fName: 'Name', fEmail: 'Email', fService: 'Service you need', opt0: 'Choose a service', optOther: 'Something else', fTime: 'Timeline', optional: '(optional)', noPref: 'No preference',
    t1: 'Within a month', t2: 'Within 1–3 months', t3: 'Flexible', fDesc: 'Tell us about your idea', fDescPh: 'What do you want to build? For whom? What should happen after it launches?',
    fBudget: 'Estimated budget', b1: 'Under SAR 5,000', b2: 'SAR 5,000 – 15,000', b3: 'SAR 15,000 – 40,000', b4: 'Over SAR 40,000',
    send: 'Send your idea', orMail: 'Or email us directly:', rights: '© made by r. — independent creative digital studio', footNav: 'Site links',
    errName: 'Please enter your name.', errEmail: 'Please enter a valid email, like name@example.com.', errService: 'Choose the service closest to your idea.', errDesc: 'Please write at least 20 characters about your idea.',
    notSent: 'Your message is ready, but this form is not connected to an email service yet, so nothing was sent. Copy your message and email it to made1by.r@gmail.com.',
    copy: 'Copy my message', copied: 'Copied.', copyFail: 'Copying is blocked here. Select the text above and copy it.',
    sent: 'Thank you — your idea reached us. We will reply by email.', failed: 'We could not send it just now. Please try again or email us directly.', fixErrors: 'Please fix the highlighted fields.'
  };
  var AR = {
    errName: 'اكتب اسمك.', errEmail: 'اكتب بريدًا إلكترونيًا صحيحًا، مثل name@example.com.', errService: 'اختر الخدمة الأقرب لفكرتك.', errDesc: 'اكتب ٢٠ حرفًا على الأقل عن فكرتك.',
    notSent: 'رسالتك جاهزة، لكن النموذج لم يُربط بخدمة بريد بعد، فلم تُرسل. انسخ رسالتك وأرسلها إلى made1by.r@gmail.com.',
    copy: 'انسخ رسالتي', copied: 'نُسخت.', copyFail: 'النسخ غير متاح هنا. حدّد النص أعلاه وانسخه.',
    sent: 'شكرًا، وصلتنا فكرتك. سنرد عليك على بريدك.', failed: 'تعذّر الإرسال الآن. جرّب مرة أخرى أو راسلنا مباشرة.', fixErrors: 'صحّح الحقول المحدّدة.'
  };
  I18N.init({ key: 'mbr-lang', en: EN, ar: AR });

  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = matchMedia('(pointer: fine)').matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- header, menu, dock ---------- */
  var top = $('#top');
  addEventListener('scroll', function () { top.classList.toggle('scrolled', scrollY > 8); }, { passive: true });
  var menu = $('#menu'), openBtn = $('#menuOpen'), closeBtn = $('#menuClose');
  function setMenu(open) {
    menu.hidden = !open; openBtn.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
    (open ? closeBtn : openBtn).focus();
  }
  openBtn.addEventListener('click', function () { setMenu(true); });
  closeBtn.addEventListener('click', function () { setMenu(false); });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !menu.hidden) setMenu(false); });
  var dock = $('#dock');
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (es) { es.forEach(function (en) { dock.classList.toggle('away', en.isIntersecting); }); }, { threshold: 0.05 }).observe($('#start'));
    new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) $('#circled').classList.add('drawn'); }); }, { threshold: 0.4 }).observe($('#cta-h'));
  } else { $('#circled').classList.add('drawn'); }

  /* ---------- magnetic primary button ---------- */
  if (fine && !reduce) $$('.magnet').forEach(function (b) {
    b.addEventListener('pointermove', function (e) {
      var r = b.getBoundingClientRect();
      var dx = Math.max(-8, Math.min(8, (e.clientX - (r.left + r.width / 2)) * 0.18));
      var dy = Math.max(-6, Math.min(6, (e.clientY - (r.top + r.height / 2)) * 0.3));
      b.style.transform = 'translate(' + dx.toFixed(1) + 'px,' + dy.toFixed(1) + 'px)';
    });
    b.addEventListener('pointerleave', function () { b.style.transform = ''; });
  });

  /* ---------- torn edge ---------- */
  (function () {
    var d = 'M0 30 L0 16';
    for (var x = 16; x <= 1440; x += 16) {
      var y = 15 + 7 * Math.sin(x * 0.071) + 5 * Math.sin(x * 0.23 + 1) + 2.5 * Math.sin(x * 0.61 + 2);
      d += ' L' + x + ' ' + Math.max(2, Math.min(28, y)).toFixed(1);
    }
    $('#tornPath').setAttribute('d', d + ' L1440 30 Z');
  })();

  /* ---------- The Orbit ---------- */
  var stage = $('#stage');
  var els = $$('.lt', stage).concat([$('.wdot', stage)]);
  var backPaths = $$('.ring-back path', stage), frontPaths = $$('.ring-front path', stage);
  var ringBack = $('.ring-back', stage), ringFront = $('.ring-front', stage);
  var spark = $('#spark'), olS = $('#olS'), olE = $('#olE'), hint = $('#hint');
  var noteSketch = $('#noteSketch'), noteSign = $('#noteSign'), paper = $('.paper', stage);
  var tail2 = $('#tail2'), marker = $('#marker');
  var J = [[0.02, -0.03, -5], [-0.03, 0.02, 3], [0.01, 0.03, -2], [0.03, -0.02, 6], [-0.02, 0.02, 4], [0.02, -0.03, -6], [-0.03, 0.01, 3]];
  var geo = null, p = 0, raf = 0, drag = null, touched = false;
  var TAU = Math.PI * 2, SWEEP = TAU * 332 / 360, PHS = TAU * 28 / 360;

  function measure() {
    var W = stage.clientWidth, H = stage.clientHeight; if (!W || !H) return;
    var mobile = W < 700;
    var B = els.map(function (el) {
      var x = 0, y = 0, n = el;
      while (n && n !== stage) { x += n.offsetLeft; y += n.offsetTop; n = n.offsetParent; }
      return { x: x, y: y, w: el.offsetWidth, h: el.offsetHeight };
    });
    function box(a) { var x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9; a.forEach(function (b) { x0 = Math.min(x0, b.x); y0 = Math.min(y0, b.y); x1 = Math.max(x1, b.x + b.w); y1 = Math.max(y1, b.y + b.h); }); return { x: (x0 + x1) / 2, y: (y0 + y1) / 2, y0: y0, y1: y1 }; }
    var L1 = box(B.slice(0, 4)), L2 = box(B.slice(4, 8));
    var ang = Math.max(0.14, Math.min(mobile ? 0.36 : 0.32, Math.atan2(L2.y - L1.y, L2.x - L1.x)));
    var u = { x: Math.cos(ang), y: Math.sin(ang) }, v = { x: u.y, y: -u.x };
    var C = { x: (L1.x + L2.x) / 2, y: (L1.y + L2.y) / 2 };
    var a0 = 1e9, a1 = -1e9, b0 = 1e9, b1 = -1e9;
    B.forEach(function (b) { [[b.x, b.y], [b.x + b.w, b.y], [b.x, b.y + b.h], [b.x + b.w, b.y + b.h]].forEach(function (q) { var dx = q[0] - C.x, dy = q[1] - C.y, a = dx * u.x + dy * u.y, bb = dx * v.x + dy * v.y; a0 = Math.min(a0, a); a1 = Math.max(a1, a); b0 = Math.min(b0, bb); b1 = Math.max(b1, bb); }); });
    C = { x: C.x + (a0 + a1) / 2 * u.x + (b0 + b1) / 2 * v.x, y: C.y + (a0 + a1) / 2 * u.y + (b0 + b1) / 2 * v.y };
    var lineH = L1.y1 - L1.y0;
    var rx = Math.min((a1 - a0) / 2 + W * 0.025, W * (mobile ? 0.47 : 0.5)), ry = lineH * 0.6;
    var edge = mobile ? 30 : 40;
    rx = Math.min(rx, (W - edge - C.x) / u.x, (C.x - 8) / u.x);
    var th = B.map(function (b, i) {
      if (i === 7) return 0.9;
      var cx = b.x + b.w / 2 - C.x, cy = b.y + b.h / 2 - C.y;
      var base = Math.acos(Math.max(-1, Math.min(1, (cx * u.x + cy * u.y) / rx)));
      var ph = i < 4 ? base : TAU - base;
      return Math.max(0.04, Math.min(0.88, (ph - PHS) / SWEEP));
    });
    geo = { W: W, H: H, C: C, u: u, v: v, rx: rx, ry: ry, th: th, mobile: mobile, gy: [L1.y0 + lineH * 0.26, L1.y0 + lineH * 0.93, L2.y0 + lineH * 0.26, L2.y0 + lineH * 0.93] };
    var vb = '0 0 ' + Math.round(W) + ' ' + Math.round(H);
    ringBack.setAttribute('viewBox', vb); ringFront.setAttribute('viewBox', vb);
    var tr = paths(PHS, PHS + SWEEP, 160);
    backPaths[1].setAttribute('d', tr.back); frontPaths[0].setAttribute('d', tr.front);
    var sw = Math.max(3, W * 0.0034).toFixed(2) + 'px', tw = Math.max(2, W * 0.0018).toFixed(2) + 'px';
    backPaths[1].style.strokeWidth = frontPaths[0].style.strokeWidth = tw;
    backPaths[2].style.strokeWidth = frontPaths[1].style.strokeWidth = sw;
    frontPaths[2].style.strokeWidth = Math.max(2.5, W * 0.0022).toFixed(2) + 'px';
    backPaths[0].setAttribute('d', geo.gy.map(function (y) { return 'M0 ' + y.toFixed(1) + ' L' + W.toFixed(1) + ' ' + y.toFixed(1); }).join(' '));
    render();
  }
  function pt(ph) {
    var w = 1 + 0.012 * Math.sin(3 * ph + 0.7) + 0.007 * Math.sin(7 * ph + 2.1);
    var ca = Math.cos(ph) * geo.rx * w, sb = Math.sin(ph) * geo.ry * w;
    return { x: geo.C.x + ca * geo.u.x + sb * geo.v.x, y: geo.C.y + ca * geo.u.y + sb * geo.v.y, back: Math.sin(ph) > 0 };
  }
  function paths(from, to, n) {
    var back = '', front = '', prev = null;
    for (var i = 0; i <= n; i++) {
      var q = pt(from + (to - from) * i / n), side = q.back ? 'b' : 'f', s = q.x.toFixed(1) + ' ' + q.y.toFixed(1);
      if (side !== prev) { if (prev === 'b') back += ' L' + s; else if (prev === 'f') front += ' L' + s; if (side === 'b') back += ' M' + s; else front += ' M' + s; }
      else if (side === 'b') back += ' L' + s; else front += ' L' + s;
      prev = side;
    }
    return { back: back.trim(), front: front.trim() };
  }
  function clamp01(x) { return Math.max(0, Math.min(1, x)); }
  function render() {
    var th = geo ? geo.th : [0.17, 0.22, 0.27, 0.36, 0.75, 0.8, 0.85, 0.9];
    function ink(i) { var k = clamp01((p - (th[i] - 0.06)) / 0.16); return k * k * (3 - 2 * k); }
    for (var i = 0; i < 7; i++) {
      var e = ink(i), q = 1 - e, j = J[i], s = els[i].style;
      s.transform = 'translate(' + (j[0] * q).toFixed(3) + 'em,' + (j[1] * q).toFixed(3) + 'em) rotate(' + (j[2] * q).toFixed(2) + 'deg)';
      s.color = 'rgba(34,32,33,' + e.toFixed(3) + ')';
      s.webkitTextStroke = (q * 0.009).toFixed(4) + 'em #222021';
    }
    var ed = ink(7), ds = els[7].style;
    ds.background = 'rgba(250,101,52,' + ed.toFixed(3) + ')';
    ds.outline = '0.014em dashed rgba(34,32,33,' + ((1 - ed) * 0.9).toFixed(3) + ')';
    ds.outlineOffset = '-0.014em';
    ds.transform = 'scale(' + (0.78 + 0.22 * ed).toFixed(3) + ')';
    var so = clamp01(1 - p * 1.7);
    paper.style.opacity = so; noteSketch.style.opacity = so; noteSign.style.opacity = clamp01((p - 0.9) / 0.1);
    var pct = Math.round(p * 100);
    spark.setAttribute('aria-valuenow', pct);
    spark.setAttribute('aria-valuetext', p < 0.03 ? I18N.t('idea', 'فكرة') : p > 0.97 ? I18N.t('made', 'تنفيذ') : (I18N.lang() === 'en' ? 'building ' + pct + '%' : 'قيد البناء ' + pct + '٪'));
    if (!geo) return;
    backPaths[0].style.opacity = so;
    var cur = PHS + p * SWEEP, end = PHS + SWEEP;
    var pr = p > 0.004 ? paths(PHS, cur, Math.max(2, Math.round(160 * p))) : { back: '', front: '' };
    backPaths[2].setAttribute('d', pr.back); frontPaths[1].setAttribute('d', pr.front);
    var sp = pt(cur), E = pt(end), S = pt(PHS);
    spark.style.left = sp.x.toFixed(1) + 'px'; spark.style.top = sp.y.toFixed(1) + 'px';
    $('svg', spark).style.transform = 'scale(' + (sp.back ? 0.84 : 1) + ') rotate(' + (p * 540).toFixed(1) + 'deg)';
    var ox = S.x - geo.C.x, oy = S.y - geo.C.y, ol = Math.hypot(ox, oy) || 1;
    olS.style.left = (S.x + ox / ol * (geo.mobile ? 26 : 34)).toFixed(1) + 'px'; olS.style.top = (S.y + oy / ol * (geo.mobile ? 26 : 34)).toFixed(1) + 'px';
    olE.style.left = (E.x - (geo.mobile ? 6 : 14)).toFixed(1) + 'px'; olE.style.top = (E.y + (geo.mobile ? 38 : 50)).toFixed(1) + 'px';
    hint.style.setProperty('--hx', (E.x - 56).toFixed(1) + 'px'); hint.style.setProperty('--hy', (geo.H + 62).toFixed(1) + 'px');
    var tOp = clamp01((p - 0.96) / 0.04);
    if (geo.mobile) { frontPaths[2].setAttribute('d', ''); }
    else frontPaths[2].setAttribute('d', 'M' + (E.x + 30).toFixed(1) + ' ' + (E.y + 24).toFixed(1) + ' C ' + (E.x + 44).toFixed(1) + ' ' + (E.y + 90).toFixed(1) + ', ' + (E.x - 22).toFixed(1) + ' ' + (geo.H + 40).toFixed(1) + ', ' + E.x.toFixed(1) + ' ' + (geo.H + 132).toFixed(1));
    frontPaths[2].style.opacity = tOp;
    var tl = (E.x / geo.W * 100).toFixed(2) + '%';
    tail2.style.left = marker.style.left = tl; tail2.style.opacity = marker.style.opacity = tOp;
  }
  function play() {
    cancelAnimationFrame(raf);
    if (reduce) { p = 1; render(); return; }
    var t0 = performance.now(), dur = 2300;
    (function step(now) {
      var k = Math.min(1, (now - t0) / dur);
      p = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
      render();
      if (k < 1) raf = requestAnimationFrame(step); else if (!touched) spark.classList.add('nudging');
    })(t0);
  }
  spark.addEventListener('pointerdown', function (e) {
    cancelAnimationFrame(raf); touched = true; spark.classList.remove('nudging');
    drag = { x: e.clientX, y: e.clientY, moved: false };
    try { spark.setPointerCapture(e.pointerId); } catch (err) {}
  });
  spark.addEventListener('pointermove', function (e) {
    if (!drag || !geo) return;
    if (Math.hypot(e.clientX - drag.x, e.clientY - drag.y) > 5) drag.moved = true;
    if (!drag.moved) return;
    var r = stage.getBoundingClientRect();
    var dx = e.clientX - r.left - geo.C.x, dy = e.clientY - r.top - geo.C.y;
    var a = (dx * geo.u.x + dy * geo.u.y) / geo.rx, b = (dx * geo.v.x + dy * geo.v.y) / geo.ry;
    var t = ((((Math.atan2(b, a) - PHS) % TAU) + TAU) % TAU) / SWEEP;
    if (t > 1) t = p > 0.5 ? 1 : 0;
    if (p > 0.8 && t < 0.2) t = 1;
    if (p < 0.2 && t > 0.8) t = 0;
    p = t; render();
  });
  function up(tap) { var d = drag; drag = null; if (tap && d && !d.moved) play(); }
  spark.addEventListener('pointerup', function () { up(true); });
  spark.addEventListener('pointercancel', function () { up(false); });
  spark.addEventListener('keydown', function (e) {
    var rtl = I18N.lang() === 'ar', k = e.key, n = p;
    if (k === 'Enter' || k === ' ') { e.preventDefault(); touched = true; spark.classList.remove('nudging'); play(); return; }
    if (k === 'ArrowUp' || k === (rtl ? 'ArrowLeft' : 'ArrowRight')) n += 0.05;
    else if (k === 'ArrowDown' || k === (rtl ? 'ArrowRight' : 'ArrowLeft')) n -= 0.05;
    else if (k === 'Home') n = 0; else if (k === 'End') n = 1; else return;
    e.preventDefault(); cancelAnimationFrame(raf); touched = true; spark.classList.remove('nudging');
    p = clamp01(n); render();
  });
  $('#replay').addEventListener('click', function () { touched = true; spark.classList.remove('nudging'); play(); });
  render();
  var started = false;
  function start() { if (started) return; started = true; measure(); if (reduce) { p = 1; render(); } else setTimeout(play, 400); }
  if (document.fonts && document.fonts.ready) { document.fonts.ready.then(start); document.fonts.addEventListener && document.fonts.addEventListener('loadingdone', measure); }
  setTimeout(start, 2500);
  if ('ResizeObserver' in window) new ResizeObserver(function () { measure(); }).observe(stage);
  I18N.on(function () { requestAnimationFrame(measure); });

  /* ---------- Selected Work ---------- */
  var rows = $$('#wkList .wk-row');
  function pick(row) {
    if (row.classList.contains('on')) return;
    rows.forEach(function (r) {
      var on = r === row; r.classList.toggle('on', on);
      $('.wk-btn', r).setAttribute('aria-pressed', String(on));
      document.getElementById(r.getAttribute('data-pv')).hidden = !on;
    });
  }
  rows.forEach(function (r) {
    var b = $('.wk-btn', r);
    b.addEventListener('click', function () { pick(r); });
    b.addEventListener('focus', function () { pick(r); });
    if (fine) b.addEventListener('mouseenter', function () { pick(r); });
  });

  /* ---------- featured AI: recorded conversations (local data only) ---------- */
  var CONVS = [
    { q: 'أبي عطر صباحي منعش ومناسب للدوام.', a: 'للصباح والدوام أنصحك بعطور حمضية أو خضراء، فوحانها هادئ فلا تزعج من حولك.', cards: [['نسيم الصباح', 'حمضي منعش', 'برغموت · شاي أبيض · مسك نظيف'], ['ورق التين', 'أخضر', 'ورق تين · ليمون أخضر · خشب الأرز']] },
    { q: 'أبي عطر فيه فانيلا ومسك.', a: 'هذان يجمعان الفانيلا والمسك بطريقتين: الأول دافئ وحلو، والثاني أنعم وأقرب للبشرة.', cards: [['حلوى الكهرمان', 'شرقي دافئ', 'هيل · فانيلا · كهرمان · مسك'], ['مخمل المساء', 'مسكي ناعم', 'فلفل وردي · فانيلا · مسك · صندل']] },
    { q: 'عندي مناسبة مسائية، وش تقترح؟', a: 'للمساء أقترح عطورًا أعمق، حضورها أوضح.', cards: [['ليل العود', 'عودي', 'زعفران · ورد طائفي · عود · عنبر'], ['سهرة الياسمين', 'زهري دافئ', 'إجاص · ياسمين · باتشولي · فانيلا']] }
  ];
  var log = $('#phLog'), chips = $$('.ph-chip'), timers = [], auto = true;
  function el(tag, cls, text) { var n = document.createElement(tag); if (cls) n.className = cls; if (text) n.textContent = text; return n; }
  function clear() { timers.forEach(clearTimeout); timers = []; }
  function showConv(i, animate) {
    clear();
    chips.forEach(function (c, k) { c.setAttribute('aria-pressed', String(k === i)); });
    var c = CONVS[i];
    log.textContent = '';
    log.appendChild(el('span', 'b-user', c.q));
    function answer() {
      var t = $('.b-typing', log); if (t) t.remove();
      log.appendChild(el('span', 'b-bot', c.a));
      c.cards.forEach(function (cd) {
        var card = el('div', 'p-card');
        card.appendChild(el('span', 'p-name', cd[0])); card.appendChild(el('span', 'p-fam', cd[1]));
        card.appendChild(el('span', 'p-notes', cd[2])); card.appendChild(el('span', 'p-tag', 'منتج توضيحي'));
        log.appendChild(card);
      });
      if (auto) timers.push(setTimeout(function () { showConv((i + 1) % CONVS.length, true); }, 7000));
    }
    if (!animate || reduce) { answer(); return; }
    timers.push(setTimeout(function () { var t = el('span', 'b-typing'); t.innerHTML = '<i></i><i></i><i></i><span class="sr-only">يكتب…</span>'; log.appendChild(t); }, 700));
    timers.push(setTimeout(answer, 2000));
  }
  chips.forEach(function (c, i) { c.addEventListener('click', function () { auto = false; showConv(i, true); }); });
  showConv(0, false);
  if (!reduce && 'IntersectionObserver' in window) {
    var aiSeen = false;
    new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting && !aiSeen) { aiSeen = true; timers.push(setTimeout(function () { if (auto) showConv(1, true); }, 4000)); } }); }, { threshold: 0.4 }).observe($('#ai'));
  }

  /* ---------- services accordion ---------- */
  var items = $$('#sv .sv-item');
  items.forEach(function (it) {
    $('.sv-btn', it).addEventListener('click', function () {
      var willOpen = !it.classList.contains('open');
      items.forEach(function (o) {
        var on = o === it && willOpen; o.classList.toggle('open', on);
        $('.sv-btn', o).setAttribute('aria-expanded', String(on));
        $('.sv-panel', o).hidden = !on;
      });
    });
  });
  $$('[data-service]').forEach(function (a) {
    a.addEventListener('click', function () { $('#f-service').value = a.getAttribute('data-service'); clearErr($('#f-service')); });
  });

  /* ---------- inquiry form ---------- */
  var form = $('#inquiry'), status = $('#status');
  function setErr(input, key) { var e = document.getElementById(input.getAttribute('aria-describedby')); input.setAttribute('aria-invalid', 'true'); if (e) e.textContent = I18N.t(key); }
  function clearErr(input) { var e = document.getElementById(input.getAttribute('aria-describedby')); input.removeAttribute('aria-invalid'); if (e) e.textContent = ''; }
  ['#f-name', '#f-email', '#f-service', '#f-desc'].forEach(function (s) { $(s).addEventListener('input', function () { clearErr($(s)); }); });
  function validate() {
    var bad = [];
    var n = $('#f-name'), m = $('#f-email'), s = $('#f-service'), d = $('#f-desc');
    if (!n.value.trim()) { setErr(n, 'errName'); bad.push(n); }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(m.value.trim())) { setErr(m, 'errEmail'); bad.push(m); }
    if (!s.value) { setErr(s, 'errService'); bad.push(s); }
    if (d.value.trim().length < 20) { setErr(d, 'errDesc'); bad.push(d); }
    return bad;
  }
  function summary() {
    var f = new FormData(form), lines = [];
    var sel = function (id) { var o = $(id).selectedOptions[0]; return o && o.value ? o.textContent : '—'; };
    lines.push((I18N.lang() === 'en' ? 'Name: ' : 'الاسم: ') + f.get('name'));
    lines.push((I18N.lang() === 'en' ? 'Email: ' : 'البريد: ') + f.get('email'));
    lines.push((I18N.lang() === 'en' ? 'Service: ' : 'الخدمة: ') + sel('#f-service'));
    lines.push((I18N.lang() === 'en' ? 'Timeline: ' : 'الموعد: ') + sel('#f-time'));
    lines.push((I18N.lang() === 'en' ? 'Budget: ' : 'الميزانية: ') + sel('#f-budget'));
    lines.push(''); lines.push(f.get('description'));
    return lines.join('\n');
  }
  function show(msgKey, extra, ok) {
    status.hidden = false; status.className = 'status' + (ok ? ' ok' : ''); status.textContent = '';
    status.appendChild(el('p', '', I18N.t(msgKey))).style.margin = '0';
    if (extra) status.appendChild(extra);
    status.focus();
  }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var bad = validate();
    if (bad.length) { show('fixErrors'); bad[0].focus(); return; }
    if ($('#f-web').value) { show('sent', null, true); form.reset(); return; } /* honeypot: quietly drop bots */
    if (!FORM_ENDPOINT) {
      var box = el('div', 'acts'), pre = el('pre', '', summary());
      pre.style.cssText = 'white-space:pre-wrap;margin:12px 0 0;padding:12px;background:#fff;border:1px dashed #3E3A38;font:inherit;font-size:15px';
      var btn = el('button', 'btn-ink', I18N.t('copy')); btn.type = 'button';
      btn.addEventListener('click', function () {
        var done = function () { btn.textContent = I18N.t('copied'); };
        if (navigator.clipboard) navigator.clipboard.writeText(pre.textContent).then(done, function () { btn.textContent = I18N.t('copyFail'); });
        else btn.textContent = I18N.t('copyFail');
      });
      box.appendChild(btn);
      var wrap = el('div'); wrap.appendChild(pre); wrap.appendChild(box);
      show('notSent', wrap); return;
    }
    fetch(FORM_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(Object.fromEntries(new FormData(form))) })
      .then(function (r) { if (!r.ok) throw new Error(r.status); show('sent', null, true); form.reset(); })
      .catch(function () { show('failed'); });
  });
})();
