// ═══════════════════════════════════════════════════════════
// FOLIO UI KIT — primitives
// Button, Eyebrow, Logo, Nav, Footer, Container
// Exported on window for sibling babel scripts.
// ═══════════════════════════════════════════════════════════

const { useState, useEffect, useRef } = React;

// ── Container ─────────────────────────────────────────────
function Container({ narrow, children, style }) {
  return (
    <div className={narrow ? 'container container-narrow' : 'container'} style={style}>
      {children}
    </div>
  );
}

// ── Eyebrow micro-label (mono caps with leading hairline) ──
function Eyebrow({ children, style }) {
  return <div className="eyebrow" style={style}>{children}</div>;
}

// ── Italic-green accent (the brand signature) ─────────────
function Italic({ children }) {
  return <em className="italic">{children}</em>;
}

// ── Logo wordmark (live text, never image) ────────────────
function Logo({ size, onClick }) {
  return (
    <a href="#" onClick={onClick} className="nav-logo" style={size ? { fontSize: size } : null}>
      Folio<span className="italic-mark">·</span>
    </a>
  );
}

// ── Buttons ───────────────────────────────────────────────
function Button({ variant = 'outline', children, onClick, style }) {
  if (variant === 'ghost') {
    return <a href="#" className="btn-ghost" onClick={(e) => { e.preventDefault(); onClick && onClick(); }} style={style}>{children}</a>;
  }
  const cls = variant === 'primary' ? 'btn btn-accent' : 'btn';
  return <a href="#" className={cls} onClick={(e) => { e.preventDefault(); onClick && onClick(); }} style={style}>{children}</a>;
}

// ── Lux clock (live, updates every minute) ────────────────
function LuxClock({ className = 'nav-clock' }) {
  const [t, setT] = useState('--:--');
  useEffect(() => {
    const tick = () => {
      try {
        setT(new Date().toLocaleTimeString('en-GB', { timeZone: 'Europe/Luxembourg', hour: '2-digit', minute: '2-digit' }));
      } catch (e) {
        setT(new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }));
      }
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
  return <span className={className}>LUX · {t}</span>;
}

// ── Nav (sticky, blurred) ─────────────────────────────────
function Nav({ active, onNav }) {
  const items = [
    ['home', 'Home'],
    ['services', 'Services'],
    ['tech', 'Tech'],
    ['industries', 'Industries'],
    ['work', 'Work'],
    ['about', 'About'],
    ['contact', 'Contact'],
  ];
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Logo onClick={(e) => { e.preventDefault(); onNav && onNav('home'); }} />
        <div className="nav-links">
          {items.map(([id, label]) => (
            <a key={id} href="#" className={active === id ? 'active' : ''} onClick={(e) => { e.preventDefault(); onNav && onNav(id); }}>{label}</a>
          ))}
        </div>
        <div className="nav-right">
          <LuxClock />
          <a href="#" className="nav-cta" onClick={(e) => { e.preventDefault(); onNav && onNav('contact'); }}>Free audit</a>
        </div>
      </div>
    </nav>
  );
}

// ── Hashtag marquee ───────────────────────────────────────
function HashStrip({ tags }) {
  const items = (tags && tags.length) ? tags : [
    'web-redesign', 'seo-audit', 'mobile-first', 'core-web-vitals',
    'conversion-design', 'seven-day-launch', 'luxembourg', 'pagespeed-95',
  ];
  const doubled = [...items, ...items];
  return (
    <div className="hash-strip">
      <div className="hash-track">
        {doubled.map((tag, i) => (
          <span key={i} className={`hash-item${i % 2 ? ' italic' : ''}`}>
            <span className="hash">#</span>{tag} <span className="sep">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Footer ────────────────────────────────────────────────
function Footer({ onNav }) {
  const goto = (page) => (e) => { e.preventDefault(); onNav && onNav(page); };
  return (
    <footer className="footer">
      <Container>
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo />
            <p className="footer-tagline">Websites for ambitious brands. From Luxembourg, for the world.</p>
          </div>
          <div>
            <div className="footer-col-title">Services</div>
            <ul className="footer-list">
              <li><a href="#" onClick={goto('services')}>Quick Refresh</a></li>
              <li><a href="#" onClick={goto('services')}>Full Rebuild</a></li>
              <li><a href="#" onClick={goto('services')}>Growth Partner</a></li>
              <li><a href="#" onClick={goto('contact')}>Free Audit</a></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Capabilities</div>
            <ul className="footer-list">
              <li><a href="#" onClick={goto('tech')}>Technologies</a></li>
              <li><a href="#" onClick={goto('industries')}>Industries</a></li>
              <li><a href="#" onClick={goto('work')}>Selected work</a></li>
              <li><a href="#" onClick={goto('blog')}>Journal</a></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Studio</div>
            <ul className="footer-list">
              <li><a href="#" onClick={goto('about')}>About</a></li>
              <li><a href="#" onClick={goto('contact')}>Contact</a></li>
              <li><a href="#" onClick={goto('contact')}>Sample audit</a></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Contact</div>
            <ul className="footer-list">
              <li><a href="mailto:hello@folio.lu">hello@folio.lu</a></li>
              <li>+352 27 86 12 34</li>
              <li>Luxembourg-City</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Folio · Luxembourg web agency</span>
          <LuxClock className="" />
        </div>
      </Container>
    </footer>
  );
}

Object.assign(window, { Container, Eyebrow, Italic, Logo, Button, LuxClock, Nav, HashStrip, Footer });
