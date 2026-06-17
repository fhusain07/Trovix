import React from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo): void {
    console.error('[ErrorBoundary]', error, info.componentStack);
  }

  handleReset = (): void => {
    this.setState({ hasError: false, error: null });
  };

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-background">
          <div className="text-center max-w-md">
            <div className="text-6xl font-display font-bold text-electric-blue mb-4">Oops</div>
            <h1 className="text-2xl font-display font-bold mb-3">Something went wrong</h1>
            <p className="text-muted-foreground mb-8 text-sm">
              An unexpected error occurred. Please try reloading the page or go back to the homepage.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.handleReset}
                className="px-6 py-2.5 rounded-lg bg-electric-blue text-white text-sm font-medium hover:bg-electric-blue/90 transition-colors cursor-pointer"
              >
                Try Again
              </button>
              <a
                href="/"
                className="px-6 py-2.5 rounded-lg border border-white/20 text-sm font-medium hover:bg-white/5 transition-colors text-foreground"
              >
                Go to Homepage
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
