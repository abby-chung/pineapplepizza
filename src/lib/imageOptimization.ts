/**
 * Image Optimization Utilities
 * Handles lazy loading, WebP format support, and blur-up effects
 */

export interface ImageOptimizationOptions {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  loading?: 'lazy' | 'eager'
  placeholderColor?: string
}

/**
 * Generate WebP and fallback image sources
 */
export const getImageSources = (
  imagePath: string
): { webp?: string; fallback: string } => {
  // Check if the image path already has an extension
  const hasExtension = /\.\w+$/.test(imagePath)
  const baseImagePath = hasExtension
    ? imagePath.substring(0, imagePath.lastIndexOf('.'))
    : imagePath

  return {
    webp: `${baseImagePath}.webp`,
    fallback: imagePath,
  }
}

/**
 * Create a simple placeholder image (blur-up effect)
 * Returns a small, blurred version as data URI
 */
export const createPlaceholder = (
  color: string = '#e5e7eb'
): string => {
  // Create a simple colored SVG as placeholder
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"><rect fill="${color}" width="1" height="1"/></svg>`;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

/**
 * Preload an image
 */
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`))
    img.src = src
  })
}

/**
 * Check if the browser supports WebP
 */
let webpSupport: boolean | null = null

export const supportsWebP = (): boolean => {
  if (webpSupport !== null) return webpSupport

  if (typeof document === 'undefined') {
    webpSupport = false
    return false
  }

  const canvas = document.createElement('canvas')
  canvas.width = 1
  canvas.height = 1

  try {
    const webpData =
      'data:image/webp;base64,UklGRjoIAABXRUJQVlA4IC4IAAAAAA8APwD+JZwJ'
    webpSupport =
      canvas.toDataURL('image/webp').indexOf('image/webp') === 5 ||
      canvas.toDataURL('image/webp') === webpData
  } catch (err) {
    webpSupport = false
  }

  return webpSupport
}

/**
 * Get optimal image format based on browser support
 */
export const getOptimalImageFormat = (
  imagePath: string
): { format: 'webp' | 'jpg' | 'png'; src: string } => {
  if (supportsWebP()) {
    const sources = getImageSources(imagePath)
    return {
      format: 'webp',
      src: sources.webp || sources.fallback,
    }
  }

  return {
    format: 'jpg',
    src: imagePath,
  }
}

/**
 * Calculate aspect ratio for image
 */
export const calculateAspectRatio = (
  width?: number,
  height?: number
): string | undefined => {
  if (width && height) {
    return `${width} / ${height}`
  }
  return undefined
}
