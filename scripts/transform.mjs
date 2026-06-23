// One-off: convert legacy/*.html → src/pages/*.astro under the shared Layout.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(process.argv[2] || '.');
const L = path.join(ROOT, 'legacy');
const OUT = path.join(ROOT, 'src', 'pages');

// filename(in legacy) -> { out, active, path }
const PAGES = [
  { src: 'about.html',                out: 'about.astro',                active: 'about',      url: '/about' },
  { src: 'contact.html',              out: 'contact.astro',              active: 'contact',    url: '/contact' },
  { src: 'industries.html',           out: 'industries.astro',           active: 'industries', url: '/industries' },
  { src: 'tech.html',                 out: 'tech.astro',                 active: 'tech',       url: '/tech' },
  { src: 'work.html',                 out: 'work.astro',                 active: 'work',       url: '/work' },
  { src: 'services.html',             out: 'services.astro',             active: 'services',   url: '/services' },
  { src: 'sample-audit.html',         out: 'sample-audit.astro',         active: '',           url: '/sample-audit' },
  { src: 'services/quick-refresh.html', out: 'services/quick-refresh.astro', active: 'services', url: '/services/quick-refresh' },
  { src: 'services/full-rebuild.html',  out: 'services/full-rebuild.astro',  active: 'services', url: '/services/full-rebuild' },
  { src: 'services/growth.html',        out: 'services/growth.astro',        active: 'services', url: '/services/growth' },
  { src: 'work/deepak-products.html',   out: 'work/deepak-products.astro',   active: 'work',     url: '/work/deepak-products' },
  { src: 'blog/index.html',           out: 'blog/index.astro',           active: 'blog',       url: '/blog' },
  { src: 'blog/how-we-built-folio.html', out: 'blog/how-we-built-trayaam.astro', active: 'blog', url: '/blog/how-we-built-trayaam' },
  { src: 'blog/7-day-website-rebuild-what-we-learned.html', out: 'blog/7-day-website-rebuild-what-we-learned.astro', active: 'blog', url: '/blog/7-day-website-rebuild-what-we-learned' },
  { src: 'blog/core-web-vitals-luxembourg-smes.html', out: 'blog/core-web-vitals-luxembourg-smes.astro', active: 'blog', url: '/blog/core-web-vitals-luxembourg-smes' },
];

function rebrand(s) {
  return s
    .replace(/Folio Studio/g, 'Trayaam Studio')
    .replace(/Folio/g, 'Trayaam')
    .replace(/folio\.lu/g, 'trayaam.com')
    .replace(/hello@trayaam\.com/g, 'hello@trayaam.com')
    .replace(/#39D353/g, '#C9A86A')
    .replace(/57,\s*211,\s*83/g, '201, 168, 106')
    .replace(/how-we-built-folio/g, 'how-we-built-trayaam');
}

function rewriteLinks(s) {
  // href="index.html" -> "/"
  s = s.replace(/href="index\.html"/g, 'href="/"');
  s = s.replace(/href="\.\.\/index\.html"/g, 'href="/"');
  // href="blog/index.html" or "../blog/index.html" -> /blog
  s = s.replace(/href="(\.\.\/)?blog\/index\.html"/g, 'href="/blog"');
  // href="services/index.html" not used; services.html -> /services
  // generic: href="(../)?some/path.html#frag" -> "/some/path#frag"
  s = s.replace(/href="(\.\.\/)?([a-zA-Z0-9\-\/]+)\.html(#[^"]*)?"/g, (m, up, p, frag) => {
    let clean = p;
    if (clean.endsWith('/index')) clean = clean.slice(0, -('/index'.length));
    return `href="/${clean}${frag || ''}"`;
  });
  return s;
}

function extract(re, html) { const m = html.match(re); return m ? m[1].trim() : ''; }

for (const pg of PAGES) {
  const file = path.join(L, pg.src);
  if (!fs.existsSync(file)) { console.error('MISSING', pg.src); continue; }
  let html = fs.readFileSync(file, 'utf8');

  const title = extract(/<title>([\s\S]*?)<\/title>/, html);
  const desc = extract(/<meta name="description" content="([\s\S]*?)">/, html);

  // page-specific <style> blocks in head
  const styles = [...html.matchAll(/<style>([\s\S]*?)<\/style>/g)].map(m => m[1]).join('\n');

  // JSON-LD blocks
  const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => m[1].trim());

  // body inner
  let body = extract(/<body[^>]*>([\s\S]*?)<\/body>/, html);
  // strip nav, footer, scripts
  body = body.replace(/<nav class="nav">[\s\S]*?<\/nav>/, '');
  body = body.replace(/<footer class="footer">[\s\S]*?<\/footer>/, '');
  body = body.replace(/<script[\s\S]*?<\/script>/g, '');

  body = rewriteLinks(rebrand(body));
  const styleOut = rebrand(styles);
  const titleR = rebrand(title);
  const descR = rebrand(desc);

  let head = '';
  for (const block of ld) {
    head += `\n<script type="application/ld+json" slot="head" set:html={${JSON.stringify(rebrand(block))}}></script>`;
  }

  const front = `---\nimport Layout from '${pg.out.includes('/') ? '../../layouts/Layout.astro' : '../layouts/Layout.astro'}';\n---\n`;
  const open = `<Layout title=${JSON.stringify(titleR)} description=${JSON.stringify(descR)} active=${JSON.stringify(pg.active)} path=${JSON.stringify(pg.url)}>${head}\n`;
  const styleTag = styleOut.trim() ? `<style>\n${styleOut}\n</style>\n` : '';
  const out = front + open + styleTag + body.trim() + '\n</Layout>\n';

  const outPath = path.join(OUT, pg.out);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, out);
  console.log('WROTE', pg.out, `(title="${titleR.slice(0,40)}", ld=${ld.length}, style=${styleOut.length}b)`);
}
console.log('done');
