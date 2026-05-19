/* ═══════════════════════════════════════════════════════════
   FOLIO — SHARED INTERACTIONS
═══════════════════════════════════════════════════════════ */

/* ── LUX CLOCK ── */
function updateClock() {
  const el = document.getElementById('clock');
  if (!el) return;
  const now = new Date().toLocaleTimeString('en-GB', {
    timeZone: 'Europe/Luxembourg',
    hour: '2-digit', minute: '2-digit'
  });
  el.textContent = 'LUX · ' + now;
}
updateClock();
setInterval(updateClock, 30000);

/* ── SCROLL REVEAL ── */
(function() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(e => e.classList.add('in'));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => obs.observe(el));
})();

/* ── CITY ROTATOR (inline-grid, width-stable) ── */
(function() {
  const target = document.getElementById('city-rotator');
  if (!target) return;
  const cities = ['Luxembourg', 'London', 'New York', 'Amsterdam', 'Singapore', 'Dubai', 'Paris'];
  let i = 0;
  const active = target.querySelector('.city-active');
  if (!active) return;
  function tick() {
    active.textContent = cities[i];
    active.classList.remove('city-active');
    void active.offsetWidth; /* force reflow to re-trigger animation */
    active.classList.add('city-active');
    i = (i + 1) % cities.length;
  }
  tick();
  setInterval(tick, 2400);
})();

/* ═══════════════════════════════════════════════════════════
   PORTFOLIO PROJECTOR — hero glass screen interactions
═══════════════════════════════════════════════════════════ */
(function() {
  const gridWrap     = document.querySelector('.hp-grid-wrap');
  const snippetWrap  = document.querySelector('.hp-snippet-wrap');
  const snippetStage = document.querySelector('.hp-snippet-stage');
  const snippetUrl   = document.querySelector('.hp-snippet-url');
  const backBtn      = document.querySelector('.hp-back');
  if (!gridWrap) return;

  function showSnippet(card) {
    var title    = card.dataset.title    || '';
    var industry = card.dataset.industry || '';
    var url      = card.dataset.url      || '';
    var firstWord = title.split(' ')[0];

    snippetStage.innerHTML =
      '<div class="snip">' +
        '<div class="snip-nav">' +
          '<span class="snip-logo">' + firstWord + '<em>·</em></span>' +
          '<span class="snip-navlinks"><span>Work</span><span>About</span><span>Contact</span></span>' +
        '</div>' +
        '<div class="snip-hero">' +
          '<span class="snip-eyebrow">' + industry + '</span>' +
          '<h4>Shipped by<br><em>Folio Studio.</em></h4>' +
          '<div class="snip-row">' +
            '<span class="snip-cta">Visit live →</span>' +
            '<span class="snip-meta">' + url + '</span>' +
          '</div>' +
        '</div>' +
        '<div class="snip-photos">' +
          '<div class="snip-photo p1"></div>' +
          '<div class="snip-photo p2"></div>' +
          '<div class="snip-photo p3"></div>' +
        '</div>' +
      '</div>';

    snippetUrl.innerHTML = url + ' · <span>shipped by Folio Studio</span>';
    gridWrap.style.display    = 'none';
    snippetWrap.style.display = 'flex';
  }

  gridWrap.addEventListener('click', function(e) {
    var card = e.target.closest('.hp-card');
    if (card) showSnippet(card);
  });

  if (backBtn) {
    backBtn.addEventListener('click', function() {
      snippetWrap.style.display = 'none';
      gridWrap.style.display    = '';
    });
  }
})();

/* ═══════════════════════════════════════════════════════════
   COUNT-UP NUMBERS (data-count attribute)
═══════════════════════════════════════════════════════════ */
(function() {
  const els = document.querySelectorAll('[data-count]');
  if (!els.length || !('IntersectionObserver' in window)) {
    els.forEach(el => { el.textContent = el.dataset.count; });
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseFloat(el.dataset.count);
      const dur = 1400;
      const start = performance.now();
      function tick(now) {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = target * eased;
        el.textContent = (target >= 100 ? Math.round(val) : val.toFixed(1).replace(/\.0$/, ''));
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = el.dataset.count;
      }
      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold: 0.3 });
  els.forEach(el => obs.observe(el));
})();
