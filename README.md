# Lingaraj Marader — AI/ML Engineer & Full Stack Developer Portfolio

A cutting-edge, high-performance portfolio built with **React 19**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Preconfigured for 1-command deployment to **GitHub Pages**.

---

## 🚀 Quick Start (Run Locally)

1. Open your terminal in this directory:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```

3. Open your browser at the local URL shown (typically `http://localhost:5173`).

---

## 🌐 Deploy to GitHub Pages (Super Easy!)

This project is already pre-configured for GitHub Pages:
- `vite.config.js` uses `base: './'` for relative asset paths on any repository name.
- `gh-pages` is installed and wired into `npm run deploy`.

### Step-by-Step Deployment:

1. **Initialize Git & Push to your GitHub repository** (if not done yet):
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/Lingaraj-Marader/<YOUR-REPO-NAME>.git
   git push -u origin main
   ```

2. **Deploy with a single command**:
   ```bash
   npm run deploy
   ```
   *(This automatically builds your site into `dist/` and pushes it to your repository's `gh-pages` branch).*

3. **Enable GitHub Pages**:
   - Go to your GitHub Repository -> **Settings** -> **Pages**.
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Select the `gh-pages` branch and `/ (root)` folder, then click **Save**.
   - Your site will be live at `https://lingaraj-marader.github.io/<YOUR-REPO-NAME>/`!

---

## 🎨 Personalization & Assets

### 1. Adding Your Photo
- Save your profile picture as `profile.jpg` inside the `public/` folder (`public/profile.jpg`).
- If no image is provided, the portfolio automatically displays a stylish futuristic cyber avatar with your initials (`LM`).

### 2. Updating Your Resume
- Replace `public/resume.pdf` with your actual resume PDF.
- When visitors click **"Download Resume"**, they will receive this file along with an interactive celebratory confetti effect!

### 3. Editing Data & Content
All portfolio content is neatly organized in a single file:
👉 **`src/data/portfolioData.js`**
You can update:
- Personal Bio & Tagline
- Contact Information (Phone, Email, GitHub)
- Skills & Proficiency Levels
- Experience & Achievements
- Projects, Descriptions, and Tags
- Education & Certifications

---

## 🌟 Features Included

- ⚡ **Vite + React 19**: Blazing fast load times and minimal bundle size.
- 🎨 **Futuristic Cyber & Deep Space Palette**: Dark theme with obsidian slate, cyan, azure, and galactic violet accents.
- 🪟 **Glassmorphism & Glow Effects**: Ultra-modern frosted glass cards with animated hover glows.
- 🪐 **Interactive Particle Canvas**: 60fps ambient background constellation reacting smoothly.
- ✍️ **Dynamic Role Typewriter**: Interactive rotating title showcase in hero section.
- 🔮 **Floating Tech Badges**: Orbiting Python, React, GenAI, and Database indicators.
- 📱 **Fully Responsive**: Flawless experience across mobile, tablet, laptop, and ultra-wide displays.
- 📋 **One-Click Quick Copy**: Interactive clipboard copy for email with toast notifications.
- 🎊 **Canvas Confetti**: Celebratory feedback on resume download and contact interactions.
