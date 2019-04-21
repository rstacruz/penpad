import { LoggerPlugin, UseLogger } from '@penpad/plugin-logger'
import { ColorPlugin, ColorSpecimen } from '@penpad/plugin-color'
import { ResponsiveViewPlugin } from '@penpad/plugin-responsive-view'
import { Penpad, Specimen } from '@rstacruz/penpad'
import React from 'react'

const PenpadPage = () => {
  return (
    <Penpad>
      <LoggerPlugin />
      <ColorPlugin />
      <ResponsiveViewPlugin />

      <ColorSpecimen
        id='Color/example'
        colors={{
          $red: '#ff0000',
          $green: '#00ff00',
          $blue: '#0000ff'
        }}
      />

      <Specimen id='Log/My specimen'>
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
          <Specimen id='Log/Another specimen'>
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
