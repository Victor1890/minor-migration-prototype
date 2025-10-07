// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap'

const isProd = process.env?.NODE_ENV === 'production';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  trailingSlash: 'never',
  site: isProd ? 'https://permisosalidamenor.migracion.gob.do' : 'http://localhost:3000',
  vite: {
    plugins: [tailwindcss()]
  },
  prefetch: {
    prefetchAll: true
  },
  integrations: [
    react(),
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES',
          en: 'en-US',
        }
      }
    })
  ]
});