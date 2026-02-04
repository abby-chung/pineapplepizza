import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { lazy } from 'react'
import Layout from './components/layout/Layout'
import ErrorBoundary from './components/ErrorBoundary'
import LoadingFallback from './components/LoadingFallback'

// Lazy-loaded pages for code splitting
const Home = lazy(() => import('./pages/Home'))
const Blog = lazy(() => import('./pages/Blog'))
const About = lazy(() => import('./pages/About'))
const PostPage = lazy(() => import('./pages/PostPage'))
const Archive = lazy(() => import('./pages/Archive'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <Layout>
      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/archive" element={<Archive />} />
            <Route path="/blog/:slug" element={<PostPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Layout>
  )
}

export default App