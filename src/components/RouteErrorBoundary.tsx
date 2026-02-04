import React from 'react'

interface Props {
  error: Error
  resetError: () => void
}

const RouteErrorBoundary: React.FC<Props> = ({ error, resetError }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <div className="max-w-md w-full">
        <div className="bg-card border border-border rounded-lg p-6 text-center shadow-lg">
          <div className="mb-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-destructive/10 mb-4">
              <span className="text-2xl">❌</span>
            </div>
          </div>
          <h1 className="text-xl font-bold text-foreground mb-2">
            Page Error
          </h1>
          <p className="text-sm text-muted-foreground mb-4">
            {error?.message || 'Failed to load this page'}
          </p>
          {process.env.NODE_ENV === 'development' && (
            <details className="text-left bg-muted p-3 rounded mb-4 text-xs text-muted-foreground overflow-auto max-h-40">
              <summary className="cursor-pointer font-semibold mb-2">
                Error Details
              </summary>
              <pre className="whitespace-pre-wrap break-words">
                {error?.toString()}
              </pre>
            </details>
          )}
          <div className="flex gap-2">
            <button
              onClick={resetError}
              className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded font-medium hover:bg-primary/90 transition-colors"
            >
              Retry
            </button>
            <button
              onClick={() => (window.location.href = '/pineapplepizza')}
              className="flex-1 px-4 py-2 bg-secondary text-secondary-foreground rounded font-medium hover:bg-secondary/90 transition-colors"
            >
              Home
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RouteErrorBoundary
