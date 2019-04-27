# Integrating with Webpack projects

You can load multiple files at once using [Webpack contexts] and Penpad's `CombineWebpackContext` helper.

```js
import { CombineWebpackContext as Combine, Penpad } from '@penpad/core'

const specimens = require.context('../../', true, /\.specimens\.(jsx?|tsx?)$/)
```

```js
<Penpad>
  <Combine context={specimens} />
</Penpad>
```

- https://github.com/webpack/docs/wiki/context#requirecontext

[webpack contexts]: https://github.com/webpack/docs/wiki/context#requirecontext
