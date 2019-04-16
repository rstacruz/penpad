import React from 'react'
import { LoggerPlugin, UseLogger } from '../../etc/LoggerPlugin'
import { Penpad, Specimen } from 'penpad'

const PenpadPage = () => {
  return (
    <Penpad>
      <LoggerPlugin />
      <Specimen id='My specimen'>
        <UseLogger>
          {({ log }) => (
            <div>
              Hello :)
              <button
                onClick={() => {
                  log('hey, i was clicked on ' + new Date().toString())
                }}
              >
                Click me
              </button>
            </div>
          )}
        </UseLogger>
      </Specimen>
    </Penpad>
  )
}

export default PenpadPage
