# 🚀 Dhanunjay Reddy - Modern Developer Portfolio

> A cutting-edge, AI-powered portfolio featuring interactive components, live GitHub integration, and innovative user experiences.

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://dhanunportfolio.netlify.app/)
[![GitHub](https://img.shields.io/badge/github-PDReddyDhanu-blue)](https://github.com/PDReddyDhanu)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)

---

## ✨ Highlights

- 🤖 **AI Chatbot Assistant** - Interactive knowledge base
- 📡 **Live GitHub Activity** - Real-time stats and contributions
- 💻 **Interactive Terminal** - Command-line portfolio navigation
- 🎯 **3D Skill Visualization** - Animated skill proficiency display
- 📈 **Project Impact Metrics** - Quantifiable project achievements
- 🎨 **Dark Mode Only** - Sleek, professional dark theme
- 📱 **Fully Responsive** - Perfect on all devices

---

## 🎯 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Innovative Components](#-innovative-components)
- [Workflows](#-workflows)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Performance](#-performance)
- [Documentation](#-documentation)
- [Contributing](#-contributing)

---

## 🌟 Features

### **Core Features**
- ✅ Modern dark theme with gradient accents
- ✅ Smooth animations with Framer Motion
- ✅ Responsive design for all devices
- ✅ SEO optimized with meta tags
- ✅ Fast loading with Vite
- ✅ TypeScript for type safety

### **Innovative Features** (New!)
1. **🤖 AI Chatbot Assistant**
   - Answers questions about skills, projects, experience
   - Knowledge base with comprehensive information
   - Real-time chat interface with typing indicators
   - Floating button with smooth animations

2. **📡 Live GitHub Activity Feed**
   - Real-time repository count
   - Total GitHub stars
   - Contribution heatmap (12 weeks)
   - Recent activity feed
   - Fetches data from GitHub API

3. **💻 Interactive Terminal**
   - 12+ commands (help, about, skills, projects, etc.)
   - Command history navigation (↑ ↓ arrows)
   - Realistic terminal styling
   - Auto-complete suggestions

4. **🎯 3D Skill Visualization**
   - 19 skills across 5 categories
   - Animated progress bars
   - Circular progress indicators
   - Category filtering
   - Summary statistics

5. **📈 Project Impact Metrics**
   - Users reached
   - Performance scores
   - GitHub stars
   - Project status
   - Animated metric cards

6. **⬆️⬇️ Smart Scroll Navigation**
   - Scroll-to-top button (appears when scrolled down)
   - Scroll-to-bottom button (appears when not at bottom)
   - Hover tooltips
   - Pulse animations

---

## 🛠️ Tech Stack

### **Frontend**
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations

### **Libraries & Tools**
- **@react-three/fiber** - 3D graphics
- **@react-three/drei** - 3D helpers
- **@dnd-kit** - Drag and drop
- **react-parallax-tilt** - 3D tilt effects
- **recharts** - Data visualization

### **APIs**
- **GitHub REST API** - Live activity data
- **Custom Knowledge Base** - AI chatbot responses

---

## 🚀 Getting Started

### **Prerequisites**
- Node.js 16+ 
- npm or yarn

### **Installation**

```bash
# Clone the repository
git clone https://github.com/PDReddyDhanu/My_Portfolio.git
cd My_Portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
# Navigate to http://localhost:5173
```

### **Build for Production**

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
My_Portfolio/
├── components/              # React components
│   ├── AIChatbot.tsx       # AI chatbot assistant
│   ├── GitHubActivity.tsx  # Live GitHub feed
│   ├── InteractiveTerminal.tsx # Terminal interface
│   ├── SkillVisualization.tsx  # 3D skill display
│   ├── Projects.tsx        # Projects with metrics
│   ├── About.tsx           # About section
│   ├── Hero.tsx            # Hero section
│   ├── Skills.tsx          # Skills section
│   ├── Timeline.tsx        # Educational journey
│   ├── Certifications.tsx  # Certifications
│   ├── Achievements.tsx    # Achievements
│   ├── Internships.tsx     # Work experience
│   ├── Contact.tsx         # Contact section
│   ├── Footer.tsx          # Footer
│   ├── ScrollToTop.tsx     # Scroll navigation
│   ├── ScrollProgress.tsx  # Progress indicator
│   ├── ParticleCursor.tsx  # Particle effects
│   ├── AnimatedBackground.tsx # Background
│   ├── LoadingScreen.tsx   # Loading animation
│   └── StatsCounter.tsx    # Animated counters
├── contexts/
│   └── ThemeContext.tsx    # (Removed - dark mode only)
├── public/                 # Static assets
│   ├── *.mp4              # Project videos
│   ├── *.pdf              # Certificates
│   └── *.jpeg             # Images
├── App.tsx                # Main app component
├── index.tsx              # Entry point
├── index.css              # Global styles
├── types.ts               # TypeScript types
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript config
└── README.md              # This file
```

---

## 🎨 Innovative Components

### **1. AI Chatbot Assistant** 🤖

**Location:** Bottom-right floating button

**Features:**
- Knowledge base with Q&A
- Real-time responses
- Typing indicators
- Smooth animations
- Mobile responsive

**Usage:**
```typescript
// Ask questions like:
"What are your skills?"
"Tell me about your projects"
"How can I contact you?"
```

**File:** `components/AIChatbot.tsx`

---

### **2. Live GitHub Activity** 📡

**Location:** After Projects section

**Features:**
- Real-time stats (repos, stars, commits)
- Contribution heatmap
- Recent activity feed
- Auto-refresh data

**API:** GitHub REST API
```typescript
const username = 'PDReddyDhanu';
// Fetches from:
// - /users/{username}
// - /users/{username}/repos
// - /users/{username}/events/public
```

**File:** `components/GitHubActivity.tsx`

---

### **3. Interactive Terminal** 💻

**Location:** After GitHub Activity

**Available Commands:**
```bash
help        # Show all commands
about       # About me
skills      # Technical skills
projects    # Featured projects
experience  # Work experience
education   # Educational background
contact     # Contact information
github      # Open GitHub profile
linkedin    # Open LinkedIn
resume      # Download resume
whoami      # Current user
date        # Current date/time
clear       # Clear terminal
```

**Features:**
- Command history (↑ ↓ arrows)
- Auto-scroll
- Realistic styling
- Error handling

**File:** `components/InteractiveTerminal.tsx`

---

### **4. 3D Skill Visualization** 🎯

**Location:** After About section

**Features:**
- 19 skills across 5 categories
- Animated progress bars
- Circular indicators
- Category filtering
- Summary stats

**Categories:**
- Frontend (React, TypeScript, Next.js, etc.)
- Backend (Node.js, Express, APIs)
- AI/ML (Gemini API, Genkit)
- Database (MongoDB, Firebase, MySQL)
- Tools (Git, GitHub, Vercel, etc.)

**File:** `components/SkillVisualization.tsx`

---

### **5. Project Impact Metrics** 📈

**Location:** Within each project card

**Metrics Displayed:**
- 👥 Users reached
- ⚡ Performance score
- ⭐ GitHub stars
- ✅ Project status

**Example:**
```typescript
metrics: {
    users: "500+",
    performance: "95%",
    stars: 12,
    status: "Active"
}
```

**File:** `components/Projects.tsx`

---

### **6. Smart Scroll Navigation** ⬆️⬇️

**Features:**
- Scroll-to-top (appears when scrolled down)
- Scroll-to-bottom (appears when not at bottom)
- Hover tooltips
- Pulse animations
- Different gradients

**File:** `components/ScrollToTop.tsx`

---

## 🔄 Workflows

### **Development Workflow**

```bash
# 1. Start development server
npm run dev

# 2. Make changes to components

# 3. Hot reload automatically updates

# 4. Test in browser (localhost:5173)

# 5. Build for production
npm run build

# 6. Preview production build
npm run preview
```

### **Deployment Workflow**

#### **Vercel (Recommended)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

#### **Netlify**
```bash
# Build
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

### **GitHub Workflow**

```bash
# 1. Create feature branch
git checkout -b feature/new-feature

# 2. Make changes and commit
git add .
git commit -m "Add new feature"

# 3. Push to GitHub
git push origin feature/new-feature

# 4. Create Pull Request

# 5. Merge to main
```

---

## 🎨 Customization

### **Update Personal Information**

#### **1. GitHub Username**
```typescript
// File: components/GitHubActivity.tsx
const username = 'YOUR_GITHUB_USERNAME';
```

#### **2. AI Chatbot Responses**
```typescript
// File: components/AIChatbot.tsx
const getResponse = (question: string): string => {
    // Update responses here
}
```

#### **3. Terminal Commands**
```typescript
// File: components/InteractiveTerminal.tsx
const commands: { [key: string]: () => string | JSX.Element } = {
    // Add/modify commands here
}
```

#### **4. Skills Data**
```typescript
// File: components/SkillVisualization.tsx
const skills: Skill[] = [
    {
        name: 'React',
        level: 95,
        category: 'Frontend',
        icon: '⚛️',
        color: '#61DAFB'
    },
    // Add more skills
];
```

#### **5. Project Metrics**
```typescript
// File: components/Projects.tsx
const projects = [
    {
        name: "Project Name",
        // ... other fields
        metrics: {
            users: "500+",
            performance: "95%",
            stars: 12,
            status: "Active"
        }
    }
];
```

### **Update Educational Information**

```typescript
// File: components/Timeline.tsx
const timelineData: TimelineItem[] = [
    {
        year: '2022 - 2026',
        title: 'B.Tech in IT',
        organization: 'Your College',
        description: 'Your description',
        type: 'education',
        icon: '🎓',
    }
];
```

### **Modify Theme Colors**

```css
/* File: index.css */
:root {
  --firebase-orange: #FF6B35;
  --firebase-blue: #039BE5;
  --firebase-yellow: #FFCA28;
  /* Update colors here */
}
```

---

## 🚀 Deployment

### **Vercel Deployment**

1. Push code to GitHub
2. Import project in Vercel
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy automatically on push

### **Netlify Deployment**

1. Build the project: `npm run build`
2. Deploy dist folder
3. Configure redirects in `netlify.toml`
4. Enable continuous deployment

### **GitHub Pages**

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json
"homepage": "https://yourusername.github.io/repo-name",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Deploy
npm run deploy
```

---

## ⚡ Performance

### **Optimization Features**
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Image optimization
- ✅ Minification
- ✅ Tree shaking
- ✅ Gzip compression

### **Performance Metrics**
- **Lighthouse Score:** 95+
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3.5s
- **Speed Index:** < 2.5s

---

## 📚 Documentation

### **Additional Guides**
- `IMPLEMENTATION_SUMMARY.md` - Feature implementation details
- `VISUAL_GUIDE.md` - Visual component layouts
- `USER_GUIDE.md` - How to use all features
- `GITHUB_CONFIGURATION.md` - GitHub integration setup
- `EDUCATION_UPDATE.md` - Educational journey details

### **Component Documentation**
Each component includes:
- TypeScript interfaces
- Props documentation
- Usage examples
- Styling guidelines

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### **Coding Standards**
- Use TypeScript for type safety
- Follow React best practices
- Write clean, readable code
- Add comments for complex logic
- Test on multiple devices

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Developer

**Palakolanu Dhanunjay Reddy**

- 🎓 B.Tech in IT @ Vidya Jyothi Institute of Technology (CGPA: 8.8/10)
- 💼 Full Stack Developer Intern @ Exposys Data Labs
- 📧 Email: palakolanudhanunjayreddy@gmail.com
- 🐙 GitHub: [@PDReddyDhanu](https://github.com/PDReddyDhanu)
- 💼 LinkedIn: [Palakolanu Dhanunjay Reddy](https://linkedin.com/in/palakolanu-dhanunjay-reddy)
- 🌐 Portfolio: [dhanunportfolio.netlify.app](https://dhanunportfolio.netlify.app/)

---

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Framer Motion** - For smooth animations
- **Tailwind CSS** - For utility-first styling
- **Vercel** - For seamless deployment
- **GitHub** - For API and hosting
- **Google Gemini** - For AI inspiration

---

## 📊 Project Stats

- **Components:** 20+
- **Lines of Code:** 5000+
- **Dependencies:** 15+
- **Features:** 25+
- **Sections:** 10+
- **Animations:** 50+

---

## 🎯 Future Enhancements

- [ ] Blog section with MDX support
- [ ] Real Gemini API integration for chatbot
- [ ] Dark/Light theme toggle (optional)
- [ ] Multi-language support
- [ ] Analytics dashboard
- [ ] Contact form with backend
- [ ] Newsletter subscription
- [ ] Project search and filtering

---

## 🐛 Known Issues

- JSX namespace warnings in InteractiveTerminal.tsx (TypeScript linting, doesn't affect functionality)
- GitHub API rate limit (60 requests/hour for unauthenticated)

---

## 📞 Support

For support, email palakolanudhanunjayreddy@gmail.com or create an issue in the repository.

---

## ⭐ Star History

If you find this project helpful, please consider giving it a star!

[![Star History Chart](https://api.star-history.com/svg?repos=PDReddyDhanu/My_Portfolio&type=Date)](https://star-history.com/#PDReddyDhanu/My_Portfolio&Date)

---

<div align="center">

### 🚀 Built with ❤️ and Innovation

**[View Live Demo](https://dhanunportfolio.netlify.app/)** | **[Report Bug](https://github.com/PDReddyDhanu/My_Portfolio/issues)** | **[Request Feature](https://github.com/PDReddyDhanu/My_Portfolio/issues)**

Made with 💻 by [Dhanunjay Reddy](https://github.com/PDReddyDhanu)

⭐ Star this repo if you like it!

</div>
