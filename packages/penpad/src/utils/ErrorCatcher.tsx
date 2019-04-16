import React from 'react'

interface Props {
  children: React.ReactNode
  /** If true, no message will be shown on error */
  silent?: boolean
  resetKey?: any
}

interface State {
  error: Error | null
}

/**
 * I'm an error boundary.
 *
 * See:
 * https://reactjs.org/docs/error-boundaries.html
 */

class ErrorCatcher extends React.Component<Props, State> {
  state = {
    error: null
  }

  static getDerivedStateFromError(error: Error) {
    return { error }
  }

  clearError = () => {
    this.setState({ error: null })
  }

  // When we receive a new resetKey, clear out the error
  componentDidUpdate(prevProps: Props) {
    if (prevProps.resetKey !== this.props.resetKey) {
      this.setState({ error: null })
    }
  }

  render() {
    if (this.state && this.state.error) {
      if (this.props.silent) return null
      return (
        <Centerize>
          <ErrorMessage error={this.state.error} onDismiss={this.clearError} />
        </Centerize>
      )
    }

    try {
      return <>{this.props.children}</>
    } catch (e) {
      return <div>what</div>
    }
  }
}

const ErrorMessage = ({
  onDismiss,
  error
}: {
  onDismiss: () => any
  error: Error | null
}) => {
  if (!error) return null

  return (
    <div>
      <p style={{ textAlign: 'center' }}>Oops, specimen threw an error.</p>
      <p>
        <code>{error.message}</code>
      </p>
      <p style={{ textAlign: 'center' }}>
        <button onClick={onDismiss}>Try again</button>
      </p>
    </div>
  )
}

const Centerize = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div style={{ margin: 'auto', display: 'inline-block' }}>{children}</div>
    </div>
  )
}

export default ErrorCatcher
