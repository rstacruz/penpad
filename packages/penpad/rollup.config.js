// rollup.config.js
import typescript from 'rollup-plugin-typescript2'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss-modules'
import reactSvg from 'rollup-plugin-react-svg'
import commonjs from 'rollup-plugin-commonjs'

const DEFAULTS = {
  input: 'src/index.tsx',
  external: id =>
    !id.startsWith('\0') &&
    !id.startsWith('.') &&
    !id.startsWith('/') &&
    !id.startsWith('clarity-icons-svg'),
  plugins: [
    resolve({
      browser: true,
      extensions: ['.js', '.ts', '.tsx'],
      dedupe: ['react', 'react-dom']
    }),
    commonjs(),
    postcss({
      plugins: [
        /* TODO: postcss-load-config */
      ]
    }),
    reactSvg(),
    typescript({
      exclude: ['node_modules/**', '../../node_modules/**']
    })
  ]
}

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
    output: { file: 'dist/penpad.esm.js', format: 'esm' }
  },

  // ES6
  {
    ...DEFAULTS,
    output: { file: 'dist/penpad.es6.js', ...UMD }
  },

  // ES5
  {
    ...DEFAULTS,
    output: { file: 'dist/penpad.es5.js', ...UMD }
  }
]
