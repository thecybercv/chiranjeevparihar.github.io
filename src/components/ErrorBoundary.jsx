import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-cyberblack text-white">
          <div className="text-center p-8">
            <h1 className="text-4xl font-bold text-cyberorange mb-4">Oops!</h1>
            <p className="text-xl text-gray-300 mb-6">Something went wrong.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-cyberorange text-black font-bold rounded-lg hover:bg-orange-500 transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
