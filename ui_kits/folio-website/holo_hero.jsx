// ═══════════════════════════════════════════════════════════
// FOLIO UI KIT — HoloProjector v3 (Netflix-grid portfolio)
//
// Glass screen fills the hero's right column, matching the left
// column's vertical extent (eyebrow → stats strip). Inside:
// a Netflix-style grid of portfolio cards. Each card is clickable
// and "plays" that website's snippet inside the same glass screen.
// ═══════════════════════════════════════════════════════════

const { useState: useStateHP, useEffect: useEffectHP, useMemo: useMemoHP } = React;

// ── PORTFOLIO REGISTRY ────────────────────────────────────
const PORTFOLIO = [
  { id: 'deepak',  title: 'Deepak Products',  industry: 'E-commerce',     url: 'deepakproducts.com', poster: 'deepak' },
  { id: 'arch',    title: 'Marchant Studio',  industry: 'Architecture',   url: 'marchant.lu',        poster: 'arch'   },
  { id: 'fid',     title: 'Boréal Fiduciaire',industry: 'Finance',        url: 'boreal-fid.lu',      poster: 'fid'    },
  { id: 'rest',    title: 'Maison 643',       industry: 'Hospitality',    url: 'maison643.lu',       poster: 'rest'   },
  { id: 'saas',    title: 'Loopback',         industry: 'SaaS',           url: 'loopback.io',        poster: 'saas'   },
  { id: 'gallery', title: 'Galerie Étain',    industry: 'Cultural',       url: 'etain.lu',           poster: 'gallery'},
  { id: 'clinic',  title: 'Helix Clinic',     industry: 'Healthcare',     url: 'helix-clinic.lu',    poster: 'clinic' },
  { id: 'realty',  title: 'Findel Realty',    industry: 'Real estate',    url: 'findel-realty.lu',   poster: 'realty' },
  { id: 'school',  title: 'École Atelier',    industry: 'Education',      url: 'atelier-edu.lu',     poster: 'school' },
  { id: 'oil',     title: 'Verda Oils',       industry: 'E-commerce',     url: 'verdaoils.com',      poster: 'oil'    },
  { id: 'law',     title: 'Hartmann & Co.',   industry: 'Legal',          url: 'hartmann-law.lu',    poster: 'law'    },
  { id: 'bakery',  title: 'Pain & Beurre',    industry: 'Hospitality',    url: 'painbeurre.lu',      poster: 'bakery' },
  { id: 'photo',   title: 'Anna Lange',       industry: 'Portfolio',      url: 'annalange.studio',   poster: 'photo'  },
  { id: 'wine',    title: 'Domaine Lentz',    industry: 'Hospitality',    url: 'lentz.wine',         poster: 'wine'   },
  { id: 'agency',  title: 'Northcap',         industry: 'Finance',        url: 'northcap.lu',        poster: 'agency' },
  { id: 'devtool', title: 'Routerly',         industry: 'Dev tools',      url: 'routerly.dev',       poster: 'devtool'},
  { id: 'museum',  title: 'Musée Riverlight', industry: 'Cultural',       url: 'riverlight.lu',      poster: 'museum' },
  { id: 'fitness', title: 'Atrium Fitness',   industry: 'Wellness',       url: 'atrium-fit.lu',      poster: 'fitness'},
  { id: 'rec',     title: 'Cassia Records',   industry: 'Music',          url: 'cassia.fm',          poster: 'rec'    },
  { id: 'studio',  title: 'Studio Brume',     industry: 'Creative',       url: 'studiobrume.com',    poster: 'studio' },
];

// ── Snippet renderers (open when a card is clicked) ──────
const SNIPPET_RENDERERS = {
  deepak: (p) => (
    <div className="snip">
      <div className="snip-nav"><span className="snip-logo">Deepak<em>·</em></span><span className="snip-navlinks"><span>Shop</span><span>About</span><span>Cart · 2</span></span></div>
      <div className="snip-hero">
        <span className="snip-eyebrow">Hand-pressed · since 1972</span>
        <h4>Pure mustard<br /><em>oil, kachi ghani.</em></h4>
        <div className="snip-row"><span className="snip-cta">Shop tins →</span><span className="snip-meta">5L · ₹1,240</span></div>
      </div>
      <div className="snip-grid-3">
        <div className="snip-tile"><span>Mustard</span><span className="t-price">₹1,240</span></div>
        <div className="snip-tile"><span>Groundnut</span><span className="t-price">₹980</span></div>
        <div className="snip-tile"><span>Sesame</span><span className="t-price">₹1,560</span></div>
      </div>
    </div>
  ),
  arch: (p) => (
    <div className="snip">
      <div className="snip-nav"><span className="snip-logo">Marchant<em>·</em></span><span className="snip-navlinks"><span>Work</span><span>Studio</span><span>Contact</span></span></div>
      <div className="snip-hero">
        <span className="snip-eyebrow">Built 2024 · Findel</span>
        <h4>Light-led<br /><em>living spaces.</em></h4>
      </div>
      <div className="snip-photos"><div className="snip-photo p1"></div><div className="snip-photo p2"></div><div className="snip-photo p3"></div></div>
    </div>
  ),
  fid: (p) => (
    <div className="snip">
      <div className="snip-nav"><span className="snip-logo">Boréal<em>·</em></span><span className="snip-navlinks"><span>Services</span><span>Team</span><span>Audit</span></span></div>
      <div className="snip-hero">
        <span className="snip-eyebrow">MIFID · GDPR · Tier 1</span>
        <h4>Quiet finance,<br /><em>fully audited.</em></h4>
      </div>
      <div className="snip-stats">
        <div><span className="s-v">€420M</span><span className="s-l">AUM</span></div>
        <div><span className="s-v">31</span><span className="s-l">Partners</span></div>
        <div><span className="s-v">2008</span><span className="s-l">Est.</span></div>
      </div>
    </div>
  ),
  rest: (p) => (
    <div className="snip">
      <div className="snip-nav"><span className="snip-logo">643<em>·</em></span><span className="snip-navlinks"><span>Menu</span><span>Reserve</span><span>Cellar</span></span></div>
      <div className="snip-hero">
        <span className="snip-eyebrow">★ 4.9 · 643 reviews</span>
        <h4>Seasonal<br /><em>by candlelight.</em></h4>
        <div className="snip-row"><span className="snip-cta">Book a table →</span><span className="snip-meta">Tonight · 8pm</span></div>
      </div>
      <div className="snip-menu">
        <div className="m-row"><span>Beef tartare</span><span>€24</span></div>
        <div className="m-row"><span>Wild sea bass</span><span>€38</span></div>
        <div className="m-row"><span>Tasting menu · 6</span><span>€95</span></div>
      </div>
    </div>
  ),
  saas: (p) => (
    <div className="snip">
      <div className="snip-nav"><span className="snip-logo">Loopback<em>·</em></span><span className="snip-navlinks"><span>Product</span><span>Docs</span><span>Pricing</span></span></div>
      <div className="snip-hero">
        <span className="snip-eyebrow">Series A · 2026</span>
        <h4>Telemetry that<br /><em>thinks for you.</em></h4>
        <div className="snip-row"><span className="snip-cta">Start free →</span><span className="snip-meta">No card · 14 days</span></div>
      </div>
      <div className="snip-chart">
        <svg viewBox="0 0 220 60" preserveAspectRatio="none">
          <path d="M0,48 L20,42 L40,46 L60,30 L80,34 L100,22 L120,28 L140,16 L160,20 L180,10 L200,14 L220,4" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
          <path d="M0,48 L20,42 L40,46 L60,30 L80,34 L100,22 L120,28 L140,16 L160,20 L180,10 L200,14 L220,4 L220,60 L0,60 Z" fill="rgba(57,211,83,0.12)" />
        </svg>
      </div>
    </div>
  ),
};

// Generic snippet for any portfolio entry without a custom renderer
function GenericSnippet({ project }) {
  return (
    <div className="snip">
      <div className="snip-nav">
        <span className="snip-logo">{project.title.split(' ')[0]}<em>·</em></span>
        <span className="snip-navlinks"><span>Work</span><span>About</span><span>Contact</span></span>
      </div>
      <div className="snip-hero">
        <span className="snip-eyebrow">{project.industry}</span>
        <h4>Shipped by<br /><em>Folio Studio.</em></h4>
        <div className="snip-row">
          <span className="snip-cta">Visit live →</span>
          <span className="snip-meta">{project.url}</span>
        </div>
      </div>
      <div className="snip-photos">
        <div className="snip-photo p1"></div>
        <div className="snip-photo p2"></div>
        <div className="snip-photo p3"></div>
      </div>
    </div>
  );
}

// ── PROJECTOR ─────────────────────────────────────────────
function HoloProjector() {
  const [openId, setOpenId] = useStateHP(null);
  const openProject = useMemoHP(() => PORTFOLIO.find((p) => p.id === openId), [openId]);

  return (
    <div className="hp" aria-label="Portfolio of websites we've built">
      {/* atmospheric haze */}
      <div className="hp-atmos" aria-hidden="true"></div>

      {/* GLASS SCREEN — fills the full hero-right column */}
      <div className="hp-screen">

        {/* GRID VIEW (default) */}
        {!openProject && (
          <div className="hp-screen-body hp-grid-wrap">
            <div className="hp-grid">
              {PORTFOLIO.map((p) => (
                <button key={p.id} type="button"
                  className={`hp-card hp-poster-${p.poster}`}
                  onClick={() => setOpenId(p.id)}
                  aria-label={`Open ${p.title} portfolio snippet`}>
                  <span className="hp-card-overlay" aria-hidden="true"></span>
                  <span className="hp-card-mark" aria-hidden="true">F·</span>
                  <span className="hp-card-meta">
                    <span className="hp-card-industry">{p.industry}</span>
                    <span className="hp-card-title">{p.title}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* OPENED SNIPPET VIEW */}
        {openProject && (
          <div className="hp-screen-body hp-snippet-wrap" key={openProject.id}>
            <button className="hp-back" onClick={() => setOpenId(null)} type="button" aria-label="Back to portfolio grid">
              <span className="hp-back-arrow">←</span> All projects
            </button>
            <div className="hp-snippet-stage">
              {SNIPPET_RENDERERS[openProject.poster]
                ? SNIPPET_RENDERERS[openProject.poster](openProject)
                : <GenericSnippet project={openProject} />}
            </div>
            <div className="hp-snippet-url">{openProject.url} · <span>shipped by Folio Studio</span></div>
          </div>
        )}

        {/* Folio watermark — bottom-right of the projection */}
        <div className="hp-watermark">
          <span className="hp-watermark-mark">Folio<i>·</i></span>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { HoloProjector, PORTFOLIO });
