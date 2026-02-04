import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Coffee, Book, Film, Code } from 'lucide-react'
import { blogPosts } from '@/data/posts'
import { useSeoMeta } from '@/lib/seo'

interface Interest {
  name: string
  icon: React.ComponentType<{ className?: string }>
  description: string
}

const INTERESTS: Interest[] = [
  { name: 'Coffee', icon: Coffee, description: 'Brewing methods, tasting notes, and cafe discoveries' },
  { name: 'Books', icon: Book, description: 'Literary adventures and reading reflections' },
  { name: 'Movies & TV Shows', icon: Film, description: 'Cinematic experiences and film analysis' },
  { name: 'Modern-Day Survival', icon: Code, description: 'Technical learning journey and coding experiments' },
]

const Home: React.FC = () => {
  const featuredPosts = (() => {
    const featured = blogPosts.filter(p => p.featured)
    return (featured.length ? featured : blogPosts.slice(0, 4))
      .sort((a, b) => (a.featuredOrder ?? 0) - (b.featuredOrder ?? 0))
      .slice(0, 4)
  })()

  useSeoMeta({
    title: 'Home',
    description: 'Welcome to Pineapple Pizza - A personal blog about coffee, books, movies, photography, and technical learning. Bilingual content mixing English and Chinese.',
    keywords: 'blog, coffee, books, movies, photography, technology, learning, personal, journal',
    canonical: 'https://abby-chung.github.io/pineapplepizza/',
    ogTitle: 'Pineapple Pizza - Personal Blog',
    ogDescription: 'Exploring coffee, books, movies, and technical learning journey. A bilingual digital journal.',
    ogType: 'website',
  })

  return (
    <div className="max-w-6xl mx-auto space-y-12 fade-in">
      {/* The style was originally just space-y-12 and fade-in */}
      {/* Hero Section */}
      <section className="text-center space-y-6 py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground">
          Welcome to Pineapple Pizza
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          We’ve got pineapple, ham, tomato sauce, and mozzarella cheese…
          Nah, just kidding. We only have coffee, photography, tech, and whatever burnt crust life throws at us. Hope you enjoy the meal!
        </p>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          中英內容交錯出現，訓練自己使用兩種語言論述喜歡和正在學習的東西，期望自己在迷惘的時候仍能累積點東西。
        </p>
        <Button asChild size="lg" className="rounded-full">
          <Link to="/blog">
            Explore Posts <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>

      {/* Interests Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center text-foreground">What I Write About</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INTERESTS.map((interest) => (
            <Card key={interest.name} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <interest.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{interest.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{interest.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-foreground">Featured Posts</h2>
          <Button variant="outline" asChild className="rounded-full">
            <Link to="/blog">
              View All Posts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2 items-center">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {post.featured && (
                        <Badge variant="secondary" className="text-xs">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-sm text-muted-foreground">
                  {post.date} • {post.readTime} • {post.language}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home