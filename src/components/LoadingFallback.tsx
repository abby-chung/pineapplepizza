import React from 'react'

const LoadingFallback: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center">
        <div className="inline-flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">Loading page...</p>
      </div>
    </div>
  )
}

export default LoadingFallback
