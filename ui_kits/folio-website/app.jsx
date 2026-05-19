// ═══════════════════════════════════════════════════════════
// FOLIO UI KIT — top-level app & router
// Renders the Nav + a selected page + Footer.
// Every page (except Home) ends with the same CTA block above the footer.
// ═══════════════════════════════════════════════════════════

const { useState: useStateA } = React;

function HomePage({ onNav }) {
  return (
    <>
      <Hero onAudit={() => onNav('contact')} />
      <StatsStrip />
      <WhatWeDo onService={() => onNav('services')} />
      <TechStack />
      <FeaturedWork onWork={() => onNav('work')} />
      <Process />
      <Testimonial />
      <HomeFAQ />
      <CTA
        eyebrowText="Free audit · 24h turnaround · No obligation"
        headline={<>Ready to see what<br />your site is</>}
        italicWord="missing?"
        sub="A free 12-metric audit, delivered as a personalised PDF report within 24 hours. No call required. No obligation."
        onAudit={() => onNav('contact')}
        primaryLabel="Book your free audit"
        secondaryLabel="View packages"
        footnote={<>Next project slots: <span style={{ color: 'var(--accent)' }}>June 2026</span> · 2 spots remaining</>}
      />
    </>
  );
}

function WorkPage({ onNav }) {
  return <FeaturedWork onWork={() => onNav('contact')} />;
}

function BlogPage() {
  return (
    <section className="page-hero">
      <Container>
        <Eyebrow>Journal</Eyebrow>
        <h1 style={{ fontSize: 'clamp(48px, 7vw, 96px)', letterSpacing: '-0.04em', lineHeight: 1, marginTop: 18 }}>
          Things we've<br />been <Italic>writing.</Italic>
        </h1>
        <p style={{ fontSize: 18, color: 'var(--fg-mute)', maxWidth: 580, marginTop: 24 }}>
          Field notes from 32 rebuilds. Plain-English takes on speed, SEO, and what actually moves enquiries.
        </p>
        <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1, background: 'var(--border)', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', overflow: 'hidden' }}>
          {[
            ['01 / Speed', 'What a 1.5s LCP', 'really buys you.', 'A breakdown of why first-paint speed correlates so closely with enquiries — with three before/after Lighthouse runs.'],
            ['02 / SEO', 'The free audit', 'we run every time.', 'Walk through our 12-metric checklist, with the exact tools we use and the thresholds that flag a fail.'],
            ['03 / Process', 'Designing in Figma', 'before code.', 'Why we won\'t write a line of HTML until the design is pixel-finalised. Saves you days, saves us weeks.'],
            ['04 / Stack', 'Why we don\'t', 'do WordPress.', 'Not as religious as it sounds — when the requirements actually call for WP we say so. But it\'s rare.'],
          ].map(([num, w1, w2, body], i) => (
            <a key={i} href="#" style={{ background: 'var(--bg)', padding: '40px 36px', display: 'flex', flexDirection: 'column', gap: 14 }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: 1.5, color: 'var(--accent)' }}>{num}</span>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: 28, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.15, fontVariationSettings: "'SOFT' 30, 'opsz' 144" }}>{w1} <Italic>{w2}</Italic></h3>
              <p style={{ fontSize: 14, color: 'var(--fg-mute)', lineHeight: 1.7 }}>{body}</p>
              <span style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--fg)', marginTop: 8 }}>Read · 4 min →</span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ── Per-page CTA copy ─────────────────────────────────────
const PAGE_CTAS = {
  services: {
    eyebrowText: 'Not sure which package?',
    headline: <>Start with the</>,
    italicWord: 'free audit.',
    sub: "We'll review your current site and recommend the package that fits — only if one of them genuinely makes sense for you.",
    primaryLabel: 'Book your audit call',
    secondaryLabel: 'See sample audit',
  },
  tech: {
    eyebrowText: 'Got something specific in mind?',
    headline: <>Tell us the stack,</>,
    italicWord: 'we\'ll fit in.',
    sub: 'Send us your repo, your hosting set-up, or just a screenshot of your current site. The audit covers the stack you have, not the one we wish you had.',
    primaryLabel: 'Discuss your stack',
    secondaryLabel: 'See packages',
  },
  industries: {
    eyebrowText: 'Industry not above?',
    headline: <>Send us your site —</>,
    italicWord: "we'll know fast.",
    sub: 'The audit pattern is the same across industries. We\'ll tell you within 24 hours whether your sector is a match for the way we work.',
    primaryLabel: 'Get your free audit',
    secondaryLabel: 'See packages',
  },
  work: {
    eyebrowText: 'Like what you see?',
    headline: <>Your project</>,
    italicWord: 'could be next.',
    sub: 'Every case study above started with the same free audit. The PDF report lands within 24 hours and there\'s no call required.',
    primaryLabel: 'Book your audit',
    secondaryLabel: 'View packages',
  },
  about: {
    eyebrowText: 'Want to work with us?',
    headline: <>Let's</>,
    italicWord: 'work together.',
    sub: "Start with the free audit. We'll review your existing site, send a PDF report within 24 hours, and tell you honestly whether we're the right fit.",
    primaryLabel: 'Get your free audit',
    secondaryLabel: 'See our work',
  },
  blog: {
    eyebrowText: 'Enjoyed reading?',
    headline: <>Get the next one</>,
    italicWord: 'in your inbox.',
    sub: 'One short piece every month — same plain-English takes on speed, SEO and what actually moves enquiries. Unsubscribe with one click.',
    primaryLabel: 'Subscribe · monthly',
    secondaryLabel: 'View all posts',
  },
  contact: {
    eyebrowText: 'Prefer human contact?',
    headline: <>Or just email</>,
    italicWord: 'hello@folio.lu.',
    sub: 'Real human replies, usually within one working day. The audit form above is the fastest route, but a plain email is fine too.',
    primaryLabel: 'Copy email address',
    secondaryLabel: 'Back to top',
  },
};

function App() {
  const [page, setPage] = useStateA('home');
  React.useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }); }, [page]);

  let content;
  switch (page) {
    case 'services':   content = <ServicesPage onAudit={() => setPage('contact')} />; break;
    case 'tech':       content = <TechnologiesPage onAudit={() => setPage('contact')} />; break;
    case 'industries': content = <IndustriesPage onAudit={() => setPage('contact')} />; break;
    case 'work':       content = <WorkPage onNav={setPage} />; break;
    case 'about':      content = <AboutPage />; break;
    case 'contact':    content = <ContactPage />; break;
    case 'blog':       content = <BlogPage />; break;
    default:           content = <HomePage onNav={setPage} />;
  }

  const cta = page !== 'home' && PAGE_CTAS[page];

  return (
    <div data-screen-label={`Folio · ${page}`}>
      <Nav active={page} onNav={setPage} />
      {content}
      {cta && (
        <CTA
          eyebrowText={cta.eyebrowText}
          headline={cta.headline}
          italicWord={cta.italicWord}
          sub={cta.sub}
          onAudit={() => setPage('contact')}
          primaryLabel={cta.primaryLabel}
          secondaryLabel={cta.secondaryLabel}
        />
      )}
      <Footer onNav={setPage} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
