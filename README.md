# Pineapple Pizza Blog

A modern, bilingual personal blog built with React, TypeScript, and Tailwind CSS. This digital journal documents lifestyle topics (coffee, books, movies, photography) and technical learning adventures.

🌐 **Live Website**: [https://abby-chung.github.io/pineapplepizza](https://abby-chung.github.io/pineapplepizza)

## 📋 Project Overview

This is a single-page application (SPA) blog that serves as both a public notebook and digital journal. The site features bilingual content (English/Chinese) and showcases personal interests while documenting the journey of learning modern web development through "vibe coding."

### ✨ Key Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Bilingual Content**: English and Chinese blog posts
- **Modern Tech Stack**: React 18, TypeScript, Vite
- **Component Library**: shadcn/ui components with Radix UI
- **Search & Filter**: Real-time blog post search and category filtering
- **Pagination**: Smart pagination with 6 posts per page
- **Dark Mode**: Full dark/light/system theme support with toggle
- **Accessibility**: WCAG AA compliant with ARIA labels and keyboard navigation
- **Syntax Highlighting**: Code blocks with language-specific highlighting
- **Archive System**: Complete blog archive with year-based filtering
- **Legal Pages**: Privacy Policy and Terms of Service
- **GitHub Pages Deployment**: Automated deployment with GitHub Actions

### 🎯 Content Categories

- **Photography**: Visual storytelling and cultural experiences
- **Coffee**: Brewing methods, tasting notes, and cafe discoveries
- **Vibe Coding**: Technical learning journey and coding experiments
- **Journal**: Personal reflections and life experiences
- **Learning**: Educational content and skill development

## 🏗️ Project Structure

```
pineapplepizza/
├── public/                          # Static assets
│   ├── images/posts/               # Blog post images
│   │   ├── coding/                 # Technical posts images
│   │   ├── coffee/                 # Coffee-related images
│   │   ├── movies/                 # Film and TV images
│   │   └── photography/            # Photography portfolio
│   ├── docs/                       # Documentation files
│   ├── favicon.ico                 # Site favicon
│   └── 404.html                    # GitHub Pages 404 fallback
├── src/
│   ├── components/                 # React components
│   │   ├── layout/                 # Layout components
│   │   │   ├── Layout.tsx          # Main layout wrapper
│   │   │   ├── Header.tsx          # Navigation header with theme toggle
│   │   │   └── Footer.tsx          # Site footer
│   │   ├── ui/                     # shadcn/ui components
│   │   │   ├── badge.tsx           # Badge component
│   │   │   ├── button.tsx          # Button component
│   │   │   ├── card.tsx            # Card component
│   │   │   ├── input.tsx           # Input component
│   │   │   └── separator.tsx       # Separator component
│   │   ├── CodeBlock.tsx           # Code syntax highlighting
│   │   ├── MarkdownContent.tsx     # Markdown/HTML processor
│   │   ├── ScrollToTop.tsx         # Scroll restoration
│   │   ├── SyntaxHighlighter.tsx   # Code highlighting logic
│   │   ├── ThemeToggle.tsx         # Dark mode toggle component
│   │   └── Toast.tsx               # Notification component
│   ├── contexts/
│   │   └── ThemeContext.tsx        # Theme management context
│   ├── data/
│   │   └── posts.ts                # Blog posts data (770+ lines)
│   ├── lib/
│   │   └── utils.ts                # Utility functions (cn helper)
│   ├── pages/                      # Page components
│   │   ├── Home.tsx                # Landing page with featured posts
│   │   ├── Blog.tsx                # Blog listing with search/filter/pagination
│   │   ├── PostPage.tsx            # Individual blog post view
│   │   ├── About.tsx               # About page with skills/interests
│   │   ├── Archive.tsx             # Blog archive with year filtering
│   │   ├── Privacy.tsx             # Privacy policy page
│   │   ├── Terms.tsx               # Terms of service page
│   │   └── NotFound.tsx            # 404 error page
│   ├── styles/
│   │   └── globals.css             # Global styles and CSS variables
│   ├── App.tsx                     # Main app component with routing
│   └── main.tsx                    # Application entry point
├── dist/                           # Build output (generated)
├── CODE_IMPROVEMENTS.md            # Code quality improvements log
├── TASK_LIST.md                    # Comprehensive improvement tasks
├── components.json                 # shadcn/ui configuration
├── eslint.config.js                # ESLint configuration
├── index.html                      # HTML entry point
├── package.json                    # Dependencies and scripts
├── postcss.config.js               # PostCSS configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
├── tsconfig.node.json              # Node.js TypeScript config
├── vite.config.ts                  # Vite build configuration
└── yarn.lock                       # Dependency lock file
```

## 🛠️ Technology Stack

### Core Technologies
- **React 18.2.0**: UI framework with hooks and modern patterns
- **TypeScript 5.2.2**: Type-safe JavaScript with strict mode
- **Vite 7.3.1**: Fast build tool and development server (updated)
- **React Router 6.31.0+**: Client-side routing (security patched)

### Styling & UI
- **Tailwind CSS 3.3.5**: Utility-first CSS framework
- **shadcn/ui**: High-quality component library built on Radix UI
- **Lucide React**: Beautiful icon library
- **CSS Variables**: HSL-based color system for dark/light theming

### State Management & Context
- **Theme Context**: React Context for theme management
- **Local Storage**: Persistent theme and user preferences
- **URL State**: Search and filter state management

### Development Tools
- **ESLint**: Code linting with TypeScript and React rules
- **PostCSS**: CSS processing with Autoprefixer
- **GitHub Pages**: Static site hosting
- **gh-pages**: Deployment automation

### Dependencies
```json
{
  "dependencies": {
    "@radix-ui/react-navigation-menu": "^1.1.4",
    "@radix-ui/react-separator": "^1.1.7",
    "@radix-ui/react-slot": "^1.2.3",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "date-fns": "^2.30.0",
    "lucide-react": "^0.294.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    "tailwind-merge": "^2.6.0",
    "tailwindcss-animate": "^1.0.7"
  }
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abby-chung/pineapplepizza.git
   cd pineapplepizza
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Build for production (TypeScript check + Vite build)
- `npm run lint` - Run ESLint with zero warnings policy
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages

## 📝 Content Management

### Blog Posts Structure

Blog posts are stored in `src/data/posts.ts` with the following interface:

```typescript
interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string        // HTML/Markdown hybrid
  date: string          // Human-readable date
  readTime: string      // Estimated reading time
  language: string      // "EN" or "中文"
  tags: string[]        // Category tags
  author: string        // Author name
  featured?: boolean    // Featured on homepage
  featuredOrder?: number // Featured post order
}
```

### Adding New Posts

1. Add new post object to `blogPosts` array in `src/data/posts.ts`
2. Include images in `public/images/posts/[category]/`
3. Use HTML/Markdown hybrid format for content
4. Add appropriate tags for categorization

### Image Management

- **Location**: `public/images/posts/[category]/`
- **Categories**: `coding/`, `coffee/`, `movies/`, `photography/`
- **Format**: JPG, PNG supported (WebP recommended for optimization)
- **Usage**: Reference with `/pineapplepizza/images/posts/...` path

## 🎨 Design System

### Color Palette
- **Primary**: Dark navy (`hsl(220.9, 39.3%, 11%)`)
- **Secondary**: Light gray (`hsl(220, 14.3%, 95.9%)`)
- **Muted**: Subtle gray for secondary text
- **Accent**: Interactive element highlights

### Typography
- **Font**: System font stack (sans-serif)
- **Headings**: Bold weights with proper hierarchy
- **Body**: Regular weight with good line height
- **Code**: Monospace font for code blocks

### Components
- **Cards**: Elevated surfaces with hover effects
- **Buttons**: Multiple variants (default, outline, ghost)
- **Badges**: Category and tag indicators
- **Navigation**: Responsive with mobile hamburger menu

## 🔧 Configuration

### Vite Configuration
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/pineapplepizza/',     // GitHub Pages base path
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') }
  }
})
```

### Tailwind Configuration
- **Dark mode**: Class-based dark mode support
- **Custom colors**: HSL-based color system
- **Animations**: Custom animations for interactions
- **Container**: Centered containers with responsive padding

## 📊 Performance & SEO

### Current Performance
- **Bundle Size**: 295KB (needs optimization - target: <200KB)
- **Code Splitting**: Ready for implementation with React.lazy
- **Image Optimization**: Manual optimization (WebP conversion recommended)
- **Pagination**: Implemented (6 posts per page)
- **Theme System**: Full dark/light mode support

### SEO Features
- **Meta Tags**: Basic meta description and title
- **Google Analytics**: GA4 implementation (G-HSXHX5TG2Z)
- **Sitemap**: Manual sitemap in `public/docs/`
- **Social Sharing**: Open Graph tags ready for implementation

## 🚨 Known Issues & Next Priorities

### 🔥 Top 3 Immediate Priorities

1. **Security Headers Implementation** (1-2 days)
   - Add Content Security Policy (CSP) headers
   - Implement security headers for production deployment
   - Critical for production security posture

2. **Error Boundaries** (1-2 days)
   - Implement React error boundaries throughout the app
   - Add graceful error handling and fallback UI
   - Prevent app crashes and improve debugging

3. **Bundle Optimization & Code Splitting** (2-3 days)
   - Current bundle size: 295KB (needs optimization)
   - Implement route-based code splitting with React.lazy
   - Improve Core Web Vitals and load performance

### Recently Completed ✅
- ~~Security vulnerabilities patched~~ ✅
- ~~Archive, Privacy, and Terms pages implemented~~ ✅
- ~~Blog pagination (6 posts per page)~~ ✅
- ~~Dark mode with system preference support~~ ✅
- ~~Comprehensive accessibility improvements~~ ✅
- ~~TypeScript strict compliance~~ ✅

### Performance Optimizations Needed
- Image lazy loading and WebP conversion
- Bundle size optimization (current: 295KB)
- SEO meta tags implementation
- Performance monitoring setup

**See [TASK_LIST.md](./TASK_LIST.md) for comprehensive improvement plan.**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript strict mode
- Use ESLint configuration provided
- Maintain component documentation
- Test on multiple screen sizes
- Ensure accessibility compliance

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Abby Chung**
- GitHub: [@abby-chung](https://github.com/abby-chung)
- Website: [https://abby-chung.github.io/pineapplepizza](https://abby-chung.github.io/pineapplepizza)

---

*Built with ❤️ and ☕ - documenting the journey of learning, creating, and sharing.*