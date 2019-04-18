import typescript from '@penpad/rollup-config/typescript'
import plugins from '@penpad/rollup-config/plugins'
import pkg from './package.json'

const getConfig = () => [
  // ES Modules
  {
    ...defaults(),
    plugins: [...plugins(), typescript()],
    output: { file: pkg.module, format: 'esm' }
  },

  // ES5
  // (still produces `=>` and stuff, so it's not properly es5.)
  {
    ...defaults(),
    plugins: [...plugins(), typescript({ target: 'es5' })],
    output: { file: pkg.main, ...umd(), exports: 'named' }
  }
]

const defaults = () => ({
  input: 'src/index.tsx',
  external: id => !id.match(/^(\0|\.|\/|clarity-icons-svg)/)
})

const umd = () => ({
  format: 'umd',
  name: 'Penpad',
  globals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    classnames: 'classnames',
    'react-element-to-jsx-string': 'ReactElementToJsxString',
    'react-frame-component': 'Frame',
    'react-helmet': 'ReactHelmet'
  }
})

export default getConfig()
