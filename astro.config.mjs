import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import cloudflare from '@astrojs/cloudflare';

const DOMAINS = {
  main: 'https://ploszukiwacz.is-a.dev',
  development: 'http://localhost:4321',
  development2: 'https://4321-code.ploszukiwacz.is-a.dev',
};

const validateDomain = (domain) => {
  try {
    new URL(domain);
    return domain;
  } catch {
    return DOMAINS.primary;
  }
};

const currentDomain = validateDomain(
  process.env.SITE_DOMAIN 
    ? DOMAINS[process.env.SITE_DOMAIN]
    : DOMAINS.main
);


export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    mode: 'directory'
  }),
  site: process.env.NODE_ENV === 'development' 
    ? DOMAINS.development 
    : currentDomain,
  integrations: [
    mdx(),
    sitemap({
      customPages: Object.values(DOMAINS).filter(d => d !== DOMAINS.development)
    }),
    tailwind(),
  ],
  vite: {
    server: {
      host: '0.0.0.0',
      port: 4321,
      allowedHosts: true
    }
  }
});
