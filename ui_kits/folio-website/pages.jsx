// ═══════════════════════════════════════════════════════════
// FOLIO UI KIT — pages (Services, About, Contact)
// Each is a full page assembly using shared sections + primitives.
// ═══════════════════════════════════════════════════════════

const { useState: useStateP } = React;

// ── SERVICES PAGE ─────────────────────────────────────────
function ServicesPage({ onAudit }) {
  const tiers = [
    { id: 1, num: '01 / Quick Refresh', name1: 'A', name2: 'refresh,', name3: 'not a rebuild.',
      tagline: 'For sites that mostly work but feel tired. We modernise the homepage, fix the speed problems and sort the SEO basics.',
      price: '€990', priceSub: ' – €1,990', timeline: 'Ready in 3–5 days · 1 round of revisions',
      bullets: ['Redesigned homepage', 'Mobile optimisation', 'Speed improvements', 'SSL certificate', 'Basic SEO fixes', 'Contact form'],
      cta: 'Explore Quick Refresh', primary: false },
    { id: 2, num: '02 / Full Rebuild', name1: 'A', name2: 'complete', name3: 'new website.',
      tagline: 'Most chosen. Modern design, SEO foundation, mobile-first build, easy CMS to edit yourself. Built to win clients.',
      price: '€2,500', priceSub: ' – €4,500', timeline: 'Delivered in 7–10 days · 2 rounds of revisions',
      bullets: ['Complete new website', 'SEO foundation, every page', 'Easy CMS — edit yourself', 'Mobile-first design', 'Google Analytics setup', '1 month free support'],
      cta: 'Explore Full Rebuild', primary: true },
    { id: 3, num: '03 / Growth Partner', name1: 'A', name2: 'partner,', name3: 'not a project.',
      tagline: 'Everything in Full Rebuild plus an ongoing SEO campaign and quarterly competitor analysis. For brands playing the long game.',
      price: '€4,500', priceSub: ' – €8,000', timeline: 'Full digital transformation · 3 months',
      bullets: ['Everything in Full Rebuild', 'Ongoing SEO campaign', 'Google My Business setup', 'Monthly performance report', '3 months free support', 'Quarterly competitor analysis'],
      cta: 'Explore Growth Partner', primary: false },
  ];

  const compareRows = [
    ['Number of pages', 'Up to 3', 'Up to 8', 'Up to 12'],
    ['Mobile-first design', 'yes', 'yes', 'yes'],
    ['SSL & hosting setup', 'yes', 'yes', 'yes'],
    ['SEO foundation (all pages)', 'Basic', 'yes', 'yes'],
    ['CMS (edit yourself)', 'no', 'yes', 'yes'],
    ['Google Analytics + tracking', 'no', 'yes', 'yes'],
    ['Ongoing SEO campaign', 'no', 'no', 'yes'],
    ['Monthly performance report', 'no', 'no', 'yes'],
    ['Free post-launch support', '2 weeks', '1 month', '3 months'],
    ['Delivery time', '3–5 days', '7–10 days', '2–3 weeks'],
  ];

  const Cell = ({ value }) => {
    if (value === 'yes') return <span className="compare-yes">✓</span>;
    if (value === 'no')  return <span className="compare-no">—</span>;
    return <>{value}</>;
  };

  return (
    <>
      <section className="page-hero">
        <Container>
          <Eyebrow>Services & pricing</Eyebrow>
          <h1 style={{ fontSize: 'clamp(56px, 8vw, 120px)', letterSpacing: '-0.04em', lineHeight: 1, maxWidth: 1100, marginTop: 18 }}>
            Three ways<br />to work <Italic>together.</Italic>
          </h1>
          <p style={{ fontSize: 18, color: 'var(--fg-mute)', maxWidth: 600, marginTop: 32, lineHeight: 1.65 }}>
            Transparent pricing, fixed timelines, no surprise invoices. Pick the package that matches what you need — or start with the free audit and decide after.
          </p>
        </Container>
      </section>

      <section style={{ paddingBottom: 'clamp(80px, 10vw, 140px)' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 80 }}>
            {tiers.map((t) => (
              <div key={t.id} className={`price-card${t.primary ? ' featured' : ''}`}>
                <div className="price-tier">{t.num}</div>
                <h3 className="price-name">{t.name1} <Italic>{t.name2}</Italic><br />{t.name3}</h3>
                <p style={{ fontSize: 14, color: 'var(--fg-mute)', marginTop: 16, lineHeight: 1.65 }}>{t.tagline}</p>
                <div className="price-amount">{t.price}<span className="sub">{t.priceSub}</span></div>
                <div className="price-timeline">{t.timeline}</div>
                <ul className="price-list">
                  {t.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
                <Button variant={t.primary ? 'primary' : 'outline'} onClick={onAudit}>{t.cta}</Button>
              </div>
            ))}
          </div>

          <div className="sect-head">
            <Eyebrow>Compare packages</Eyebrow>
            <h2 style={{ marginTop: 18 }}>What's <Italic>included.</Italic></h2>
          </div>
          <div className="compare-wrap" style={{ border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', overflow: 'hidden', background: 'var(--bg-2)' }}>
            <div className="compare-row header" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', borderTop: 'none' }}>
              <div className="compare-cell" style={{ padding: '22px 24px', background: 'var(--bg-3)', fontFamily: 'var(--serif)', fontSize: 18, fontWeight: 400 }}>Feature</div>
              <div className="compare-cell" style={{ padding: '22px 24px', background: 'var(--bg-3)', fontFamily: 'var(--serif)', fontSize: 18, borderLeft: '1px solid var(--border)' }}>Quick Refresh</div>
              <div className="compare-cell" style={{ padding: '22px 24px', background: 'var(--bg-3)', fontFamily: 'var(--serif)', fontSize: 18, color: 'var(--accent)', fontStyle: 'italic', fontVariationSettings: "'SOFT' 100, 'opsz' 144", borderLeft: '1px solid var(--border)' }}>Full Rebuild</div>
              <div className="compare-cell" style={{ padding: '22px 24px', background: 'var(--bg-3)', fontFamily: 'var(--serif)', fontSize: 18, borderLeft: '1px solid var(--border)' }}>Growth Partner</div>
            </div>
            {compareRows.map((row, i) => (
              <div key={i} className="compare-row" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', borderTop: '1px solid var(--border)' }}>
                <div className="compare-cell" style={{ padding: '18px 24px', color: 'var(--fg-mute)', fontWeight: 500, fontSize: 14 }}>{row[0]}</div>
                <div className="compare-cell" style={{ padding: '18px 24px', borderLeft: '1px solid var(--border)', fontSize: 14 }}><Cell value={row[1]} /></div>
                <div className="compare-cell" style={{ padding: '18px 24px', borderLeft: '1px solid var(--border)', fontSize: 14 }}><Cell value={row[2]} /></div>
                <div className="compare-cell" style={{ padding: '18px 24px', borderLeft: '1px solid var(--border)', fontSize: 14 }}><Cell value={row[3]} /></div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

// ── ABOUT PAGE ────────────────────────────────────────────
function AboutPage() {
  const manifesto = [
    ['01 / Speed is the feature', 'Seven days,', 'always.', 'Most agencies treat timelines as suggestions. We treat them as commitments. Quick Refresh ships in 5 days. Full Rebuild ships in 10.'],
    ['02 / Pricing is fixed', 'No', 'surprise invoices.', 'Every package has a fixed price range, posted publicly. We confirm the exact number before any work starts.'],
    ['03 / Audit before action', 'The audit is', 'free.', 'We won\'t quote you without seeing your site first. Every prospect gets a free 12-metric audit and a PDF report.'],
    ['04 / Design then code', 'Every screen,', 'designed.', 'No "wireframe and iterate in code" nonsense. Every page is designed in Figma to pixel completion before we touch the codebase.'],
    ['05 / Lean tech', 'Modern stack.', 'No bloat.', 'Astro, Next.js, Sanity, Vercel, Cloudflare. We don\'t use WordPress unless you explicitly need it.'],
    ['06 / Measure everything', 'Numbers, not', 'vibes.', 'Every site we launch has analytics + conversion tracking from day one. We report on real numbers, not "the site looks great."'],
  ];

  const team = [
    ['EM', 'Élise Marchant', 'Founder · Design', 'Twelve years across product design and brand. Previously at a design studio in Paris and an in-house team in Amsterdam. Leads every Folio project from brief to launch.'],
    ['TR', 'Thomas Roux', 'Co-Founder · Engineering', 'Ten years building modern web apps with Next.js, Astro and headless CMS. Obsessed with Core Web Vitals. Speaks French, English, Luxembourgish.'],
    ['SA', 'Sofia Almeida', 'SEO & Growth', 'Former in-house SEO lead for a Luxembourg SaaS. Handles all Growth Partner accounts — keyword research, content strategy, technical SEO, monthly reporting.'],
  ];

  return (
    <>
      <section className="page-hero" style={{ padding: 'clamp(36px, 5vw, 64px) 0 clamp(28px, 4vw, 48px)' }}>
        <Container>
          <Eyebrow>About Folio</Eyebrow>
          <h1 style={{ fontSize: 'clamp(56px, 9vw, 140px)', letterSpacing: '-0.04em', lineHeight: 0.96, maxWidth: 1200, marginTop: 18 }}>
            A small, opinionated<br />web agency from <Italic>Luxembourg.</Italic>
          </h1>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 6vw, 96px)', marginTop: 'clamp(48px, 6vw, 80px)', paddingTop: 'clamp(48px, 6vw, 80px)', borderTop: '1px solid var(--border)' }}>
            <p style={{ fontSize: 20, color: 'var(--fg)', lineHeight: 1.75 }}>We build websites for ambitious SMEs — Luxembourg, London, Amsterdam, New York, Paris, Singapore, Dubai. <Italic>Most agencies overcomplicate it.</Italic> We don't.</p>
            <p style={{ fontSize: 18, color: 'var(--fg-mute)', lineHeight: 1.75 }}>Founded in 2024 with one rule: every site we ship should be faster, sharper, and more profitable than the one it replaces. No long discovery phases. No bloated retainers. No theatre — just sites that work, delivered when we said they'd be delivered.</p>
          </div>
        </Container>
      </section>

      <section style={{ padding: 'clamp(48px, 6vw, 80px) 0', borderTop: '1px solid var(--border)' }}>
        <Container>
          <div className="sect-head">
            <Eyebrow>How we work</Eyebrow>
            <h2 style={{ marginTop: 18 }}>Six things we<br />do <Italic>differently.</Italic></h2>
            <p>The principles behind how we run projects. They're why we can deliver in seven days while most agencies need seven weeks.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--border)', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', overflow: 'hidden' }}>
            {manifesto.map(([num, w1, w2, body], i) => (
              <div key={i} style={{ background: 'var(--bg)', padding: '48px 40px', display: 'flex', flexDirection: 'column', gap: 14 }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: 1.5, color: 'var(--accent)' }}>{num}</span>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: 28, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.15, fontVariationSettings: "'SOFT' 30, 'opsz' 144" }}>{w1} <Italic>{w2}</Italic></h3>
                <p style={{ fontSize: 14, color: 'var(--fg-mute)', lineHeight: 1.7 }}>{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section style={{ padding: 'clamp(48px, 6vw, 80px) 0', borderTop: '1px solid var(--border)' }}>
        <Container>
          <div className="sect-head">
            <Eyebrow>The team</Eyebrow>
            <h2 style={{ marginTop: 18 }}>Small team,<br /><Italic>deep bench.</Italic></h2>
            <p>Three full-timers in Luxembourg, plus a trusted network of specialists.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {team.map(([initials, name, role, bio]) => (
              <div key={initials} style={{ background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', overflow: 'hidden' }}>
                <div style={{ aspectRatio: '4 / 5', background: 'linear-gradient(135deg, var(--bg-3) 0%, var(--bg-4) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(45deg, transparent, transparent 24px, rgba(244,241,232,0.025) 24px, rgba(244,241,232,0.025) 25px)' }}></div>
                  <span style={{ fontFamily: 'var(--serif)', fontSize: 88, fontWeight: 300, fontStyle: 'italic', color: 'var(--fg)', fontVariationSettings: "'SOFT' 100, 'opsz' 144", letterSpacing: '-0.04em', position: 'relative', zIndex: 1 }}>{initials}</span>
                </div>
                <div style={{ padding: '28px 30px 32px' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 24, fontWeight: 400, letterSpacing: '-0.015em', marginBottom: 4 }}>{name}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>{role}</div>
                  <p style={{ fontSize: 14, color: 'var(--fg-mute)', lineHeight: 1.65 }}>{bio}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

// ── CONTACT / AUDIT PAGE ──────────────────────────────────
function ContactPage() {
  const [submitted, setSubmitted] = useStateP(false);
  const [data, setData] = useStateP({ url: '', name: '', email: '', goal: 'Full Rebuild' });

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="page-hero">
        <Container narrow>
          <Eyebrow>Submitted</Eyebrow>
          <h1 style={{ fontSize: 'clamp(48px, 7vw, 96px)', letterSpacing: '-0.04em', lineHeight: 1, maxWidth: 900, marginTop: 18 }}>
            Audit request <Italic>received.</Italic>
          </h1>
          <p style={{ fontSize: 18, color: 'var(--fg-mute)', maxWidth: 580, marginTop: 28, lineHeight: 1.65 }}>
            Thanks {data.name || 'there'}. We'll scan <span style={{ color: 'var(--fg)', fontFamily: 'var(--mono)', fontSize: 14 }}>{data.url || 'your site'}</span> across 12 metrics and email a PDF report to <span style={{ color: 'var(--fg)' }}>{data.email || 'you'}</span> within 24 hours. No call required.
          </p>
          <div style={{ marginTop: 36, display: 'flex', gap: 16 }}>
            <Button onClick={() => setSubmitted(false)}>Submit another</Button>
          </div>
          <p style={{ marginTop: 40, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--fg-dim)', letterSpacing: 1, textTransform: 'uppercase' }}>
            <span style={{ color: 'var(--accent)' }}>●</span> Queue position 3 · Avg. turnaround 19h
          </p>
        </Container>
      </section>
    );
  }

  return (
    <section className="page-hero">
      <Container>
        <Eyebrow>Free audit · 24h turnaround</Eyebrow>
        <h1 style={{ fontSize: 'clamp(48px, 7vw, 96px)', letterSpacing: '-0.04em', lineHeight: 1, maxWidth: 900, marginTop: 18 }}>
          Tell us about<br />your <Italic>site.</Italic>
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'clamp(40px, 6vw, 96px)', marginTop: 56 }}>
          <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <Field label="Your current site" hint="Where we'll run the 12-metric scan.">
              <input type="url" placeholder="https://yourbusiness.com" value={data.url} onChange={(e) => setData({ ...data, url: e.target.value })} required />
            </Field>
            <Field label="Your name">
              <input type="text" placeholder="Élise Marchant" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} required />
            </Field>
            <Field label="Email" hint="Where the PDF report lands.">
              <input type="email" placeholder="hello@yourbusiness.com" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} required />
            </Field>
            <Field label="What you're considering">
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['Quick Refresh', 'Full Rebuild', 'Growth Partner', 'Not sure yet'].map((opt) => (
                  <button key={opt} type="button" onClick={() => setData({ ...data, goal: opt })}
                    style={{
                      fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: 0.3,
                      color: data.goal === opt ? 'var(--accent)' : 'var(--fg-mute)',
                      background: data.goal === opt ? 'rgba(57,211,83,0.14)' : 'var(--bg-3)',
                      border: `1px solid ${data.goal === opt ? 'rgba(57,211,83,0.25)' : 'var(--border)'}`,
                      borderRadius: 999, padding: '7px 16px', cursor: 'pointer',
                    }}>{opt}</button>
                ))}
              </div>
            </Field>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginTop: 12 }}>
              <button type="submit" className="btn btn-accent" style={{ cursor: 'pointer' }}>Request your free audit</button>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--fg-dim)', letterSpacing: 0.5 }}>No card · No obligation · 24h</span>
            </div>
          </form>

          <aside>
            <div style={{ background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: '28px 30px' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>What you get</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Performance & Core Web Vitals', 'SEO foundation', 'Mobile experience', 'Security & trust signals', 'Plain-English fix list'].map((x) => (
                  <li key={x} style={{ padding: '12px 0', borderTop: '1px solid var(--border)', fontSize: 14, color: 'var(--fg)', display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ width: 12, height: 1, background: 'var(--accent)', flexShrink: 0 }}></span>{x}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ marginTop: 24, padding: '20px 24px', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', background: 'rgba(57,211,83,0.04)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)' }}></span>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--accent)' }}>Live queue</span>
              </div>
              <p style={{ fontSize: 13, color: 'var(--fg-mute)', lineHeight: 1.6 }}>
                3 audits ahead of you · Average turnaround this week: <span style={{ color: 'var(--fg)' }}>19h 24m</span>.
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}

function Field({ label, hint, children }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--fg-dim)' }}>{label}</span>
      {children}
      {hint && <span style={{ fontSize: 12, color: 'var(--fg-dim)' }}>{hint}</span>}
    </label>
  );
}

Object.assign(window, { ServicesPage, AboutPage, ContactPage });
