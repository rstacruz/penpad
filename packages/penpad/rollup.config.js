// rollup.config.js
import typescript from 'rollup-plugin-typescript2'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss-modules'
import reactSvg from 'rollup-plugin-react-svg'
import commonjs from 'rollup-plugin-commonjs'
import postcssImport from 'postcss-import'
import postcssApply from 'postcss-apply'
import postcssColorMod from 'postcss-color-mod-function'
import postcssPresetEnv from 'postcss-preset-env'
import pkg from './package.json'

const DEFAULTS = {
  input: 'src/index.tsx',
  external: id => !id.match(/^(\0|\.|\/|clarity-icons-svg)/)
}

const PLUGINS = [
  resolve({
    browser: true,
    extensions: ['.js', '.ts', '.tsx'],
    dedupe: ['react', 'react-dom']
  }),

  // Allow loading 3rd-party commonjs modules (eg, 'classnames')
  commonjs(),

  // Allow CSS modules
  postcss({
    plugins: [
      postcssImport(),
      postcssApply(),
      postcssPresetEnv({
        stage: 0,
        preserve: false,
        insertBefore: {
          'all-property': postcssColorMod
        }
      })
    ]
  }),

  // Convert SVG's into React components
  reactSvg()
]

const TYPESCRIPT = typescript({
  exclude: ['node_modules/**', '../../node_modules/**']
})

const TYPESCRIPT_LEGACY = typescript({
  exclude: ['node_modules/**', '../../node_modules/**'],
  target: 'es5'
})

const UMD = {
  format: 'umd',
  name: 'penpad',
  globals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    classnames: 'classnames',
    'jsx-to-string': 'jsxToString',
    'react-frame-component': 'Frame',
    'react-helmet': 'ReactHelmet'
  }
}

export default [
  // ES Modules
  {
    ...DEFAULTS,
    plugins: [...PLUGINS, TYPESCRIPT],
    output: { file: pkg.module, format: 'esm' }
  },

  // ES5
  // (still produces `=>` and stuff, so it's not properly es5.)
  {
    ...DEFAULTS,
    plugins: [...PLUGINS, TYPESCRIPT_LEGACY],
    output: { file: pkg.main, ...UMD }
  }

  // Portable build for jsbin, codepen, etc
  // {
  //   ...DEFAULTS,
  //   external: id =>
  //     !id.match(
  //       /^(\0|\.|\/|clarity-icons-svg|classnames|jsx-to-string|react-frame-component|react-helmet)/
  //     ),
  //   plugins: [...PLUGINS, TYPESCRIPT_LEGACY],
  //   output: { file: 'dist/penpad.portable.js', ...UMD }
  // }
]
