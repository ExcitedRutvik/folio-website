// ═══════════════════════════════════════════════════════════
// FOLIO UI KIT — homepage sections
// Hero, Stats, WhatWeDo, TechStack, FeaturedWork, Process,
// Testimonial, HomeFAQ, CTA
// Uses primitives from components.jsx.
// ═══════════════════════════════════════════════════════════

const { useState: useStateH, useEffect: useEffectH, useRef: useRefH } = React;

// ── City rotator — width-stable, never reflows ───────────
function CityRotator({ cities, intervalMs = 2400 }) {
  const [idx, setIdx] = useStateH(0);
  useEffectH(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % cities.length), intervalMs);
    return () => clearInterval(id);
  }, [cities.length, intervalMs]);
  const widest = cities.reduce((a, b) => (a.length >= b.length ? a : b), '');
  return (
    <span className="city-rotator">
      <span className="city-spacer" aria-hidden="true">{widest}</span>
      <span key={idx} className="city-active">{cities[idx]}</span>
    </span>
  );
}

// ── Hero ──────────────────────────────────────────────────
function Hero({ onAudit }) {
  const cities = ['Luxembourg', 'London', 'New York', 'Amsterdam', 'Singapore', 'Dubai', 'Paris'];

  return (
    <section className="hero">
      <Container>
        <div className="hero-grid">
          <div className="hero-left">
            <Eyebrow>A web agency in Luxembourg</Eyebrow>
            <h1 className="hero-headline" style={{ marginTop: 14 }}>
              Websites for<br />
              ambitious brands<br />
              in <CityRotator cities={cities} />
            </h1>
            <p className="hero-sub">
              Instead of 8-week timelines and vague quotes — dark editorial design, fixed pricing,
              and a live site in 7 days. We audit first, charge second, and tell you honestly
              if we're not the right fit.
            </p>
            <div className="hero-actions">
              <Button variant="primary" onClick={onAudit}>Get your free audit</Button>
              <Button variant="ghost">See our work</Button>
            </div>
            <div className="trust-strip">
              <span className="trust-label">Proven across</span>
              <div className="trust-items">
                <span className="trust-item"><span className="trust-item-num">32+</span>Audits delivered</span>
                <span className="trust-item"><span className="trust-item-num">7d</span>Avg. delivery</span>
                <span className="trust-item"><span className="trust-item-num">+40%</span>Enquiries</span>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <HoloProjector />
          </div>
        </div>
      </Container>
      <HashStrip />
    </section>
  );
}

// ── Code terminal animation ───────────────────────────────
function CodeBox() {
  const sequences = [
    {
      file: 'hero.html',
      lines: [
        '<span class="tag">&lt;section</span> <span class="attr">class</span>=<span class="str">"hero"</span><span class="tag">&gt;</span>',
        '  <span class="tag">&lt;h1&gt;</span>We build websites for',
        '    ambitious brands in <span class="tag">&lt;span&gt;</span>',
        '      <span class="str">"Luxembourg"</span>',
        '    <span class="tag">&lt;/span&gt;</span><span class="tag">&lt;/h1&gt;</span>',
        '  <span class="tag">&lt;p&gt;</span>From audit to launch <span class="com">// 7 days</span>',
        '  <span class="tag">&lt;/p&gt;</span>',
        '  <span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="str">"#audit"</span><span class="tag">&gt;</span>',
        '    Get free audit <span class="str">→</span>',
        '  <span class="tag">&lt;/a&gt;</span>',
        '<span class="tag">&lt;/section&gt;</span>',
      ],
    },
    {
      file: 'styles.css',
      lines: [
        '<span class="fn">.hero</span> {',
        '  <span class="prop">background</span>: <span class="val">#0A0A0B</span>;',
        '  <span class="prop">color</span>: <span class="val">#F4F1E8</span>;',
        '  <span class="prop">font-family</span>: <span class="str">"Fraunces"</span>;',
        '}',
        '',
        '<span class="fn">.accent</span> {',
        '  <span class="prop">color</span>: <span class="val">#39D353</span>;',
        '  <span class="prop">font-style</span>: <span class="val">italic</span>;',
        '}',
      ],
    },
    {
      file: 'audit.js',
      lines: [
        '<span class="kw">async function</span> <span class="fn">runAudit</span>(<span class="val">site</span>) {',
        '  <span class="kw">const</span> result = <span class="kw">await</span> <span class="fn">scan</span>(site);',
        '  <span class="kw">return</span> {',
        '    <span class="prop">performance</span>: <span class="num">97</span>,',
        '    <span class="prop">seo</span>:         <span class="num">94</span>,',
        '    <span class="prop">mobile</span>:      <span class="num">96</span>,',
        '    <span class="prop">verdict</span>: <span class="str">"ready to ship"</span>',
        '  };',
        '}',
      ],
    },
  ];

  const [seqIdx, setSeqIdx] = useStateH(0);
  const [visible, setVisible] = useStateH(0);
  const seq = sequences[seqIdx];

  useEffectH(() => {
    setVisible(0);
    let cancelled = false;
    let i = 0;
    const tickLine = () => {
      if (cancelled) return;
      if (i < seq.lines.length) {
        setVisible(i + 1);
        i++;
        setTimeout(tickLine, 140);
      } else {
        setTimeout(() => {
          if (!cancelled) setSeqIdx((s) => (s + 1) % sequences.length);
        }, 1800);
      }
    };
    const start = setTimeout(tickLine, 200);
    return () => { cancelled = true; clearTimeout(start); };
  }, [seqIdx]);

  return (
    <div className="codebox">
      <div className="codebox-header">
        <div className="codebox-tabs">
          <span className="codebox-dot r"></span>
          <span className="codebox-dot y"></span>
          <span className="codebox-dot g"></span>
        </div>
        <span className="codebox-file">{seq.file}</span>
        <span className="codebox-status"><span className="live-dot"></span>Building</span>
      </div>
      <div className="codebox-body">
        {seq.lines.slice(0, visible).map((html, i) => (
          <span key={`${seqIdx}-${i}`} className="code-line">
            <span className="ln">{String(i + 1).padStart(2, '0')}</span>
            <span dangerouslySetInnerHTML={{ __html: html }} />
            <br />
          </span>
        ))}
        {visible > 0 && visible >= seq.lines.length && <span className="cursor"></span>}
      </div>
    </div>
  );
}

// ── Stats strip ───────────────────────────────────────────
function StatsStrip() {
  return (
    <section style={{ padding: 'clamp(40px, 5vw, 64px) 0', borderBottom: '1px solid var(--border)' }}>
      <Container>
        <div className="grid-4">
          <div><div className="stat-num">32<span className="accent-color">+</span></div><div className="stat-label">Luxembourg<br />websites audited</div></div>
          <div><div className="stat-num">7<span className="accent-color">d</span></div><div className="stat-label">Average delivery,<br />audit to launch</div></div>
          <div><div className="stat-num"><span className="accent-color">+</span>40<span className="accent-color">%</span></div><div className="stat-label">Average increase<br />in client enquiries</div></div>
          <div><div className="stat-num">€0</div><div className="stat-label">Cost of your<br />website audit</div></div>
        </div>
      </Container>
    </section>
  );
}

// ── What we do (services grid) ────────────────────────────
function WhatWeDo({ onService }) {
  const items = [
    ['01', 'Quick', 'Refresh.', 'For sites that mostly work but feel tired. We redesign the homepage, speed it up, fix the SEO basics and ship in 3–5 days.', 'See package · from €990'],
    ['02', 'Full', 'Rebuild.', 'A complete new website. SEO foundation, mobile-first design, editable CMS, and a month of free support. Most chosen package.', 'See package · from €2,500'],
    ['03', 'Growth', 'Partner.', 'Full rebuild plus an ongoing SEO campaign, monthly performance report and quarterly competitor analysis. For brands playing the long game.', 'See package · from €4,500'],
    ['04', 'Free', 'Audit.', '12-metric scan of your current site — performance, SEO, mobile, security, design. Personalised PDF report within 24 hours.', 'Book your audit · €0'],
  ];
  return (
    <section>
      <Container>
        <div className="sect-head">
          <Eyebrow>02 · What we do</Eyebrow>
          <h2 style={{ marginTop: 18 }}>Built for businesses that<br />refuse <Italic>to look outdated.</Italic></h2>
          <p>Three ways to work with us — whether you need a quick refresh, a full rebuild, or a long-term growth partner who treats your website like a sales engine.</p>
        </div>
        <div className="what-grid">
          {items.map(([num, w1, w2, desc, link]) => (
            <a key={num} href="#" className="what-item" onClick={(e) => { e.preventDefault(); onService && onService(); }}>
              <span className="what-num">{num} / Service</span>
              <h3 className="what-title">{w1} <Italic>{w2}</Italic></h3>
              <p className="what-desc">{desc}</p>
              <span className="what-link">{link}</span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ── Tech stack grid ───────────────────────────────────────
function TechStack() {
  const groups = [
    ['Design', [['Figma', false]]],
    ['Frontend', [['Astro', true], ['Next.js', true]]],
    ['CMS', [['Sanity', false], ['Payload', false]]],
    ['Hosting', [['Vercel', true], ['Netlify', true]]],
    ['CDN', [['Cloudflare', false]]],
    ['Analytics', [['GA4', false], ['Plausible', false]]],
    ['SEO', [['Search Console', true], ['Ahrefs', false]]],
    ['Email', [['Resend', false], ['Loops', false]]],
  ];
  return (
    <section style={{ borderTop: '1px solid var(--border)', padding: 'clamp(40px, 5vw, 64px) 0' }}>
      <Container>
        <div className="sect-head">
          <Eyebrow>05 · Built with</Eyebrow>
          <h2 style={{ marginTop: 18 }}>The stack behind<br />every <Italic>7-day build.</Italic></h2>
          <p>No WordPress, no page builders, no bloat. We build on battle-tested modern tools that load fast, scale well, and hand you full control from day one.</p>
        </div>
        <div className="techstax-grid">
          {groups.map(([label, pills]) => (
            <div key={label} className="tech-group">
              <div className="tech-group-label">{label}</div>
              <div className="tech-pills">
                {pills.map(([name, accent]) => (
                  <span key={name} className={`tech-pill${accent ? ' accent' : ''}`}>{name}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ── Process timeline ──────────────────────────────────────
function Process() {
  const steps = [
    ['Day 0', 'Free', 'audit.', 'We scan your site across 12 metrics — speed, SEO, mobile, security, design. You get a personalised PDF report within 24 hours.'],
    ['Day 1', 'Discovery', 'call.', '20-minute call to walk through the audit live, understand your goals and recommend the right package. You decide if and when to start.'],
    ['Day 2–6', 'We', 'build.', 'Our team builds the site. You see a draft within 3 days, approve it, we refine. Two structured review rounds — no endless ping-pong.'],
    ['Day 7', 'You go', 'live.', 'New site goes live, fast and ranked. We hand over the keys and stay available for 30 days — so the first month after launch you\'re never left without support.'],
  ];
  return (
    <section style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-2)' }}>
      <Container>
        <div className="sect-head">
          <Eyebrow>04 · Process</Eyebrow>
          <h2 style={{ marginTop: 18 }}>From audit<br />to live site, <Italic>in a week.</Italic></h2>
          <p>No long discovery phases. No endless revisions. We move quickly because we've done this dozens of times — and because your business doesn't have time to wait.</p>
        </div>
        <div className="process-rail">
          {steps.map(([day, w1, w2, body]) => (
            <div key={day} className="process-step">
              <div className="process-num">{day}</div>
              <div>
                <h3 className="process-title">{w1} <Italic>{w2}</Italic></h3>
                <p className="process-body">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ── Testimonial ───────────────────────────────────────────
function Testimonial() {
  return (
    <section style={{ borderTop: '1px solid var(--border)' }}>
      <Container narrow>
        <div className="testimonial">
          <p className="testimonial-quote">We had the same website for six years and always put off updating it. Folio sent a free audit that showed exactly what was wrong — then had our new site live in six days. We had more enquiries in the first month than we did the entire quarter before.</p>
          <div className="testimonial-author">Managing Director</div>
          <div className="testimonial-meta">Architecture Studio · Luxembourg-City · 5.0 ★ Google Review</div>
        </div>
      </Container>
    </section>
  );
}

// ── Featured Work ─────────────────────────────────────────
function FeaturedWork({ onWork }) {
  const cases = [
    { tag: 'Before · 8/100', mock: ['Architect', 'Studio.'], industry: 'Architecture · Luxembourg-City', title: 'Architect studio rebuild',
      desc: '5-year-old static site rebuilt into a portfolio-forward website. From invisible on Google to page 1 for "architecte Luxembourg" in 6 weeks.',
      stats: [['+68%', 'Enquiries / mo'], ['6d', 'Delivered in'], ['P.1', 'Google rank']] },
    { tag: 'Before · 14/100', mock: ['Restaurant', '643 reviews.'], industry: 'Hospitality · Esch-sur-Alzette', title: 'Restaurant — 643 reviews',
      desc: '7-year-old site with no mobile support and a broken contact form. Rebuilt with online reservations, updated menu and local SEO.',
      stats: [['+52%', 'Online bookings'], ['5d', 'Delivered in'], ['100%', 'Mobile-ready']] },
    { tag: 'Before · 18/100', mock: ['Fiduciary', 'Firm.'], industry: 'Accounting · Luxembourg-City', title: 'Fiduciary website overhaul',
      desc: 'Accounting firm with no SSL, score of 18/100. Rebuilt with secure hosting, clear service pages and local SEO targeting Luxembourg SMEs.',
      stats: [['+44%', 'New clients'], ['7d', 'Delivered in'], ['SSL', 'Now secured']] },
  ];
  return (
    <section style={{ borderTop: '1px solid var(--border)' }}>
      <Container>
        <div className="sect-head">
          <Eyebrow>03 · Selected work</Eyebrow>
          <h2 style={{ marginTop: 18 }}>Recent <Italic>rebuilds.</Italic></h2>
          <p>A snapshot of what we shipped for Luxembourg businesses this year.</p>
        </div>
        <div className="case-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {cases.map((c) => (
            <a key={c.title} href="#" className="case-card" onClick={(e) => { e.preventDefault(); onWork && onWork(); }}>
              <div className="case-thumb">
                <div className="case-thumb-tag">{c.tag}</div>
                <div className="case-thumb-mock">{c.mock[0]}<br /><Italic>{c.mock[1]}</Italic></div>
              </div>
              <div className="case-body">
                <div className="case-industry">{c.industry}</div>
                <h3 className="case-title">{c.title}</h3>
                <p className="case-desc">{c.desc}</p>
                <div className="case-results">
                  {c.stats.map(([v, l]) => (
                    <div key={l} className="case-stat"><div className="v">{v}</div><div className="l">{l}</div></div>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ── Home FAQ ──────────────────────────────────────────────
function HomeFAQ() {
  const qa = [
    ['How is 7 days actually possible?', 'We audit first so there\'s no guessing phase. Design and development run concurrently. We use a proven stack (Astro / Next.js / Netlify) we\'ve deployed dozens of times, not custom experiments.'],
    ['What if I don\'t like the first draft?', 'Every package includes structured revision rounds — Quick Refresh gets one, Full Rebuild and Growth Partner get two. We share a design in Figma before we write a line of code.'],
    ['Do you work with clients outside Luxembourg?', 'Yes — we work fully remote with clients in London, Amsterdam, New York, Paris, Singapore and Dubai.'],
    ['Will my site actually rank on Google?', 'We can\'t guarantee rankings — nobody honestly can. What we can guarantee is an SEO foundation that gives you the best possible starting position.'],
    ['What happens after launch?', 'Full Rebuild and Growth Partner include 30 days of free post-launch support.'],
    ['Do you charge upfront?', '50% on project kick-off, 50% on launch day. One price, in writing, before we start.'],
  ];
  const [open, setOpen] = useStateH(null);
  return (
    <section style={{ borderTop: '1px solid var(--border)' }}>
      <Container>
        <div className="faq-home-grid">
          <div className="faq-home-side">
            <Eyebrow>06 · Questions</Eyebrow>
            <h2 style={{ marginTop: 18 }}>Things people ask<br /><Italic>before they start.</Italic></h2>
            <p>Honest answers. If yours isn't here, email us at hello@folio.lu — real human replies within one working day.</p>
            <Button>Ask us directly</Button>
          </div>
          <div className="faq-home-list">
            {qa.map(([q, a], i) => (
              <details key={i} className="faq-home-item" open={open === i} onClick={(e) => { e.preventDefault(); setOpen(open === i ? null : i); }}>
                <summary>
                  <span className="faq-home-q">{q}</span>
                  <span className="faq-home-toggle">+</span>
                </summary>
                <p className="faq-home-a">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// ── CTA ───────────────────────────────────────────────────
function CTA({ onAudit, eyebrowText, headline, italicWord, sub, primaryLabel, secondaryLabel, footnote }) {
  return (
    <section className="cta-section">
      <Container narrow>
        {eyebrowText && <Eyebrow style={{ justifyContent: 'center' }}>{eyebrowText}</Eyebrow>}
        <h2 className="cta-headline" style={{ marginTop: 18 }}>
          {headline}<br /><Italic>{italicWord}</Italic>
        </h2>
        <p className="cta-sub">{sub}</p>
        <div className="hero-actions">
          <Button variant="primary" onClick={onAudit}>{primaryLabel || 'Book your free audit'}</Button>
          {secondaryLabel && <Button variant="ghost">{secondaryLabel}</Button>}
        </div>
        {footnote && (
          <p style={{ marginTop: 28, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--fg-dim)', letterSpacing: 1 }}>
            {footnote}
          </p>
        )}
      </Container>
    </section>
  );
}

Object.assign(window, { Hero, CodeBox, StatsStrip, WhatWeDo, TechStack, Process, Testimonial, FeaturedWork, HomeFAQ, CTA });
