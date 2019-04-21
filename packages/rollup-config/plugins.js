const resolve = require('rollup-plugin-node-resolve')
const reactSvg = require('rollup-plugin-react-svg')
const commonjs = require('rollup-plugin-commonjs')
const sizeSnapshot = require('rollup-plugin-size-snapshot').sizeSnapshot
const postcss = require('./postcss')
/**
 * Rollup plugin presets
 */

const getPlugins = () => [
  resolve({
    mainFields: ['__typescript', 'module', 'main'],
    browser: true,
    extensions: ['.js', '.ts', '.tsx'],
    dedupe: ['react', 'react-dom']
  }),

  // Allow loading 3rd-party commonjs modules (eg, 'classnames')
  commonjs(),

  // CSS modules with PostCSS support
  postcss(),

  // Convert SVG's into React components
  reactSvg(),

  // Show bundle sizes
  sizeSnapshot()
]

module.exports = getPlugins
