/**
 * SEO Meta Tags Utility
 * Handles setting meta tags for pages and social media sharing
 */

export interface SeoMeta {
  title: string
  description: string
  keywords?: string
  canonical?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogType?: 'website' | 'article' | 'blog'
  twitterCard?: 'summary' | 'summary_large_image'
  twitterImage?: string
  author?: string
  publishedDate?: string
  modifiedDate?: string
  imageAlt?: string
}

const BASE_URL = 'https://abby-chung.github.io/pineapplepizza'
const DEFAULT_IMAGE = `${BASE_URL}/images/og-image.png`
const SITE_NAME = 'Pineapple Pizza'

/**
 * Set meta tags for a page
 */
export const setSeoMeta = (meta: SeoMeta): void => {
  // Title
  document.title = meta.title ? `${meta.title} | ${SITE_NAME}` : SITE_NAME

  // Remove existing meta tags that we'll be updating
  const existingMetas = document.querySelectorAll(
    'meta[name="description"], meta[property^="og:"], meta[name^="twitter:"], meta[name="keywords"], meta[name="author"]'
  )
  existingMetas.forEach((tag) => tag.remove())

  // Description
  addMetaTag('description', meta.description)

  // Keywords
  if (meta.keywords) {
    addMetaTag('keywords', meta.keywords)
  }

  // Canonical URL
  if (meta.canonical) {
    let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (!canonicalTag) {
      canonicalTag = document.createElement('link') as HTMLLinkElement
      canonicalTag.rel = 'canonical'
      document.head.appendChild(canonicalTag)
    }
    canonicalTag.href = meta.canonical
  }

  // Open Graph Tags
  addMetaTag('og:title', meta.ogTitle || meta.title, 'property')
  addMetaTag('og:description', meta.ogDescription || meta.description, 'property')
  addMetaTag(
    'og:image',
    meta.ogImage || DEFAULT_IMAGE,
    'property'
  )
  addMetaTag('og:image:alt', meta.imageAlt || meta.title, 'property')
  addMetaTag('og:type', meta.ogType || 'website', 'property')
  addMetaTag('og:url', meta.canonical || BASE_URL, 'property')
  addMetaTag('og:site_name', SITE_NAME, 'property')

  // Twitter Card Tags
  addMetaTag('twitter:card', meta.twitterCard || 'summary_large_image')
  addMetaTag('twitter:title', meta.ogTitle || meta.title)
  addMetaTag('twitter:description', meta.ogDescription || meta.description)
  if (meta.twitterImage || meta.ogImage) {
    addMetaTag('twitter:image', meta.twitterImage || meta.ogImage || DEFAULT_IMAGE)
  }
  addMetaTag('twitter:site', '@pineapplepizza')

  // Article meta tags
  if (meta.ogType === 'article') {
    if (meta.publishedDate) {
      addMetaTag('article:published_time', meta.publishedDate, 'property')
    }
    if (meta.modifiedDate) {
      addMetaTag('article:modified_time', meta.modifiedDate, 'property')
    }
    if (meta.author) {
      addMetaTag('article:author', meta.author, 'property')
    }
  }

  // Author
  if (meta.author) {
    addMetaTag('author', meta.author)
  }
}

/**
 * Add or update a meta tag
 */
const addMetaTag = (
  name: string,
  content: string,
  attribute: 'name' | 'property' = 'name'
): void => {
  if (!content) return

  const selector =
    attribute === 'property' ? `meta[property="${name}"]` : `meta[name="${name}"]`
  let tag = document.querySelector(selector) as HTMLMetaElement

  if (!tag) {
    tag = document.createElement('meta') as HTMLMetaElement
    tag.setAttribute(attribute, name)
    document.head.appendChild(tag)
  }

  tag.setAttribute('content', content)
}

/**
 * Reset meta tags to default
 */
export const resetSeoMeta = (): void => {
  setSeoMeta({
    title: SITE_NAME,
    description:
      'A personal blog about coffee, books, movies, photography, and technical learning',
    keywords: 'blog, coffee, books, movies, photography, technology, learning',
    canonical: BASE_URL,
  })
}

/**
 * Hook for setting SEO meta tags in components
 */
export const useSeoMeta = (meta: SeoMeta): void => {
  React.useEffect(() => {
    setSeoMeta(meta)
    window.scrollTo(0, 0)
  }, [meta])
}

// Import React for the hook
import React from 'react'
