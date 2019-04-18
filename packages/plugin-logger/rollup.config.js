import buildConfig from '@penpad/rollup-config'
import pkg from './package.json'

export default buildConfig({
  umdName: 'PenpadPluginColor',
  pkg
})
