import cn from 'classnames'
import React from 'react'
import {
  FileOutlineIcon as DocsIcon,
  LibraryIcon as SpecimenIcon
} from '../icons'
import { useAppContext } from '../state'
import { State } from '../types'
import CSS from './TitleBar.module.css'
import TitleText from './TitleText'

const Icons = {
  DocsIcon: React.memo(() => <DocsIcon className={CSS.navIcon} />),
  AssetsIcon: React.memo(() => <SpecimenIcon className={CSS.navIcon} />)
}

const TitleBar = () => {
  const { state, actions } = useAppContext()
  if (!state || !actions) return <span />

  return (
    <div className={CSS.root} data-testid='titlebar'>
      <div className={CSS.left}>
        {/* Docs */}
        <button
          data-testid='docs-nav-button'
          className={cn(CSS.navButton, {
            [CSS.isActive]: state.activeView.type === 'page'
          })}
          onClick={actions.navToDocs}
        >
          <Icons.DocsIcon />
          <span className={CSS.navLabel}>Docs</span>
        </button>

        {/* Specimens/assets */}
        <button
          data-testid='assets-nav-button'
          className={cn(CSS.navButton, {
            [CSS.isActive]: state.activeView.type === 'specimen'
          })}
          onClick={actions.navToSpecimens}
        >
          <Icons.AssetsIcon />
          <span className={CSS.navLabel}>Specimens</span>
        </button>
      </div>

      {/* Middle */}
      <div className={CSS.mid}>
        <DynamicTitleText {...{ state, actions }} />
      </div>
    </div>
  )
}

const DynamicTitleText = ({ state }: { state: State }) => {
  const { activeView } = state

  if (activeView.type === 'specimen') {
    if (activeView.specimenId) {
      return <TitleText parts={[activeView.specimenId]} />
    }
  }
  if (activeView.type === 'page') {
    if (activeView.pageId) {
      return <TitleText parts={[state.uiConfig.title, activeView.pageId]} />
    }
  }
  return <TitleText parts={[state.uiConfig.title]} />
}

export default TitleBar
