const resolve = require('rollup-plugin-node-resolve')
const reactSvg = require('rollup-plugin-react-svg')
const commonjs = require('rollup-plugin-commonjs')
const postcss = require('./postcss')
/**
 * Rollup plugin presets
 */

const getPlugins = () => [
  resolve({
    browser: true,
    extensions: ['.js', '.ts', '.tsx'],
    dedupe: ['react', 'react-dom']
  }),

  // Allow loading 3rd-party commonjs modules (eg, 'classnames')
  commonjs(),

  // CSS modules with PostCSS support
  postcss(),

  // Convert SVG's into React components
  reactSvg()
]

module.exports = getPlugins
