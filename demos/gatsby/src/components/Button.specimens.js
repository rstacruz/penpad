import React from 'react'

export default {
  Button: {
    render: () => <button>Hello</button>,
    padding: 8,
    description: `This is a button. It's very important, guard it with your life.`
  },

  'Button/disabled': {
    render: () => <button disabled>Hello</button>,
    padding: 8,
    description: `Oops, can't touch this.`
  }
}
