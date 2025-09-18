# 🚀 Deployment Guide

## Quick Setup for GitHub Pages

### 1. Initialize Git Repository
```bash
cd Portfolio
git init
git add .
git commit -m "Initial commit: Modern DevOps Portfolio"
```

### 2. Create GitHub Repository
1. Go to [GitHub](https://github.com) and create a new repository named `Portfolio`
2. **Important**: Make sure the repository is public for GitHub Pages to work
3. Don't initialize with README (we already have one)

### 3. Connect and Push
```bash
git remote add origin https://github.com/YOUR_USERNAME/Portfolio.git
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically deploy your site

### 5. Access Your Portfolio
Your portfolio will be available at:
`https://YOUR_USERNAME.github.io/Portfolio/`

## 🛠️ Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages (manual)
npm run deploy
```

## 📝 Customization Checklist

### Personal Information
- [ ] Update name in `src/components/Hero.tsx`
- [ ] Update contact info in `src/components/Contact.tsx`
- [ ] Update social links in `src/components/Hero.tsx` and `src/components/Contact.tsx`
- [ ] Update about section in `src/components/About.tsx`

### Content
- [ ] Add your skills in `src/components/Skills.tsx`
- [ ] Add your projects in `src/components/Projects.tsx`
- [ ] Update certifications in `src/components/Skills.tsx`
- [ ] Customize the hero description

### Branding
- [ ] Update site title in `index.html`
- [ ] Update meta description in `index.html`
- [ ] Replace favicon in `public/vite.svg`
- [ ] Update footer branding in `src/components/Footer.tsx`

### Repository Settings
- [ ] Update repository name in `vite.config.ts` (base: '/YOUR_REPO_NAME/')
- [ ] Update GitHub links throughout the site

## 🎨 Color Customization

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  'cyber-blue': '#00f5ff',    // Primary accent
  'cyber-purple': '#8b5cf6',  // Secondary accent
  'cyber-green': '#00ff88',   // Success/highlight
  'dark-bg': '#0a0a0a',       // Background
  'dark-card': '#1a1a1a',     // Card background
}
```

## 🔧 Advanced Configuration

### Custom Domain
1. Add a `CNAME` file to the `public/` directory with your domain
2. Update the `base` in `vite.config.ts` to `'/'`
3. Configure DNS settings with your domain provider

### Analytics
Add Google Analytics or other tracking:
1. Add tracking code to `index.html`
2. Or use a React analytics library

### Contact Form
The contact form currently logs to console. To make it functional:
1. Use a service like Formspree, Netlify Forms, or EmailJS
2. Update the `handleSubmit` function in `src/components/Contact.tsx`

## 🚨 Troubleshooting

### Build Fails
- Check Node.js version (requires 16+)
- Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`

### GitHub Pages Not Working
- Ensure repository is public
- Check GitHub Actions tab for build errors
- Verify the `base` path in `vite.config.ts` matches your repository name

### Styling Issues
- Clear browser cache
- Check for console errors
- Verify Tailwind classes are being applied

## 📞 Support

If you encounter issues:
1. Check the GitHub Actions logs
2. Verify all file paths are correct
3. Ensure all dependencies are installed
4. Check browser console for errors

---

Your modern DevOps portfolio is ready to impress! 🎉