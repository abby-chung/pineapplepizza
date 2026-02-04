import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Eye, Cookie, Mail, Calendar } from 'lucide-react'
import { useSeoMeta } from '@/lib/seo'

const Privacy: React.FC = () => {
  useSeoMeta({
    title: 'Privacy Policy',
    description: 'Our privacy policy explains how we collect, use, and protect your personal information when you visit our blog.',
    keywords: 'privacy policy, privacy, data protection, GDPR',
    canonical: 'https://abby-chung.github.io/pineapplepizza/privacy',
    ogTitle: 'Privacy Policy - Pineapple Pizza',
    ogDescription: 'Read our complete privacy policy and how we handle your data.',
    ogType: 'website',
  })

  return (
    <div className="max-w-4xl mx-auto space-y-8 fade-in">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
          <Shield className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold text-foreground">Privacy Policy</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Your privacy is important to us. This policy explains how we collect, use, and protect your information.
        </p>
        <p className="text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* Content */}
      <div className="space-y-6">
        {/* Information We Collect */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-primary" />
              Information We Collect
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <h3>Automatically Collected Information</h3>
            <p>
              When you visit our website, we automatically collect certain information about your device, including:
            </p>
            <ul>
              <li>Time zone setting and location</li>
              <li>Operating system and platform</li>
              <li>Pages you visit and how you interact with our site</li>
            </ul>
            
            <h3>Information You Provide</h3>
            <p>
              Currently, this website does not collect personal information directly from users. 
              There are no contact forms, newsletter signups, or user accounts.
            </p>
          </CardContent>
        </Card>

        {/* Google Analytics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Google Analytics
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              We use Google Analytics to understand how visitors interact with our website. 
              Google Analytics collects information such as:
            </p>
            <ul>
              <li>How often users visit this site</li>
              <li>What pages they visit when they do so</li>
              <li>What other sites they used prior to coming to this site</li>
            </ul>
            <p>
              We use this information to improve our website. Google Analytics collects only the IP address 
              assigned to you on the date you visit this site, rather than your name or other identifying information.
            </p>
            <p>
              You can opt out of Google Analytics by installing the 
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Google Analytics opt-out browser add-on
              </a>.
            </p>
          </CardContent>
        </Card>

        {/* Cookies */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cookie className="h-5 w-5 text-primary" />
              Cookies and Local Storage
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              Our website uses cookies and local storage to enhance your browsing experience:
            </p>
            <ul>
              <li><strong>Google Analytics Cookies:</strong> Used to distinguish users and sessions</li>
              <li><strong>Theme Preferences:</strong> Stored locally to remember your dark/light mode preference</li>
              <li><strong>Functional Cookies:</strong> Essential for website functionality</li>
            </ul>
            <p>
              You can control cookies through your browser settings. However, disabling cookies may 
              affect the functionality of this website.
            </p>
          </CardContent>
        </Card>

        {/* Data Usage */}
        <Card>
          <CardHeader>
            <CardTitle>How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>We use the information we collect to:</p>
            <ul>
              <li>Improve our website content and user experience</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Ensure the website functions properly</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p>
              We do not sell, trade, or otherwise transfer your information to third parties, 
              except for Google Analytics as described above.
            </p>
          </CardContent>
        </Card>

        {/* Data Protection */}
        <Card>
          <CardHeader>
            <CardTitle>Data Protection</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              We implement appropriate security measures to protect your information. However, 
              no method of transmission over the internet is 100% secure.
            </p>
            <p>
              This website is hosted on GitHub Pages, which provides security measures for static websites. 
              All data transmission is encrypted using HTTPS.
            </p>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card>
          <CardHeader>
            <CardTitle>Your Rights</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>You have the right to:</p>
            <ul>
              <li>Know what personal information we collect about you</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of analytics tracking</li>
              <li>Control cookie settings in your browser</li>
            </ul>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              Contact Us
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              If you have any questions about this Privacy Policy, please contact us through our 
              <a href="https://github.com/abby-chung/pineapplepizza" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                GitHub repository
              </a>.
            </p>
          </CardContent>
        </Card>

        {/* Updates */}
        <Card>
          <CardHeader>
            <CardTitle>Policy Updates</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Privacy