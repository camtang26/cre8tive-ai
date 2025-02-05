import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ScrollErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('Scroll Error:', error);
    console.warn('Error Info:', errorInfo);
    
    // Fallback to native scroll behavior
    window.history.scrollRestoration = 'auto';
  }

  public render() {
    if (this.state.hasError) {
      return this.props.children;
    }

    return this.props.children;
  }
}