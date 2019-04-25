import cn from 'classnames'
import React from 'react'
import { FileOutlineIcon } from '../icons'
import CSS from '../SpecimenNavigation.module.css'
import { useAppContext } from '../state'
import { isActivePage } from '../state/selectors'

const Icon = React.memo(() => <FileOutlineIcon className={CSS.icon} />)

const DocsNavigation = () => {
  const { state, actions } = useAppContext()
  if (!state || !actions) return <span />

  const { pages } = state
  const names = Object.keys(pages || {}).sort()

  return (
    <div className={CSS.root}>
      <ul className={CSS.list}>
        {names.map(name => {
          return (
            <li className={CSS.item} key={name}>
              <button
                className={cn(CSS.entry, {
                  [CSS.isActive]: isActivePage(state, name)
                })}
                onClick={() => {
                  actions.setActivePage(name)
                }}
              >
                <Icon />
                <span className={CSS.name}>{name}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default DocsNavigation
