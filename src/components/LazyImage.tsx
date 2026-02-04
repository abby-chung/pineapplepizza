import React, { useState, useEffect, useRef } from 'react'
import {
  getImageSources,
  createPlaceholder,
  supportsWebP,
} from '@/lib/imageOptimization'

interface LazyImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  placeholderColor?: string
  onLoad?: () => void
}

/**
 * LazyImage component with intersection observer
 * Loads images only when they're about to enter the viewport
 * Supports WebP with fallback and blur-up placeholder effect
 */
const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  placeholderColor = '#e5e7eb',
  onLoad,
}) => {
  const [imageSrc, setImageSrc] = useState<string>(createPlaceholder(placeholderColor))
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    // Check if IntersectionObserver is available
    if (!('IntersectionObserver' in window)) {
      // Fallback for browsers that don't support IntersectionObserver
      setImageSrc(src)
      return
    }

    const observerOptions = {
      root: null,
      rootMargin: '50px', // Start loading 50px before entering viewport
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && imgRef.current) {
          // Determine which image source to use (WebP or fallback)
          const imageToLoad = supportsWebP()
            ? getImageSources(src).webp || src
            : src

          setImageSrc(imageToLoad)
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current)
      }
    }
  }, [src])

  const handleImageLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const handleImageError = () => {
    setError(true)
    // Fallback to the original source if WebP fails
    if (imageSrc !== src) {
      setImageSrc(src)
    }
  }

  const containerStyle =
    width && height
      ? {
          aspectRatio: `${width} / ${height}`,
        }
      : {}

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={containerStyle}
    >
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        onLoad={handleImageLoad}
        onError={handleImageError}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded && !error ? 'opacity-100' : 'opacity-50'
        }`}
        loading="lazy"
      />
      {!isLoaded && !error && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      {error && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <span className="text-xs text-muted-foreground">Image failed to load</span>
        </div>
      )}
    </div>
  )
}

export default LazyImage
