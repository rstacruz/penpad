// @ts-ignore
import cn from 'classnames'
import React from 'react'
import { DocIcon as Icon } from './icons'
import CSS from './SpecimenNavigation.module.css'
import { useAppContext } from './state'
import { isActiveSpecimen } from './state/selectors'
import { Specimens } from './types'

const SpecimenNavigation = () => {
  const { state, actions } = useAppContext()
  if (!state || !actions) return null

  const { specimens } = state
  if (!specimens) return null

  const names = Object.keys(specimens).sort()

  return (
    <div className={CSS.root}>
      <ul className={CSS.list}>
        {names.map((name: string) => {
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
