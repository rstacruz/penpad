import React from 'react'

interface Props {
  children: React.ReactNode
}

interface State {
  error: Error
  info: any
}

/* Hm, I don't think this does anything right now */
class ErrorCatcher extends React.Component<Props, State> {
  componentdidCatch(error: Error, info: any) {
    this.setState({ error, info })
  }

  render() {
    if (this.state && this.state.error) {
      return <span>This specimen threw an error</span>
    }

    try {
      return <>{this.props.children}</>
    } catch (e) {
      return <div>what</div>
    }
  }
}

export default ErrorCatcher
