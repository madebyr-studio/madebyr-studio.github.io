/* Tiny bilingual helper. Arabic lives in the HTML (default); English comes from a dictionary.
   Usage: I18N.init({ key: 'storage-key', en: { key: 'English text' } }); */
(function () {
  var arByKey = {}, listeners = [], orig = new Map(), origAttr = new Map(), dict = { en: {} }, storeKey = 'mbr-lang', titleAr = '', current = 'ar';
  function collect() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      if (!orig.has(el)) { var v0 = el.hasAttribute('data-i18n-html') ? el.innerHTML : el.textContent; orig.set(el, v0); var k0 = el.getAttribute('data-i18n'); if (arByKey[k0] === undefined) arByKey[k0] = v0; }
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      if (origAttr.has(el)) return;
      var m = {};
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var bits = pair.split(':'); if (bits.length < 2) return;
        var a = bits[0].trim(); m[a] = { key: bits[1].trim(), val: el.getAttribute(a) || '' };
      });
      origAttr.set(el, m);
    });
  }
  function t(key, fallback) {
    if (current === 'en' && dict.en[key] !== undefined) return dict.en[key];
    if (current === 'ar' && dict.ar && dict.ar[key] !== undefined) return dict.ar[key];
    collect();
    if (arByKey[key] !== undefined) return arByKey[key];
    return fallback !== undefined ? fallback : key;
  }
  function apply(lang) {
    current = lang === 'en' ? 'en' : 'ar';
    collect();
    var d = dict.en;
    orig.forEach(function (ar, el) {
      var k = el.getAttribute('data-i18n');
      var v = current === 'ar' ? ar : (d[k] !== undefined ? d[k] : ar);
      if (el.hasAttribute('data-i18n-html')) el.innerHTML = v; else el.textContent = v;
    });
    origAttr.forEach(function (m, el) {
      Object.keys(m).forEach(function (a) {
        var k = m[a].key;
        el.setAttribute(a, current === 'ar' ? m[a].val : (d[k] !== undefined ? d[k] : m[a].val));
      });
    });
    var root = document.documentElement;
    root.lang = current; root.dir = current === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-set-lang]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-set-lang') === current)); });
    document.title = current === 'en' && d.__title ? d.__title : titleAr;
    try { localStorage.setItem(storeKey, current); } catch (e) {}
    listeners.forEach(function (f) { f(current); });
  }
  window.I18N = {
    init: function (opts) {
      dict.en = opts.en || {}; dict.ar = opts.ar || {}; storeKey = opts.key || storeKey; titleAr = document.title;
      document.addEventListener('click', function (e) {
        var b = e.target.closest('[data-set-lang]');
        if (b) apply(b.getAttribute('data-set-lang'));
      });
      var saved = null;
      try { saved = localStorage.getItem(storeKey); } catch (e) {}
      apply(saved === 'en' ? 'en' : 'ar');
    },
    set: apply,
    t: t,
    lang: function () { return current; },
    on: function (f) { listeners.push(f); },
    missing: function () {
      collect(); var out = [];
      orig.forEach(function (ar, el) { var k = el.getAttribute('data-i18n'); if (dict.en[k] === undefined) out.push(k); });
      origAttr.forEach(function (m) { Object.keys(m).forEach(function (a) { if (dict.en[m[a].key] === undefined) out.push(m[a].key); }); });
      return out.filter(function (v, i, a) { return a.indexOf(v) === i; });
    }
  };
})();
