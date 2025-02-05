import { Component, ErrorInfo, ReactNode } from 'react';
import { toast } from '@/components/ui/use-toast';

interface ErrorState {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  componentStack?: string;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  context?: string;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorState> {
  state: ErrorState = { hasError: false };

  static getDerivedStateFromError(error: Error): ErrorState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo, componentStack: errorInfo.componentStack });
    
    // Log error to console in development
    if (import.meta.env.DEV) {
      console.error('Component Failure:', {
        error, 
        componentStack: errorInfo.componentStack,
        context: this.props.context
      });
    }

    // Show toast notification
    toast({
      title: import.meta.env.DEV ? `Error in ${this.props.context || 'Component'}` : "Something went wrong",
      description: import.meta.env.DEV ? error.message : "Please try again or refresh the page",
      variant: "destructive",
    });
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (!this.state.hasError) return this.props.children;

    return this.props.fallback || (
      <DefaultErrorFallback 
        error={this.state.error} 
        onRetry={this.handleRetry}
        context={this.props.context}
      />
    );
  }
}

const DefaultErrorFallback = ({ 
  error, 
  onRetry,
  context 
}: { 
  error?: Error;
  onRetry: () => void;
  context?: string;
}) => (
  <div className="error-fallback p-6 rounded-lg bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <h2 className="text-destructive font-semibold mb-4 text-lg">
      {import.meta.env.DEV 
        ? `Error in ${context || 'Component'}` 
        : 'Something went wrong'}
    </h2>
    
    {import.meta.env.DEV && error && (
      <details className="mb-4">
        <summary className="text-sm cursor-pointer hover:text-primary transition-colors">
          Technical Details
        </summary>
        <pre className="mt-2 text-xs text-destructive/90 whitespace-pre-wrap p-4 rounded bg-destructive/10">
          {error.stack}
        </pre>
      </details>
    )}

    <div className="flex flex-col sm:flex-row gap-4">
      <button
        onClick={onRetry}
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
      >
        Try Again
      </button>
      <button
        onClick={() => window.location.reload()}
        className="px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
      >
        Refresh Page
      </button>
    </div>
  </div>
);