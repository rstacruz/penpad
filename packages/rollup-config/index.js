const plugins = require('./plugins')
const typescript = require('./typescript')

/**
 * Builds Rollup configuration.
 *
 * @param {?RegExp} options.notExternal
 * @param {?string} options.input
 * @param {?string} options.umdName
 * @param {?boolean} options.es5 If false, skip building es5 version
 * @param {?boolean} options.quiet If false, don't show info
 * @param {Object} options.pkg
 * @param {string} options.pkg.module Output file
 * @param {string} options.pkg.main Legacy output file (es5)
 *
 * @example
 *     // rollup.config.js
 *     export default buildConfig({ pkg, notExternal: /^clarity-icons-svg/ })
 */

const buildConfig = options => {
  // Entry point
  const input = options.input || 'src/index.tsx'

  if (!options.pkg && !options.quiet) {
    console.warn(
      `@penpad/rollup-config: Warning: 'pkg' option not set, assuming default outputs to dist/.`
    )
  }

  // Values from fackage.json
  const pkg = options.pkg || {
    module: 'dist/index.js',
    main: 'dist/index.es5.js'
  }

  const skipES5 = pkg.module === pkg.main
  if (skipES5 && !options.quiet) {
    console.warn(
      `@penpad/rollup-config: 'pkg.module' and 'pkg.main' are the same, skipping es5 build.`
    )
  }

  const umdName = options.umdName
  if (!umdName && !skipES5)
    throw new Error(
      `@penpad/rollup-config: Option 'umdName' is required in es5 mode`
    )

  // Return `true` if it should be external
  const external = id => {
    // Things that should be embedded
    if (options.notExternal && id.match(options.notExternal)) {
      return false
    }
    return !id.match(/^(\0|\.|\/)/)
  }

  const output = {
    input,
    external,
    plugins: [...plugins(), typescript()],
    output: { file: pkg.module, format: 'esm' }
  }

  // Don't add es5 unless asked for
  if (skipES5) return output

  // Add es5 if needed
  return [
    output,
    {
      input,
      external,
      plugins: [...plugins(), typescript({ target: 'es5' })],
      output: {
        file: pkg.main,
        format: 'umd',
        name: umdName,
        globals: UMD_GLOBALS,
        exports: 'named'
      }
    }
  ]
}

const UMD_GLOBALS = {
  react: 'React',
  'react-dom': 'ReactDOM',
  '@penpad/core': 'Penpad',

  // These are mostly just to appease Rollup, we'll bundle them so they
  // shouldn't be accessed globally
  classnames: 'classnames',
  'jsx-to-string': 'jsxToString',
  'react-frame-component': 'Frame',
  'react-simple-head': 'ReactSimpleHead'
}

/*
 * Export
 */

module.exports = buildConfig
