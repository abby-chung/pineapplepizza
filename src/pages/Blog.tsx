import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Search, Calendar, Clock, Globe } from 'lucide-react'
import { blogPosts, type BlogPost } from '@/data/posts'

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
            <Link to={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </CardTitle>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </div>
            <div className="flex items-center gap-1">
              <Globe className="h-4 w-4" />
              {post.language}
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

const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

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

  return (
    <div className="max-w-3xl mx-auto space-y-8 fade-in">
      {/* The style was originally just space-y-8 and fade-in */}
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
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 rounded-full"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(null)}
            className="rounded-full"
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
          <div className="grid gap-6">
            {filteredPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>

      {/* Show total count */}
      <div className="text-center text-sm text-muted-foreground">
        Showing {filteredPosts.length} of {blogPosts.length} posts
      </div>
    </div>
  )
}

export default Blog