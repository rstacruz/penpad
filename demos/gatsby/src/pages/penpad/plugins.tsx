import { LoggerPlugin, UseLogger } from '@penpad/plugin-logger'
import { Penpad, Specimen } from '@rstacruz/penpad'
import React from 'react'

const PenpadPage = () => {
  return (
    <Penpad>
      <LoggerPlugin />
      <Specimen id='My specimen'>
        <UseLogger>
          {({ log }) => (
            <div>
              <p>Hello! Pressing this button will log something.</p>
              <button
                onClick={() => {
                  log('hey, I was clicked on ' + new Date().toString())
                }}
              >
                Click me
              </button>
            </div>
          )}
        </UseLogger>
      </Specimen>

      <UseLogger>
        {({ log }) => (
          <Specimen id='Another specimen'>
            <div>
              <p>Hello again!</p>
              <button
                onClick={() => {
                  log('Hello, I was clicked on ' + new Date().toString())
                }}
              >
                Click me
              </button>
            </div>
          </Specimen>
        )}
      </UseLogger>
    </Penpad>
  )
}

export default PenpadPage
