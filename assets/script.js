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

/* ── CITY ROTATOR ── */
(function() {
  const target = document.getElementById('city-rotator');
  if (!target) return;
  const cities = (target.dataset.cities || 'Luxembourg,London,New York,Amsterdam,Singapore,Dubai,Paris').split(',');
  let i = 0;
  function tick() {
    target.innerHTML = '<span class="city-item">' + cities[i] + '</span>';
    i = (i + 1) % cities.length;
  }
  tick();
  setInterval(tick, 2400);
})();

/* ═══════════════════════════════════════════════════════════
   CODE TYPEWRITER — the hero terminal that "codes" the site
═══════════════════════════════════════════════════════════ */
(function() {
  const box = document.getElementById('codebox-body');
  const fileLabel = document.getElementById('codebox-file');
  if (!box) return;

  /* Sequences: each is a file shown one after another */
  const sequences = [
    {
      file: 'hero.html',
      lines: [
        ['<span class="tag">&lt;section</span> <span class="attr">class</span>=<span class="str">"hero"</span><span class="tag">&gt;</span>'],
        ['  <span class="tag">&lt;h1&gt;</span>We build websites for'],
        ['    ambitious brands in <span class="tag">&lt;span&gt;</span>'],
        ['      <span class="str">"' + (window.__city || 'Luxembourg') + '"</span>'],
        ['    <span class="tag">&lt;/span&gt;</span><span class="tag">&lt;/h1&gt;</span>'],
        ['  <span class="tag">&lt;p&gt;</span>From audit to launch <span class="com">// 7 days</span>'],
        ['  <span class="tag">&lt;/p&gt;</span>'],
        ['  <span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="str">"#audit"</span> <span class="attr">class</span>=<span class="str">"btn"</span><span class="tag">&gt;</span>'],
        ['    Get free audit <span class="str">→</span>'],
        ['  <span class="tag">&lt;/a&gt;</span>'],
        ['<span class="tag">&lt;/section&gt;</span>']
      ]
    },
    {
      file: 'styles.css',
      lines: [
        ['<span class="fn">.hero</span> {'],
        ['  <span class="prop">background</span>: <span class="val">#0A0A0B</span>;'],
        ['  <span class="prop">color</span>: <span class="val">#F4F1E8</span>;'],
        ['  <span class="prop">font-family</span>: <span class="str">"Fraunces"</span>;'],
        ['  <span class="prop">padding</span>: <span class="num">128px</span> <span class="num">48px</span>;'],
        ['}'],
        [''],
        ['<span class="fn">.accent</span> {'],
        ['  <span class="prop">color</span>: <span class="val">#39D353</span>;'],
        ['  <span class="prop">font-style</span>: <span class="val">italic</span>;'],
        ['}']
      ]
    },
    {
      file: 'audit.js',
      lines: [
        ['<span class="kw">async function</span> <span class="fn">runAudit</span>(<span class="val">site</span>) {'],
        ['  <span class="kw">const</span> result = <span class="kw">await</span> <span class="fn">scan</span>(site);'],
        ['  <span class="kw">return</span> {'],
        ['    <span class="prop">performance</span>: <span class="num">97</span>,'],
        ['    <span class="prop">seo</span>:         <span class="num">94</span>,'],
        ['    <span class="prop">mobile</span>:      <span class="num">96</span>,'],
        ['    <span class="prop">accessibility</span>: <span class="num">100</span>,'],
        ['    <span class="prop">verdict</span>: <span class="str">"ready to ship"</span>'],
        ['  };'],
        ['}'],
        [''],
        ['<span class="com">// Free for Luxembourg SMEs ✓</span>']
      ]
    }
  ];

  const speed     = 22;   /* ms per char */
  const linePause = 90;
  const filePause = 1100;
  let seqIdx = 0;

  function clearBox() {
    box.innerHTML = '';
  }

  function appendCursor() {
    const c = document.createElement('span');
    c.className = 'cursor';
    box.appendChild(c);
    return c;
  }

  function removeCursor() {
    const c = box.querySelector('.cursor');
    if (c) c.remove();
  }

  async function typeLine(html, lineNum) {
    /* Build the line element with line number */
    const line = document.createElement('span');
    line.className = 'code-line';
    const ln = document.createElement('span');
    ln.className = 'ln';
    ln.textContent = lineNum;
    line.appendChild(ln);
    const content = document.createElement('span');
    line.appendChild(content);
    box.appendChild(line);
    box.appendChild(document.createElement('br'));

    /* Type out the actual content by parsing HTML into chunks */
    /* Strategy: render briefly invisible, then reveal char by char */
    const tmp = document.createElement('span');
    tmp.innerHTML = html;
    /* Walk text nodes & build a reveal queue */
    const walker = document.createTreeWalker(tmp, NodeFilter.SHOW_TEXT, null);
    const parts = [];
    let node;
    while ((node = walker.nextNode())) parts.push(node);

    /* Mirror the structure into the content cell empty */
    const mirror = tmp.cloneNode(true);
    /* Empty out all text */
    const mirrorWalker = document.createTreeWalker(mirror, NodeFilter.SHOW_TEXT, null);
    const mirrorParts = [];
    while ((node = mirrorWalker.nextNode())) {
      mirrorParts.push({ node: node, full: node.nodeValue });
      node.nodeValue = '';
    }
    while (mirror.firstChild) content.appendChild(mirror.firstChild);

    /* Reveal character by character */
    for (let i = 0; i < mirrorParts.length; i++) {
      const { node: n, full } = mirrorParts[i];
      for (let c = 0; c < full.length; c++) {
        n.nodeValue += full[c];
        await sleep(speed);
      }
    }
  }

  function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

  async function runSequence() {
    while (true) {
      const seq = sequences[seqIdx];
      if (fileLabel) fileLabel.textContent = seq.file;
      clearBox();
      for (let i = 0; i < seq.lines.length; i++) {
        await typeLine(seq.lines[i][0], String(i + 1).padStart(2, '0'));
        await sleep(linePause);
      }
      appendCursor();
      await sleep(filePause);
      removeCursor();
      seqIdx = (seqIdx + 1) % sequences.length;
    }
  }

  /* Start when in view */
  if ('IntersectionObserver' in window) {
    const heroObs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        runSequence();
        heroObs.disconnect();
      }
    }, { threshold: 0.15 });
    heroObs.observe(box);
  } else {
    runSequence();
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
