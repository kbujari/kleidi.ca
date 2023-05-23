import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  site: 'https://kleidi.ca',
  outDir: 'build',
  markdown: {
    shikiConfig: {
      theme: 'vitesse-dark',
      wrap: false
    }
  },
  experimental: {
    assets: true
  },
  integrations: [mdx(), sitemap(), tailwind(), robotsTxt(), compress()]
});
