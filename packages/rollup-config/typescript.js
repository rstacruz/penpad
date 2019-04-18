const typescript2 = require('rollup-plugin-typescript2')

const typescript = (options = {}) =>
  typescript2({
    // In a monorepo, we may also need to exclude the top-level node_modules.
    // This assumes that your package may be in `<root>/packages/<pkg>`.
    exclude: ['node_modules/**', '../../node_modules/**'],
    ...options
  })

module.exports = typescript
