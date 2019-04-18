// rollup.config.js
import buildConfig from './src/index'
import pkg from './package.json'

export default buildConfig({
  input: 'src/index.js',
  quiet: true,
  pkg
})
