import {
  sharpImageService as sharp,
  type AstroUserConfig,
  defineConfig,
} from "astro/config";

import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";

import remarkToc from "remark-toc";

const config = {
  site: "https://kleidi.ca",
  markdown: {
    shikiConfig: {
      theme: "vitesse-dark",
      wrap: false,
    },
    remarkPlugins: [remarkToc],
  },
  image: {
    service: sharp(),
    domains: ["unsplash.com"],
  },
  experimental: { assets: true },
  integrations: [
    tailwind(),
    sitemap(),
    robotsTxt(),
    compress({ Image: false, Logger: 1 }),
  ],
} satisfies AstroUserConfig;

export default defineConfig(config);
