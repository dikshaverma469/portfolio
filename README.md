# 📖 Diksha Verma — Editorial Magazine Portfolio

> A warm, elegant, editorial "magazine cover" style personal portfolio built with **React**, **Tailwind CSS**, and **Framer Motion**.

[![React](https://img.shields.io/badge/React-19-61dafb.svg?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8.svg?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8-646cff.svg?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-emerald.svg)](LICENSE)

---

## 🎨 Design Philosophy
- **Palette**: Warm cream/off-white (`#f5f1e8`), ink black typography (`#161514`), and terracotta burnt orange accent (`#c1603e`).
- **Typography**: Playfair Display (bold editorial serif display titles), Inter (clean sans-serif body & letter-spaced tags), and Alex Brush (handwritten signature).
- **Aesthetic**: Magazine cover layout, vertical spine stamps, interactive case study modal dialogs, and smooth micro-animations.

---

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/dikshaverma469/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production
```bash
npm run build
```

---

## 📂 Project Structure
```
portfolio/
├── public/
│   └── images/               # High-res portraits and case study telemetry mockups
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Editorial masthead with IST clock & anchor links
│   │   ├── Hero.jsx          # Cover section with framed portrait & signature
│   │   ├── ProjectsSection.jsx # 4-column case study showcase with filter tabs
│   │   ├── ProjectModal.jsx  # Interactive case study inspection modal
│   │   ├── SkillsSection.jsx # Animated competency bars & manifesto quote
│   │   ├── EducationSection.jsx # Academic timeline, volunteering & certifications
│   │   ├── Testimonials.jsx  # 3-column recommendation cards
│   │   ├── ContactFooter.jsx # Inquiry form with confetti, QR code & social channels
│   │   ├── Icons.jsx         # Custom SVG brand icons (GitHub, LinkedIn, Codolio)
│   │   └── Toast.jsx         # Subtle notification toast
│   ├── data/
│   │   ├── projectsData.js   # Project specs, highlights, and repo links
│   │   ├── skillsData.js     # Technical competencies & engineering pillars
│   │   ├── educationData.js  # IGDTUW degree, achievements & certifications
│   │   └── testimonialsData.js # Mentor and reviewer endorsements
│   ├── App.jsx               # Main layout orchestrator
│   ├── index.css             # Tailwind design tokens & typography utilities
│   └── main.jsx              # React DOM entry point
├── package.json
└── vite.config.js
```

---

## 🌐 Deploy to Vercel / Netlify

### Deploy with Vercel:
1. Go to [vercel.com](https://vercel.com) and click **"Add New"** > **"Project"**.
2. Import your GitHub repository `dikshaverma469/portfolio`.
3. Framework Preset will auto-detect **Vite**.
4. Click **Deploy**!

---

## 📬 Contact & Connect
- **Email**: [dikshaverma0029@gmail.com](mailto:dikshaverma0029@gmail.com)
- **LinkedIn**: [diksha-verma-b890ab294](https://www.linkedin.com/in/diksha-verma-b890ab294)
- **GitHub**: [@dikshaverma469](https://github.com/dikshaverma469)
- **Codolio**: [dikshaverma_469](https://codolio.com/profile/dikshaverma_469)
