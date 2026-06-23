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

/* ── TERMINAL BOOT SEQUENCE ── */
(function() {
  var terminal = document.querySelector('.gd-terminal');
  var mosaic   = document.querySelector('.gd-mosaic');
  if (!terminal || !mosaic) return;
  var body = terminal.querySelector('.gd-term-body');
  var lines = [
    '$ folio build --prod',
    '  ✓ Compiling assets...',
    '  ✓ Optimising images (32 files)',
    '  ✓ Generating schema markup',
    '  ✓ PageSpeed score: 96/100',
    '  ✓ Deploy to edge network',
    '$ site live → folio.lu ✓',
  ];
  var lineIdx = 0, charIdx = 0, el = null;
  function typeChar() {
    if (lineIdx >= lines.length) {
      setTimeout(function() {
        terminal.style.transition = 'opacity 0.5s';
        terminal.style.opacity = '0';
        setTimeout(function() {
          terminal.style.display = 'none';
          mosaic.style.display = '';
          mosaic.style.transition = 'opacity 0.4s';
          mosaic.style.opacity = '1';
        }, 500);
      }, 380);
      return;
    }
    if (charIdx === 0) {
      el = document.createElement('div');
      body.appendChild(el);
    }
    var line = lines[lineIdx];
    el.textContent = line.slice(0, charIdx + 1);
    charIdx++;
    if (charIdx < line.length) {
      setTimeout(typeChar, 45);
    } else {
      lineIdx++; charIdx = 0;
      setTimeout(typeChar, 120);
    }
  }
  typeChar();
})();

/* ── CURSOR TILT on .gd-screen ── */
(function() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  var hero   = document.querySelector('.hero');
  var screen = document.querySelector('.gd-screen');
  if (!hero || !screen) return;
  hero.addEventListener('mousemove', function(e) {
    var r  = hero.getBoundingClientRect();
    var cx = r.left + r.width  / 2;
    var cy = r.top  + r.height / 2;
    var rx =  (e.clientY - cy) / r.height * 8;
    var ry = -(e.clientX - cx) / r.width  * 8;
    screen.style.transform = 'perspective(1200px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg)';
  });
  hero.addEventListener('mouseleave', function() {
    screen.style.transform = '';
  });
})();

/* ── BRAIN HOLOGRAM HOVER ── */
(function() {
  var groups = document.querySelectorAll('.brain-branch-group');
  groups.forEach(function(g) {
    g.style.cursor = 'pointer';
    g.addEventListener('mouseenter', function() { g.classList.add('active'); });
    g.addEventListener('mouseleave', function() { g.classList.remove('active'); });
  });
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
   GLASS DISPLAY — hero screen card interactions
═══════════════════════════════════════════════════════════ */
(function() {
  var mosaic       = document.querySelector('.gd-mosaic');
  var snippetWrap  = document.querySelector('.gd-snippet-wrap');
  var snippetStage = document.querySelector('.gd-snippet-stage');
  var snippetUrl   = document.querySelector('.gd-snippet-url');
  var backBtn      = document.querySelector('.gd-back');
  if (!mosaic) return;

  function showSnippet(card) {
    var title    = card.dataset.title    || '';
    var industry = card.dataset.industry || '';
    var url      = card.dataset.url      || '';
    var href     = card.dataset.href     || ('https://' + url);

    if (title === 'Deepak Products') {
      snippetStage.innerHTML =
        '<div class="snip snip-deepak">' +
          '<div class="snip-nav">' +
            '<span class="snip-logo">Deepak<em>·</em></span>' +
            '<span class="snip-navlinks"><span>Products</span><span>About</span><span>Contact</span></span>' +
          '</div>' +
          '<div class="snip-hero">' +
            '<span class="snip-eyebrow">Industrial Manufacturing</span>' +
            '<h4>Sheet Metal<br><em>Experts.</em></h4>' +
            '<p class="snip-sub">Precision engineering since 1988 — perforated &amp; woven wire mesh, gratings, and expanded metals for global industry.</p>' +
            '<div class="snip-row">' +
              '<a class="snip-cta" href="' + href + '" target="_blank" rel="noopener noreferrer">Visit site →</a>' +
            '</div>' +
          '</div>' +
          '<div class="dp-stats">' +
            '<div class="dp-stat"><span class="dp-v">35+</span><span class="dp-l">Years</span></div>' +
            '<div class="dp-stat"><span class="dp-v">650+</span><span class="dp-l">Products</span></div>' +
            '<div class="dp-stat"><span class="dp-v">700+</span><span class="dp-l">Clients</span></div>' +
            '<div class="dp-stat"><span class="dp-v">10+</span><span class="dp-l">Countries</span></div>' +
          '</div>' +
        '</div>';
    } else {
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
              '<a class="snip-cta" href="' + href + '" target="_blank" rel="noopener noreferrer">Visit site →</a>' +
              '<span class="snip-meta">' + url + '</span>' +
            '</div>' +
          '</div>' +
          '<div class="snip-photos">' +
            '<div class="snip-photo p1"></div>' +
            '<div class="snip-photo p2"></div>' +
            '<div class="snip-photo p3"></div>' +
          '</div>' +
        '</div>';
    }

    snippetUrl.innerHTML = url + ' · <span>shipped by Folio Studio</span>';
    mosaic.style.display       = 'none';
    snippetWrap.style.display  = 'flex';
  }

  mosaic.addEventListener('click', function(e) {
    var card = e.target.closest('.gd-card');
    if (card) showSnippet(card);
  });

  if (backBtn) {
    backBtn.addEventListener('click', function() {
      snippetWrap.style.display = 'none';
      mosaic.style.display      = '';
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
