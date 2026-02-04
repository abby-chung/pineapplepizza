import React, { ReactNode, ErrorInfo } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    }
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error,
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
    this.setState({
      errorInfo,
    })

    // Log to external error tracking service (e.g., Sentry)
    // reportErrorToService(error, errorInfo)
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    })
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex items-center justify-center min-h-screen bg-background p-4">
            <div className="max-w-md w-full">
              <div className="bg-card border border-border rounded-lg p-6 text-center shadow-lg">
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-destructive/10 mb-4">
                    <span className="text-2xl">⚠️</span>
                  </div>
                </div>
                <h1 className="text-xl font-bold text-foreground mb-2">
                  Something went wrong
                </h1>
                <p className="text-sm text-muted-foreground mb-4">
                  {this.state.error?.message || 'An unexpected error occurred'}
                </p>
                {process.env.NODE_ENV === 'development' && (
                  <details className="text-left bg-muted p-3 rounded mb-4 text-xs text-muted-foreground overflow-auto max-h-40">
                    <summary className="cursor-pointer font-semibold mb-2">
                      Error Details
                    </summary>
                    <pre className="whitespace-pre-wrap break-words">
                      {this.state.error?.toString()}
                      {this.state.errorInfo?.componentStack}
                    </pre>
                  </details>
                )}
                <div className="flex gap-2">
                  <button
                    onClick={this.handleReset}
                    className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded font-medium hover:bg-primary/90 transition-colors"
                  >
                    Try again
                  </button>
                  <button
                    onClick={() => (window.location.href = '/pineapplepizza')}
                    className="flex-1 px-4 py-2 bg-secondary text-secondary-foreground rounded font-medium hover:bg-secondary/90 transition-colors"
                  >
                    Go Home
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
