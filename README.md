# 🚀 Dhanunjay Reddy Portfolio - Firebase-Inspired Developer Portfolio

A modern, responsive portfolio website built with React and TypeScript, featuring a Firebase-inspired design theme, smooth animations, and interactive project showcases.

## ✨ Features

### 🎨 **Design & Theme**
- **Firebase-Inspired Color Palette**: Modern dark theme with Firebase brand colors
- **Responsive Design**: Fully compatible with all devices (mobile, tablet, desktop)
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Interactive Elements**: Hover effects, parallax scrolling, and dynamic backgrounds

### 🛠️ **Technical Stack**
- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom Firebase theme
- **Animations**: Framer Motion for smooth transitions
- **Background**: React TSParticles for animated particle effects
- **Drag & Drop**: @dnd-kit for project reordering
- **Build Tool**: Vite for fast development and building

### 🎯 **Key Sections**
- **Hero Section**: Animated profile with tech stack preview
- **About**: Professional background and quick facts
- **Skills**: Interactive skill cards with proficiency indicators
- **Projects**: Draggable project showcase with video demos
- **Certifications**: Industry-recognized certifications display
- **Internships**: Professional experience and achievements
- **Contact**: Multiple contact methods with interactive cards
- **Achievements**: Key metrics and accomplishments

### 🔧 **Interactive Features**
- **Project Reordering**: Drag and drop to customize project order
- **Video Demos**: Automatic video playback in browser frames
- **Responsive Navigation**: Dynamic header with scroll effects
- **Smooth Scrolling**: Seamless navigation between sections
- **Hover Effects**: Interactive elements with visual feedback

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/PDReddyDhanu/Dhanunjay-My-Portfolio.git
cd Dhanunjay-My-Portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to `http://localhost:5173`

### Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
My_Portfolio/
├── components/           # React components
│   ├── About.tsx        # About section
│   ├── Achievements.tsx # Achievements showcase
│   ├── AnimatedBackground.tsx # Particle background
│   ├── Certifications.tsx # Certifications display
│   ├── Contact.tsx      # Contact information
│   ├── Footer.tsx       # Footer section
│   ├── Hero.tsx         # Hero section
│   ├── Internships.tsx  # Internship experience
│   ├── Projects.tsx     # Projects showcase
│   └── Skills.tsx       # Skills display
├── public/              # Static assets
│   ├── *.mp4           # Project demo videos
│   ├── *.pdf           # Certification PDFs
│   └── profile.jpg     # Profile image
├── App.tsx             # Main application component
├── index.tsx           # Application entry point
├── index.css           # Global styles and Firebase theme
├── types.ts            # TypeScript type definitions
├── vite.config.ts      # Vite configuration
└── tsconfig.json       # TypeScript configuration
```

## 🎨 Firebase Theme Colors

The portfolio uses a carefully selected Firebase-inspired color palette:

```css
:root {
  --firebase-orange: #FF6B35;    /* Primary accent */
  --firebase-blue: #039BE5;      /* Secondary accent */
  --firebase-yellow: #FFCA28;    /* Highlight color */
  --firebase-green: #4CAF50;     /* Success color */
  --firebase-red: #F44336;       /* Error color */
  --dark-bg: #1A1A1A;            /* Main background */
  --darker-bg: #0D1117;          /* Secondary background */
  --card-bg: #2D3748;            /* Card background */
  --text-primary: #FFFFFF;       /* Primary text */
  --text-secondary: #F7FAFC;     /* Secondary text */
}
```

## 📱 Responsive Design

The portfolio is fully responsive across all device sizes:

- **Mobile**: Optimized for smartphones (320px+)
- **Tablet**: Tablet-friendly layouts (768px+)
- **Desktop**: Full-featured desktop experience (1024px+)
- **Large Screens**: Enhanced layouts for large displays (1440px+)

## 🎬 Project Showcase Features

### Video Demos
- **Automatic Playback**: Videos start automatically on page load
- **Browser Frame UI**: Custom browser window simulation
- **Looping Content**: Continuous video playback for better engagement
- **Responsive Videos**: Optimized for all screen sizes

### Interactive Projects
- **Drag & Drop**: Reorder projects using intuitive drag and drop
- **Tech Stack Badges**: Visual technology indicators
- **Live Demos**: Direct links to deployed projects
- **GitHub Integration**: Source code access

## 🚀 Deployment

### Vercel Deployment

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Deploy to Vercel**
```bash
vercel
```

3. **Automatic Deployment**
Connect your GitHub repository to Vercel for automatic deployments on push.

### Netlify Deployment

1. **Build the project**
```bash
npm run build
```

2. **Deploy to Netlify**
```bash
netlify deploy --prod --dir=dist
```

3. **Continuous Deployment**
Connect your repository to Netlify for automatic builds and deployments.

## 🔧 Customization

### Adding New Projects
1. Add project details to the `projects` array in `components/Projects.tsx`
2. Include project video in the `public/` directory
3. Update project metadata (name, description, tech stack, links)

### Modifying Theme Colors
1. Update CSS variables in `index.css`
2. Modify Firebase theme utility classes
3. Update component-specific color schemes

### Adding New Sections
1. Create new component in `components/` directory
2. Import and add to `App.tsx`
3. Update navigation links

## 📊 Performance Features

- **Lazy Loading**: Components load as they come into view
- **Optimized Images**: Compressed and optimized media files
- **Code Splitting**: Efficient bundle splitting for faster loading
- **Smooth Animations**: Hardware-accelerated CSS animations

## 🌟 Key Achievements

- **6+ Industry-Recognized Certifications**
- **4+ Professional Internships**
- **7+ Completed Projects**
- **10+ Technical Skills**
- **250+ Training Hours**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Dhanunjay Reddy Palakolanu**
- **GitHub**: [@PDReddyDhanu](https://github.com/PDReddyDhanu)
- **Portfolio**: [dhanunjay-portfolio.vercel.app](https://dhanunjay-portfolio.vercel.app/)
- **LinkedIn**: [Dhanunjay Reddy](https://linkedin.com/in/dhanunjay-reddy)

## 🙏 Acknowledgments

- **Firebase Design Team** for the inspiring color palette and design language
- **Framer Motion** for smooth animations and transitions
- **Tailwind CSS** for the utility-first CSS framework
- **React Community** for the excellent documentation and support

---

⭐ **Star this repository if you find it helpful!**

🚀 **Built with ❤️ and Firebase inspiration**
