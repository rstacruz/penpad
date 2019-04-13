// rollup.config.js
import typescript from 'rollup-plugin-typescript2'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss-modules'
import reactSvg from 'rollup-plugin-react-svg'

const DEFAULTS = {
  input: 'src/index.tsx',
  external: ['react', 'react-dom'],
  plugins: [
    resolve({
      browser: true,
      extensions: ['.js', '.ts', '.tsx'],
      dedupe: ['react', 'react-dom']
    }),
    postcss({
      plugins: []
    }),
    reactSvg({}),
    typescript({
      exclude: 'node_modules/**'
    })
  ]
}

const UMD = {
  format: 'umd',
  name: 'penpad',
  globals: { react: 'React', 'react-dom': 'ReactDOM' }
}

export default [
  // ES Modules
  {
    ...DEFAULTS,
    output: { file: 'dist/penpad.esm.mjs', format: 'esm' }
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
