import React from 'react'
import { Title } from 'react-simple-head'
import DocsNavigation from '../doc/DocsNavigation'
import { useAppContext } from '../state'
import { getActivePage } from '../state/selectors'
import ErrorCatcher from '../utils/ErrorCatcher'
import CSS from './PenpadUI.module.css'

const DocsBody = () => {
  const { state, actions } = useAppContext()
  if (!state || !actions) return <span />

  const page = getActivePage(state)
  const view = page && page.view
  const PageComponent = view && view[0]
  const pageProps = view && view[1]

  return (
    <>
      {page && page.id && !state.uiConfig.isEmbedded ? (
        <Title title={page.id} />
      ) : null}

      <main className={CSS.main} style={{ background: 'white' }}>
        <ErrorCatcher>
          {page && PageComponent ? <PageComponent {...pageProps} /> : null}
        </ErrorCatcher>
      </main>

      <aside className={CSS.sidebar}>
        <DocsNavigation />
      </aside>
    </>
  )
}

export default DocsBody
