import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, Globe, Archive as ArchiveIcon } from 'lucide-react'
import { blogPosts } from '@/data/posts'

const Archive: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string | null>(null)

  // Group posts by year
  const postsByYear = useMemo(() => {
    const grouped = blogPosts.reduce((acc, post) => {
      const year = new Date(post.date).getFullYear().toString()
      if (!acc[year]) {
        acc[year] = []
      }
      acc[year].push(post)
      return acc
    }, {} as Record<string, typeof blogPosts>)

    // Sort years in descending order and posts within each year by date
    const sortedYears = Object.keys(grouped).sort((a, b) => parseInt(b) - parseInt(a))
    const result: Record<string, typeof blogPosts> = {}
    
    sortedYears.forEach(year => {
      result[year] = grouped[year].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    })

    return result
  }, [])

  const years = Object.keys(postsByYear)

  return (
    <div className="max-w-6xl mx-auto space-y-8 fade-in">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
          <ArchiveIcon className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold text-foreground">Blog Archive</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Browse through all {blogPosts.length} blog posts organized by year and category.
        </p>
      </div>

      {/* Year Filter */}
      <div className="flex flex-wrap justify-center gap-2">
        <Button
          variant={selectedYear === null ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedYear(null)}
          className="rounded-full"
        >
          All Posts ({blogPosts.length})
        </Button>
        {years.map((year) => (
          <Button
            key={year}
            variant={selectedYear === year ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedYear(year)}
            className="rounded-full"
          >
            {year} ({postsByYear[year].length})
          </Button>
        ))}
      </div>

      {/* Posts List */}
      <div className="space-y-6">
        {selectedYear ? (
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">{selectedYear}</h2>
            <div className="grid gap-4">
              {postsByYear[selectedYear].map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
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
                        <CardTitle className="text-xl hover:text-primary transition-colors">
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
                    <p className="text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {years.map((year) => (
              <div key={year}>
                <h2 className="text-2xl font-bold text-foreground mb-4">{year}</h2>
                <div className="grid gap-4">
                  {postsByYear[year].map((post) => (
                    <Card key={post.id} className="hover:shadow-lg transition-shadow">
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
                            <CardTitle className="text-xl hover:text-primary transition-colors">
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
                        <p className="text-muted-foreground leading-relaxed">
                          {post.excerpt}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Archive