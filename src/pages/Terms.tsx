import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, Scale, AlertTriangle, Mail } from 'lucide-react'
import { useSeoMeta } from '@/lib/seo'

const Terms: React.FC = () => {
  useSeoMeta({
    title: 'Terms of Service',
    description: 'Terms of service for Pineapple Pizza blog. Please read these terms and conditions before using our website.',
    keywords: 'terms of service, terms and conditions, legal, usage agreement',
    canonical: 'https://abby-chung.github.io/pineapplepizza/terms',
    ogTitle: 'Terms of Service - Pineapple Pizza',
    ogDescription: 'Read the terms and conditions for using Pineapple Pizza blog.',
    ogType: 'website',
  })

  return (
    <div className="max-w-4xl mx-auto space-y-8 fade-in">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
          <FileText className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold text-foreground">Terms of Service</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Please read these terms and conditions carefully before using our website.
        </p>
        <p className="text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* Content */}
      <div className="space-y-6">
        {/* Acceptance of Terms */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-primary" />
              Acceptance of Terms
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              By accessing and using this website (pineapplepizza), you accept and agree to be bound by 
              the terms and provision of this agreement. If you do not agree to abide by the above, 
              please do not use this service.
            </p>
          </CardContent>
        </Card>

        {/* Use License */}
        <Card>
          <CardHeader>
            <CardTitle>Use License</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              Permission is granted to temporarily download one copy of the materials on this website 
              for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
              <li>attempt to decompile or reverse engineer any software contained on the website</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>
            <p>
              This license shall automatically terminate if you violate any of these restrictions and 
              may be terminated by us at any time. Upon terminating your viewing of these materials or 
              upon the termination of this license, you must destroy any downloaded materials in your 
              possession whether in electronic or printed format.
            </p>
          </CardContent>
        </Card>

        {/* Content and Intellectual Property */}
        <Card>
          <CardHeader>
            <CardTitle>Content and Intellectual Property</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              All content on this website, including but not limited to text, graphics, images, photographs, 
              and blog posts, is the property of the website owner unless otherwise stated.
            </p>
            <p>
              The blog posts and personal content are original works and are protected by copyright law. 
              You may share links to our content, but you may not reproduce, distribute, or create 
              derivative works without explicit permission.
            </p>
            <p>
              Some images and content may be sourced from third parties and are used under fair use or 
              with appropriate licensing. If you believe any content infringes on your copyright, 
              please contact us immediately.
            </p>
          </CardContent>
        </Card>

        {/* User Conduct */}
        <Card>
          <CardHeader>
            <CardTitle>User Conduct</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>You agree not to use this website to:</p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Transmit any harmful, threatening, abusive, or defamatory content</li>
              <li>Attempt to gain unauthorized access to any part of the website</li>
              <li>Interfere with or disrupt the website's functionality</li>
              <li>Use automated systems to access the website without permission</li>
              <li>Collect or harvest any personally identifiable information</li>
            </ul>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-primary" />
              Disclaimer
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              The materials on this website are provided on an 'as is' basis. We make no warranties, 
              expressed or implied, and hereby disclaim and negate all other warranties including without 
              limitation, implied warranties or conditions of merchantability, fitness for a particular 
              purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            <p>
              Further, we do not warrant or make any representations concerning the accuracy, likely 
              results, or reliability of the use of the materials on its website or otherwise relating 
              to such materials or on any sites linked to this site.
            </p>
          </CardContent>
        </Card>

        {/* Limitations */}
        <Card>
          <CardHeader>
            <CardTitle>Limitations</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              In no event shall the website owner or its suppliers be liable for any damages (including, 
              without limitation, damages for loss of data or profit, or due to business interruption) 
              arising out of the use or inability to use the materials on this website, even if the 
              website owner or an authorized representative has been notified orally or in writing of 
              the possibility of such damage. Because some jurisdictions do not allow limitations on 
              implied warranties, or limitations of liability for consequential or incidental damages, 
              these limitations may not apply to you.
            </p>
          </CardContent>
        </Card>

        {/* External Links */}
        <Card>
          <CardHeader>
            <CardTitle>External Links</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              This website may contain links to external websites that are not provided or maintained 
              by or in any way affiliated with us. We do not guarantee the accuracy, relevance, 
              timeliness, or completeness of any information on these external websites.
            </p>
            <p>
              Please note that when you click on links and leave our website, our policies no longer 
              govern. You should read the privacy policies and terms of service of these external sites.
            </p>
          </CardContent>
        </Card>

        {/* Privacy */}
        <Card>
          <CardHeader>
            <CardTitle>Privacy</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              Your privacy is important to us. Please review our Privacy Policy, which also governs 
              your use of the website, to understand our practices.
            </p>
          </CardContent>
        </Card>

        {/* Modifications */}
        <Card>
          <CardHeader>
            <CardTitle>Modifications</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              We may revise these terms of service for its website at any time without notice. 
              By using this website, you are agreeing to be bound by the then current version of 
              these terms of service.
            </p>
          </CardContent>
        </Card>

        {/* Governing Law */}
        <Card>
          <CardHeader>
            <CardTitle>Governing Law</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              These terms and conditions are governed by and construed in accordance with the laws 
              of the jurisdiction in which the website owner resides, and you irrevocably submit to 
              the exclusive jurisdiction of the courts in that state or location.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              If you have any questions about these Terms of Service, please contact us.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Terms