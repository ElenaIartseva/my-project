import { ReactNode, Component, ErrorInfo } from 'react';
import ErrorPage from '@pages/system/ErrorPage/ErrorPage';

type ErrorBoundaryProps = {
  children: ReactNode
};

type ErrorBoundaryState = {
  hasError: boolean
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console -- error boundary must log failures
    console.error(error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorPage onRetry={this.handleRetry} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
