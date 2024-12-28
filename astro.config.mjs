import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

const DOMAINS = {
  primary: 'https://ploszukiwacz.pl',
  secondary: 'https://ploszukiwacz.xyz',
  tertiary: 'https://ploszukiwacz.is-a.dev',
  fourth: 'https://ploszukiwacz.tech',
  development: 'http://localhost:3000'
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
    : DOMAINS.primary
);


export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
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
});