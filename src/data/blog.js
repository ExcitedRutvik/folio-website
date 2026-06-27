// Data-driven Journal posts. Each entry renders through src/pages/blog/[slug].astro
// using the shared Post layout (auto ToC from <h2>s + sticky audit CTA).
// `cluster` groups posts into topic clusters for internal linking; `related`
// lists sibling slugs surfaced as "Related reading".
// Existing hand-written posts (kept as their own files) for cross-linking:
//   how-we-built-trayaam · 7-day-website-rebuild-what-we-learned · core-web-vitals-smes

export const clusters = {
  web: 'Web design',
  seo: 'Performance & SEO',
  ai: 'AI automation',
};

export const posts = [
  // ───────────────────────── CLUSTER: WEB DESIGN ─────────────────────────
  {
    slug: 'website-cost-small-business',
    cluster: 'web',
    category: 'Web design',
    date: 'Feb 2026',
    readtime: '7 min read',
    title: 'How much should a small business website cost in 2026?',
    description: 'A transparent breakdown of what a small business website really costs in 2026 — templates, freelancers, agencies and fixed-price studios compared.',
    body: `
<p>"How much does a website cost?" is the most common question we hear, and the most badly answered. The honest reply is a range — but a useful reply explains what moves you along that range, and what you should refuse to pay for. Here's the real picture for 2026.</p>
<h2>The four price tiers</h2>
<p>Broadly, you're choosing between four options: a DIY template (£0–£200/yr), a freelancer (£500–£3,000), an agency on an hourly or retainer model (£5,000–£30,000+), and a fixed-price studio (a defined scope for a defined number). Each buys something different — and the most expensive option is rarely the best value for a small business.</p>
<h2>What actually drives the price</h2>
<ul>
  <li><strong>Scope</strong> — a one-page site versus a 30-page site with a CMS is a different project entirely.</li>
  <li><strong>Design</strong> — a template refit costs a fraction of bespoke, distinctive design.</li>
  <li><strong>Functionality</strong> — booking, e-commerce or custom integrations add real engineering.</li>
  <li><strong>SEO foundation</strong> — done properly from the start, or bolted on later at greater cost.</li>
</ul>
<p>Notice what <em>isn't</em> on that list: the agency's office, account managers, or open-ended "discovery" months. Those inflate the invoice without improving your site.</p>
<h2>Why fixed pricing wins for small businesses</h2>
<p>Hourly billing punishes you for the agency's inefficiency and leaves you unable to budget. A fixed price — agreed in writing before work starts — flips the incentive: the studio is now motivated to work efficiently, and you know the number on day zero. It's why our <a href="/services">packages</a> are priced as <a href="/services/quick-refresh">Quick Refresh (£990)</a>, <a href="/services/full-rebuild">Full Rebuild (£2,500)</a> and <a href="/services/growth">Growth Partner (£4,500)</a> rather than "it depends".</p>
<h2>What you should always get for your money</h2>
<p>Whatever you pay, insist on: mobile-first design, a fast modern build, a complete SEO foundation, an editable CMS, and <a href="/blog/who-owns-your-website">full ownership of everything</a> at handover. If a quote omits these, it isn't cheaper — it's incomplete.</p>
<h2>The cheapest way to decide</h2>
<p>Before you spend anything, get a <a href="/contact">free audit</a> of your current site. It tells you whether you need <a href="/blog/redesign-or-refresh">a refresh or a full rebuild</a> — and stops you overpaying for work you don't need.</p>
`,
    related: ['redesign-or-refresh', 'who-owns-your-website', 'website-builder-vs-custom'],
  },
  {
    slug: 'how-long-to-build-a-website',
    cluster: 'web',
    category: 'Web design',
    date: 'Jan 2026',
    readtime: '6 min read',
    title: 'How long does it take to build a website?',
    description: 'Why a professional website can be built in 7 days, what makes projects drag on for months, and how to keep yours on schedule.',
    body: `
<p>Most people assume a good website takes months. It can — but usually not because the work is hard. It's because the <em>process</em> is slow. A focused team on a proven stack can take a small-to-medium business site from audit to live in about a week. Here's what determines the timeline.</p>
<h2>What actually takes the time</h2>
<p>The build itself is rarely the bottleneck. The delays come from indecision, open-ended feedback, content that never arrives, and "discovery" phases that exist to defer choices. Remove those and the calendar shrinks dramatically.</p>
<h2>How a 7-day build is possible</h2>
<p>Three things make it work: an upfront audit so there's no guessing phase, design and development running concurrently on a stack we've shipped dozens of times, and exactly two structured review rounds instead of infinite revisions. We wrote about the system in detail in <a href="/blog/7-day-website-rebuild-what-we-learned">what 32 rebuilds taught us about speed</a>.</p>
<h2>Where projects get stuck</h2>
<ul>
  <li><strong>Content</strong> — text and images that never get sent. Decide this before you start.</li>
  <li><strong>Too many decision-makers</strong> — every extra approver adds a week.</li>
  <li><strong>Scope creep</strong> — "while we're at it…" is how a week becomes a quarter.</li>
</ul>
<h2>Does fast mean lower quality?</h2>
<p>No — usually the opposite. Slowness tends to hide indecision, not care. A tight timeline forces clarity and prevents gold-plating. The speed comes from the <a href="/tech">stack and process</a>, not from cutting corners.</p>
<h2>How to keep yours on track</h2>
<p>Gather your content early, name one decision-maker, and start from a <a href="/contact">free audit</a> so the scope is clear before anyone designs a thing.</p>
`,
    related: ['7-day-website-rebuild-what-we-learned', 'redesign-or-refresh', 'website-cost-small-business'],
  },
  {
    slug: 'redesign-or-refresh',
    cluster: 'web',
    category: 'Web design',
    date: 'Mar 2026',
    readtime: '6 min read',
    title: 'Redesign or refresh: which does your website need?',
    description: 'A practical decision guide for whether your website needs a full redesign or just a focused refresh — with a checklist to tell them apart.',
    body: `
<p>Not every tired website needs to be torn down. Sometimes a focused refresh fixes the problem for a fraction of the cost and time; sometimes a refresh is lipstick on a structural problem. Here's how to tell which situation you're in.</p>
<h2>Signs you only need a refresh</h2>
<ul>
  <li>The structure and content are sound, but the design feels dated.</li>
  <li>It works on mobile but loads slowly or looks cramped.</li>
  <li>You're broadly happy — it just doesn't reflect where the business is now.</li>
</ul>
<p>If that's you, a <a href="/services/quick-refresh">Quick Refresh</a> — a redesigned homepage and key page, a speed pass and SEO basics — is usually enough.</p>
<h2>Signs you need a full rebuild</h2>
<ul>
  <li>It's not properly mobile-first, or fails <a href="/blog/core-web-vitals-smes">Core Web Vitals</a>.</li>
  <li>There's no real SEO foundation and you're invisible on Google.</li>
  <li>You can't edit it yourself, or it's built on something fragile.</li>
  <li>The information architecture itself is wrong.</li>
</ul>
<p>These are structural — paint won't fix them. That's a <a href="/services/full-rebuild">Full Rebuild</a>.</p>
<h2>The grey area</h2>
<p>If you're genuinely unsure, the deciding question is: <em>is the foundation sound?</em> A refresh improves what's there; a rebuild replaces a foundation that's holding you back. Spending refresh money on a broken foundation is the most common way businesses waste a budget.</p>
<h2>Let the numbers decide</h2>
<p>A <a href="/contact">free 12-metric audit</a> scores your foundation objectively — performance, SEO, mobile, security and design — so the refresh-or-rebuild call is based on evidence, not a hunch. If you're weighing cost, our <a href="/blog/website-cost-small-business">pricing guide</a> breaks down both.</p>
`,
    related: ['website-cost-small-business', 'how-long-to-build-a-website', 'why-website-no-enquiries'],
  },
  {
    slug: 'website-builder-vs-custom',
    cluster: 'web',
    category: 'Web design',
    date: 'Feb 2026',
    readtime: '7 min read',
    title: 'Squarespace & Wix vs a custom-built website: which is better for SEO?',
    description: 'An honest comparison of website builders versus custom builds for SEO, performance and long-term cost — and when each one is the right choice.',
    body: `
<p>Website builders like Squarespace and Wix are genuinely good at what they do: getting a basic site live quickly and cheaply. The question is whether that's the right trade for a business that needs to be found and to convert. Here's an honest comparison.</p>
<h2>Where builders win</h2>
<p>If you need a simple brochure site live this week and SEO isn't critical, a builder is a sensible choice. They're affordable, you can edit them yourself, and modern templates look fine. For a side project or a very early-stage business, that's often enough.</p>
<h2>Where builders cost you</h2>
<ul>
  <li><strong>Performance</strong> — builders ship a lot of code you don't control, which drags <a href="/blog/core-web-vitals-smes">Core Web Vitals</a> and can hurt rankings.</li>
  <li><strong>SEO ceiling</strong> — you're limited to the controls the platform exposes; advanced schema, structure and speed work is often off-limits.</li>
  <li><strong>Lock-in</strong> — your content and design live inside their ecosystem. Leaving means rebuilding.</li>
</ul>
<h2>Where custom wins</h2>
<p>A <a href="/tech">custom build</a> on a modern stack gives you full control of performance, structure and schema — the levers that actually move rankings — plus an editable CMS and <a href="/blog/who-owns-your-website">true ownership</a>. For a business that competes on search, that control compounds over time.</p>
<h2>The real question: SEO ceiling</h2>
<p>Builders aren't "bad for SEO" — they have a lower ceiling. You can rank a builder site for low-competition local terms. For anything competitive, the performance and structural limits start to bite. (Worth reading alongside <a href="/blog/is-wordpress-bad-for-seo">is WordPress bad for SEO?</a> — same logic, different platform.)</p>
<h2>How to choose</h2>
<p>Simple brochure, tight budget, low SEO stakes → a builder. Competing on search, need speed and control, planning to grow → custom. A <a href="/contact">free audit</a> will tell you which camp your goals put you in.</p>
`,
    related: ['is-wordpress-bad-for-seo', 'who-owns-your-website', 'why-is-my-website-slow'],
  },
  {
    slug: 'who-owns-your-website',
    cluster: 'web',
    category: 'Web design',
    date: 'Jan 2026',
    readtime: '5 min read',
    title: 'Who owns your website when an agency builds it?',
    description: 'Website ownership is the question most business owners forget to ask — until they try to leave. Here is what you should own, and how to check.',
    body: `
<p>It's the question almost nobody asks before signing, and the one that hurts most later: when an agency builds your website, who actually owns it? The answer should be simple — you do — but plenty of arrangements quietly say otherwise.</p>
<h2>What "ownership" really means</h2>
<p>Owning your website means controlling every asset it depends on: the code, the content, the CMS, the domain name, the hosting account and the analytics. If any of those sit in someone else's account, you don't fully own your site — you rent it.</p>
<h2>Common lock-in traps</h2>
<ul>
  <li><strong>Proprietary platforms</strong> you can only edit by paying the agency.</li>
  <li><strong>The domain registered in the agency's name</strong> instead of yours.</li>
  <li><strong>Hosting and analytics</strong> on accounts you can't access.</li>
  <li><strong>Mandatory retainers</strong> just to make basic changes.</li>
</ul>
<h2>Why it matters</h2>
<p>Lock-in turns a bad relationship into an expensive hostage situation. If you can't leave without rebuilding from scratch, you have no leverage — and the work tends to get worse, not better, once the agency knows that.</p>
<h2>Questions to ask before you sign</h2>
<ul>
  <li>Will the domain, hosting and analytics be in <em>my</em> accounts?</li>
  <li>Can I edit the site without paying you?</li>
  <li>Do I get the full codebase and content at handover?</li>
  <li>Is there any retainer required to keep the site running?</li>
</ul>
<h2>Our position</h2>
<p>We hand over everything — code, content, CMS, domain, hosting and analytics — in full, with no lock-in. It's one of the <a href="/services">promises we put in writing</a>. If you're comparing quotes, read our <a href="/blog/website-cost-small-business">cost guide</a> with these questions in hand.</p>
`,
    related: ['website-cost-small-business', 'website-builder-vs-custom', 'redesign-or-refresh'],
  },
  {
    slug: 'why-website-no-enquiries',
    cluster: 'web',
    category: 'Web design',
    date: 'Apr 2026',
    readtime: '7 min read',
    title: 'Why is my website not getting any enquiries?',
    description: 'Five reasons a website gets traffic but no enquiries — from invisible calls-to-action to slow load and weak trust signals — and how to fix each.',
    body: `
<p>A website with visitors but no enquiries is failing at the one job that matters. The good news: the causes are usually a short, fixable list. Here are the five we see most often.</p>
<h2>1. Nobody can find it</h2>
<p>If you're not ranking, there are no enquiries to lose. Start with whether you <a href="/blog/how-to-show-up-on-google">show up on Google</a> at all for the terms your customers actually search.</p>
<h2>2. It's too slow</h2>
<p>Every extra second of load time costs conversions. A <a href="/blog/why-is-my-website-slow">slow website</a> bleeds visitors before they ever see your offer — and hurts rankings on top.</p>
<h2>3. The call-to-action is invisible</h2>
<p>Visitors won't hunt for a way to contact you. One clear, repeated, specific call-to-action — "Book a free audit", not "Learn more" — outperforms a page full of vague links every time.</p>
<h2>4. It doesn't build trust</h2>
<p>People buy from sites that feel credible. Missing testimonials, no real photography, a dated design or — fatally — a "not secure" warning all quietly kill enquiries before the form is ever seen.</p>
<h2>5. The path to enquiry is too hard</h2>
<ul>
  <li>Forms that ask for too much.</li>
  <li>No click-to-call on mobile.</li>
  <li>Contact details buried three clicks deep.</li>
</ul>
<p>Every extra step loses people. Make enquiring effortless.</p>
<h2>Find your specific leak</h2>
<p>These problems are usually invisible from the inside. A <a href="/contact">free 12-metric audit</a> pinpoints exactly which one is costing you — and whether it's a <a href="/blog/redesign-or-refresh">refresh or a rebuild</a> to fix.</p>
`,
    related: ['how-to-show-up-on-google', 'why-is-my-website-slow', 'redesign-or-refresh'],
  },

  // ───────────────────────── CLUSTER: PERFORMANCE & SEO ─────────────────────────
  {
    slug: 'why-is-my-website-slow',
    cluster: 'seo',
    category: 'Performance & SEO',
    date: 'Mar 2026',
    readtime: '6 min read',
    title: 'Why is my website so slow, and how do I fix it?',
    description: 'The real reasons websites load slowly — heavy images, bloated JavaScript, cheap hosting — and the practical fixes that pass Core Web Vitals.',
    body: `
<p>A slow website costs you visitors, conversions and rankings simultaneously. The causes are almost always the same handful of culprits — and most are fixable without a full rebuild. Here's the diagnosis.</p>
<h2>1. Oversized images</h2>
<p>The single most common cause. A 4MB photo straight from a phone, displayed at thumbnail size, is wasted megabytes. Compress, correctly size, serve modern formats, and lazy-load anything below the fold.</p>
<h2>2. Too much JavaScript</h2>
<p>Every script the browser has to download and run delays the page. Page builders and heavy frameworks ship far more than most sites use. Less script means a faster, more responsive page — it's why we <a href="/blog/how-we-built-trayaam">build with as little JavaScript as possible</a>.</p>
<h2>3. Cheap, shared hosting</h2>
<p>A budget shared server adds delay before your site even starts loading. Serving from a fast edge network removes that tax entirely.</p>
<h2>4. No caching</h2>
<p>Without caching, every visit rebuilds the page from scratch. Edge caching serves a ready-made copy instantly.</p>
<h2>How fast is fast enough?</h2>
<p>Google's threshold is Largest Contentful Paint under 2.5 seconds. If that means nothing to you yet, start with our plain-English guide to <a href="/blog/core-web-vitals-smes">Core Web Vitals</a> — it explains exactly what Google measures and why.</p>
<h2>Where to start</h2>
<p>A <a href="/contact">free audit</a> measures your real load time and tells you which of these is the bottleneck — often it's just one, fixable in a day.</p>
`,
    related: ['core-web-vitals-smes', 'how-we-built-trayaam', 'how-to-show-up-on-google'],
  },
  {
    slug: 'how-to-show-up-on-google',
    cluster: 'seo',
    category: 'Performance & SEO',
    date: 'Feb 2026',
    readtime: '8 min read',
    title: 'How do I get my business to show up on Google?',
    description: 'A practical starter guide to ranking on Google for a small business — local SEO, technical foundations, content and the trust signals that move the needle.',
    body: `
<p>Showing up on Google isn't luck or magic — it's a small number of fundamentals done consistently. For a local or small business, you can cover most of the distance yourself. Here's the order to do it in.</p>
<h2>1. Get the technical foundation right</h2>
<p>Google can't rank what it can't read or load. That means correct titles and meta, clean structure, an XML sitemap, schema markup and fast <a href="/blog/why-is-my-website-slow">load times</a>. This is the floor — without it, content won't save you.</p>
<h2>2. Claim and optimise Google Business Profile</h2>
<p>For local businesses this is the highest-leverage free step. A complete, accurate profile with photos, hours and reviews puts you in the map pack where local customers actually look.</p>
<h2>3. Target the terms people actually search</h2>
<p>Rank for "architects London", not "bespoke architectural solutions". Write pages around the real, specific phrases your customers type — including the questions they ask.</p>
<h2>4. Earn trust signals</h2>
<ul>
  <li>Consistent name, address and phone across the web.</li>
  <li>Genuine reviews.</li>
  <li>Links from reputable local and industry sources.</li>
</ul>
<h2>5. Don't forget AI search</h2>
<p>Increasingly, customers ask ChatGPT and Google's AI overviews rather than scrolling results. Showing up there is a related but distinct discipline — see <a href="/blog/aeo-geo-explained">AEO and GEO explained</a> and <a href="/blog/rank-in-ai-answer-engines">how to get cited by AI</a>.</p>
<h2>Start with a baseline</h2>
<p>A <a href="/contact">free audit</a> shows where you stand on the technical foundation today — usually the fastest ranking wins are hiding there.</p>
`,
    related: ['aeo-geo-explained', 'rank-in-ai-answer-engines', 'why-is-my-website-slow'],
  },
  {
    slug: 'aeo-geo-explained',
    cluster: 'seo',
    category: 'Performance & SEO',
    date: 'May 2026',
    readtime: '7 min read',
    title: 'AEO and GEO explained: the new SEO for AI answers',
    description: 'Answer Engine Optimization and Generative Engine Optimization explained — what they are, how they differ from SEO, and how to get your business cited by AI.',
    body: `
<p>Search is splitting in two. Alongside the familiar list of blue links, people now get direct answers — from Google's AI overviews, ChatGPT, Perplexity and Gemini. Optimising for those answers is a new discipline with two new acronyms. Here's what they mean.</p>
<h2>What is AEO?</h2>
<p><strong>Answer Engine Optimization</strong> is optimising so your content becomes <em>the answer</em> to a question, not just a result to scroll. It means structuring content around real questions, giving clear, direct answers, and marking it up so machines can extract it.</p>
<h2>What is GEO?</h2>
<p><strong>Generative Engine Optimization</strong> goes a step further: getting large language models to cite <em>you</em> when they generate an answer about your topic. That depends on being clearly written, well-structured, factually consistent and referenced across the web.</p>
<h2>How they differ from SEO</h2>
<p>Classic SEO competes for a ranking position. AEO and GEO compete to be the source the engine quotes. The foundations overlap — structure, clarity, authority — but the goal shifts from "rank" to "be cited".</p>
<h2>What actually helps</h2>
<ul>
  <li>Question-led headings and direct first-sentence answers.</li>
  <li>Structured data (FAQ, Article, Organization schema).</li>
  <li>Clear, factual, jargon-free writing a model can quote.</li>
  <li>A machine-readable summary of who you are (we ship an <code>llms.txt</code> on every build).</li>
</ul>
<h2>Why act now</h2>
<p>AI answers are still early, which means the competition is thin. The businesses structuring for it today will be the defaults tomorrow. For the practical how-to, read <a href="/blog/rank-in-ai-answer-engines">how to get cited by AI search</a>, and to cover both fronts, <a href="/blog/how-to-show-up-on-google">how to show up on Google</a>. Want it done for you? <a href="/contact">Start with an audit.</a></p>
`,
    related: ['rank-in-ai-answer-engines', 'how-to-show-up-on-google', 'can-ai-write-content-that-ranks'],
  },
  {
    slug: 'rank-in-ai-answer-engines',
    cluster: 'seo',
    category: 'Performance & SEO',
    date: 'May 2026',
    readtime: '6 min read',
    title: 'How to get your business cited by ChatGPT and AI search',
    description: 'Practical steps to get your business referenced by ChatGPT, Perplexity and Google AI overviews — structure, schema, llms.txt and consistent authority.',
    body: `
<p>When someone asks ChatGPT "who's a good web agency in London?", you want to be in the answer. Getting cited by AI engines is learnable — and right now, under-contested. Here's the practical playbook.</p>
<h2>Write the way models read</h2>
<p>Lead with the answer. Put a clear, direct response in the first sentence under a question-shaped heading, then expand. Models reward content that answers cleanly and penalise waffle they can't summarise.</p>
<h2>Give machines structure</h2>
<p>Mark up your pages with schema — FAQ, Article, Organization — so engines can parse exactly what you do, where, and for whom. Structured data is how you remove ambiguity about your business.</p>
<h2>Ship an llms.txt</h2>
<p>An <code>llms.txt</code> file is a plain-text summary of your business written for language models — services, locations, pricing, key pages. It's an emerging standard, and we include one on every build. It's a direct line to the engines now shaping discovery.</p>
<h2>Build consistent authority</h2>
<ul>
  <li>Say the same thing about yourself everywhere — site, profiles, directories.</li>
  <li>Earn mentions from sources the models already trust.</li>
  <li>Keep facts (name, location, services) identical across the web.</li>
</ul>
<h2>Measure it</h2>
<p>Actually ask the engines. Query ChatGPT, Perplexity and Google's AI overviews for your category and see whether you appear — then close the gaps. For the strategy behind this, read <a href="/blog/aeo-geo-explained">AEO and GEO explained</a>; for the content side, <a href="/blog/can-ai-write-content-that-ranks">can AI write content that ranks?</a></p>
<h2>Get it built in</h2>
<p>Every <span class="brand">Trayaam</span> build ships schema and an llms.txt as standard. <a href="/contact">Start with a free audit</a> to see how visible you are to AI today.</p>
`,
    related: ['aeo-geo-explained', 'how-to-show-up-on-google', 'ai-automation-for-small-business'],
  },
  {
    slug: 'is-wordpress-bad-for-seo',
    cluster: 'seo',
    category: 'Performance & SEO',
    date: 'Apr 2026',
    readtime: '6 min read',
    title: 'Is WordPress bad for SEO?',
    description: 'A balanced answer to whether WordPress hurts SEO — what it does well, where plugin bloat and performance bite, and when a modern stack is the better call.',
    body: `
<p>"Is WordPress bad for SEO?" gets a lot of absolutist answers in both directions. The honest answer is more useful: WordPress isn't inherently bad for SEO, but the way most WordPress sites are built often is. Here's the nuance.</p>
<h2>What WordPress does well</h2>
<p>WordPress is flexible, familiar, and with the right plugins gives you control over titles, meta, sitemaps and schema. Plenty of well-ranked sites run on it. As a content platform, it's capable.</p>
<h2>Where it goes wrong</h2>
<ul>
  <li><strong>Plugin bloat</strong> — every plugin adds code, and ten plugins later the site is slow.</li>
  <li><strong>Heavy themes and page builders</strong> — visual builders ship enormous amounts of markup that drags <a href="/blog/core-web-vitals-smes">Core Web Vitals</a>.</li>
  <li><strong>Maintenance burden</strong> — updates, security patches and plugin conflicts are an ongoing tax.</li>
</ul>
<h2>The real issue: performance</h2>
<p>SEO increasingly rewards speed, and the typical plugin-heavy WordPress build is <a href="/blog/why-is-my-website-slow">slow by default</a>. You can make WordPress fast — but it takes discipline most builds don't apply.</p>
<h2>When a modern stack is better</h2>
<p>If performance and search are central to your business, a modern build on <a href="/tech">Astro or Next.js</a> gives you speed by construction rather than by constant fighting — and a cleaner foundation for <a href="/blog/aeo-geo-explained">AEO and GEO</a>. The same logic applies to <a href="/blog/website-builder-vs-custom">builders like Squarespace and Wix</a>.</p>
<h2>The verdict</h2>
<p>WordPress isn't a death sentence for SEO — but if it's slow, bloated and a chore to maintain, that's costing you. A <a href="/contact">free audit</a> will tell you whether yours is helping or hurting.</p>
`,
    related: ['website-builder-vs-custom', 'why-is-my-website-slow', 'core-web-vitals-smes'],
  },

  // ───────────────────────── CLUSTER: AI AUTOMATION ─────────────────────────
  {
    slug: 'ai-automation-for-small-business',
    cluster: 'ai',
    category: 'AI automation',
    date: 'Jun 2026',
    readtime: '8 min read',
    title: 'AI automation for small businesses: real examples in 2026',
    description: 'What AI automation actually looks like for a small business in 2026 — concrete examples across marketing, sales, support and operations, with realistic costs.',
    body: `
<p>"AI automation" is one of the most over-hyped and under-explained phrases in business right now. Strip away the noise and it's simple: using AI to do repetitive work automatically, so your team does the work only humans should. Here's what that looks like in practice.</p>
<h2>Marketing</h2>
<ul>
  <li>Draft, optimise and schedule content with a human reviewing — see <a href="/blog/can-ai-write-content-that-ranks">can AI write content that ranks?</a></li>
  <li>Turn one long article into a week of social posts automatically.</li>
  <li>Monitor and summarise what competitors publish.</li>
</ul>
<h2>Sales</h2>
<ul>
  <li>Qualify and enrich incoming enquiries, then route them to the right person.</li>
  <li>Draft personalised follow-ups from your CRM data.</li>
  <li>Surface the leads most likely to convert. More in <a href="/blog/ai-for-lead-generation">AI for lead generation</a>.</li>
</ul>
<h2>Support</h2>
<p>An AI assistant trained on your own content can answer common customer questions instantly, around the clock, and hand off to a human when it matters. It deflects routine tickets without the canned-bot frustration.</p>
<h2>Operations</h2>
<ul>
  <li>Auto-generate quotes, invoices and onboarding documents.</li>
  <li>Extract data from emails and PDFs into your systems.</li>
  <li>Compile reports that used to take a morning. Full list in <a href="/blog/what-to-automate-with-ai">what you can automate with AI right now</a>.</li>
</ul>
<h2>What it costs</h2>
<p>The myth is that this is enterprise-only. In reality a focused automation is often cheaper than the hours it replaces — frequently less than a part-time hire, with no holidays or onboarding. We compare the two in <a href="/blog/ai-automation-vs-virtual-assistant">AI vs hiring a VA</a>.</p>
<h2>Where to start</h2>
<p>Pick the single most repetitive task in your week. That's almost always the best first automation. We build these as <a href="/services">custom AI Automation</a> wired into your existing tools — <a href="/contact">tell us your bottleneck</a>.</p>
`,
    related: ['what-to-automate-with-ai', 'ai-for-lead-generation', 'ai-automation-vs-virtual-assistant'],
  },
  {
    slug: 'ai-for-lead-generation',
    cluster: 'ai',
    category: 'AI automation',
    date: 'Jun 2026',
    readtime: '7 min read',
    title: 'How to use AI to get and handle more leads',
    description: 'How small businesses use AI to capture, qualify and respond to more leads — from website assistants to automated routing and follow-up.',
    body: `
<p>Most businesses don't have a lead <em>generation</em> problem so much as a lead <em>handling</em> problem: enquiries arrive and then leak away through slow replies and manual triage. AI fixes the handling — and helps generate more in the first place. Here's how.</p>
<h2>Capture more enquiries on the website</h2>
<p>An AI assistant on your site can answer questions in the moment, guide visitors to the right service, and turn a hesitant browser into an enquiry — exactly when interest is highest. It's the difference between a contact form and a conversation.</p>
<h2>Qualify automatically</h2>
<p>Not every lead is worth the same. AI can enrich each enquiry with public data, score it against your ideal-customer profile, and flag the ones worth chasing first — so your team spends time where it pays.</p>
<h2>Respond in seconds, not days</h2>
<p>Speed-to-lead is decisive: the business that replies first usually wins. Automated, personalised first responses mean every enquiry gets an instant, relevant reply while a human follows up properly.</p>
<h2>Route to the right place</h2>
<ul>
  <li>Send enquiries to the right person or team automatically.</li>
  <li>Create the CRM record and the follow-up task with no manual entry.</li>
  <li>Never let a lead sit in an inbox unseen.</li>
</ul>
<h2>The compounding effect</h2>
<p>Faster replies and better qualification lift conversion from the <em>same</em> traffic — which is why this pairs so well with fixing <a href="/blog/why-website-no-enquiries">why your site gets no enquiries</a> in the first place. It's one slice of the broader picture in <a href="/blog/ai-automation-for-small-business">AI automation for small businesses</a>.</p>
<h2>Build it into your site</h2>
<p>We wire lead capture, qualification and routing straight into your website and tools as a <a href="/services">custom automation</a>. <a href="/contact">Tell us how leads reach you today.</a></p>
`,
    related: ['ai-automation-for-small-business', 'why-website-no-enquiries', 'custom-ai-chatbot-cost'],
  },
  {
    slug: 'can-ai-write-content-that-ranks',
    cluster: 'ai',
    category: 'AI automation',
    date: 'May 2026',
    readtime: '7 min read',
    title: 'Can AI write SEO content that actually ranks?',
    description: 'The honest answer on whether AI-written content ranks on Google — what works, what gets penalised, and the human-in-the-loop process that wins.',
    body: `
<p>Can AI write content that ranks? Yes — but not the way most people use it. Mass-produced, unedited AI text is a fast route to mediocrity and, increasingly, to being filtered out. Used well, AI is a genuine force multiplier. Here's the line between the two.</p>
<h2>What Google actually cares about</h2>
<p>Google doesn't penalise content for being AI-assisted; it rewards content that's helpful, accurate and demonstrates real expertise — and demotes thin, generic filler regardless of who wrote it. The question was never "AI or human" but "useful or not".</p>
<h2>Where pure AI fails</h2>
<ul>
  <li>It invents facts and citations.</li>
  <li>It defaults to bland, average phrasing — exactly what gets filtered.</li>
  <li>It has no real experience or opinion, which is what readers reward.</li>
</ul>
<h2>The human-in-the-loop process</h2>
<p>The winning approach uses AI for the heavy lifting — research, outlines, first drafts, optimisation — with a human adding real expertise, accuracy, voice and a point of view. AI accelerates; the human guarantees quality. That's how we run content for <a href="/services/growth">Growth Partner</a> clients.</p>
<h2>Don't forget AI readers</h2>
<p>Increasingly your content is read by other AIs deciding what to cite. Clear, structured, factual writing wins on both fronts — see <a href="/blog/aeo-geo-explained">AEO and GEO explained</a>.</p>
<h2>The takeaway</h2>
<p>AI is a brilliant writing assistant and a terrible autonomous author. Use it to go faster, not to skip the thinking. If you want a content engine built this way, it's part of <a href="/blog/ai-automation-for-small-business">our AI automation work</a> — <a href="/contact">let's scope it.</a></p>
`,
    related: ['aeo-geo-explained', 'ai-automation-for-small-business', 'what-to-automate-with-ai'],
  },
  {
    slug: 'custom-ai-chatbot-cost',
    cluster: 'ai',
    category: 'AI automation',
    date: 'Jun 2026',
    readtime: '6 min read',
    title: 'What does a custom AI chatbot cost to build?',
    description: 'A transparent look at what a custom AI chatbot or assistant costs in 2026 — the build options, what drives the price, and build-versus-buy trade-offs.',
    body: `
<p>"How much for an AI chatbot?" has the same honest answer as "how much for a website": it depends on what it needs to do. But the ranges are knowable, and the decisions that move them are few. Here's the breakdown.</p>
<h2>Three ways to build one</h2>
<ul>
  <li><strong>Off-the-shelf widget</strong> — a no-code tool trained on your pages. Cheapest, least flexible, fine for basic FAQs.</li>
  <li><strong>Custom build on LLM APIs</strong> — tailored to your content, tone and systems, with real integrations. The sweet spot for most businesses.</li>
  <li><strong>Fully bespoke platform</strong> — for complex, high-volume or regulated needs. The most involved.</li>
</ul>
<h2>What drives the price</h2>
<ul>
  <li><strong>Knowledge</strong> — answering from a few pages is simple; from large, changing document sets is more work.</li>
  <li><strong>Integrations</strong> — booking, CRM or order systems add engineering.</li>
  <li><strong>Tone and guardrails</strong> — on-brand voice and safe, accurate behaviour take tuning.</li>
</ul>
<h2>Build vs buy</h2>
<p>A widget gets you live this week for very little. A custom assistant costs more upfront but actually reflects your business, integrates with your tools, and you <a href="/blog/who-owns-your-website">own it</a>. For anything customer-facing and important, custom usually pays back fast.</p>
<h2>The ongoing cost</h2>
<p>Budget for usage (the AI API calls) and occasional tuning. Both are typically modest next to the support hours a good assistant saves — the same maths as <a href="/blog/ai-automation-vs-virtual-assistant">AI versus a VA</a>.</p>
<h2>Scope yours</h2>
<p>We build custom assistants as part of our <a href="/services">AI Automation</a> work, wired into your site and tools. <a href="/contact">Tell us what it needs to handle</a> and we'll scope it honestly.</p>
`,
    related: ['ai-automation-vs-virtual-assistant', 'ai-for-lead-generation', 'ai-automation-for-small-business'],
  },
  {
    slug: 'ai-automation-vs-virtual-assistant',
    cluster: 'ai',
    category: 'AI automation',
    date: 'May 2026',
    readtime: '6 min read',
    title: 'AI automation vs hiring a VA: which is cheaper?',
    description: 'A practical comparison of AI automation versus hiring a virtual assistant — cost, speed, reliability and where each one genuinely wins.',
    body: `
<p>When a task is eating your week, the modern choice is no longer just "hire someone" — it's "hire someone or automate it". Often the right answer is both, for different work. Here's how they actually compare.</p>
<h2>Cost</h2>
<p>A virtual assistant is an ongoing monthly cost that scales with hours. An automation is mostly an upfront build plus small running costs, then it works indefinitely at near-zero marginal cost. For a high-volume, repetitive task, automation is usually far cheaper over a year.</p>
<h2>Speed and availability</h2>
<p>Automation runs instantly, 24/7, in parallel, and never takes a holiday. A VA brings judgement and adaptability a script can't — but works in human time, sequentially.</p>
<h2>Reliability</h2>
<ul>
  <li><strong>Automation</strong> — perfectly consistent on well-defined tasks; brittle when the task is fuzzy.</li>
  <li><strong>VA</strong> — handles ambiguity and exceptions, but consistency varies and knowledge walks out if they leave.</li>
</ul>
<h2>Where each wins</h2>
<p><strong>Automate</strong> the repetitive, rules-based, high-volume work: data entry, routing, reporting, first responses, scheduling. <strong>Hire</strong> for judgement, relationships and genuinely varied work. The best setups automate the grind so a human focuses on what humans are for.</p>
<h2>The hybrid that usually wins</h2>
<p>Automate the repetitive 80%, keep a person for the 20% that needs a brain. Your costs drop and your people do better work. See the concrete tasks in <a href="/blog/what-to-automate-with-ai">what you can automate with AI right now</a> and the wider view in <a href="/blog/ai-automation-for-small-business">AI automation for small businesses</a>.</p>
<h2>Work out your split</h2>
<p>List your repetitive tasks, mark which are rules-based, and automate those first. We'll <a href="/contact">help you scope it</a> as a custom automation.</p>
`,
    related: ['what-to-automate-with-ai', 'ai-automation-for-small-business', 'custom-ai-chatbot-cost'],
  },
  {
    slug: 'what-to-automate-with-ai',
    cluster: 'ai',
    category: 'AI automation',
    date: 'Jun 2026',
    readtime: '7 min read',
    title: 'What can you automate with AI right now? A checklist by department',
    description: 'A practical, department-by-department checklist of business tasks you can automate with AI today — marketing, sales, support, operations and finance.',
    body: `
<p>The hardest part of AI automation isn't the technology — it's spotting what to automate. The best candidates are tasks that are repetitive, rules-based and time-consuming. Here's a checklist by department to find yours.</p>
<h2>Marketing</h2>
<ul>
  <li>Drafting and repurposing content across channels.</li>
  <li>Scheduling and publishing on a calendar.</li>
  <li>Monitoring competitors and summarising changes.</li>
  <li>Generating first-draft briefs and outlines.</li>
</ul>
<h2>Sales</h2>
<ul>
  <li>Qualifying and enriching inbound <a href="/blog/ai-for-lead-generation">leads</a>.</li>
  <li>Drafting personalised follow-ups.</li>
  <li>Logging activity and updating the CRM automatically.</li>
</ul>
<h2>Support</h2>
<ul>
  <li>Answering common questions with an on-brand assistant.</li>
  <li>Triaging and tagging incoming tickets.</li>
  <li>Drafting replies for a human to approve.</li>
</ul>
<h2>Operations</h2>
<ul>
  <li>Extracting data from emails, forms and PDFs.</li>
  <li>Generating quotes, contracts and onboarding docs.</li>
  <li>Compiling recurring reports.</li>
</ul>
<h2>Finance &amp; admin</h2>
<ul>
  <li>Categorising transactions and flagging anomalies.</li>
  <li>Chasing invoices on a schedule.</li>
  <li>Summarising numbers into plain-English updates.</li>
</ul>
<h2>How to prioritise</h2>
<p>Score each task on frequency × time taken. The highest scores are your first automations. Then decide build-vs-hire with <a href="/blog/ai-automation-vs-virtual-assistant">AI versus a VA</a>, and see real-world setups in <a href="/blog/ai-automation-for-small-business">AI automation for small businesses</a>.</p>
<h2>Turn the checklist into a plan</h2>
<p>Send us your top three time-sinks and we'll tell you which are worth automating — and build them as a <a href="/services">custom automation</a>. <a href="/contact">Start here.</a></p>
`,
    related: ['ai-automation-for-small-business', 'ai-automation-vs-virtual-assistant', 'ai-for-lead-generation'],
  },
];

export function getPost(slug) { return posts.find((p) => p.slug === slug); }
