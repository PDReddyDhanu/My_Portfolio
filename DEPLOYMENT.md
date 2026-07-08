# 🚀 Deployment Guide - Dhanunjay Reddy Portfolio

This guide will help you deploy your portfolio website to both Vercel and Netlify platforms.

## 📋 Prerequisites

- Node.js 18+ installed
- Git repository set up
- All dependencies installed (`npm install`)
- Project builds successfully (`npm run build`)

## 🚀 Vercel Deployment

### Option 1: Vercel CLI (Recommended)

1. **Install Vercel CLI globally**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy to Vercel**
```bash
npm run deploy:vercel
```

4. **Follow the prompts:**
   - Set up and deploy? → `Y`
   - Which scope? → Select your account
   - Link to existing project? → `N`
   - Project name? → `dhanunjay-portfolio` (or your preferred name)
   - In which directory is your code located? → `./` (current directory)
   - Want to override the settings? → `N`

### Option 2: Vercel Dashboard

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign in with GitHub/GitLab/Bitbucket**
3. **Click "New Project"**
4. **Import your repository**
5. **Configure build settings:**
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
6. **Click "Deploy"**

### Vercel Configuration

The `vercel.json` file is already configured with:
- ✅ Build settings for Vite
- ✅ SPA routing (all routes → index.html)
- ✅ Security headers
- ✅ Asset caching optimization

## 🌐 Netlify Deployment

### Option 1: Netlify CLI

1. **Install Netlify CLI globally**
```bash
npm install -g netlify-cli
```

2. **Login to Netlify**
```bash
netlify login
```

3. **Deploy to Netlify**
```bash
npm run deploy:netlify
```

4. **Follow the prompts:**
   - Create & configure a new site? → `Y`
   - Team: Select your team
   - Site name: `dhanunjay-portfolio` (or your preferred name)

### Option 2: Netlify Dashboard

1. **Go to [netlify.com](https://netlify.com)**
2. **Sign in with GitHub/GitLab/Bitbucket**
3. **Click "New site from Git"**
4. **Connect your repository**
5. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Base directory: Leave empty
6. **Click "Deploy site"**

### Netlify Configuration

The `netlify.toml` file is already configured with:
- ✅ Build and publish settings
- ✅ SPA routing (all routes → index.html)
- ✅ Security headers
- ✅ Asset caching optimization
- ✅ Video and PDF caching

## 🔧 Environment Variables

### Vercel Environment Variables

1. **Go to your Vercel project dashboard**
2. **Navigate to Settings → Environment Variables**
3. **Add any required environment variables:**
   ```
   NODE_ENV=production
   ```

### Netlify Environment Variables

1. **Go to your Netlify site dashboard**
2. **Navigate to Site settings → Environment variables**
3. **Add any required environment variables:**
   ```
   NODE_ENV=production
   ```

## 📱 Custom Domain Setup

### Vercel Custom Domain

1. **Go to your Vercel project dashboard**
2. **Navigate to Settings → Domains**
3. **Add your custom domain**
4. **Configure DNS records as instructed**

### Netlify Custom Domain

1. **Go to your Netlify site dashboard**
2. **Navigate to Site settings → Domain management**
3. **Add your custom domain**
4. **Configure DNS records as instructed**

## 🚀 Continuous Deployment

### Automatic Deployments

Both platforms support automatic deployments:

- **Vercel**: Automatically deploys on every push to main branch
- **Netlify**: Automatically deploys on every push to main branch

### Manual Deployments

```bash
# Vercel
npm run deploy:vercel

# Netlify
npm run deploy:netlify
```

## 📊 Performance Optimization

### Build Optimization

1. **Ensure TypeScript compilation works:**
```bash
npm run build
```

2. **Check build output:**
```bash
ls -la dist/
```

3. **Verify all assets are included:**
- HTML files
- CSS/JS bundles
- Images and videos
- PDF files

### Asset Optimization

- **Videos**: Already optimized for web delivery
- **Images**: Consider using WebP format for better compression
- **PDFs**: Ensure they're optimized for web viewing

## 🔍 Troubleshooting

### Common Issues

1. **Build Failures**
   - Check TypeScript errors: `npx tsc --noEmit`
   - Verify all dependencies are installed: `npm install`
   - Check Node.js version compatibility

2. **Routing Issues**
   - Ensure `vercel.json` and `netlify.toml` are in root directory
   - Verify SPA routing configuration
   - Check for conflicting routing rules

3. **Asset Loading Issues**
   - Verify file paths in components
   - Check build output includes all assets
   - Ensure proper MIME types for videos and PDFs

### Debug Commands

```bash
# Check build output
npm run build && ls -la dist/

# Check for TypeScript errors
npx tsc --noEmit

# Check dependency issues
npm ls

# Test local build
npm run build && npm run preview
```

## 📈 Monitoring & Analytics

### Vercel Analytics

- Built-in performance monitoring
- Real-time analytics dashboard
- Performance insights and recommendations

### Netlify Analytics

- Built-in analytics dashboard
- Performance monitoring
- Form submissions tracking

## 🔒 Security Considerations

Both platforms include:
- ✅ HTTPS by default
- ✅ Security headers
- ✅ DDoS protection
- ✅ Global CDN

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)
- [Vite Build Guide](https://vitejs.dev/guide/build.html)
- [React Deployment](https://create-react-app.dev/docs/deployment/)

## 🎯 Success Checklist

- [ ] Project builds successfully locally
- [ ] All dependencies are installed
- [ ] TypeScript compilation passes
- [ ] Build output is generated in `dist/` folder
- [ ] All assets are included in build
- [ ] Deployment configuration files are in place
- [ ] Environment variables are configured
- [ ] Custom domain is set up (if applicable)
- [ ] Site is accessible and functional
- [ ] Performance is optimized

---

🚀 **Your portfolio is now ready for deployment!**

Choose either Vercel or Netlify based on your preferences. Both platforms offer excellent performance and developer experience.
