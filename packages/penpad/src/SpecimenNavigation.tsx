// @ts-ignore
import { DocIcon as Icon } from './icons'
import cn from 'classnames'
import React from 'react'
import CSS from './SpecimenNavigation.module.css'
import { useAppContext } from './state'
import { isActiveSpecimen } from './state/selectors'
import { Specimens } from './types'

interface Props {
  specimens: Specimens
}

const Navigation = (props: Props) => {
  const { state, actions } = useAppContext()
  if (!state || !actions) return <span />

  const { specimens } = props

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

export default Navigation
