import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            error: null, 
            errorInfo: null,
            hasError: false,
        };
    }

    static getDerivedStateFromError(error){
        return {
            hasError: true
        }
    }

    componentDidCatch(error, errorInfo){
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
        // console.log("Logging into", error, errorInfo)
    }

    render() {
        if (this.state.error) {
            return (
                <div>
                  <h2>Something went wrong.</h2>
                  <details style={{ whiteSpace: 'pre-wrap' }}>
                    {this.state.error && this.state.error.toString()}
                    <br />
                    {this.state.errorInfo.componentStack}
                  </details>
                </div>
            );      // You can render any custom fallback UI      return <h1>Something went wrong.</h1>;    }
        }
        return this.props.children; 
    }
}
 
export default ErrorBoundary;