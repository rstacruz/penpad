import React from 'react'
import DocsNavigation from '../doc/DocsNavigation'
import { useAppContext } from '../state'
import { getActivePage } from '../state/selectors'
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
      <main className={CSS.main} style={{ background: 'white' }}>
        {page && PageComponent ? <PageComponent {...pageProps} /> : null}
      </main>

      <aside className={CSS.sidebar}>
        <DocsNavigation />
      </aside>
    </>
  )
}

export default DocsBody
