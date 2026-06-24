// Single source of truth for the Industries listing + the dynamic subpages.
// Each entry drives /industries (card + semantic keywords) and /industries/[slug]
// (rich SEO/AEO/GEO subpage). Keep copy precise — no filler.

export const industries = [
  {
    slug: 'architecture',
    title: 'Architecture & studios',
    keywords: ['architecture website design', 'architect portfolio website', 'practice case-study pages', 'RIBA studio web design'],
    card: 'Portfolio-led sites with case-study templates editable in the CMS. Big imagery without the slow load.',
    intro: 'Architecture is chosen with the eye. We build portfolio-forward websites that let your projects lead — large, fast-loading imagery with structured case studies underneath — so a prospective client feels the quality before they read a word.',
    helps: [
      ['Project-led case studies', 'Editable templates for each project: hero imagery, brief, approach and outcome, marked up so search and answer engines understand your body of work.'],
      ['Imagery that loads instantly', 'High-resolution photography, optimised and lazy-loaded, so a gallery-heavy site still passes Core Web Vitals on mobile.'],
      ['Found for local practice searches', 'Location schema and clean structure that rank you for "architects [city]" and surface you in AI answers about local practices.'],
    ],
    faqs: [
      ['How do you keep an image-heavy architecture site fast?', 'We serve responsive, compressed imagery from an edge CDN and lazy-load below the fold, so even a dense portfolio loads in well under two seconds on mobile.'],
      ['Can we add new projects ourselves?', 'Yes. Every project is a structured CMS entry — your team publishes a new case study in minutes without touching code or calling a developer.'],
    ],
  },
  {
    slug: 'hospitality',
    title: 'Hospitality',
    keywords: ['restaurant website design', 'online reservations website', 'hotel website SEO', 'menu and booking website'],
    card: 'Menus, online reservations and local SEO so you\'re found and booked from a phone.',
    intro: 'Hospitality is won on a phone, in the moment. We build mobile-first sites with live menus, frictionless online reservations and local SEO, so a hungry searcher finds you and books a table in two taps.',
    helps: [
      ['Reservations without friction', 'Integrated online booking and click-to-call woven throughout, so a guest never hits a dead end on their phone.'],
      ['A live, editable menu', 'Update dishes, prices and hours yourself from the CMS — marked up so Google can show your menu directly in results.'],
      ['Local search visibility', 'Google Business signals, location schema and fast load that put you in front of nearby diners and travellers.'],
    ],
    faqs: [
      ['Can guests book a table directly on the site?', 'Yes — we integrate online reservations with click-to-call fallback, optimised for the late-night mobile booking that drives most hospitality traffic.'],
      ['Will our menu show up in Google?', 'We mark up your menu with structured data so search engines and AI assistants can surface dishes, prices and hours directly.'],
    ],
  },
  {
    slug: 'professional-services',
    title: 'Professional services',
    keywords: ['fiduciary website design', 'accountancy website SEO', 'professional services web design', 'secure trust-led website'],
    card: 'Fiduciaries, law, accounting — clear, trustworthy sites with secure hosting and structured service pages.',
    intro: 'In professional services the website is a credibility test. We build secure, clear, fast sites that signal competence — structured service pages, prominent trust signals, and SME-targeted SEO that brings the right clients to you.',
    helps: [
      ['Secure by default', 'SSL and hardened edge hosting as standard, so browsers and clients see a trustworthy, professional presence.'],
      ['Service pages that convert', 'Outcome-led pages that make each service legible to a non-expert, with structured data that helps you rank and get cited.'],
      ['Targeted local SEO', 'Schema, location pages and clean structure aimed at the SMEs and individuals you want as clients.'],
    ],
    faqs: [
      ['Is the site secure enough for a financial firm?', 'Yes — SSL, secure edge hosting and structured, machine-readable trust signals are built in from day one.'],
      ['How do you make complex services clear?', 'We rewrite each service into outcome-led copy a non-expert understands, then mark it up so search and answer engines summarise it accurately.'],
    ],
  },
  {
    slug: 'manufacturing',
    title: 'Manufacturing & B2B',
    keywords: ['B2B manufacturing website', 'product catalogue website', 'industrial website design', 'RFQ enquiry website'],
    card: 'Product catalogues and enquiry flows that turn global search traffic into qualified leads.',
    intro: 'In B2B manufacturing the website is the first audit a buyer runs. We turn decades of capability into a structured, searchable catalogue with clear enquiry flows — so procurement teams across the world find you, trust you, and request a quote.',
    helps: [
      ['A structured product catalogue', 'Every product and category modelled as CMS content with its own indexable page, so global buyers find exactly what they need.'],
      ['Qualified enquiry flows', 'Focused RFQ and enquiry forms that turn search traffic into leads your sales team can actually act on.'],
      ['Built to be found globally', 'Technical SEO and schema that surface your range for the specific industrial terms buyers search.'],
    ],
    faqs: [
      ['Can you handle hundreds of products?', 'Yes — we model your full range as structured content so every product gets a clean, indexable page, however large the catalogue.'],
      ['How do we capture enquiries from buyers?', 'We build focused RFQ and enquiry flows tuned for B2B, turning organic search traffic into qualified leads.'],
    ],
  },
  {
    slug: 'retail',
    title: 'Retail & e-commerce',
    keywords: ['e-commerce website design', 'online store web design', 'conversion-first checkout', 'product page SEO'],
    card: 'Fast storefronts with clean product pages and conversion-first checkout.',
    intro: 'Retail lives and dies on speed and clarity. We build fast storefronts with clean product pages and a conversion-first checkout, so browsers become buyers and your catalogue ranks for the products people actually search.',
    helps: [
      ['Product pages that rank and sell', 'Clean, structured product pages with rich schema for price, availability and reviews — built to convert and to be cited.'],
      ['Conversion-first checkout', 'A fast, low-friction path to purchase, optimised for mobile where most retail browsing happens.'],
      ['Performance that protects revenue', 'Edge-served, Core Web Vitals-passing pages, because every extra second of load costs you sales.'],
    ],
    faqs: [
      ['Will my products show rich results in Google?', 'Yes — we add product schema for price, stock and reviews, so eligible products can appear as rich results.'],
      ['How do you reduce cart abandonment?', 'We streamline the checkout into the fewest possible steps and make the whole flow fast and mobile-first.'],
    ],
  },
  {
    slug: 'saas',
    title: 'Tech & SaaS',
    keywords: ['SaaS website design', 'product marketing site', 'developer-focused web design', 'SaaS SEO and AEO'],
    card: 'Editorial product sites that explain complex value simply and rank for it.',
    intro: 'For tech and SaaS, the site has to make something complex feel obvious. We build editorial product sites that explain your value simply, convert trials, and rank — and that AI answer engines can summarise correctly when someone asks what you do. We can also wire in custom AI automations: onboarding flows, in-app content and lead qualification.',
    helps: [
      ['Clarity over jargon', 'Editorial copy and structure that turn a complex product into an obvious value proposition for the right buyer.'],
      ['Built for AEO & GEO', 'Question-led content and clean structure so answer engines and generative search cite you accurately.'],
      ['Conversion-ready', 'Fast, focused paths to sign-up, demo or trial, instrumented so you can see what works.'],
    ],
    faqs: [
      ['Can the site help us get cited by AI tools?', 'Yes — we structure content around the questions buyers ask and mark it up so generative engines can quote you precisely.'],
      ['Do you integrate with our product or CRM?', 'We wire the site into your sign-up, demo and CRM flows so marketing and product stay connected.'],
    ],
  },
  {
    slug: 'real-estate',
    title: 'Real estate & property',
    keywords: ['real estate website design', 'property listings website', 'estate agent SEO', 'lettings website design'],
    card: 'Searchable listings, map-led discovery and local SEO that bring serious buyers and tenants.',
    intro: 'Property is a search problem. We build fast, map-led sites with structured listings and local SEO, so serious buyers and tenants find the right property — and find you — before they reach a competitor.',
    helps: [
      ['Structured, searchable listings', 'Each property modelled as CMS content with filters, maps and schema so listings surface in search and stay easy to manage.'],
      ['Map-led discovery', 'Location-first browsing that matches how buyers and tenants actually look for property.'],
      ['Local SEO that converts', 'Area and neighbourhood pages tuned to rank for the specific places your clients search.'],
    ],
    faqs: [
      ['Can we manage listings ourselves?', 'Yes — listings are structured CMS entries your team adds, edits and archives without a developer.'],
      ['Do listings appear in search results?', 'We mark properties up with structured data so eligible listings can surface as rich results.'],
    ],
  },
  {
    slug: 'healthcare',
    title: 'Healthcare & clinics',
    keywords: ['clinic website design', 'healthcare website SEO', 'private practice web design', 'online appointment booking'],
    card: 'Accessible, trustworthy clinic sites with online booking and clear treatment information.',
    intro: 'Healthcare decisions start with trust and accessibility. We build clear, accessible clinic and practice sites with online booking and well-structured treatment information, so patients understand their options and book with confidence.',
    helps: [
      ['Accessible by design', 'WCAG-minded layouts, readable typography and keyboard-friendly navigation, because healthcare must work for everyone.'],
      ['Clear treatment information', 'Structured, reassuring content for each treatment or service, marked up so search and answer engines summarise it accurately.'],
      ['Online appointment booking', 'Frictionless booking and click-to-call so patients reach you the moment they decide.'],
    ],
    faqs: [
      ['Is the site accessible for all patients?', 'Yes — we build to accessibility best practice so the site works with screen readers, keyboards and a range of needs.'],
      ['Can patients book appointments online?', 'We integrate online booking with click-to-call fallback, optimised for mobile.'],
    ],
  },
  {
    slug: 'legal',
    title: 'Legal',
    keywords: ['law firm website design', 'solicitor website SEO', 'legal practice web design', 'practice area pages'],
    card: 'Authoritative law-firm sites with clear practice areas, secure hosting and SEO that ranks for intent.',
    intro: 'Legal clients search with intent and judge fast. We build authoritative, secure law-firm sites with clear practice-area pages and SEO tuned to high-intent queries, so the right clients find and trust you at the moment they need counsel.',
    helps: [
      ['Practice-area pages that rank', 'A dedicated, well-structured page per practice area, targeted at the specific terms prospective clients search.'],
      ['Authority and trust signals', 'Credentials, regulated status and outcomes made prominent and machine-readable.'],
      ['Secure and fast', 'SSL, hardened hosting and quick load that match the seriousness of the work.'],
    ],
    faqs: [
      ['Do you build a page per practice area?', 'Yes — each practice area gets its own structured page targeted at high-intent search terms.'],
      ['How do you convey authority?', 'We surface credentials, regulation and case outcomes prominently and in structured data so they read clearly to people and search engines.'],
    ],
  },
  {
    slug: 'construction',
    title: 'Construction & trades',
    keywords: ['construction website design', 'trades website SEO', 'builder website design', 'local services SEO'],
    card: 'Project-proof sites with strong local SEO and clear quote requests that win local work.',
    intro: 'Trades and construction win on proof and proximity. We build project-proof sites with before/after galleries, strong local SEO and clear quote requests, so nearby clients see your work and get in touch first.',
    helps: [
      ['Proof of work', 'Editable project galleries and testimonials that show range and quality to a cautious local buyer.'],
      ['Local SEO that wins jobs', 'Service-area pages, Google Business signals and schema tuned to rank for "near me" searches.'],
      ['Fast quote requests', 'Simple, mobile-first quote and callback forms that capture leads before a competitor responds.'],
    ],
    faqs: [
      ['How do you help us win local jobs?', 'We build service-area pages and local schema so you rank for nearby "near me" searches, with fast quote forms to capture the lead.'],
      ['Can we show our completed projects?', 'Yes — an editable gallery lets you publish before/after photos of completed work yourself.'],
    ],
  },
];

export function getIndustry(slug) {
  return industries.find((i) => i.slug === slug);
}
