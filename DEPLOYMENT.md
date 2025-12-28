# 🚀 DEPLOYMENT GUIDE

Complete deployment instructions for Rick Jefferson Portfolio Website.

---

## 📦 Prerequisites

- Node.js 18+ installed
- GitHub account (already configured)
- Vercel or Netlify account (free tier works)

---

## 🌐 Option 1: Deploy to Vercel (Recommended)

Vercel is the company behind Next.js and provides the best performance.

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy

```bash
cd rick-jefferson-portfolio
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Choose your account
- Link to existing project? **N**
- Project name? `rick-jefferson-portfolio`
- Directory? `./`
- Override settings? **N**

### Step 4: Production Deployment

```bash
vercel --prod
```

Your site will be live at: `https://rick-jefferson-portfolio.vercel.app`

### Step 5: Add Custom Domain

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to Settings → Domains
4. Add `rickjefferson.com` or `www.rickjefferson.com`
5. Follow DNS configuration instructions

---

## 🌐 Option 2: Deploy to Netlify

### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify

```bash
netlify login
```

### Step 3: Initialize and Deploy

```bash
cd rick-jefferson-portfolio
netlify init
```

Follow the prompts:
- Create new site? **Y**
- Team? Choose your team
- Site name? `rick-jefferson-portfolio`
- Build command? `npm run build`
- Publish directory? `.next`

### Step 4: Deploy

```bash
netlify deploy --prod
```

Your site will be live at: `https://rick-jefferson-portfolio.netlify.app`

---

## 🔧 Environment Variables

If you need environment variables (for analytics, APIs, etc.):

### Vercel
```bash
vercel env add NEXT_PUBLIC_ANALYTICS_ID
```

### Netlify
Add in Netlify Dashboard → Site Settings → Environment Variables

---

## 📊 SEO Configuration

### Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `rickjefferson.com`
3. Verify ownership (use DNS or HTML file method)
4. Submit sitemap: `https://rickjefferson.com/sitemap.xml`

### Google My Business

Link your website to your Google My Business profile:
1. Go to [Google Business](https://business.google.com)
2. Edit business info
3. Add website URL: `https://rickjefferson.com`

### Schema.org Validation

Test your structured data:
1. Go to [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Enter URL: `https://rickjefferson.com`
3. Verify Person and Organization schema appear correctly

---

## 🎯 Post-Deployment Checklist

- [ ] Site is live and accessible
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active (HTTPS)
- [ ] Google Search Console verified
- [ ] Sitemap submitted
- [ ] Schema markup validated
- [ ] Social media links work
- [ ] Contact phone number clickable
- [ ] Email link works
- [ ] Responsive on mobile
- [ ] Performance score 90+ (test at [PageSpeed Insights](https://pagespeed.web.dev))

---

## 🔄 Continuous Deployment

Both Vercel and Netlify automatically deploy when you push to GitHub:

```bash
# Make changes
git add .
git commit -m "Update content"
git push origin main
```

Your site will automatically rebuild and deploy! 🚀

---

## 📱 Testing

### Local Testing
```bash
npm run dev
# Visit http://localhost:3000
```

### Production Build Testing
```bash
npm run build
npm start
# Visit http://localhost:3000
```

### Mobile Testing
- Use Chrome DevTools (F12 → Device Toolbar)
- Test on actual mobile devices
- Use [BrowserStack](https://www.browserstack.com) for cross-browser testing

---

## 🐛 Troubleshooting

### Build fails on Vercel/Netlify
```bash
# Test locally first
npm run build

# Check for TypeScript errors
npm run lint
```

### Images not loading
- Verify image URLs are correct
- Check `next.config.js` domains configuration
- Ensure images are in `public/` folder or external URLs are whitelisted

### Schema markup not showing
- Use [Google Rich Results Test](https://search.google.com/test/rich-results)
- Verify JSON-LD syntax is valid
- Wait 24-48 hours for Google to index

---

## 📞 Support

**Rick Jefferson Solutions**
- Phone: (866) 752-4618
- Email: info@rickjeffersonsolutions.com
- Location: 5 Cowboys Way, Ste 300, Frisco, TX 75034

---

## 🎉 Success!

Your portfolio is now live and optimized for Google Knowledge Graph!

**Live Site:** https://rick-jefferson-portfolio.vercel.app (or your custom domain)
**GitHub Repo:** https://github.com/rjbizsolution23-wq/rick-jefferson-portfolio

---

**Built with ❤️ by Rick Jefferson**
**Date:** December 28, 2025
**Location:** Frisco, Texas
