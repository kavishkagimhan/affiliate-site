# Deployment Guide

This guide will help you deploy your affiliate marketing website to various hosting platforms.

## Prerequisites

1. Install Node.js (version 18 or higher)
2. Install dependencies: `npm install`
3. Build the site: `npm run build`

## Quick Setup

### 1. Update Site Configuration

Before deploying, update the following:

- **astro.config.mjs**: Change `site: 'https://yoursite.com'` to your actual domain
- **src/pages/contact.astro**: Replace Formspree form ID with your own
- **public/robots.txt**: Update sitemap URLs with your domain
- Add your Google AdSense code in `src/layouts/BaseLayout.astro` (uncomment the script tag)

### 2. Add Images

Add your images to the `public/images/` directory:
- `default-post.jpg` - Default blog post image
- `og-image.jpg` - Open Graph image for social sharing
- `logo.png` - Your site logo
- Individual post images (e.g., `wireless-earbuds.jpg`)

## Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel will auto-detect Astro and deploy

**Settings:**
- Framework Preset: Astro
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Netlify will use the `netlify.toml` configuration

**Build settings:**
- Build command: `npm run build`
- Publish directory: `dist`

### Cloudflare Pages

1. Push your code to GitHub
2. Go to Cloudflare Dashboard → Pages
3. Click "Create a project" → "Connect to Git"
4. Select your repository
5. Configure:
   - Framework preset: Astro
   - Build command: `npm run build`
   - Build output directory: `dist`

### Hostinger (or any FTP hosting)

1. Build the site: `npm run build`
2. Upload the contents of the `dist` folder to your hosting via FTP
3. Make sure your domain points to the uploaded files

## Post-Deployment Checklist

- [ ] Update site URL in `astro.config.mjs`
- [ ] Configure Google AdSense (add publisher ID)
- [ ] Set up Formspree for contact form
- [ ] Add your images to `public/images/`
- [ ] Update affiliate links in blog posts
- [ ] Submit sitemap to Google Search Console
- [ ] Test all pages and links
- [ ] Verify mobile responsiveness
- [ ] Check dark mode functionality
- [ ] Test contact form submission

## SEO Setup

1. **Google Search Console**
   - Add your site property
   - Submit sitemap: `https://yoursite.com/sitemap-index.xml`

2. **Google Analytics** (Optional)
   - Add Google Analytics code to `BaseLayout.astro`

3. **Social Media**
   - Update social media links in `Footer.astro`
   - Verify Open Graph images display correctly

## Maintenance

- Regularly update blog posts with new content
- Monitor Google AdSense performance
- Update affiliate links as needed
- Keep dependencies updated: `npm update`
- Monitor site performance and SEO rankings

## Need Help?

For issues or questions:
- Check Astro docs: https://docs.astro.build
- Check deployment platform documentation
- Review the README.md file

