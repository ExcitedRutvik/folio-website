import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build
export default defineConfig({
  site: 'https://trayaam.com',
  output: 'static',
  redirects: {
    '/blog/core-web-vitals-luxembourg-smes': '/blog/core-web-vitals-smes',
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
});
