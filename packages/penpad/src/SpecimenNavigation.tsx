// @ts-ignore
import { DocIcon as Icon } from './icons'
import cn from 'classnames'
import React from 'react'
import CSS from './SpecimenNavigation.module.css'
import { useAppContext } from './state'
import { isActiveSpecimen } from './state/selectors'
import { Specimens } from './types'

const SpecimenNavigation = () => {
  const { state, actions } = useAppContext()
  console.log('specimennav state', state)
  if (!state || !actions) return <></>

  const { specimens } = state
  const names = Object.keys(specimens).sort()

  return (
    <div className={CSS.root}>
      <ul className={CSS.list}>
        {names.map(name => {
          return (
            <li className={CSS.item} key={name}>
              <button
                data-testid={`nav-specimen:${name}`}
                className={cn(CSS.entry, {
                  [CSS.isActive]: isActiveSpecimen(state, name)
                })}
                onClick={() => {
                  actions.setActiveSpecimen(name)
                }}
              >
                <Icon className={CSS.icon} />
                <span className={CSS.name}>{name}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SpecimenNavigation
