import { copyFileSync, existsSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, loadEnv } from 'vite'
import { serviceSlugs, subServicePaths } from './src/content/services'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = (env.VITE_SITE_URL || 'https://iggroup.ge').replace(/\/$/, '')
  const enableEn = env.VITE_ENABLE_EN !== 'false'

  return {
    plugins: [vue(), tailwindcss()],
    resolve: {
      alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
    },
    ssgOptions: {
      script: 'async',
      formatting: 'minify',
      dirStyle: 'nested',
      includedRoutes(paths: string[]) {
        const pages = paths
          .filter((p) => !p.includes(':') && !p.includes('*'))
          .concat(serviceSlugs.map((s) => `/services/${s}`))
          .concat(enableEn ? serviceSlugs.map((s) => `/en/services/${s}`) : [])
          .concat(subServicePaths.map((p) => `/services/${p}`))
          .concat(enableEn ? subServicePaths.map((p) => `/en/services/${p}`) : [])
        return [...new Set(pages), '/404']
      },
      onFinished() {
        // სტატიკური ჰოსტინგები (Netlify, Cloudflare Pages, Vercel) ეძებენ /404.html-ს
        if (existsSync('dist/404/index.html')) copyFileSync('dist/404/index.html', 'dist/404.html')
        // sitemap.xml - every prerendered page except 404
        const base = ['/', '/about', '/clients', '/services', '/contact', '/privacy'].concat(
          serviceSlugs.map((s) => `/services/${s}`),
          subServicePaths.map((p) => `/services/${p}`),
        )
        const urls = base.flatMap((p) => {
          const ka = `${siteUrl}${p}`
          const en = `${siteUrl}/en${p === '/' ? '' : p}`
          const alt = enableEn
            ? `\n    <xhtml:link rel="alternate" hreflang="ka" href="${ka}"/>\n    <xhtml:link rel="alternate" hreflang="en" href="${en}"/>`
            : ''
          const entry = (loc: string) => `  <url>\n    <loc>${loc}</loc>${alt}\n  </url>`
          return enableEn ? [entry(ka), entry(en)] : [entry(ka)]
        })
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`
        writeFileSync(resolve('dist/sitemap.xml'), xml)
        writeFileSync(
          resolve('dist/robots.txt'),
          `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
        )
      },
    },
  }
})
