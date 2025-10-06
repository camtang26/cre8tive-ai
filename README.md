# Cre8tive AI Website

A modern, high-performance marketing website for Cre8tive AI, showcasing AI-powered video production, autonomous agents, and conversational AI solutions. Built with React, TypeScript, and Tailwind CSS.

🌐 **Live:** [https://cre8tive.ai](https://cre8tive.ai)

---

## 🚀 Features

- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Modern UI/UX** - Glassmorphism, magnetic interactions, parallax effects
- **Smooth Animations** - Powered by Framer Motion for professional feel
- **SEO Optimized** - Pre-rendered HTML, meta tags, sitemap for discoverability
- **Performance Optimized** - Code splitting, lazy loading, optimized assets
- **Accessibility** - WCAG guidelines compliance with semantic HTML
- **Security** - CSP headers, XSS protection, input sanitization
- **Analytics** - Vercel Analytics and Google Tag Manager integration
- **3D Content** - Spline and Three.js integration for interactive visuals

---

## 🛠️ Tech Stack

### Core
- **React** 18.3.1 - UI library
- **TypeScript** 5.5.3 - Type safety
- **Vite** 5.4.1 - Lightning-fast build tool
- **React Router** 6.26.2 - Client-side routing

### Styling & UI
- **Tailwind CSS** 3.4.11 - Utility-first CSS
- **Shadcn/UI** - Accessible component library (Radix UI)
- **Framer Motion** 12.4.2 - Animation library
- **Geist Sans & Inter** - Typography

### State & Forms
- **React Query** 5.56.2 - Server state management
- **React Hook Form** 7.53.0 - Form handling
- **Zod** 3.23.8 - Schema validation

### Integrations
- **Vercel Analytics** - Performance and user analytics
- **Google Tag Manager** - Event tracking
- **getform.io** - Form submissions
- **Cal.com** - Appointment booking
- **ElevenLabs** - Conversational AI
- **Vimeo** - Video hosting
- **Spline** - 3D interactive content

See [ARCHITECTURE.md](./ARCHITECTURE.md) for complete tech stack details.

---

## 📦 Project Structure

```
src/
├── components/         # React components
│   ├── ui/            # Shadcn UI components (40+ components)
│   ├── agents/        # Agents service page components
│   ├── studios/       # Studios service page components
│   ├── shared/        # Reusable components
│   └── ...            # Feature-specific components
├── pages/             # Page components (routes)
│   ├── Index.tsx      # Homepage
│   ├── Studios.tsx    # Studios service page
│   ├── Agents.tsx     # Agents service page
│   ├── Contact.tsx    # Contact page
│   └── ...
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── utils/             # Application utilities
├── types/             # TypeScript types
├── assets/            # Images, media
└── styles/            # Global styles
```

See [ARCHITECTURE.md](./ARCHITECTURE.md) for detailed structure documentation.

---

## 🏁 Getting Started

### Prerequisites

- **Node.js** 20 or higher
- **npm** 9 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/[org]/cre8tive-website.git
cd cre8tive-website

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at **http://localhost:8080**

### Building for Production

```bash
# Build the app (TypeScript check + Vite build)
npm run build

# Preview production build locally
npm run preview
```

Production build will be in the `dist/` directory.

---

## 🔧 Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on http://localhost:8080 |
| `npm run build` | Build for production (includes TypeScript check) |
| `npm run build:dev` | Build in development mode with source maps |
| `npm run preview` | Preview production build on http://localhost:4173 |
| `npm run lint` | Run ESLint to check code quality |
| `npm run deploy` | Deploy to GitHub Pages (use CI/CD instead) |

---

## 🌐 Deployment

### Automated Deployment (GitHub Actions)

The site automatically deploys to GitHub Pages when changes are pushed to the `master` branch.

**Deployment Workflow:** `.github/workflows/deploy.yml`

**Steps:**
1. Push to `master` branch
2. GitHub Actions runs:
   - Install dependencies
   - Run TypeScript check
   - Build production bundle
   - Deploy to `gh-pages` branch
3. GitHub Pages serves from `gh-pages` branch
4. Site live at https://cre8tive.ai

### Manual Deployment

```bash
npm run build
npm run deploy
```

---

## 🔒 Security Features

- **Input Validation** - Zod schema validation on all forms
- **XSS Protection** - DOMPurify sanitization for user inputs
- **Content Security Policy** - Restricts external resources
- **Secure Headers** - X-Frame-Options, X-Content-Type-Options, etc.
- **HTTPS Only** - Enforced via GitHub Pages and custom domain
- **Privacy Compliance** - Cookie consent and privacy policy

---

## ♿ Accessibility

- **Semantic HTML** - Proper heading hierarchy, landmarks
- **ARIA Labels** - For interactive elements and dynamic content
- **Keyboard Navigation** - Full keyboard accessibility
- **Screen Reader Support** - Descriptive alt text and labels
- **Focus Management** - Visible focus indicators

---

## 📊 Performance

- **Code Splitting** - Vendor and UI chunks separated for parallel loading
- **Lazy Loading** - Components loaded on demand
- **Image Optimization** - Optimized formats and sizes
- **Minification** - Terser minification with console removal in production
- **Caching** - Leverages GitHub Pages CDN and browser caching
- **Pre-rendering** - react-snap generates static HTML for SEO

---

## 🧪 Testing

**Current Status:** No tests implemented

**Planned Testing Stack:**
- **Unit Tests:** Vitest + React Testing Library
- **E2E Tests:** Playwright
- **Coverage:** Target 70%+ for critical paths

See [CONTRIBUTING.md](./CONTRIBUTING.md) for testing standards when implemented.

---

## 📝 Development Guidelines

### Code Style

- **TypeScript** for type safety (relaxed mode currently)
- **ESLint** for code quality
- **Functional React components** with hooks
- **Tailwind CSS** for styling
- **Conventional Commits** for git messages

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed conventions.

### Component Guidelines

- Keep components **small and focused**
- Use **proper TypeScript types** for props
- Follow **accessibility best practices**
- Use **Shadcn/UI components** where applicable

### State Management

- **React Query** for server state and API calls
- **React Hooks** (useState, useEffect) for local state
- **React Hook Form** for form state
- **React Router** for URL state

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Read the docs:**
   - [SPEC.md](./SPEC.md) - Project requirements and scope
   - [ARCHITECTURE.md](./ARCHITECTURE.md) - System design and tech stack
   - [CONTRIBUTING.md](./CONTRIBUTING.md) - Development guidelines

2. **Fork the repository**

3. **Create a feature branch:**
   ```bash
   git checkout -b feat/my-feature
   ```

4. **Make changes** following code conventions

5. **Test locally:**
   ```bash
   npm run dev
   npm run lint
   npm run build
   ```

6. **Commit with conventional format:**
   ```bash
   git commit -m "feat: Add new feature"
   ```

7. **Push and create Pull Request**

See [CONTRIBUTING.md](./CONTRIBUTING.md) for complete guidelines.

---

## 📚 Documentation

- **[SPEC.md](./SPEC.md)** - Requirements, features, scope, success metrics
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Tech stack, system design, data flow
- **[CONTRIBUTING.md](./CONTRIBUTING.md)** - Code conventions, git workflow, testing
- **[codex/_MEMO.md](./codex/_MEMO.md)** - Working memory, decisions, next steps

---

## 🗺️ Sitemap

- **/** - Homepage
- **/studios** - Video production service
- **/studios-engine** - AI content creation platform
- **/agents** - Autonomous AI marketing agents
- **/conversational** - Conversational AI solutions
- **/about** - Company information
- **/contact** - Contact form and information
- **/privacy** - Privacy policy

---

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

**Target:** ES2015+ with polyfills for broader compatibility

---

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🔗 Links

- **Website:** [https://cre8tive.ai](https://cre8tive.ai)
- **Repository:** [GitHub](https://github.com/[org]/cre8tive-website)
- **Issues:** [GitHub Issues](https://github.com/[org]/cre8tive-website/issues)

---

## 📞 Contact

For questions or support, please:
- Open a [GitHub Issue](https://github.com/[org]/cre8tive-website/issues)
- Visit the [Contact Page](https://cre8tive.ai/contact)

---

**Built with ❤️ by the Cre8tive AI team**
