// ═══════════════════════════════════════════════════════════
// FOLIO UI KIT — Technologies & Industries pages
// Plus the holographic globe visual that hero-anchors Technologies.
// ═══════════════════════════════════════════════════════════

const { useState: useStateT, useEffect: useEffectT, useRef: useRefT } = React;

// ── HOLOGRAPHIC WIREFRAME GLOBE ───────────────────────────
function HoloGlobe({ tags }) {
  const longitudes = [0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5];
  const latitudes  = [-160, -120, -80, -40, 0, 40, 80, 120, 160];
  const R = 180;

  const orbitTags = tags && tags.length ? tags : ['Next.js', 'Postgres', 'Vercel', 'Sanity'];

  return (
    <div className="holo-globe">
      <div className="holo-noise"></div>
      <svg viewBox="-220 -220 440 440" className="holo-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="holo-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%"  stopColor="rgba(57,211,83,0.18)" />
            <stop offset="55%" stopColor="rgba(57,211,83,0.04)" />
            <stop offset="100%" stopColor="rgba(57,211,83,0)" />
          </radialGradient>
          <linearGradient id="holo-meridian" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="rgba(57,211,83,0)" />
            <stop offset="50%"  stopColor="rgba(57,211,83,0.55)" />
            <stop offset="100%" stopColor="rgba(57,211,83,0)" />
          </linearGradient>
        </defs>

        {/* Glow core */}
        <circle cx="0" cy="0" r={R} fill="url(#holo-core)" />

        {/* Latitudes (static horizontal ellipses) */}
        {latitudes.map((y) => {
          if (Math.abs(y) >= R) return null;
          const rx = Math.sqrt(R * R - y * y);
          return (
            <ellipse key={`lat-${y}`} cx="0" cy={y} rx={rx} ry={rx * 0.18}
              fill="none"
              stroke={y === 0 ? 'var(--accent)' : 'rgba(244,241,232,0.10)'}
              strokeWidth={y === 0 ? 1.4 : 0.8}
              opacity={y === 0 ? 0.7 : 1}
            />
          );
        })}

        {/* Longitudes — rotating group */}
        <g className="holo-meridians">
          {longitudes.map((rot) => (
            <ellipse key={`lng-${rot}`} cx="0" cy="0" rx={R * 0.45} ry={R}
              fill="none" stroke="url(#holo-meridian)" strokeWidth="0.9"
              transform={`rotate(${rot})`}
            />
          ))}
        </g>

        {/* Outer ring */}
        <circle cx="0" cy="0" r={R} fill="none" stroke="rgba(244,241,232,0.18)" strokeWidth="1" />
        <circle cx="0" cy="0" r={R + 14} fill="none" stroke="rgba(57,211,83,0.18)" strokeWidth="0.6" strokeDasharray="2 6" />

        {/* Data points around the equator */}
        {[0, 30, 60, 95, 145, 200, 245, 285, 320].map((deg) => {
          const a = (deg * Math.PI) / 180;
          const x = Math.cos(a) * R;
          const y = Math.sin(a) * R * 0.18;
          return <circle key={deg} cx={x} cy={y} r="2.4" fill="var(--accent)" opacity="0.85" />;
        })}
      </svg>

      {/* Floating tech tags in CSS-driven orbits */}
      <div className="holo-tags" aria-hidden="true">
        {orbitTags.map((t, i) => (
          <span key={i} className={`holo-tag holo-tag-${i % 4}`}>{t}</span>
        ))}
      </div>

      <div className="holo-readout">
        <div className="holo-readout-row"><span>NODE</span><span className="holo-dot"></span><span>0xA1·LU</span></div>
        <div className="holo-readout-row"><span>UPLINK</span><span className="holo-dot"></span><span>STABLE</span></div>
      </div>
    </div>
  );
}

// ── TECHNOLOGIES PAGE ─────────────────────────────────────
function TechnologiesPage({ onAudit }) {
  const frontend = [
    { group: 'Frameworks', items: [
      ['Next.js', true,  'Full-stack React. SSR / ISR. Our default for marketing + product surfaces.'],
      ['Astro',   true,  'Static-first with islands of interactivity. Fastest LCP we ship.'],
      ['React',   false, 'For component-rich SPAs and embedded widgets.'],
      ['Vue 3 · Nuxt', false, 'When your team already lives in Vue.'],
      ['SvelteKit', false, 'Minimal bundle, smooth interactions.'],
      ['Remix',   false, 'Server-first React with proper form semantics.'],
      ['SolidJS', false, 'Fine-grained reactivity for performance-critical UIs.'],
    ]},
    { group: 'Type & tooling', items: [
      ['TypeScript', true, 'Default on every project — strict mode.'],
      ['Vite',       false, 'Modern dev server + bundler.'],
      ['ESLint · Prettier', false, 'House style enforced in CI.'],
    ]},
    { group: 'Styling & UI', items: [
      ['Tailwind CSS', true, 'Utility-first, ships zero unused CSS.'],
      ['Vanilla CSS / Modules', false, 'For brand-led editorial work like this one.'],
      ['shadcn/ui',  false, 'When we need composable, accessible primitives.'],
      ['Radix · Headless UI', false, 'For complex menus, dialogs, comboboxes.'],
      ['Framer Motion · GSAP', false, 'Production-grade motion design.'],
    ]},
  ];

  const backend = [
    { group: 'Runtimes & frameworks', items: [
      ['Node.js · Hono',     true,  'Edge-ready, runs anywhere. Default for new APIs.'],
      ['Node.js · Fastify',  false, 'When you need raw HTTP throughput.'],
      ['Node.js · NestJS',   false, 'For larger, structured backends.'],
      ['Python · FastAPI',   true,  'AI-adjacent workloads, typed pydantic models.'],
      ['Python · Django',    false, 'Admin-heavy, batteries-included.'],
      ['Go · Gin / Echo',    false, 'Low-latency services, single binary deploy.'],
      ['Rust · Axum',        false, 'When every microsecond counts.'],
      ['Ruby on Rails',      false, 'Classic monolith, fast to iterate.'],
      ['PHP · Laravel',      false, 'For teams in the PHP ecosystem.'],
      ['.NET · ASP.NET Core', false, 'Enterprise, Windows-friendly.'],
      ['Java · Spring Boot', false, 'For regulated finance / enterprise.'],
    ]},
    { group: 'APIs & layers', items: [
      ['REST · OpenAPI', false, 'The default — typed via OpenAPI specs.'],
      ['GraphQL',        false, 'When clients need flexible aggregation.'],
      ['tRPC',           true,  'End-to-end type safety in TS monorepos.'],
      ['WebSockets · SSE', false, 'Realtime feeds, audit dashboards, live previews.'],
    ]},
    { group: 'Edge & jobs', items: [
      ['Cloudflare Workers', true, 'Sub-50ms cold start, globally distributed.'],
      ['Deno Deploy',        false, 'Modern JS runtime at the edge.'],
      ['Inngest · Trigger.dev', false, 'Background jobs, scheduled workflows.'],
    ]},
  ];

  const data = [
    { group: 'Databases', items: [
      ['PostgreSQL', true,  'Our default RDBMS — Supabase, Neon, RDS.'],
      ['MySQL · PlanetScale', false, 'For teams already on MySQL.'],
      ['SQLite · Turso', false, 'Edge SQLite, surprisingly capable in production.'],
      ['MongoDB', false, 'Document store when the data really is documents.'],
      ['Redis · Upstash', false, 'Cache, queues, rate limiting.'],
    ]},
    { group: 'Headless CMS', items: [
      ['Sanity',   true,  'Our most-shipped CMS. Real-time, structured.'],
      ['Payload',  true,  'Self-hosted, TypeScript-native, code-first.'],
      ['Contentful', false, 'For larger orgs already invested.'],
      ['Strapi · Directus', false, 'Open source, self-hosted alternatives.'],
    ]},
    { group: 'Auth & identity', items: [
      ['Clerk',         true,  'Drop-in auth + user management for SaaS.'],
      ['Auth.js',       false, 'Self-hosted, framework-agnostic.'],
      ['Supabase Auth', false, 'When you\'re already in Supabase.'],
    ]},
  ];

  const infra = [
    { group: 'Hosting', items: [
      ['Vercel',         true,  'Default for Next.js. Preview deploys on every PR.'],
      ['Netlify',        true,  'For static-heavy Astro builds.'],
      ['Cloudflare Pages', false, 'Edge-first, ultra-fast TTFB.'],
      ['Railway · Fly.io · Render', false, 'For container workloads.'],
      ['AWS', false, 'Lambda, S3, RDS, CloudFront when you need the full toolbox.'],
    ]},
    { group: 'Integrations', items: [
      ['Stripe',  true,  'Payments. Every flavour — Checkout, Connect, Billing.'],
      ['Resend · Loops · Postmark', false, 'Transactional + marketing email.'],
      ['Twilio',  false, 'SMS, voice, WhatsApp.'],
      ['Anthropic · OpenAI', true, 'Agent workflows, AI features, chat surfaces.'],
      ['Algolia · Meilisearch · Typesense', false, 'Hosted search that just works.'],
    ]},
    { group: 'Observability', items: [
      ['Sentry',         false, 'Error tracking on every project.'],
      ['Vercel Analytics · Plausible', false, 'Privacy-first analytics.'],
      ['Axiom · Logtail · Datadog', false, 'For deeper log + APM needs.'],
    ]},
  ];

  return (
    <>
      <section className="page-hero tech-hero">
        <div className="tech-hero-glow" aria-hidden="true"></div>
        <Container>
          <div className="tech-hero-grid">
            <div>
              <Eyebrow>03 · Technologies</Eyebrow>
              <h1 style={{ fontSize: 'clamp(48px, 7vw, 104px)', letterSpacing: '-0.04em', lineHeight: 0.98, marginTop: 18 }}>
                The stack we<br />build <Italic>everything on.</Italic>
              </h1>
              <p style={{ fontSize: 18, color: 'var(--fg-mute)', maxWidth: 520, marginTop: 28, lineHeight: 1.65 }}>
                Every framework, runtime, database, and platform we ship to production — picked for the project, never for the resume. We don't build native mobile apps; everything else on this page is fair game.
              </p>
              <div style={{ display: 'flex', gap: 14, marginTop: 32, flexWrap: 'wrap' }}>
                <Button variant="primary" onClick={onAudit}>Discuss your stack</Button>
                <Button variant="ghost">See packages</Button>
              </div>
              <div className="tech-meta">
                <div><span className="tech-meta-num">40+</span><span>Tools shipped to production</span></div>
                <div><span className="tech-meta-num">12</span><span>Languages we write daily</span></div>
                <div><span className="tech-meta-num">0</span><span>Mobile-native projects (by design)</span></div>
              </div>
            </div>
            <div className="tech-hero-globe">
              <HoloGlobe tags={['Next.js', 'Postgres', 'Vercel', 'Sanity']} />
            </div>
          </div>
        </Container>
      </section>

      <TechStackBlock title="Frontend" italic="& interfaces." eyebrow="01 · Frontend" desc="Everything the user actually sees. We pick the lightest tool that does the job — Astro for static, Next.js for product, vanilla for editorial."
        groups={frontend} />

      <TechStackBlock title="Backend" italic="& APIs." eyebrow="02 · Backend" desc="Servers, APIs, edge runtimes, background jobs. We're language-agnostic — pick what suits your team, not ours." groups={backend} alt />

      <TechStackBlock title="Data" italic="& identity." eyebrow="03 · Data layer" desc="Databases, CMS, auth. The plumbing that keeps your product honest."
        groups={data} />

      <TechStackBlock title="Infra" italic="& integrations." eyebrow="04 · Infra" desc="Where it runs, how it ships, what it talks to. Edge-first by default."
        groups={infra} alt />
    </>
  );
}

function TechStackBlock({ title, italic, eyebrow, desc, groups, alt }) {
  return (
    <section className={`tech-block${alt ? ' tech-block-alt' : ''}`}>
      <Container>
        <div className="sect-head">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 style={{ marginTop: 18 }}>{title} <Italic>{italic}</Italic></h2>
          <p>{desc}</p>
        </div>
        <div className="tech-groups">
          {groups.map((g) => (
            <div key={g.group} className="tech-group-card">
              <div className="tech-group-label">{g.group}</div>
              <ul className="tech-items">
                {g.items.map(([name, accent, body]) => (
                  <li key={name} className={`tech-item${accent ? ' tech-item-accent' : ''}`}>
                    <span className="tech-item-name">{name}</span>
                    <span className="tech-item-body">{body}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ── INDUSTRIES PAGE ───────────────────────────────────────
function IndustriesPage({ onAudit }) {
  const industries = [
    { num: '01', label: 'Architecture & Design',
      built1: 'Portfolio-led',  built2: 'sites.',
      copy: 'Studios with serious work and tired websites. Big-image, slow-loading WordPress to fast, mobile-first portfolios with case-study templates editable in the CMS.',
      examples: ['Architect studios', 'Interior designers', 'Industrial design firms'],
      stat: ['+68%', 'Enquiries · Architect Studio LU'] },
    { num: '02', label: 'Hospitality',
      built1: 'Booking-ready',   built2: 'restaurants.',
      copy: 'Restaurants, hotels and bars where Google Maps drives most discovery. We rebuild menus, reservation flows and review aggregation — and clean up local SEO.',
      examples: ['Restaurants', 'Boutique hotels', 'Wine bars', 'Coffee roasters'],
      stat: ['+52%', 'Bookings · Restaurant 643 reviews'] },
    { num: '03', label: 'Professional Services',
      built1: 'Trust-first',     built2: 'firms.',
      copy: 'Accountants, fiduciaries, law firms, consultants. The brief is always the same — look credible, rank locally, make it obvious how to contact you.',
      examples: ['Fiduciaries', 'Accounting firms', 'Law firms', 'Wealth advisors'],
      stat: ['+44%', 'New clients · Fiduciary firm LU'] },
    { num: '04', label: 'Real Estate',
      built1: 'Listing-driven',  built2: 'sites.',
      copy: 'Boutique agencies and property developers who need fast listing pages, map-driven search, and lead-capture that doesn\'t feel cheap.',
      examples: ['Boutique agencies', 'Property developers', 'Holiday rental hosts'],
      stat: ['8s', 'Avg. listing load time'] },
    { num: '05', label: 'Healthcare & Wellness',
      built1: 'Calm, clinical',  built2: 'design.',
      copy: 'Clinics, therapists, yoga studios. Reassuring tone, fast booking, GDPR-correct intake forms, and zero dark patterns.',
      examples: ['Private clinics', 'Therapists', 'Dental practices', 'Wellness studios'],
      stat: ['100%', 'GDPR + cookie-correct by default'] },
    { num: '06', label: 'E-commerce & Retail',
      built1: 'Boutique',        built2: 'commerce.',
      copy: 'Independent brands moving off Shopify themes onto bespoke storefronts — Next.js + Stripe + Sanity, or headless Shopify when the catalog warrants it.',
      examples: ['Independent fashion', 'Specialty food + drink', 'Design objects', 'Beauty + perfume'],
      stat: ['1.4s', 'Avg. LCP on storefronts shipped'] },
    { num: '07', label: 'SaaS & B2B Tech',
      built1: 'Product-led',     built2: 'marketing.',
      copy: 'Marketing sites and docs for SaaS companies. Conversion-tracked CTAs, MDX-driven docs, changelog automation, and pricing pages that survive A/B tests.',
      examples: ['Early-stage SaaS', 'B2B platforms', 'Developer tools', 'API-first companies'],
      stat: ['+38%', 'Signup rate uplift · post-rebuild'] },
    { num: '08', label: 'Finance & Wealth',
      built1: 'Compliant,',      built2: 'considered.',
      copy: 'Family offices, wealth managers, fintech startups. Discretion in the tone, rigour in the structure, and every regulatory disclaimer where it needs to be.',
      examples: ['Family offices', 'Wealth managers', 'Fintech startups', 'Regulated advisors'],
      stat: ['MIFID', 'Compliant copy + structure'] },
    { num: '09', label: 'Education & Training',
      built1: 'Course-friendly',  built2: 'platforms.',
      copy: 'Schools, training providers, and creators selling courses. Enrolment flows, Stripe payments, member-only content, instructor dashboards.',
      examples: ['Private schools', 'Bootcamps', 'Online course creators', 'Coaches'],
      stat: ['200+', 'Concurrent students on launch day'] },
    { num: '10', label: 'Cultural & Nonprofit',
      built1: 'Mission-led',     built2: 'sites.',
      copy: 'Galleries, foundations, charities. Donation flows, event calendars, multilingual content, and quiet design that doesn\'t shout over the cause.',
      examples: ['Galleries + museums', 'Foundations', 'Charities', 'Cultural festivals'],
      stat: ['€0', 'For registered Luxembourg nonprofits'] },
  ];

  return (
    <>
      <section className="page-hero industries-hero">
        <Container>
          <Eyebrow>02 · Industries</Eyebrow>
          <h1 style={{ fontSize: 'clamp(48px, 7vw, 104px)', letterSpacing: '-0.04em', lineHeight: 0.98, maxWidth: 1200, marginTop: 18 }}>
            Built for businesses<br />that look <Italic>like yours.</Italic>
          </h1>
          <p style={{ fontSize: 18, color: 'var(--fg-mute)', maxWidth: 620, marginTop: 28, lineHeight: 1.65 }}>
            Ten years across product design and engineering means we've seen the same problems show up in very different industries. Below are the sectors we ship for most, with a representative result for each.
          </p>
        </Container>
      </section>

      <section className="industries-section">
        <Container>
          <div className="industries-grid">
            {industries.map((ind) => (
              <article key={ind.num} className="industry-card">
                <div className="industry-head">
                  <span className="industry-num">{ind.num}</span>
                  <span className="industry-label">{ind.label}</span>
                </div>
                <h3 className="industry-title">{ind.built1} <Italic>{ind.built2}</Italic></h3>
                <p className="industry-copy">{ind.copy}</p>
                <ul className="industry-examples">
                  {ind.examples.map((x) => <li key={x}>{x}</li>)}
                </ul>
                <div className="industry-stat">
                  <span className="industry-stat-v">{ind.stat[0]}</span>
                  <span className="industry-stat-l">{ind.stat[1]}</span>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="industries-tail">
        <Container narrow>
          <div className="industries-tail-inner">
            <Eyebrow>Not on the list?</Eyebrow>
            <h2 style={{ marginTop: 16, fontSize: 'clamp(32px, 4.5vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
              We've probably done<br /><Italic>something like it.</Italic>
            </h2>
            <p style={{ fontSize: 16, color: 'var(--fg-mute)', maxWidth: 540, marginTop: 22, lineHeight: 1.65 }}>
              If your industry isn't represented above, the pattern is almost certainly transferable. The audit is free either way — send us your URL and we'll tell you honestly whether we're the right fit.
            </p>
            <div style={{ marginTop: 28, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Button variant="primary" onClick={onAudit}>Get your free audit</Button>
              <Button variant="ghost">Talk to us</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

Object.assign(window, { HoloGlobe, TechnologiesPage, IndustriesPage });
