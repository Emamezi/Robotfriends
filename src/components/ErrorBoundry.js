import React from "react";

class ErrorBoundry extends React.Component {
  constructor() {
    super();
    this.setState = {
      hasError: false,
    };
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }
  render() {
    if (this.setState.hasError) {
      return <h1>Oppss Something went wrong</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
