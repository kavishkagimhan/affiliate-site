# SEO-Optimized Affiliate Marketing Website

A fully static, SEO-optimized affiliate marketing website built with Astro, Tailwind CSS, and DaisyUI.

## Features

- ✅ Fully responsive, mobile-first design
- ✅ SEO-friendly URLs, meta tags, schema.org structured data
- ✅ Sitemap.xml and robots.txt
- ✅ Optimized images (WebP support, lazy loading)
- ✅ Light and fast code (minimal JS, Astro components only)
- ✅ Tailwind CSS + DaisyUI for styling
- ✅ Dark mode toggle
- ✅ Social sharing buttons
- ✅ Google AdSense ready
- ✅ Contact form integration ready

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

The static site will be generated in the `/dist` folder.

### Preview

```bash
npm run preview
```

## Project Structure

```
/
├── public/
│   ├── images/
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── PostCard.astro
│   │   ├── CTAButton.astro
│   │   ├── Sidebar.astro
│   │   ├── SocialShare.astro
│   │   └── DarkModeToggle.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── PostLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── privacy.astro
│   │   ├── terms.astro
│   │   └── posts/
│   ├── posts/
│   │   └── *.md (blog posts)
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Deployment

This site is ready to deploy on:

- **Vercel**: Connect your GitHub repo and deploy automatically
- **Netlify**: Drag and drop the `/dist` folder or connect GitHub
- **Cloudflare Pages**: Connect GitHub repo
- **Hostinger**: Upload the `/dist` folder via FTP

## Configuration

1. Update `astro.config.mjs` with your actual domain
2. Replace sample affiliate links with real ones
3. Add your Google AdSense code in the layouts
4. Configure Formspree or similar for the contact form

## License

MIT

