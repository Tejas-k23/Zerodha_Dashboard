# 🚀 Zerodha - Trading Platform Frontend

<div align="center">

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite)
![Node.js](https://img.shields.io/badge/Node.js-16+-339933?logo=node.js)
![Status](https://img.shields.io/badge/Status-Active-green.svg)

A modern, responsive frontend for Zerodha trading platform built with React and Vite.

[Getting Started](#-getting-started) • [Features](#-features) • [Installation](#-installation) • [Contributing](#-contributing)

</div>

---

## 📋 Table of Contents

1. [About](#-about)
2. [Related Repositories](#-related-repositories)
3. [Features](#-features)
4. [Tech Stack](#-tech-stack)
5. [Project Structure](#-project-structure)
6. [Getting Started](#-getting-started)
7. [Installation](#-installation)
8. [Environment Variables](#-environment-variables)
9. [Usage](#-usage)
10. [Available Scripts](#-available-scripts)
11. [Folder Structure](#-folder-structure)
12. [Deployment](#-deployment)
13. [Contributing](#-contributing)
14. [License](#-license)
15. [Author](#-author)

---

## 📖 About

Zerodha is a modern trading platform frontend that provides users with a seamless experience for stock trading, account management, and financial information. This repository contains the React-based frontend interface with a responsive design optimized for both desktop and mobile devices.

---

## 🔗 Related Repositories

This project is part of the Zerodha platform ecosystem. Check out the other components:

| Component | Repository | Purpose |
|-----------|-----------|----------|
| **Frontend** | [zerodha_frontend](https://github.com/Tejas-k23/Zerodha_Frontend) | Client-facing UI for trading platform |
| **Backend** | [Zerodha_Backend](https://github.com/Tejas-k23/Zerodha_Backend) | REST API and business logic |
| **Dashboard** | [Zerodha_Dashboard](https://github.com/Tejas-k23/Zerodha_Dashboard) | Admin dashboard and analytics |

### Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                    Zerodha Platform                      │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  ┌──────────────┐    ┌──────────────┐  ┌─────────────┐  │
│  │  Frontend    │    │  Dashboard   │  │  Backend    │  │
│  │  (React)     │───▶│  (React)     │  │  (Node.js)  │  │
│  │              │    │              │  │             │  │
│  └──────────────┘    └──────────────┘  └─────────────┘  │
│         │                    │                │           │
│         └────────────────────┴────────────────┘           │
│                        ▲                                   │
│                        │                                   │
│                    REST API                               │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

**Setup Guide:** Start with the [Backend Repository](https://github.com/Tejas-k23/Zerodha_Backend) first, then run the Frontend and Dashboard.

---

## ✨ Features

- 🔐 **User Authentication** - Secure login and signup functionality
- 📊 **Dashboard** - Real-time trading dashboard with portfolio overview
- 💹 **Stock API Integration** - Live market data and price tracking
- 🎯 **Pricing Information** - Transparent brokerage fee structure
- 📱 **Responsive Design** - Mobile-first approach with great UX
- 🧭 **Navigation** - Smooth routing with React Router v7
- ⚡ **Fast Performance** - Built with Vite for lightning-fast builds
- 🎨 **Modern UI** - Clean and professional interface
- 📞 **Support System** - Ticket creation and customer support
- 📚 **Educational Content** - Information about trading products
- 🏆 **Awards Section** - Recognition and achievements

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend Framework** | React 19.2.0 |
| **Routing** | React Router v7.9.6 |
| **Build Tool** | Vite 7.2.4 |
| **Bundler** | ES Modules |
| **Linting** | ESLint 9.39.1 |
| **Node.js** | 16+ |

**Development Tools:**
- `@vitejs/plugin-react` - React refresh support
- `eslint-plugin-react-hooks` - React hooks linting
- `eslint-plugin-react-refresh` - Fast refresh support

---

## 📁 Project Structure

```
zerodha_frontend/
├── public/                    # Static assets
│   └── media/                # Images and media files
├── src/
│   ├── main.jsx              # React entry point
│   ├── App.jsx               # Root component
│   ├── App.css               # Global styles
│   ├── index.css             # Base styles
│   ├── landing_Page/         # Landing page components
│   │   ├── Navbar.jsx        # Navigation bar
│   │   ├── Footer.jsx        # Footer component
│   │   ├── Acopen.jsx        # Account opening
│   │   ├── NotFound.jsx      # 404 page
│   │   ├── home/             # Home page section
│   │   ├── about/            # About page section
│   │   ├── products/         # Products showcase
│   │   ├── pricing/          # Pricing information
│   │   ├── signup/           # User registration
│   │   ├── support/          # Support section
│   │   └── test/             # Test files
├── index.html                # HTML template
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint rules
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

### Key Directories Explained

| Directory | Purpose |
|-----------|---------|
| `src/landing_Page` | Main landing page and core page components |
| `src/landing_Page/home` | Home page with hero, stats, education, pricing, and awards |
| `src/landing_Page/about` | About page with company information and team |
| `src/landing_Page/products` | Products and services showcase |
| `src/landing_Page/pricing` | Brokerage fees and pricing structure |
| `src/landing_Page/signup` | User registration and account creation |
| `src/landing_Page/support` | Customer support and ticket creation |
| `public/media` | Images, icons, and media assets |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v16.0.0 or higher
- **npm**: v8.0.0 or higher (or yarn)
- **Git**: For cloning the repository

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/zerodha_frontend.git
cd zerodha_frontend

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# Navigate to http://localhost:5173
```

---

## 📥 Installation

### Step-by-Step Installation

**Step 1: Clone the Repository**
```bash
git clone https://github.com/Tejas-k23/zerodha_frontend.git
cd zerodha_frontend
```

**Step 2: Install Dependencies**
```bash
npm install
```

or with yarn:
```bash
yarn install
```

**Step 3: Configure Environment Variables**
```bash
# Create .env file in root directory
cp .env.example .env.local
```

**Step 4: Run Development Server**
```bash
npm run dev
```

**Step 5: Build for Production**
```bash
npm run build
```

---

## 🔧 Environment Variables

Create a `.env.local` file in the root directory and configure the following variables:

```env
# API Configuration
VITE_API_BASE_URL=https://api.zerodha.com
VITE_API_TIMEOUT=30000

# Authentication
VITE_AUTH_TOKEN_KEY=zerodha_auth_token
VITE_REFRESH_TOKEN_KEY=zerodha_refresh_token

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_DEMO_MODE=false

# UI Configuration
VITE_THEME_MODE=light
```

**Environment Variable Reference:**

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Backend API endpoint | `http://localhost:8000` |
| `VITE_API_TIMEOUT` | API request timeout (ms) | `30000` |
| `VITE_AUTH_TOKEN_KEY` | Local storage key for auth token | `token` |
| `VITE_REFRESH_TOKEN_KEY` | Local storage key for refresh token | `refresh_token` |
| `VITE_ENABLE_ANALYTICS` | Enable analytics tracking | `false` |
| `VITE_ENABLE_DEMO_MODE` | Enable demo/test mode | `false` |

---

## 💻 Usage

### Development Workflow

**1. Start Development Server**
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

**2. Make Changes**
- Edit React components in `src/`
- Changes will be hot-reloaded automatically

**3. Run Linting**
```bash
npm run lint
```

**4. Preview Production Build**
```bash
npm run preview
```

### Key Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `Home.jsx` | Landing/home page |
| `/about` | `About.jsx` | About company page |
| `/products` | `ProductPage.jsx` | Products showcase |
| `/pricing` | `PricingPage.jsx` | Pricing information |
| `/signup` | `Signup.jsx` | User registration |
| `/support` | `SupportPage.jsx` | Support/contact page |
| `*` | `NotFound.jsx` | 404 page |

---

## 📜 Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Run ESLint to check code quality
npm run lint

# Preview production build locally
npm run preview
```

### Script Details

| Script | Purpose |
|--------|---------|
| `dev` | Starts Vite dev server with React Fast Refresh |
| `build` | Creates optimized production build |
| `lint` | Checks code quality with ESLint |
| `preview` | Serves production build for testing |

---

## 🌐 Deployment

### Deploy to GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json
"homepage": "https://yourusername.github.io/zerodha_frontend",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Deploy
npm run deploy
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Build the project
npm run build

# Deploy the dist folder to Netlify
# Option 1: Via Netlify CLI
npm install -g netlify-cli
netlify deploy --prod --dir=dist

# Option 2: Via Netlify web interface
# Connect your GitHub repository to Netlify for auto-deployment
```

### Deploy to AWS S3 + CloudFront

```bash
# Build the project
npm run build

# Configure AWS credentials
aws configure

# Sync to S3
aws s3 sync dist/ s3://your-bucket-name/

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

---

## 🤝 Contributing

We welcome contributions from the community! Here are the guidelines:

### Getting Started with Contributing

1. **Fork the Repository**
   ```bash
   # Click the Fork button on GitHub
   ```

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/yourusername/zerodha_frontend.git
   cd zerodha_frontend
   ```

3. **Create a Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

4. **Make Your Changes**
   - Follow the code style and conventions
   - Write meaningful commit messages
   - Test your changes thoroughly

5. **Commit Your Changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```

6. **Push to Your Branch**
   ```bash
   git push origin feature/amazing-feature
   ```

7. **Open a Pull Request**
   - Describe your changes in detail
   - Reference any related issues
   - Wait for review and feedback

### Code Style Guidelines

- Use **functional components** with React hooks
- Follow **camelCase** for variables and functions
- Use **PascalCase** for component names
- Keep components **small and focused**
- Add **meaningful comments** for complex logic
- Run **ESLint** before committing: `npm run lint`

### Pull Request Process

1. Ensure your code passes linting: `npm run lint`
2. Test your changes in both development and production builds
3. Update documentation if needed
4. Add a clear description of changes
5. Link any related issues

### Reporting Issues

Please use the GitHub Issues tab to report bugs. Include:
- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Browser/environment information
- Screenshots if applicable

#### Issue Template
```
**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior.

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment**
- Browser: [e.g. Chrome, Firefox]
- OS: [e.g. Windows, macOS]
- Node version: [e.g. 16.13.0]
```

---

## 📄 License

This project is licensed under the **MIT License** - see the LICENSE file for details.

### MIT License Summary

- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use
- ❌ Liability
- ❌ Warranty

For more information, visit [MIT License](https://opensource.org/licenses/MIT)

---

## 👤 Author

**Tejas Kumbharkar**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn]
- Email: your.email@example.com

---

## 🙏 Acknowledgments

- React and Vite communities
- Contributors and maintainers
- All those who contribute to this project

---

## 📞 Support

For support, email your-email@example.com or open an issue on GitHub.

---

## 🚀 Future Improvements

- [ ] Dark mode theme support
- [ ] Progressive Web App (PWA) capabilities
- [ ] Advanced charting and analytics
- [ ] Multi-language support (i18n)
- [ ] Performance optimization
- [ ] Unit and integration tests
- [ ] Accessibility improvements (WCAG 2.1)
- [ ] Real-time notifications
- [ ] Export portfolio reports

---

<div align="center">

**[⬆ back to top](#-zerodha---trading-platform-frontend)**

Made with ❤️ by [Tejas Kumbharkar](https://github.com/yourusername)

</div>
