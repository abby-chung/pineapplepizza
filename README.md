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

#### Image Optimization & WebP Conversion

This blog includes automatic lazy loading and WebP format detection. To maximize performance benefits, convert your images to WebP format:

**What the Code Does:**
- ✅ Lazy loads images with Intersection Observer (50px preload margin)
- ✅ Detects browser WebP support
- ✅ Shows blur-up placeholders while loading
- ⚠️ **Does NOT** automatically convert images to WebP

**Converting Images to WebP:**

**Option 1: Using Online Tools (Easiest)**
1. [CloudConvert](https://cloudconvert.com/) - Drag & drop, convert to WebP
2. [XConvert](https://xconvert.com/) - Simple online converter
3. Upload JPG/PNG, download WebP with same filename

**Option 2: Command Line (Fastest for bulk conversion)**

Install `cwebp` (Google's WebP converter):
```bash
# macOS
brew install webp

# Ubuntu/Debian
sudo apt-get install webp

# Or download from https://developers.google.com/speed/webp/download
```

Convert all images:
```bash
# Single image
cwebp -q 80 input.jpg -o input.webp

# Batch convert all JPGs in a directory
for file in public/images/posts/**/*.jpg; do
  cwebp -q 80 "$file" -o "${file%.jpg}.webp"
done

# For PNGs
for file in public/images/posts/**/*.png; do
  cwebp -q 80 "$file" -o "${file%.png}.webp"
done
```

**Option 3: Build Script Integration**

Add to `package.json`:
```json
{
  "scripts": {
    "optimize-images": "for file in public/images/posts/**/*.{jpg,png}; do cwebp -q 80 \"$file\" -o \"${file%.*}.webp\"; done"
  }
}
```

Then run: `npm run optimize-images`

**File Structure After Conversion:**
```
public/images/posts/
├── coffee/
│   ├── espresso.jpg        (original)
│   └── espresso.webp       (optimized - add this)
├── photography/
│   ├── sunset.png          (original)
│   └── sunset.webp         (optimized - add this)
```

**Performance Impact:**
| Format | Size | Savings | Browser Support |
|--------|------|---------|-----------------|
| JPG (quality 80) | 100% | - | All browsers |
| WebP (quality 80) | 60-70% | 30-40% smaller | 95%+ of browsers |

**How It Works:**
1. `LazyImage` component detects browser support
2. If WebP supported → loads `.webp` version (smaller, faster)
3. If not supported → falls back to original JPG/PNG
4. Lazy loading still works either way (improves perceived performance)

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

### ✅ Recent Performance Improvements

- **Bundle Size**: Reduced from 301KB → 66.26KB gzipped (78% reduction) ✅
- **Code Splitting**: All 8 pages lazy-loaded with React.lazy ✅
- **Image Optimization**: Lazy loading with Intersection Observer ✅
  - WebP format detection and fallback
  - 50px preload margin for smooth transitions
  - Blur-up placeholder effects
- **Error Handling**: Global error boundaries with graceful fallback UI ✅
- **SEO Meta Tags**: Dynamic meta tags for all pages ✅
  - Open Graph tags for social sharing
  - Twitter Card support
  - Article-specific metadata

### Current Performance Metrics
- **Main Bundle**: 200.58 KB → 66.26 KB gzipped
- **CSS**: 25.82 KB → 5.50 KB gzipped
- **Individual Page Chunks**: 1-12 KB each
- **Build Time**: ~3.5 seconds
- **TypeScript Coverage**: 100%
- **Zero Build Warnings**: ESLint strict mode

### SEO Features Implemented
- ✅ **Meta Tags**: Description, keywords, author on all pages
- ✅ **Open Graph**: `og:title`, `og:description`, `og:image`, `og:type`
- ✅ **Twitter Cards**: `twitter:card`, `twitter:image`
- ✅ **Canonical URLs**: Proper canonical links for each page
- ✅ **Article Metadata**: Published time, author, modified time
- ✅ **Google Analytics**: GA4 tracking (G-HSXHX5TG2Z)
- ✅ **Sitemap**: Manual sitemap in `public/docs/`
- ✅ **Security Headers**: CSP, X-Frame-Options, X-Content-Type-Options

### Next Performance Targets
- [ ] Core Web Vitals optimization (target: LCP <2.5s, CLS <0.1)
- [ ] Resource preloading for critical assets
- [ ] Image compression automation
- [ ] Service Worker for offline support
- [ ] Performance monitoring integration

## 🚨 Known Issues & Next Priorities

### ✅ Recently Completed

1. **Error Boundaries** ✅
   - Global error boundary wrapping entire app
   - Route-level error handling with fallback UI
   - Graceful error recovery options

2. **Bundle Optimization & Code Splitting** ✅
   - Route-based code splitting with React.lazy
   - 78% bundle size reduction (301KB → 66KB gzipped)
   - Suspense boundaries with loading fallback UI

3. **SEO Meta Tags Implementation** ✅
   - Comprehensive meta tags on all pages
   - Open Graph and Twitter Card support
   - Dynamic meta tags for individual posts

4. **Image Optimization & Lazy Loading** ✅
   - Intersection Observer with 50px preload margin
   - WebP format detection with automatic fallback
   - Blur-up placeholder effects during loading

5. **Security Headers Implementation** ✅
   - Content Security Policy (CSP) configured
   - HTTPS enforcement and clickjacking prevention
   - Security.txt configuration

### 🔥 Top 3 Next Priorities

1. **Performance Monitoring & Analytics** (1-2 days)
   - Add Core Web Vitals tracking (LCP, CLS, FID)
   - Real User Monitoring (RUM) integration
   - Performance budget setup

2. **Testing Infrastructure** (3-5 days)
   - Jest + React Testing Library setup
   - Unit tests for components
   - E2E tests with Cypress or Playwright

3. **Responsive Design & Mobile Optimization** (2-3 days)
   - Mobile navigation improvements
   - Touch interaction optimization
   - Tablet breakpoint refinement

**For a comprehensive list of all improvements, features, and roadmap, see [TASK_LIST.md](./TASK_LIST.md).**

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