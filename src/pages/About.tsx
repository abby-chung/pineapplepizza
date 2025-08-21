import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Coffee, Book, Film, Code, Heart, Mail, Github, Beer, Pizza, Linkedin} from 'lucide-react'

const About: React.FC = () => {
  const skills = [
    'Photography', 'Figma', 'Adobe Creative Cloud', 'Final Cut Pro', 'DaVinci Resolve', 'Foodie', 'Coffee Addict'
  ]

  const interests = [
    { name: 'Coffee Brewing', icon: Coffee, description: 'Exploring different brewing methods and coffee origins' },
    { name: 'Reading', icon: Book, description: 'Fiction, non-fiction, and manga' },
    { name: 'Film & TV', icon: Film, description: 'Appreciating cinematography and storytelling' },
    { name: 'Vibe Coding', icon: Code, description: 'Learning to code through experimentation and joy' },
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-12 fade-in">
      {/* Header */}
      <div className="text-center space-y-6">
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
          <Pizza className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-4xl font-bold text-foreground">About Me</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Welcome to my corner of the internet! I'm passionate about life's simple pleasures 
          and complex problems. This blog is where I document my journey through both.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Personal Story */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              My Story
            </CardTitle>
          </CardHeader>
          <CardContent className="prose">
            <p>
              I believe that the best learning happens when you're genuinely curious and having fun.
              – learning through experimentation and authentic interest.
            </p>
            <p>
              When I'm not behind a screen, you'll find me brewing the perfect cup of coffee, 
              getting lost in a good book, or analyzing the latest film that caught my attention. 
              Each of these passions informs the others in unexpected ways.
            </p>
            <p>
              This blog serves as both a public notebook and a digital journal – a place where 
              I can share what I'm learning, thinking, and discovering along the way.
            </p>
            <p>
              這個部落格是嘗試 Vibe Coding 所建立而成的，也同時<s>逼迫</s>自己記錄每天發生的事情、學習的東西，
              試圖重新找回熱情和人生方向。
            </p>
          </CardContent>
        </Card>

        {/* Technical Skills */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Beer className="h-5 w-5 text-primary" />
              Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Currently exploring these technologies through various projects and learning adventures:
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Always learning, always experimenting. Figuring out what I want to do as I learn every new thing.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Interests */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center text-foreground">What Drives Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {interests.map((interest) => (
            <Card key={interest.name} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <interest.icon className="h-5 w-5 text-primary" />
                  </div>
                  {interest.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{interest.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact */}
      <Card className="text-center">
        <CardHeader>
          <CardTitle>Let's Connect</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            I love connecting with fellow coffee enthusiasts, book lovers, film buffs, and coding adventurers. 
            Feel free to reach out if you want to chat about any of these topics!
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="sm" className="rounded-full">
              <Mail className="h-4 w-4 mr-2" />
              Email
            </Button>
            <Button asChild variant="outline" size="sm" className="rounded-full">
              <a href="https://github.com/abby-chung" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default About