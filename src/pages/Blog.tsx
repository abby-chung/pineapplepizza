import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Search, Calendar, Clock, Globe, ChevronLeft, ChevronRight } from 'lucide-react'
import { blogPosts, type BlogPost } from '@/data/posts'
import { useSeoMeta } from '@/lib/seo'

const POSTS_PER_PAGE = 6

/**
 * Renders a single blog post card with metadata
 */
const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <Card className="hover:shadow-lg transition-shadow group">
    <CardHeader>
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2 flex-1">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <CardTitle className="text-2xl group-hover:text-primary transition-colors">
            <Link to={`/blog/${post.slug}`} aria-label={`Read blog post: ${post.title}`}>
              {post.title}
            </Link>
          </CardTitle>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" aria-hidden="true" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Globe className="h-4 w-4" aria-hidden="true" />
              <span>{post.language}</span>
            </div>                        
          </div>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-base leading-relaxed">
        {post.excerpt}
      </CardDescription>
    </CardContent>
  </Card>
)

/**
 * Pagination component with accessible navigation
 */
const Pagination: React.FC<{
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}> = ({ currentPage, totalPages, onPageChange }) => {
  const getVisiblePages = () => {
    const delta = 2
    const range = []
    const rangeWithDots = []

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i)
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...')
    } else {
      rangeWithDots.push(1)
    }

    rangeWithDots.push(...range)

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages)
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages)
    }

    return rangeWithDots
  }

  if (totalPages <= 1) return null

  return (
    <nav className="flex items-center justify-center space-x-2" aria-label="Blog pagination">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Go to previous page"
        className="rounded-full"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {getVisiblePages().map((page, index) => (
        <React.Fragment key={index}>
          {page === '...' ? (
            <span className="px-3 py-2 text-muted-foreground">...</span>
          ) : (
            <Button
              variant={currentPage === page ? "default" : "outline"}
              size="sm"
              onClick={() => onPageChange(page as number)}
              aria-label={`Go to page ${page}`}
              aria-current={currentPage === page ? "page" : undefined}
              className="rounded-full min-w-[40px]"
            >
              {page}
            </Button>
          )}
        </React.Fragment>
      ))}

      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Go to next page"
        className="rounded-full"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </nav>
  )
}

const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  useSeoMeta({
    title: 'Blog',
    description: 'Explore all blog posts covering coffee, books, movies, photography, and technical learning. Discover articles and insights on various topics.',
    keywords: 'blog posts, articles, coffee, learning, technology, photography, movies, books',
    canonical: 'https://abby-chung.github.io/pineapplepizza/blog',
    ogTitle: 'Blog - Pineapple Pizza',
    ogDescription: 'Read blog posts about coffee, books, movies, photography, and technical learning.',
    ogType: 'website',
  })

  // Get unique categories
  const categories = useMemo(() => {
    const allCategories = blogPosts.flatMap(post => post.tags)
    return Array.from(new Set(allCategories))
  }, [])

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = searchQuery === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      
      const matchesCategory = selectedCategory === null || post.tags.includes(selectedCategory)
      
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const currentPosts = filteredPosts.slice(startIndex, endIndex)

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, selectedCategory])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scroll to top of posts section
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8 fade-in">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Blog</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Thoughts, experiences, and learnings from my journey through coffee, books, movies, and code.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="space-y-6">
        {/* Search Bar */}
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
          <Input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 rounded-full"
            aria-label="Search blog posts"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Filter posts by category">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(null)}
            className="rounded-full"
            aria-pressed={selectedCategory === null}
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
              aria-pressed={selectedCategory === category}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Posts List */}
      <div className="space-y-6">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No posts found matching your criteria.</p>
          </div>
        ) : (
          <>
            <div className="grid gap-6" role="main" aria-label="Blog posts">
              {currentPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>

      {/* Show count and pagination info */}
      <div className="text-center text-sm text-muted-foreground">
        {filteredPosts.length === 0 ? (
          'No posts found'
        ) : (
          <>
            Showing {startIndex + 1}-{Math.min(endIndex, filteredPosts.length)} of {filteredPosts.length} posts
            {totalPages > 1 && (
              <span className="block mt-1">
                Page {currentPage} of {totalPages}
              </span>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default Blog