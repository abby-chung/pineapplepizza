/**
 * Security utilities for the application
 */

/**
 * Sanitize HTML content to prevent XSS attacks
 * This is a basic implementation - for production, consider using DOMPurify
 */
export const sanitizeHtml = (html: string): string => {
  // Create a temporary div element
  const temp = document.createElement('div')
  temp.textContent = html
  return temp.innerHTML
}

/**
 * Validate and sanitize URLs to prevent malicious redirects
 */
export const sanitizeUrl = (url: string): string => {
  try {
    const parsedUrl = new URL(url, window.location.origin)
    
    // Only allow http, https, and mailto protocols
    const allowedProtocols = ['http:', 'https:', 'mailto:']
    if (!allowedProtocols.includes(parsedUrl.protocol)) {
      return '#'
    }
    
    return parsedUrl.toString()
  } catch {
    // Invalid URL, return safe fallback
    return '#'
  }
}

/**
 * Check if the current connection is secure (HTTPS)
 */
export const isSecureConnection = (): boolean => {
  return window.location.protocol === 'https:' || window.location.hostname === 'localhost'
}

/**
 * Generate a Content Security Policy nonce for inline scripts
 * Note: This is a client-side implementation. For better security,
 * nonces should be generated server-side
 */
export const generateNonce = (): string => {
  const array = new Uint8Array(16)
  crypto.getRandomValues(array)
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('')
}

/**
 * Validate that external links are safe
 */
export const validateExternalLink = (url: string): boolean => {
  try {
    const parsedUrl = new URL(url)
    
    // Block known malicious domains (this is a basic example)
    const blockedDomains = [
      'malicious-site.com',
      'phishing-site.com'
    ]
    
    return !blockedDomains.some(domain => parsedUrl.hostname.includes(domain))
  } catch {
    return false
  }
}

/**
 * Security configuration object
 */
export const securityConfig = {
  // Content Security Policy directives
  csp: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'", "https://www.googletagmanager.com", "https://www.google-analytics.com"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ["'self'", "data:", "https:"],
    fontSrc: ["'self'", "data:"],
    connectSrc: ["'self'", "https://www.google-analytics.com", "https://analytics.google.com"],
    frameAncestors: ["'none'"],
    baseUri: ["'self'"],
    formAction: ["'self'"]
  },
  
  // Security headers
  headers: {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin'
  }
} as const

/**
 * Log security warnings in development
 */
export const logSecurityWarning = (message: string): void => {
  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    console.warn(`🔒 Security Warning: ${message}`)
  }
}

/**
 * Check if the application is running in a secure context
 */
export const checkSecurityContext = (): void => {
  const isProduction = typeof window !== 'undefined' && 
    window.location.hostname !== 'localhost' && 
    window.location.hostname !== '127.0.0.1'
    
  if (!isSecureConnection() && isProduction) {
    logSecurityWarning('Application is not running over HTTPS in production')
  }
  
  // Check if CSP is properly configured
  const metaCsp = document.querySelector('meta[http-equiv="Content-Security-Policy"]')
  if (!metaCsp) {
    logSecurityWarning('Content Security Policy meta tag not found')
  }
  
  // Check for mixed content
  if (window.location.protocol === 'https:' && document.querySelectorAll('[src^="http:"]').length > 0) {
    logSecurityWarning('Mixed content detected - HTTP resources on HTTPS page')
  }
}