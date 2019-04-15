import React from 'react'
import { Penpad, Specimen } from './index'
import { render, fireEvent, cleanup, act } from 'react-testing-library'
import 'jest-dom/extend-expect'

afterEach(cleanup)

/**
 * Smoke tests
 */

it('works', () => {
  const co = render(<Penpad />)

  co.getByTestId('assets-nav-button')
  co.getByTestId('docs-nav-button')
  co.getByTestId('titlebar')
})

it('can have different title', () => {
  const co = render(<Penpad ui={{ title: 'Jupiter' }} />)

  co.getByText('Jupiter')
})

it('works with more stuff', () => {
  const co = render(
    <Penpad ui={{ title: 'Jupiter' }}>
      <Specimen id='abc' description='This is some description'>
        <button>hello</button>
      </Specimen>
      <Specimen id='def'>
        <button>greetings</button>
      </Specimen>
    </Penpad>
  )

  const button = co.getByTestId('nav-specimen:abc')
  expect(button).toBeTruthy()

  act(() => {
    fireEvent.click(button)
  })

  const iframe = co.getByTestId('framewrapper-iframe')
  expect(iframe).toBeTruthy()
})
