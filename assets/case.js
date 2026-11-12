/* made by r. — case study behaviour: scales the live demo previews and drives the preview tabs. */
(function () {
  'use strict';
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var vps = Array.prototype.slice.call(document.querySelectorAll('.vp[data-w]'));
  function scale() { vps.forEach(function (v) { v.style.setProperty('--k', (v.clientWidth / +v.getAttribute('data-w')).toFixed(4)); }); }
  scale(); addEventListener('resize', scale);
  if ('ResizeObserver' in window) { var ro = new ResizeObserver(scale); vps.forEach(function (v) { ro.observe(v); }); }

  var frames = Array.prototype.slice.call(document.querySelectorAll('iframe[data-src]'));
  function syncLang(f) { try { var w = f.contentWindow; if (w && w.I18N && w.I18N.lang() !== I18N.lang()) w.I18N.set(I18N.lang()); } catch (e) {} }
  function load(f) { if (!f.getAttribute('src')) f.setAttribute('src', f.getAttribute('data-src')); }
  frames.forEach(function (f) {
    f.addEventListener('load', function () { var ph = f.parentNode.querySelector('.ph'); if (ph) ph.style.visibility = 'hidden'; syncLang(f); });
  });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { load(e.target); io.unobserve(e.target); } }); }, { rootMargin: '400px' });
    frames.forEach(function (f) { io.observe(f); });
  } else frames.forEach(load);

  var tabs = Array.prototype.slice.call(document.querySelectorAll('.ptab'));
  tabs.forEach(function (b) {
    b.addEventListener('click', function () {
      tabs.forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      var id = b.getAttribute('data-target');
      frames.forEach(function (f) {
        load(f);
        try {
          var d = f.contentDocument, w = f.contentWindow, el = id ? d.getElementById(id) : null;
          var y = el ? el.getBoundingClientRect().top + w.scrollY - (+f.getAttribute('data-offset') || 0) : 0;
          w.scrollTo({ top: Math.max(0, y), behavior: reduce ? 'auto' : 'smooth' });
        } catch (e) { /* preview not reachable: nothing else to do */ }
      });
    });
  });

  I18N.on(function () { frames.forEach(syncLang); });
})();
