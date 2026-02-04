import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Home, Search, Coffee } from 'lucide-react'
import { useSeoMeta } from '@/lib/seo'

const NotFound: React.FC = () => {
  useSeoMeta({
    title: '404 - Page Not Found',
    description: 'The page you are looking for could not be found. Please check the URL or return to the home page.',
    canonical: 'https://abby-chung.github.io/pineapplepizza/404',
    ogTitle: '404 - Page Not Found',
    ogDescription: 'The page you are looking for could not be found.',
    ogType: 'website',
  })
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <Card className="w-full max-w-md text-center">
        <CardHeader className="pb-6">
          <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
            <Coffee className="h-8 w-8 text-muted-foreground" />
          </div>
          <CardTitle className="text-2xl">Page Not Found</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            Looks like this page went for a coffee break and never came back. 
            Don't worry though – there's plenty more content to explore!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild>
              <Link to="/">
                <Home className="h-4 w-4 mr-2" />
                Go Home
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/blog">
                <Search className="h-4 w-4 mr-2" />
                Browse Posts
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default NotFound