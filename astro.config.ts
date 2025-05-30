import { defineConfig } from 'astro/config';
import plainwhiteConfig from './src/plainwhite.config';
import sitemap from '@astrojs/sitemap';

const {
    plainwhite: { sitemap: enableSitemap },
} = plainwhiteConfig;

// https://astro.build/config
export default defineConfig({
    site: 'http://localhost:4321',
    markdown: {
        shikiConfig: {
            // Choose from Shiki's built-in themes (or add your own)
            // https://github.com/shikijs/shiki/blob/main/docs/themes.md
            // theme: 'solarized-light',
            // Alternatively, provide multiple themes
            // https://github.com/antfu/shikiji#lightdark-dual-themes
            themes: {
                light: 'solarized-light',
                dark: 'solarized-dark',
            },
            // Add custom languages
            // Note: Shiki has countless langs built-in, including .astro!
            // https://github.com/shikijs/shiki/blob/main/docs/languages.md
            langs: [],
            // Enable word wrap to prevent horizontal scrolling
            wrap: true,
        },
    },
    ...(enableSitemap ? { integrations: [sitemap()] } : {}),
});
