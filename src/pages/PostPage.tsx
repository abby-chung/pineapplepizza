import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react'
import { blogPosts } from '@/data/posts'
import NotFound from './NotFound'
import MarkdownContent from '@/components/MarkdownContent'

const PostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  
  const post = blogPosts.find(p => p.slug === slug)
  
  if (!post) {
    return <NotFound />
  }

  // Get related posts (same tags, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.tags.some(tag => post.tags.includes(tag)))
    .slice(0, 3)

  return (
    <div className="max-w-4xl mx-auto space-y-8 fade-in">
      {/* Back Button */}
      <Button variant="ghost" asChild className="mb-4">
        <Link to="/blog">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>
      </Button>

      {/* Article Header */}
      <header className="space-y-6">
        <div className="space-y-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
            <Button variant="ghost" size="sm" className="p-0 h-auto">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        <Separator />
      </header>

      {/* Article Content */}
      <article className="prose prose-lg max-w-none">
        {/* <div 
          dangerouslySetInnerHTML={{ __html: post.content }}
          className="space-y-6"
        /> */}
        <MarkdownContent content={post.content} />
      </article>

      <Separator />

      {/* Author Info */}
      <Card>
        <CardHeader>
          <CardTitle>About the Author</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-lg font-semibold text-primary">
                {post.author.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">{post.author}</h3>
              <p className="text-muted-foreground">
                Passionate about coffee, books, TV shows, movies, and the art of surviving in civilization. 
                Always learning, always experimenting, and documenting the journey along the way.
              </p>
              <p className="text-muted-foreground">
                有時候太認真、有時候不負責任，希望此處不會雜草叢生。
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Card key={relatedPost.id} className="hover:shadow-lg transition-shadow group">
                <CardHeader>
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-1">
                      {relatedPost.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      <Link to={`/blog/${relatedPost.slug}`}>
                        {relatedPost.title}
                      </Link>
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {relatedPost.excerpt}
                  </p>
                  <div className="mt-3 text-xs text-muted-foreground">
                    {relatedPost.date} • {relatedPost.readTime}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Navigation */}
      <div className="flex justify-center pt-8">
        <Button asChild>
          <Link to="/blog">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to All Posts
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default PostPage